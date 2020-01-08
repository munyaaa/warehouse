import React from 'react'
import axios from 'axios'
import Style from './DisplayProduct.module.scss'
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class DisplayProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        var url = "/products"
        axios.get(url).then(response => {
           const products = response.data;
           this.setState({products})
        }).catch(e => {
            alert(e)
        })
    }
    
    render() {
        return (
            <Container className={Style.Container} >
                <Link to="/add-product">
                    <Button className={Style.Button}>Add Product</Button>
                </Link>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(product => (
                        <tr key={product.id}>
                            <td><Form.Control type="text" value={product.name} /></td>
                            <td><Form.Control type="text" value={product.type} /></td>
                            <td><Form.Control type="text" value={product.quantity} /></td>
                            <td><Form.Control type="text" value={product.price} /></td>
                            <td>
                                <Link to="">
                                    <Button>Update</Button>
                                </Link>
                            </td>
                            <td>
                                <Link to="">
                                    <Button>Delete</Button>
                                </Link>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        )
    }
}