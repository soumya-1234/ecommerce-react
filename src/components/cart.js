import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Cart=()=>{
    const [repo, setRepo] = useState([]);

    const deleteitem=(e,id)=>{
        e.preventDefault();
        const url='http://localhost:3000/api/v1/carts/'
        axios.delete(url+id)
        .then(() => console.log("delete successfully"));
        window.location.reload(false);
    }
    const getRepo = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/carts');
            console.log(response);
            const myRepo = response.data;
            setRepo(myRepo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRepo();
    }, []);
    return(
        <>
            <div class="container">
                <div class=" d-flex align-content-start flex-wrap">

                    {
                        repo.map((elem) => {
                            return (
                                
                                    <Card style={{ width: '18rem' }} className="bg-light m-2">
                                        <Card.Img id="i3" variant="top" src={elem.pimage} alt={elem.pname} />
                                        <Card.Body>
                                            <Card.Title>Name-{elem.pname}</Card.Title>
                                            <Card.Text>Product Price-{elem.pprice}</Card.Text>
                                            <button type="submit" class="btn btn-primary btn-block" onClick={(e)=>deleteitem(e,elem.id)}>Remove</button>
                                        </Card.Body>
                                    </Card>
                               

                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Cart;