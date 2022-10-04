import './App.css';
import Card from './Card'
import Header from './Header'
// import React , {useState} from 'react' 
import data from './data';


function App() {
//   const [add, setAdd] = useState(false)

//   function toggle(){
//     setAdd(prevState => !prevState)
// }

const card = data.map(item => {

  return(

    <Card 
    // add={add} 
    // toggle={toggle}
    key={item.id}
    on={item.on} 
    {...item} 

/>

  )

})

  return (
    <div className="App">
      <Header />
     <div className='faq-card' >{card}</div> 
    </div>
  );
}

export default App;
