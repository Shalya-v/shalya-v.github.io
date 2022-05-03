
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Products from './components/cards/Products';
import Header from './components/header/Header'
// import FilterRadio from './components/filters-radio/FilterRadio'
import ProductDescription from './components/productDescription/ProductDescription';
import Login from './components/login/Login';
import './App.css';
/*<FilterRadio />*/ 

function RequireAuth({ children }) {
  if (localStorage.getItem("name")===null) {

    return <Navigate to="/login" replace />;
  }

  return children;
}


function App() {

  
  return ( <Router>
              <Header/>
              <main>
                <Routes>
                  <Route path='/' element={
                    <RequireAuth>
                      <Products/>
                    </RequireAuth>
                  }/> 
                  <Route path=':id' element={
                    <RequireAuth>
                      <ProductDescription />
                    </RequireAuth>
                  }/> 
                  <Route path='/login' element={<Login/>}/>
                </Routes> 
              </main>
            </Router>  
  );
}

export default App;
