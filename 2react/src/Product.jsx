import"./Product.css";
function Product({title,price=1,features}){
  //const list =features.map((feature)=><li>{feature}</li>);
  let isDiscount =price>30000;
 let styles={backgroundColor: isDiscount?"pink":""};
  
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            {isDiscount? <p>" Discount of 5%"</p> :<a href="/">Get Discount</a>}
            <p>{features}</p>
           
        </div>
    );
}//{price>30000 && <p>Discount of 5% </p>}
export default Product;