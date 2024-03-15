import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';


import ProductDetails from './Component/ProductDetails/ProductDetails';
import Product from './Component/Product/Product';
import AddProducts from './Component/AddProducts/AddProducts';
import UpdateProduct from './Component/UpdateProduct/UpdateProduct';
import CategoryProduct from './Component/CategoryProduct/CategoryProduct';
import Navbar from './Component/Navbar/Navbar';
import Category from './Component/Category/Category';
import Carts from './Component/Carts/Carts';
import CartDetails from './Component/Carts/CartDetails';
import UserDetails from './Component/UserDetails/UserDetails';
import Login from './Component/Auth/Login/Login';
import Registration from './Component/Auth/Registration/Registration';
import Blog from './Component/Blog/Blog';
import BlogDetails1 from './Component/Blog/BlogDetails1';
import Footer from './Component/Footer/Footer';
function App() {





  return (
    <div className="App">

      <BrowserRouter>
   <Navbar/>
      <Routes>
     

      
          <Route path="/" element={<Product/>} />
        {/* <Route path="/detail/:id" element={<Details/>} />  */}
        <Route path="/add" element={<AddProducts/>} />
        <Route path="/" element={<CategoryProduct/>} />
        <Route path="/update" element={<UpdateProduct/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path ="/carts" element={<Carts/>} />
        <Route path ="/carts/:id" element={<CartDetails/>} />
        <Route path ="/login" element={<Login/>} />
        <Route path ="/register" element={<Registration/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blogDetails" element={<BlogDetails1/>} />
        <Route path ="/user" element={<UserDetails/>} />



      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
