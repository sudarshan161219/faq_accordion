import './App.css';
import Img from './images/illustration-woman-online-mobile.svg'
import DesktopImg from './images/illustration-woman-online-desktop.svg'
import shadow from './images/bg-pattern-mobile.svg'
import Desktopshadow from './images/bg-pattern-desktop.svg'
import box from './images/illustration-box-desktop.svg'
import Card from './Card'
// import Header from './Header'
import data from './data';
import { useState } from 'react';


function App() {

  const  [questions, SingleQuestion] = useState(data)
  function update (){
    SingleQuestion(prevState => prevState)
  }

  return(
     <main> 
 <div className='container'> 

<div className='header'>
<img className='first-img' src={Img} alt="click_here"/>
<img className='desktop-img' src={DesktopImg} alt="click_here"/>
<img className='sec-img' src={shadow} alt="icon"/>
<img className='Desktop-sec-img' src={Desktopshadow} alt="icon"/>
<img className='box' src={box} alt="icon"/>
</div>

<div className='faq-card' >
<h1 className='heading'>faq</h1>
  <div className='main-faq'>
{questions.map((question) => {
  return(
  <Card {...update} key={question.id} {...question} />
  )
})}
</div>
</div>
</div>

 </main> 
  )



}

export default App;