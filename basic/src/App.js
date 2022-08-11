import './style.css'
import './App.css';
import shopdata from "./dataforshop.js"
import React, {useState} from "react"
import {useEffect} from "react"
// price might have trouble showing up since it is not a string, test this

// Don't fully undesrtand how to place incoming props at the same horizontal style level as previous props

function ThingsTest(props){
  // Put beyond overarching parent div
  // Putting each HTML Tag in Seperate Dics to see if they can align vertically via flexbox
  // problem right now is that the props being passed in are not aligning with the flexbox of the previosuly passed props
  return(
    <div>
      <div className = "aligned">
      <h4 className = "coloringname">
      {props.name}
      </h4>
      <div>look at tailwind</div>
      <img className='pictures' src = {`/images/${props.pic}`} />
      </div>
    </div>
  )
}
// KEEP IN MIND THAT IMAGE TAG MIGHT NOT BE SELECTED BECAUSE IT IS A DIFFERENT CLASS THAN THE HEADER 4 TAG
function ShoppingList(props){
  // Put beyond overarching parent div
  // Putting each HTML Tag in Seperate Dics to see if they can align vertically via flexbox
  // problem right now is that the props being passed in are not aligning with the flexbox of the previosuly passed props
  return(
    <div className = "container">
      <h4 className = "inside">
      {props.name}
      </h4>
      <div>
      {props.img && <img className='pictures' src = {`/images/${props.pic}`}/> }
      </div>
      </div>
  )// Make it return to normal like previous functions if you want the images to show up they want show up this way for some reason
  // images show up on the right side of the screen without the conditional rendering part

  // Essentially playing around with Tailwind to see what works with color changes
}
function GridTesting(props){
  return(
    <div className = "grid-container">
      <h4 className = "grid-item">
      {props.name}
      </h4>
      <img className='grid-item' id= "coord" src = {`/images/${props.pic}`} />
      </div>
  )
}
// Number for price is a string not an integer remember to change that
function ShoppingItems(props){
  const [count, setCount]= React.useState(0)
  function add (){
    setCount(count + props.price)
  }
  return(
    <div>
      <div className = "flexabove">
      <h4 className = "flexbelowname">
      {props.name}
      </h4>
      <h1 className = "flexbelowname">
      {props.cost}
      </h1>
      <img className='pictures' src = {`/images/${props.pic}`} />
      <btn onClick = {add}> Press</btn>
      <h1> {count}</h1>
      </div>
    </div>
  )
}
// Changing whatever I can to add a committ
// Add a function with flex-row that has name price add to cart and picture

// Addong another change to see if I can add a committ
function App() { useEffect(function thing2() {
  //Runs only on the first render
  alert("Hello")
  //const message = "Exists"
  //return <div className='initial'>{message}</div>
  
  }, []);
  //const [cartcount, setCartCount]= React.useState(0)
  // Test of New Branch for New Site
  // adding one more comment to explain something
  // Adding the Final Committ
  // Adding another committ
  // third final committ
  // another commit
  // end commit
  // final end commmit
  // night commit
  // night commit #2

  // final commit #3
  return (
    <div className="App">
      <p className = "whatever"> Some text as a test to see if it works</p>
      <p> Another test 2 added this another committ</p>
      <p> Third Test with another commit</p>
      <div className = "card">
        <div className = "corner">
        <div> 5 </div>
        <div> he</div>
        <img className = "picard" src = {"/images/suitcasepic.jpg"}/>
        </div>
        <div className = "cardcenter">
        <div> Text Here</div>
        <div> Again Text Here</div>
        </div>
      </div>
      <p> WILL THE IMAGES SHOW UP PART 4?</p>
      {shopdata.map((item)=>{
       return (
       <ThingsTest key = {item.id} name={item.title} cost={item.price} pic = {item.picture}/>
     );})}
     {shopdata.map((item)=>{
       return (
       <ShoppingList key = {item.id} name={item.title} cost={item.price} pic = {item.picture}/>
     );})}
     {shopdata.map((item)=>{
       return (
       <GridTesting key = {item.id} name={item.title} cost={item.price} pic = {item.picture}/>
     );})}
     {shopdata.map((item)=>{
       return (
       <ShoppingItems key = {item.id} name={item.title} cost={item.price} pic = {item.picture}/>
     );})}
    </div>
  );
}

export default App;
