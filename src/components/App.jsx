import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import notes from "../notes";



function App() {
    return <div>
        <Header />
        {notes.map(returnNote => (
            <Content 
                 key =  { returnNote.key }
                title =  { returnNote.title }
                content = { returnNote.content }
            />
        ))}
        <Footer />
    </div>
}

export default App;