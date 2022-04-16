import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


const Navbar=()=>{
    const [repo, setRepo] = useState([]);

    useEffect(() => {
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
        getRepo();
    }, []);
    return (
        <nav class="navbar navbar-dark bg-dark">
            <Container>
                <Nav className="me-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/add" id="c1">Add</Link>
                </Nav>
                <img src="https://img.icons8.com/fluency/48/000000/shopping-cart-promotion.png"/><Link to="/items">{repo.length}</Link>
            </Container>
        </nav>
    )
}

export default Navbar;