import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const Add=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState();
    const [url,setUrl]=useState("");
    const [message,setMessage]=useState("");
    const [cond,setCond]=useState(true);
    const navigate=useNavigate();

    
    const add=(e)=>{
        e.preventDefault()
        if(!name || !url || price==null){
            setMessage("please fill your data !")
            setCond(false)
        }
        else{
            const data={name: name,image_url: url,price: price}
            axios.post('http://localhost:3000/api/v1/products',data)
            .then(response=>{
                console.log(response);
            })
            setMessage("data saved successfully");
            setCond(true)
            navigate("/home")
        }
    }
    return (
        <>
            <div className="container" id="c3">
                <form>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="text" className="form-control"  value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Product Image URL</label>
                        <input type="text" className="form-control" value={url} onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    <div id="b1">
                        <button type="submit" class="btn btn-primary btn-block" onClick={(e)=>add(e)}>Submit</button>
                    </div>
                    <div className="message">{cond ? <p id="p1">{message}</p> : <p id="p2">{message}</p>}</div>
                    
                </form>
            </div>
        </>
    )
}

export default Add;