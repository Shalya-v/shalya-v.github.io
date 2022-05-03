import {Navbar, Container, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BasketModal from '../basket/Basket';
import Search from '../search/Search';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserAstronaut} from '@fortawesome/free-solid-svg-icons';


function Header(){

    const navigate = useNavigate();

    return <header className={'mb-4'}>
        <Navbar bg="dark" variant="dark">
                <Container> 
                    <Navbar.Brand href="/">
                        <img
                        alt=""
                        src="https://w7.pngwing.com/pngs/737/437/png-transparent-deadpool-logo-deadpool-logo-superhero-drawing-marvel-comics-free-deadpool-svg-smiley-snout-emoticon-thumbnail.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Comics Shop
                    </Navbar.Brand>
                    <Search />
                    <BasketModal />
                    <OverlayTrigger
                        key='bottom'
                        placement='bottom'
                        overlay={
                        <Tooltip id={`tooltip-bottom'`}>
                        Вийти з профілю
                        </Tooltip>
                    }   
                    >
                        <Button variant="outline-secondary"  onClick={() => {localStorage.removeItem("name"); navigate("/login/")}}>
                        <FontAwesomeIcon icon={faUserAstronaut}  />
                        { localStorage.getItem('name') !== null && <p> Привіт, {localStorage.getItem('name')}</p>}
                        </Button>
                        
                    </OverlayTrigger>  
                </Container>
            </Navbar>
    </header>
    
}

export default Header;