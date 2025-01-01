function Title(){
    let name ="ankit";
    return(
      <div>
        <p>2 *2={2*2}</p>
        <p> Hi ! {name.toUpperCase()}</p>
      </div>
    );
  }

function sum(a,b){
    return a+b;
}
  export default Title;
  //named export this is used to export multiple fn
  //export{Title,sum};