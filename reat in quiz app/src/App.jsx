import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const  [question  , Setquestion] = useState([])
  const [num , Setnum] = useState(0)
  const inputValue = useRef([])
 const [valueNum , setvalueNum]  = useState(0)


  useEffect(()=>{
    async function getData(){
    const Data =await axios("https://the-trivia-api.com/v2/questions")
    console.log(Data.data);
    const apiData = Data.data
    Setquestion(apiData)

    
   }
   getData()
  } , [])



const  nextques = (num) =>{
  
  let checkedValue = inputValue.current.find(input => input.checked)
  
  if(checkedValue){
    console.log(num);
    if(checkedValue.value === question[num].correctAnswer ){
      console.log('Correct');
      setvalueNum(valueNum + 1)
      console.log('ypur correct answer' , valueNum+1);
    }
    if(num > 8){
      alert('Questions Completed');
      if(valueNum + 1 >= 5 ){
        console.log('You are pass');
      }else{
        console.log('You are fail');
      }
    }else{
      Setnum(num + 1);
    }
    console.log(question[num].correctAnswer);
    console.log(checkedValue.value);
    checkedValue.checked = '';
  }else{
    alert('Please select an answer')
  }


}





  return (
    <>
    <h1>
      Quiz app
    </h1>
    <div>
      {question.length > 0 ? (<div>

        <h1>{question[num].question.text}</h1>
        {[...question[num].incorrectAnswers , question[num].correctAnswer].map((item , index)=>{
          return <div key={index}>
          <input type="radio" name='choice' id={item} value={item} ref={el => (inputValue.current[index] = el)}/>
          <label htmlFor={item}>{item}</label>
        </div>
        
      }) }
      <button onClick={() => nextques(num) }>Next</button> 
        
      </div>

      ) : 
      <h1>loading</h1>}

    </div>
    </>
  )
}

export default App



