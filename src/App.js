import './App.css';
import { Header } from './features/Header';
import { ProductList } from './features/ProductList';
import { Footer } from './features/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/basket">
            тут корзина
          </Route>
          <Route path="/">
            <ProductList />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
