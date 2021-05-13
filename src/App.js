import './App.css';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import ItemNavbar from './Components/Navbar/ItemNavbar'
import ItemListContainer from './Components/ItemList/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './Components/CartContext/cartContext'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ItemNavbar/>
        <Switch>
          <Route path='/item/:id'>
            <ItemDetailContainer/>
          </Route>
          <Route path='/'>
            <OnLoadPage/>
            <ItemListContainer/>
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
