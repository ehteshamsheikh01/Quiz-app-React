import React, { useEffect, useState } from 'react'

const App = () => {

const [setdata , showsetData] = useState([])
const [btn , setbtn] = useState(0)

// function nextquestion(){
//   console.log('kam kr rha he');
//   setbtn(index + 1)
  
// }
  
  useEffect(()=>{
    async function gatData  (){
      const Data =await fetch("https://the-trivia-api.com/v2/questions")
      const DataApi = await Data.json()
      console.log(DataApi);
    const  useValue = DataApi
      showsetData(useValue)
      
     }
     gatData()
  } , [])


  function nextFunction (){
    //   index < show.length - 1 ? setIndex(index + 1) : alert("question khtm hogaye maalik")
    // }
    
    // function shuffleArray(array) {
    //   for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    
    //     [array[i], array[j]] = [array[j], array[i]];
    //   }
    
    //   return array;
    // }
    
    // // const App = ({ show, index, nextFunction }) => {
    //   const checkedInput = useRef([]);
    




  return (
    <div>
      <h1 className='text-xl text-center'>Quiz app</h1> 
      <div>
        {setdata.length > 0 ? <div>Question#1 : {setdata[index].question.text}</div> : <h1>loading</h1> }
        <button onClick={nextFunction}>Next</button>


      </div>
    </div>
  )
}
}