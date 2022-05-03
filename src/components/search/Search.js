import {FormControl} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {processSearch} from '../redux/actiones.js';


function Search(){
    const dispatch = useDispatch();

    function onClickProcessSearch(e){
        let search = e.currentTarget.value.toLowerCase();
        dispatch(processSearch(search));
        
    }

    return <>
             <FormControl
                    type="search"
                    onKeyUp={onClickProcessSearch}
                    placeholder="Пошук"
                    className="me-2"
                    aria-label="Search"
                    size="sm"
                    />   
            </>
    
}

export default Search;