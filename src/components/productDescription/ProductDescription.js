import { Col, Container, Row, Table, Button, Image } from "react-bootstrap";
import {toggleProductSelected} from '../redux/actiones.js';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import './productDescription.css'



function ProductDescription(){
    const {id} = useParams();
    const {products} = useSelector(state => state);
    const dispatch = useDispatch();

    const product = products.find(product => product.id === +id);
    return <Container>
                <Row>
                    <Col md={5} lg={4}><Image src={product.img} className='product-description-img'/></Col>
                    <Col md={3} lg={4}>
                        <div className='mb-3'>
                            <h1> {product.title}</h1>
                            {product.isInStock ? <p className="green">В наявності</p>: <p className="gray">Немає в наявності</p>}
                        </div>
                        <div>
                            <h2>Характеристики</h2>
                            <Table borderless>
                                <tbody>
                                    <tr>
                                    <td>Видавець</td>
                                    <td>{product.publisher}</td>
                                    </tr>
                                    <tr>
                                    <td>Палітурка</td>
                                    <td>{product.binding}</td>
                                    </tr>
                                    <tr>
                                    <td>Дата виходу</td>
                                    <td>{product.pubDate}</td>
                                    </tr>
                                    <tr>
                                    <td>Мова</td>
                                    <td>{product.language}</td>
                                    </tr>
                                </tbody>
                            </Table>

                        </div>
                    </Col>
                    <Col md={4} lg={4}>
                        <div>
                            <h2>Трохи більше...</h2>
                            <div className='mb-3'>{product.description}</div>
                            <div className="buttons" >
                            {product.selected ? 
                            <Button variant="danger" size="lg" onClick={() => dispatch(toggleProductSelected(product.id))}>Видалити з кошика</Button> :     
                            <Button variant="outline-dark" size="lg" onClick={() => dispatch(toggleProductSelected(product.id))}>Придбати</Button>} 
                            </div>
                            
                        </div>
                    </Col>
                </Row>
           </Container>
}

export default ProductDescription;