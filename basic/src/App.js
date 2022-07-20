
import './App.css';
import shopdata from "./dataforshop.js"

function ThingsTest(props){
  return(
    <div>
      <h3>
      {props.name}
      </h3>
      <img src = {`.../basic/${props.pic}`} />
    </div>
  )
}

function App() {
  // Test of New Branch for New Site
  return (
    <div className="App">
      <p> Some text as a test to see if it works</p>
      <p> Another test</p>
      {shopdata.map((item)=>{
       return (
       <ThingsTest key = {item.id} name={item.title} cost={item.price} pic = {item.picture}/>
     );})}
    </div>
  );
}

export default App;
