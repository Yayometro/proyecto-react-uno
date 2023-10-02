import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllNotes from "./pages/general/AllNotes";
import MainLayout from "./pages/layout/MainLayout";

export default function App () {
    const notas = useSelector((state) => state.notesReducers.notes)
    console.log(notas)
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<AllNotes />} />
                    </Route>
                    <Route path="/edit/:id" element={<MainLayout />}>
                        <Route index element={<AllNotes />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}