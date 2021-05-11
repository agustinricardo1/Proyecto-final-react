import './App.css';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import ItemNavbar from './Components/Navbar/ItemNavbar'
import ItemListContainer from './Components/ItemList/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { CartContext } from './Components/CartContext/cartContext'

export default function App() {
  return (
    <CartContext.Provider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ItemNavbar/>
        <Switch>
          <Route path='/Item/:id'>
            <ItemDetailContainer/>
          </Route>
          <Route path='/'>
            <OnLoadPage/>
            <ItemListContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
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
