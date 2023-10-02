import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as noteActions from "../../store/actions/actionsNotes";

export default function AddNote(props) {
  const titleInput = useRef(null);
  const descriptionInput = useRef(null);
  const idParam = props.editMode;

  const notes = useSelector((state) => state.notesReducers.notes);
  const dispatcher = useDispatch();
  const navigator = useNavigate();
  const [editableNote, setEditableNote] = useState({});

  useEffect(() => {
    if (idParam !== null && idParam !== undefined) {
      console.log("El id param es: ", idParam);
      const findedNote = notes.find((note) => {
        return note.id === Number(idParam);
      });
      if (findedNote) {
        console.log(findedNote);
        setEditableNote(findedNote);
      } else {
        console.log("No se encontro nota");
      }
      console.log(editableNote);
    } else {
      console.log("No hay PARAM ID");
    }
  }, [idParam]);

  const handleSubmit = () => {
    const newNote = {
      id: notes.length + 1,
      title: titleInput.current.value,
      description: descriptionInput.current.value,
    };

    dispatcher({
      type: noteActions.ADD_NOTE,
      payload: newNote,
    });
    titleInput.current.value = null;
    descriptionInput.current.value = null;
  };
  function  handleChange(e){
    const { name, value } = e.target
    setEditableNote({
        ...editableNote,
        [e.target.name]: e.target.value
    })
}
function handleSubmitEditor(e){
  dispatcher({
      type: noteActions.EDIT_NOTE,
      payload: editableNote
  })
  navigator('/')
}
  return (
    <>
      {!idParam ? (
        <div className="col-md-4 mx-auto">
          <div className="card text center">
            <div className="card-header text-center">
              <h3>New note</h3>
            </div>
            <div className="card-body">
              <div className="d-flex flex-column gap-2">
                <div className="form-group ">
                  <input
                    ref={titleInput}
                    type="text"
                    name="title"
                    className="form-control"
                    id="noteName"
                    placeholder="Programing notes from className..."
                    autoFocus
                  />
                </div>
                <div className="form-group ">
                  <textarea
                    ref={descriptionInput}
                    name="description"
                    cols="30"
                    rows="10"
                    placeholder="Describe yourself here..."
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group mb-3">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : !editableNote ? (
        <h3>No hay Nota que editar</h3>
      ) : (
        <div className="col-md-4 mx-auto">
          <div className="card text center">
            <div className="card-header text-center">
              <h3>Edit note 🖋️</h3>
            </div>
            <div className="card-body">
              <form className="d-flex flex-column gap-2" onSubmit={handleSubmitEditor}>
                <div className="form-group ">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    id="noteName"
                    placeholder="Programing notes from className..."
                    autoFocus
                    defaultValue={editableNote.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group ">
                  <textarea
                    ref={descriptionInput}
                    name="description"
                    cols="30"
                    rows="10"
                    placeholder="Describe yourself here..."
                    className="form-control"
                    defaultValue={editableNote.description} // Usar value para establecer el valor
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
