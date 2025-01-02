import"./Product.css";
import Price from "./Price";
function Product({title,idx}){
  let oldPrice=["12,495","11,990","1,599","599"];
  let newPrice=["8,999","9,199","899","278"];
  let description=[
    ["8,000 DPI", "5 Progammable buttons"],
    ["intuitive surface", "designed foriPad Pro"],
    ["designed for iPad Pro","intuitive surface"],
    ["wireless","optical orientation"],
];
const validIdx = idx >= 0 && idx < description.length ? idx : 0;
    return(
        <div className="Product"> 
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}
export default Product;
// import "./Product.css";
// import Price from "./Price";

// function Product({ title, idx = 0 }) {
//   const oldPrice = ["12,495", "11,990", "1,599", "599"];
//   const newPrice = ["8,999", "9,199", "899", "278"];
//   const description = [
//     ["8,000 DPI", "5 Programmable buttons"],
//     ["Intuitive surface", "Designed for iPad Pro"],
//     ["Compact design", "Programmable buttons"],
//     ["Wireless", "Optical orientation"],
//   ];

//   const validIdx = idx >= 0 && idx < description.length ? idx : 0;

//   return (
//     <div className="Product">
//       <h4>{title}</h4>
//       <p>{description[validIdx][0]}</p>
//       <p>{description[validIdx][1]}</p>
//       <Price oldPrice={oldPrice[validIdx]} newPrice={newPrice[validIdx]} />
//     </div>
//   );
// }

// export default Product;
