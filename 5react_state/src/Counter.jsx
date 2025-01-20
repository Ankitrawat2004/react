import {useState}from "react";
function init(){
    console.log("init was executed");
    return Math.random();
}
export default function Counter(){
    // let count=0;
    // function incCount(){
    //     count += 1;
    //     console.log(count);
    // }
    let [count,setcount] = useState(init);//initialization
    console.log("Component was  rendered!");
    console.log(`count = ${count}`);
    let incCount=()=>{
        setcount((currCount)=>{
            return currCount + 1;
        });
        setcount((currCount)=>{
             return currCount + 1;
        });
        //setcount(25);

        // setcount(count+1);
        // console.log(`inside incCount ,count =${count}`);
    };
 
    return(
        <div>
            <h3>Count={count}</h3>
            <button >Increase Count</button>
        </div>
    );
} 