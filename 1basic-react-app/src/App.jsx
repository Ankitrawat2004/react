
import './App.css';
import Title from "./Title.jsx";
import Product from "./Product.jsx";
import ProductTab from './ProductTab.jsx';
function App() {
  return(
   <div className="mainbox">
   <ProductTab/>
    </div>
  ); 
}

//component is a reusable  & independent piece of code.
//renderig a component => <Title></Title> , <Title/>

function Description(){
  return(
    <h1>I am the Description!</h1>
  );
}
export default App;
//the rules of JSX
//1.return a single root element
//2.close all the tags
//3.camelcase all most of the thing

//react fragment=>multiple component combined into a singular entity=>   <> </>
