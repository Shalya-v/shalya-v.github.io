import {useEffect} from 'react';
import axios from 'axios';
import {Container, Row} from 'react-bootstrap';
import Product from './Product';
import FilterGroup from '../filterGroup/FilterGroup';
import {productsFetched} from '../redux/actiones.js';
import { useDispatch, useSelector } from 'react-redux';


function Products() {
    const {filteredProducts} = useSelector(state => state);
    const dispatch = useDispatch();
    

    

    useEffect(() => {
        axios('https://fake-comic-store.herokuapp.com/comics').then(res => dispatch(productsFetched(res.data)));
    }, [])


    return <>
            <Container>
                <Row>
                    <FilterGroup />
                </Row>
            </Container>
     
            <Container>
                <Row className="d-flex justify-content-around">
                    {filteredProducts.map(product => <Product product={product} key={product.id}/>)}     
                </Row>   
            </Container>
    </>
           

}

export default Products;
