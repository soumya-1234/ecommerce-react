import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../navbar";



const Buy=()=>{
    const [repo,setRepo]=useState([]);
    const [crepo,setCrepo]=useState([]);
    const navigate=useNavigate();
    const {id}=useParams();
   
   

    const addcart=()=>{
        repo.filter((value)=>value.id==id).map((value)=>{
            const data={pname: value.name,pimage: value.image_url,pprice: value.price}
            axios.post('http://localhost:3000/api/v1/carts',data)
            .then(response=>{
                console.log(response);
            })
        })
        window.location.reload(false);
    }
    const deletedata=(e,name)=>{
        e.preventDefault();
        console.log(id)
        const url='http://localhost:3000/api/v1/products/'
        axios.delete(url+id)
        .then(() => console.log("delete successfully"));
        navigate("/home");
    }
    const editdata=(e)=>{
        e.preventDefault();
        const url="/edit/";
        navigate(url+id)
    }
    useEffect(()=>{
        const getRepo=async()=>{
            try{
                const response=await axios.get('http://localhost:3000/api/v1/products');
                console.log(response);
                const myRepo=response.data;
                setRepo(myRepo);
            }catch(error){
                console.log(error);
            }
        };
        getRepo();
    },[]);
    return(
        <>
           {
               repo.filter((val)=>val.id==id).map((val)=>{
                   return (
                       <>
                            <div class="container" id="d1">
                                <div class="card">
                                    <div>
                                        <img src={val.image_url} width="700" height="500" id="i1"/>
                                    </div>
                                    <div id="a1">
                                        <h2>Product Name - <span>{val.name}</span></h2>
                                        <h3>Product Price - <span>{val.price}</span></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                    <div id="a2">
                                            <button type="button" class="btn-success" onClick={addcart}>Add to Cart</button>
                                            <div>
                                                <button type="button" class="btn-danger" onClick={(e)=>deletedata(e,val.name)}>Delete</button>
                                            </div>
                                            <div>
                                                <button type="button" class="btn-warning" onClick={(e)=>editdata(e)}>Edit</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                       
                       </>
                   )
               })
           }
        </>
    )
}

export default Buy;