
import React , {useState} from 'react' 
import arrowIcon from './images/icon-arrow-down.svg'



export default function Card(props){
    const [set, onSet ] = useState(props.on)


    function toggle(){
      
      onSet(preState => !preState)
      const accordionBtns = document.querySelectorAll('.heading-img')
      accordionBtns.forEach((accordion) => {
        accordion.onclick = function () {
          this.classList.toggle("is-open");
      
          let content = this.nextElementSibling;

          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          }
          else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        };
      });


    }



 return(
    <>
  <ul>
    <li>
      <div className='heading-img'>
        <h2 onClick={toggle} >{props.name}</h2>
       <img onClick={toggle} className={ set ? 'rotate-arrow' : ''}    src={arrowIcon} alt="icon"/>

      </div>
      <p>{props.content}</p> 
    </li>
  </ul>
    </>
 )



}

