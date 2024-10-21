import React from "react";
import { memesData }  from "../datas/memesData";
import"../styles/meme.css";
import { useState } from "react";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random()*memesArray.length);
        const memeimageurl = memesArray[randomIndex].url;
        setMeme(prevMeme => (
            {...prevMeme,
                randomImage: memeimageurl,
            }
        ));
    }
   
    return (
        <main>
            <div className="form" >
                
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
            </div>
                <img className="meme--image"
                    src={meme.randomImage}
                      alt=""/>
    </main>
    );
}
export default Meme