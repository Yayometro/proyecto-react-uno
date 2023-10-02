import React from "react";
import { useParams } from "react-router-dom";
import AddNote from "./AddNote";
import DisplayNotes from "./DisplayNotes";

export default function AllNotes() {
    const {id} = useParams()
    return (
        <div className="general-container-all container mt-3 d-flex gap-5">
            <AddNote editMode={id}/>
            <DisplayNotes/>
        </div>
    )
}