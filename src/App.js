import './App.css';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import ItemNavbar from './Components/Navbar/ItemNavbar'
import ItemListContainer from './Components/ItemList/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import {CartProvider} from './Components/CartContext/cartContext'
import Container from './Components/Container/Container'
import Cart from './Components/Cart/Cart';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ItemNavbar/>
        <Switch>
          <Route exact path='/item/:id'>
              <Container/>
          </Route>
          <Route exact path='/category/:id'>
            <ItemListContainer/>
          </Route>
          <Route exact path='/cart'>
            <Cart/>
          </Route>
          <Route path='/'>
            <OnLoadPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

function OnLoadPage(){
  const history = useHistory();
  history.push('/home');
  return(
    <>
    </>
  )
}
