
import React , {useState} from 'react' 
import arrowIcon from './images/icon-arrow-down.svg'



export default function Card(props){
    const [set, onSet ] = useState(props.on)


    function toggle(){
      onSet(preState => !preState)
    }



 return(
    <>

{/* <article className='card-conatiner' > */}
{/* <div className='faq-card'> */}
  <ul>
    <li>
      <div className='heading-img'>
        <h2 onClick={toggle} >{props.name}</h2>
       <img onClick={toggle} className={ set ? 'rotate-arrow' : ''}    src={arrowIcon} alt="icon"/>
      </div>


      <p  className={set ? 'show-p': ''} >{props.content}</p>
    </li>
  </ul>
{/* </div> */}
{/* // </article> */}


{/* <h1 className='heading' ></h1>
<p></p> */}

    </>
 )



}

