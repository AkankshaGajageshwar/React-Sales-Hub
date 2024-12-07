import logo from './logo.svg';
import './App.css';
// import './CSS/Style.css';

// import Login from './compoents/login';
import Log_main from './compoents/Log_main';
// import Adminlogin from './compoents/admin/Adminlogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './compoents/admin/Layout';
import Dashboard from './compoents/admin/Dashboard';
import Products from './compoents/admin/Products';
import SalesTable from './compoents/admin/SalesTable';
import SaleExpense from './compoents/admin/SaleExpense';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Log_main />} />

          <Route path='/admin' element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path='/admin/products' element={<Products/>} />
            <Route path='/admin/salestable' element={<SalesTable/>} />
            <Route path='/admin/salesexpense' element={<SaleExpense/>}    />



          </Route>
        </Routes>

      </BrowserRouter>

      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
