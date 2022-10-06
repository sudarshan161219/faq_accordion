
import Img from './images/illustration-woman-online-mobile.svg'
import shadow from './images/bg-pattern-mobile.svg'


export default function Header(){
 return(
    <>
<img className='first-img' src={Img} alt="click_here"/>
<img className='sec-img' src={shadow} alt="icon"/>
<h1 className='heading'>faq</h1>
    </>
 )
}
