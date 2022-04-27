import Intro from "./components/intro/intro";
import About from"./components/about/about";
import ProductList from "./components/product-list/product-list";

const App = () => {
  return (
  <div>
    <Intro/>
    <About/>
    <ProductList/>
    </div>
  );
};

export default App;