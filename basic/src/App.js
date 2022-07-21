import './style.css'
import './App.css';
import shopdata from "./dataforshop.js"

// price might have trouble showing up since it is not a string, test this

function ThingsTest(props){
  // Put beyond overarching parent div
  // Putting each HTML Tag in Seperate Dics to see if they can align vertically via flexbox
  // problem right now is that the props being passed in are not aligning with the flexbox of the previosuly passed props
  return(
    <div>
      <div className = "aligned">
      <h3 className = "coloringname">
      {props.name}
      </h3>
      </div>
      <div className = "aligned">
      <img className='pictures' src = {`/images/${props.pic}`} />
      </div>
    </div>
  )
}

function App() {
  // Test of New Branch for New Site
  return (
    <div className="App">
      <p className = "whatever"> Some text as a test to see if it works</p>
      <p> Another test</p>
      <p> WILL THE IMAGES SHOW UP PART 4?</p>
      {shopdata.map((item)=>{
       return (
       <ThingsTest key = {item.id} name={item.title} cost={item.price} pic = {item.picture}/>
     );})}
    </div>
  );
}

export default App;
