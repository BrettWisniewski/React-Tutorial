
import './App.css';
import shopdata from "./dataforshop.js"

// price might have trouble showing up since it is not a string, test this

function ThingsTest(props){
  return(
    <div>
      <h3>
      {props.name}
      </h3>
      <img src = {`/images/${props.pic}`} />
    </div>
  )
}

function App() {
  // Test of New Branch for New Site
  return (
    <div className="App">
      <p> Some text as a test to see if it works</p>
      <p> Another test</p>
      <p> WILL THE IMAGES SHOW UP PART 2?</p>
      {shopdata.map((item)=>{
       return (
       <ThingsTest key = {item.id} name={item.title} cost={item.price} pic = {item.picture}/>
     );})}
    </div>
  );
}

export default App;
