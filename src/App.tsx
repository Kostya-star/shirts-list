import { ShirtDetails } from 'pages/ShirtDetails';
import { Route, Routes } from 'react-router-dom';
import { ProductList } from './pages/ProductList';

const App = () => {
  return <Routes>
    <Route path='' element={<ProductList />}/>
    <Route path='shirt-details' element={<ShirtDetails />}/>
  </Routes>;
};

export default App;
