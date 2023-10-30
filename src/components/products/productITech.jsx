import React from 'react'
import dataITech from '../../data/dataITech';
import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import ProductCard from "./productCard";
export default function productITech() {
 
    const [category, setCategory] = useState("All");
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
  
    //fetch the products
    useEffect(() => {
      setProducts(dataITech)
    }, []);
  
    //handle change of the search bar
    const handleChange = (event) => setSearch(event.target.value);
  
    //filter part : it can be remplaced by function
    let tabCateg = [];
    products.map((element) => {
      if (!tabCateg.includes(element.category))
        tabCateg = [...tabCateg, element.category];
    });
  
    return (
      <Container>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '140px', width: '23%', }}>
            <Form.Select aria-label="Default select example" value={category} onChange={(e) => { setCategory(e.target.value); }}>
              <option key="index" value="All">All</option>
              {tabCateg.map((element, id) => (
                <option key={id} value={element}>
                  {element}
                </option>
              ))}
            </Form.Select>
          </div>
          <div style={{ width: '55.5%', marginBottom: "70px" }}>
            <InputGroup className="mb-3" required onChange={handleChange} >
              <Form.Control placeholder="Search your product" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <Button variant="outline-secondary" id="button-addon2">Search</Button>
            </InputGroup>
          </div>
        </div>
  
        
  
        <Container className="products-container">
          {products
            .filter((element) => element.name.toLowerCase().includes(search.toLowerCase()))
            .filter((element) => element.category === category || category === "All")
            .map((product, index) => (
              <Row key={index}>
                <Col xs={6} md={3}>
                  <ProductCard key={product.id} item={product} />
                </Col>
              </Row>
            ))}
        </Container>
  
        <Container>
          {tabCateg.map(elt => (
            <>
              <h3>{elt}</h3>
              <Container className="products-container">
                {products
                  .filter((element) => element.category === elt)
                  .map((product, index) => (
                    <Row key={index}>
                      <Col xs={6} md={3}>
                        <ProductCard key={product.id} item={product} />
                      </Col>
                    </Row>
                  ))}
              </Container>
            </>
          ))}
        </Container>
      </Container>
    );
}
