import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductImage from './components/product_image/ProductImage';
import ProductDescription from './components/product_description/ProductDescription';


function App() {
  return (
    <div className="App">
      <ProductImage />
      <ProductDescription />
    </div>
  );
}

export default App;
