import React from 'react'
import { Col, Row } from 'react-bootstrap'
import product from '../products'
import Product from '../components/Product'

const HomseScreen = () => {
    return (
        <div>
            <h1>Latest Products !</h1>
            <Row>
                {product.map( (product)=>(
                    <Col key = {product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product  product ={product} />
                    
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomseScreen
