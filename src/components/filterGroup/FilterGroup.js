import {useSelector} from "react-redux"
import FilterCheckbox from "../filters-checkbox/FilterCheckbox";
import {Form, Col} from 'react-bootstrap';

function FilterGroup(){
    const {products} = useSelector(state => state);
    const filterTitleMap = {publisher: "Видавник", language: "Мова", binding: "Палітурка"};

    function generateFilters(){
        return ["publisher", "language", "binding"].map(
            filterName => [filterName, Array.from(new Set(products.map(
                product => product[filterName]
            )))]
        )
    }
    

    return <>
            {generateFilters().map(
                filters => 
                <Col>
                    <Form>
                        <Form.Label><b>{filterTitleMap[filters[0]]}</b></Form.Label>
                        {filters[1].map(filter => <FilterCheckbox filterName={filter} key={filter} field={filters[0]}/>)}
                    </Form>
                </Col>
                )}
    </>
           
}

export default FilterGroup;