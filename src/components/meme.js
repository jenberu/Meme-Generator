import React from "react";
import { memesData }  from "../datas/memesData";
import"../styles/meme.css";
import { useState } from "react";

const Meme = () => {
    const [memeimage,setMemeImage]=useState({})
    const getMemeImage = () => {
        let randomIndex = Math.floor(Math.random() * 100);
        const memeimage = memesData.data.memes[randomIndex];
        setMemeImage(memeimage);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <main>
            <form className="form" onSubmit={handleSubmit}>
                
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
                    />
               
                        
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
                    />
                  
            <button 
                    className="form--button"
                    onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
            </form>
            <div className="meme--image">
                gvjhjk
                <img src={memeimage.url}
                    width={memeimage.width}
                     height={memeimage.height} alt=""/>
            </div>
    </main>
    );
}
export default Meme