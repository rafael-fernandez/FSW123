import { useEffect, useState } from "react";

export default function GiphySearch(props){
    const[imgSrc, setImgSrc] = useState("")
    const [alt, setAlt] = useState("")
    const userLookUp = props.render

    useEffect( ()=> {
        getFetch(userLookUp)
    }, [userLookUp])


    const giphSearch = ()=>{
        
        let loadingWait = document.createElement("h3")
        loadingWait.textContent = "Loading Please Wait..."
     
        getFetch(userLookUp);
    }

    //API Key
    const getFetch = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(search)}&api_key=XZqqsnBngI3cwV3kf5AbMcqfLn9V3q7e`)
  
  .then(res => res.json())
          .then(res => {
            var count = 0
            res.data.forEach(()=>{count++})
            if (count !== 0){
               const randomGiphy = Math.floor(Math.random() * count + 1)
             setImgSrc(res.data[randomGiphy].images.original.url)
             setAlt(res.data[randomGiphy].title)
            }
            else if (count === 0){
              const zeroImg = document.createElement("h2")
              zeroImg.textContent = "Search not found, Try again!"
             
            }
          })
    }
    
 return (
        <body className="giphyBox">
          <div className="giphy">
         
            <input id="galaxy" className="searchBox" type = "text" placeholder="Enter a word or phrase"></input>
            <button onClick = {() =>{giphSearch()}}>Search</button>
          </div>
          <div>
            <img src={imgSrc} alt= {alt}></img>

            <h4 className="FSW-123">FSW-123 Week 5 Project #2: Giphy Search by Rafael Fernandez</h4>
          </div>
        </body>
    )
}
