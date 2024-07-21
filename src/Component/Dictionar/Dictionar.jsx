import React, { useState } from 'react'
import './Dictionar.css'
const Dictionar = () => {

  const [ search , setSearch ] = useState();
  const [data , setData ]= useState();

  const handleInput = (e) =>{
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  const myFun = async()=> {
    const get = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);//dictionary free api
    const jsonData = await get.json();
    console.log(jsonData);
    setData(jsonData[0])
  }
  return (
    <>
    <div className="app">
        <h1>Dictionary App</h1>
        <div className="container">
            <div className="searchBar">
                <input type="text" placeholder='Seach Word'  onChange={handleInput}/>
                <button onClick={myFun}>Search</button>
            </div>
            <div className="datas">
              {
                data ? <div className='datas'>
                  <h2>Word : {data.word}</h2> 
                  <p>Part of Speech : {data.meanings[0].partOfSpeech}</p>
                  <p>Defination : {data.meanings[0].definitions[0].definition}</p>
                  <p>synonyms : {data.meanings[0].synonyms[0]}</p>
                  <p>Example : {data.meanings[0].definitions[0].example}</p>
                  {/* <p>antonyms : {data.meanings[1].antonyms[0]}</p> */}
                 <center> <button id='Readmore' onClick={()=>window.open(data.
sourceUrls[0],"_blank")}>Read More</button></center>
                  </div>
                  : ""
              }

            </div>
        </div>
    </div>
    </>
  )
}

export default Dictionar