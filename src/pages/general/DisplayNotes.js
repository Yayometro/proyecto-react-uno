import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNote from "./AddNote";
import Note from "./Note";
import * as notesActions from "../../store/actions/actionsNotes";
import { useNavigate } from "react-router-dom";

export default function DisplayNotes() {
  const notes = useSelector((state) => state.notesReducers.notes);
  const dispatcher = useDispatch();
  const navigator = useNavigate()

  const handleDelete = (id) => {
    dispatcher({
      type: notesActions.REMOVE_NOTE,
      payload: { id },
    });
    console.log("ID", id);
  };
  const handleEdit = (id) => {
    // dispatcher({
    //   type: notesActions.REMOVE_NOTE,
    //   payload: { id },
    // });
    // console.log("ID", id);
    navigator(`/edit/${id}`)
  };
  return (
    <>
      <div className="note-list card flex-grow-1 gap-3 text center">
        <div className="card-header center text-center">
          <h2>Notes list</h2>
        </div>
        <div className="card-body d-flex flex-grow-1 
        gap-3 text center p-2 flex-wrap
        ">
          {notes.length > 0 ? (
            notes.map((note, index) => {
              return (
                <Note
                  key={index}
                  title={note.title}
                  description={note.description}
                  handleDelete={() => handleDelete(note.id)}
                  handleEdit={() => handleEdit(note.id)}
                />
              );
            })
          ) : (
            <div className="d-flex flex-column p-3">
              <h1>
                No hay notas... 🤔 
              </h1>
              <br />
              <h2> Agrega nuevas notas para ver más 🤓</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
