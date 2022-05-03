import {Card, Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {toggleProductSelected} from '../redux/actiones.js';
import { useDispatch} from 'react-redux';
import './product.css'


function Product({product}){
    const dispatch = useDispatch();
    
    return <Col xs={12} sm={6} md={4} lg={3}> 
                <Card style={{ width: '18rem' }}  className='mb-5 text-center'>
                <Link className='nav-link'  to={'/' + product.id}> <Card.Img variant="top" src={product.img} /></Link> 
                    <Card.Body>
                        <Link className='nav-link' style={{color: 'black'}} to={'/' + product.id}> <Card.Title> {product.title} </Card.Title></Link>
                        <Card.Text>
                            <b>{product.price} грн</b>
                        </Card.Text> 
                        {product.selected ? 
                        <Button variant="danger" size="lg" onClick={() => dispatch(toggleProductSelected(product.id))}>Видалити з кошика</Button> :    
                        <Button variant="outline-dark" size="lg" onClick={() => dispatch(toggleProductSelected(product.id))}>Придбати</Button>}   
                    </Card.Body>
                </Card>
            </Col>
}

export default Product;