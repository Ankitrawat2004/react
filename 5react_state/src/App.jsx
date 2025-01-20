
import './App.css'
import Counter from "./Counter";
import LikeButton from "./LikeButton";
function App() {
  return(
    <>
      <h1>States in React</h1>
      <LikeButton />
      <Counter />
    </>
  );
}

export default App;
//state in react
//state is a inbuilt react object that is used to contain data or info about the component.
//it changes the component re-renders.

//Hooks => It is an fn that helps us to deal with state
//you can use state and other react features without writing a class

//useState() => is a react Hook that lets you add a state variable to your component.
//state variable is an variable in which some changes come in ui we have to rerender it
//changes in DOM we use state variable

//useState returns an array with 2 values:
//1. the current state(initialState you have passed.)
//2. the set function that lets you update the state to a different value and trigger

//Closure => a closure is a feature in JS wherew an inner fn has access to the outer fn variables
// function outer(){
//   var b=10;
//   function innner(){
//     var a=20;
//     console.log(a+b);
//   }
//   return innner;
// }
