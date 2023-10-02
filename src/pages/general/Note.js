import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function Note(props) {
  return (
    <div className=" mx-auto">
      <div className="card text-center " key={props.index}>
        <div className="card-header col-12">
          <h4>{props.title}</h4>
        </div>
        <div className="card-body d-flex flex-column gap-2">
          <p>{props.description}</p>
          <div className="btn-container d-flex gap-2 justify-content-center ">
            <button
              className="btn btn-danger p-3 btn-remove"
              onClick={() => props.handleDelete(props.id)}
            >
              <AiFillDelete />
            </button>
            <button
              className="btn btn-success p-3 btn-edit"
              onClick={() => props.handleEdit(props.id)}
            >
              <AiFillEdit />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
