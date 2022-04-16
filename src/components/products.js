import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Products = () => {
    const [repo, setRepo] = useState([]);
    useEffect(() => {
    const getRepo = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/products');
            console.log(response);
            const myRepo = response.data;
            setRepo(myRepo);
        } catch (error) {
            console.log(error);
        }
    };
    getRepo();
    }, []);


    
    console.log(repo.length);
    return (
        <>
            <div class="container">
                <div class=" d-flex align-content-start flex-wrap">

                    {
                        repo.map((elem) => {
                            return (
                                
                                    <Card style={{ width: '18rem' }} className="bg-light m-2">
                                        <Card.Img id="i3" variant="top" src={elem.image_url} alt={elem.name} />
                                        <Card.Body>
                                            <Card.Title>Name-{elem.name}</Card.Title>
                                            <Card.Text>Product Price-{elem.price}</Card.Text>
                                            <Link to={`/products/${elem.id}`} role="button" class="btn btn-primary active">Buy Now</Link>
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

export default Products;