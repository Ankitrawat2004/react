import { useState } from "react";
export default function Form(){
    let [formData,setFormdata]=useState({
        fullName:"",
        username:"",
        password:""
    });

    // let handleNameChange=(event)=>{
    //     setFullName(event.target.value);
    // };
    // let handleUsername=(event)=>{
    //     setUsername(event.target.value);
    // };
    let handleInputChange=(event)=>{
        let fieldName =event.target.name;
        let newValue = event.target.value;
        
        setFormdata((currData)=>{
            currData[fieldName] =newValue;
            return{...currData};
        }
        );
    };

    let handleSubmit=(event)=>{
        event.preventDeault();
        setFormdata({
            fullName:"",
            username:"",
        });

    };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
             placeholder="enter full name"
             type="text" value={formData.fullName} 
             onChange={handleInputChange}
             id="fullName"
             name="fullName"
             />
             <br></br>
             <br></br>
            <label htmlFor="username">UserName</label>
            <input
             placeholder="enter username"
             type="text" value={formData.username} 
             onChange={handleInputChange}
             id="username"
             name="username"
             />
            <button>Submit</button>
            <br></br>
            <br></br>
            <label htmlFor="password">Password</label>
            <input
             placeholder="enter password"
             type="password" value={formData.password} 
             onChange={handleInputChange}
             id="password"
             name="password"
             />
            <button>Submit</button>
        </form>
    );
}