import "./App.css";
import { Header } from "./features/Header";
import { ProductList } from "./features/ProductList";
import { Footer } from "./features/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Basket } from "./features/Basket";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/basket">
              <Basket />
            </Route>
            <Route path="/">
              <ProductList />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
