
import {Button, Row, Col, Image, InputGroup, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {toggleProductSelected, increaseAmount, decreaseAmount } from '../redux/actiones.js';
import {useDispatch} from 'react-redux';
import '../basket/basket.css'

function SelectedProductInCart({product}){

    const dispatch = useDispatch();

    return <>
        <Row className='mb-2'>
            <Col xs={12} md={2}>
                <Image className='selected-product-img' src={product.img} />
            </Col>
            <Col xs={12} md={6}>
                <b>{product.title}</b>
            </Col>
            <Col xs={12} md={2}>
                <InputGroup size="sm">
                    <Button variant="outline-secondary" onClick={() => dispatch(decreaseAmount(product.id))}>-</Button>
                    <FormControl placeholder={product.amount} className='text-center' readOnly/>
                    <Button variant="outline-secondary" onClick={() => dispatch(increaseAmount(product.id))}>+</Button>   
                </InputGroup>
                <p style={{color:'grey', fontSize: '10px'}}>В наявності: {product.inStockQuantity}</p>
            </Col>
            <Col xs={12} md={1}>
                <b>{product.price * product.amount}грн</b>
            </Col>
            <Col xs={12} md={1}>
                <OverlayTrigger
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Tooltip id={`tooltip-bottom`}>
                        Видалити з кошика
                        </Tooltip>
                    }
                    >
                    <Button size="sm" variant="outline-danger" className='trash-icon' onClick={() => dispatch(toggleProductSelected(product.id))}><FontAwesomeIcon icon={ faTrashCan } /></Button>
                </OverlayTrigger>
            </Col>
        </Row>
    </>
    
  
}

export default SelectedProductInCart;