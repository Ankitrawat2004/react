import { useState } from "react";

export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
    let [count,setCount]=useState(0);
    let [arr,SetArr]=useState(["no moves"]);
    let updateBlue=()=>{
        // moves.blue +=1;
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves)=>{
            return{...prevMoves , blue: prevMoves.blue+1}
        });//using spread
        //The spread (...) syntax allows an iterable, such as an array or string, 
        //to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
      
        SetArr((prevArr)=>{
            return[...prevArr,"blue moves"]
        });
        console.log(arr);
    };
    let updateYellow=()=>{
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves((prevMoves)=>{
            return{...prevMoves , yellow: prevMoves.yellow+1}
        });
    };
    return (
    <div>
        <p>Game Begins!</p>
        <p>{arr}</p>
        <div className="board">
            <p>Blue moves ={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}> +1</button>
            <p>Yellow moves = {moves.yellow}</p>
            <button  style={{backgroundColor:"yellow" ,color:"white"}} onClick={updateYellow}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button  style={{backgroundColor:"green"}}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button  style={{backgroundColor:"red"}}>+1</button>
        </div>
    </div>)
}