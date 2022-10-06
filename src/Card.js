
import React , {useState} from 'react' 
import arrowIcon from './images/icon-arrow-down.svg'



export default function Card({name, content}){
    const [set, onSet ] = useState(false)


    function toggle(){
      onSet(preState => !preState)
    }
 return(
    <>
  <ul>
    <li>
      <div  className='heading-img'>
        <h2 onClick={toggle} >{name}</h2>
       <img onClick={toggle} className={ set ? 'rotate-arrow' : ''}    src={arrowIcon} alt="icon"/>
      </div>

<div><p  className={set ? 'show-p': ''} >{content}</p></div>
      
    </li>
  </ul>
    </>
 )



}

