import { useState } from 'react';
import './Faq.css';


const FaqQuestion=({question,answer})=>{
  const[show,setShow]=useState(false);

  const askQuestion=()=>{
    setShow(!show);
  }
  return(
    <div className={`faqContainer ${show?"active":""} `}>
      <div className='faqQuestion ' onClick={askQuestion}>
        <h5>{question}</h5>
        </div>
        <div className='faqContent'>
          <div className='faqAnswer'>
          {answer}
          </div>

        </div>
    </div>
  )
}

const Faq2=({data})=>{
  return(
    <div className='faqItem'>
      <h2>FAQs</h2>
    {data.map((value)=>(
      <FaqQuestion key={value.id} question={value.ques} answer={value.ans}/>
    ))}
    </div>
  )
}

const data=[{
  id:1,ques:"What is React?",ans:"React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach."
},{
  id:3,ques:"What is JSX?",ans:"JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( )."
},{
  id:4,ques:"What are the differences between functional and class components?",ans:"Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on a feature basis. After the introduction of Hooks, functional components are equivalent to class components."
},{
  id:2,ques:"What is useState() in React?",ans:"The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.In the below-given example code, Thewill return a tuple where the count is the first parameter that represents the counter’s current state and the second parameter setCounter method will allow us to update the state of the counter."
}]
function Faq() {
  return (
    <div>
      <Faq2 data={data}/>
      
    </div>
  );
}

export default Faq;