function handleClick(){
    console.log("Hello!");
}
function handleMouseOver(){
    console.log("bye!");
}
function handleDblClick(){
    console.log("you double clicked");
}
export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus aliquid vel, non laudantium dolorum expedita nobis ullam, aliquam fuga ipsa accusantium quas ad vitae sed eos, delectus ut aperiam eveniet.</p>
            <button onDoubleClick={handleDblClick}>double Click me!</button>
        </div>
    );
}