import {useState} from "react";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n,winCondition}){
        let [ticket,setTicket] = useState(genTicket(n));
        let isWinning = winCondition;
        
        let buyTicket =()=>{
            setTicket(genTicket(n));
        }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations,you won!"}</h3>
        </div>
    );
}

//lifting state up is an common design pattern in state
//component types in react
// 1. logical component have state(logic) 2. presentational component(design ui) yhey dont have state variable they have props