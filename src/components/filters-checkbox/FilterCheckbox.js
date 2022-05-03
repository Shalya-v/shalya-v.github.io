import {Form} from 'react-bootstrap';
import {processFilter} from '../redux/actiones.js';
import { useDispatch} from 'react-redux';


function FilterCheckbox({filterName, field}){
    const dispatch = useDispatch();

    function onChangeProcessFilter(e){
        let filterValue=e.currentTarget.id;
        const flag = (e.currentTarget.checked);
        dispatch(processFilter(field, filterValue, flag)); 
    }

    return   <div className="mb-3">
                    <Form.Check 
                    type='checkbox'
                    onChange={onChangeProcessFilter}
                    id={filterName}
                    label={filterName}
                    />
             </div>
}
   


export default FilterCheckbox;