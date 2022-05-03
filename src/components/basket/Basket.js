import {useState, useEffect} from 'react';
import {Modal, Button, Container, Row} from 'react-bootstrap';
import SelectedProductInCart from '../selectedProductInBasket/SelectedProductInBasket';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons';
import { calculateTotalPrice } from '../redux/actiones';
import {useSelector, useDispatch} from 'react-redux';
import './basket.css';


function BasketModal() {
    const [show, setShow] = useState(false);
    const {totalPrice} = useSelector(state => state);
    const {basketProducts} = useSelector(state => state);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
  

     useEffect(() => {
        dispatch(calculateTotalPrice()) 
     }, [basketProducts])

  
    return (
      <>
        <Button variant="outline-secondary" style={{marginRight: 10}} onClick={handleShow}>
        <FontAwesomeIcon icon={faBasketShopping} />
        </Button>
  
        <Modal 
            show={show} 
            onHide={handleClose} 
            backdrop="static"
            keyboard={false} 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
          <Modal.Header closeButton>
            <Modal.Title>Ваш вибір</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container> 
              {basketProducts.map(product =>  <SelectedProductInCart key={product.id} product={product}/>
              )}
              <Row>
              {basketProducts.length ? <h2>Загально: {totalPrice} грн</h2>: <h2>Кошик порожній</h2>}   
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Повернутися до покупок
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Продовжити
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default BasketModal;