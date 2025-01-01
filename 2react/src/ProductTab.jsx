import Product from "./Product.jsx";
function ProductTab(){
    let options=["hi-tech","durable","fast"];
    //let options2={ a:"hi-tech",b:"durable",c:"fast"};
    return(
        <>
         <Product title="phone" price={30000} features={options} />
         <Product title="laptop" price={50000}/>
         <Product title="pen" price={10}/>
        </>
    );
}
export default ProductTab;