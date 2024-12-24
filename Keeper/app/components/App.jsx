"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";

function App(){

const [notes, setNotes] = useState([]);

function addNote (newNote){
    setNotes(prevValue => {
        return [...prevValue,newNote];
    });
}
    
    return (
        <div>
            <Header/>
            <InputArea
                onAdd = {addNote}
            />
            {notes.map (noteItem =>(
                <div>
                    <Note
                        title = {noteItem.title}
                        content = {noteItem.content}
                    />
                </div>
            ))}
            <Footer/>
        </div>

    );
}

export default App;