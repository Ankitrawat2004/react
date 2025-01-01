import './App.css';
import MsgBox from "./MsgBox.jsx";
import Product from "./Product.jsx";
import ProductTab from './ProductTab.jsx';
function App() {
  return(
   <div className="mainbox">
    <MsgBox userName="ankit" textColor="yellow" />
   <ProductTab/>
    </div>
  ); 
}
export default App;
//react props => props are the information that you pass to JSX tag.
// <Product title="phone" price="30k" />