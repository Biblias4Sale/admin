import { Navigate } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import MainLayout from './components/MainLayout'
import Account from './pages/Account'
import CustomerList from './pages/CustomerList'
import AdminList from './pages/AdminList'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Test from './pages/Test'
import AddProductsPage from './pages/AddProductsPage'
import EditProducts from './pages/EditProducts'
import AllPayments from './pages/AllPayments'
import { Error } from './pages/Error'
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'account/:id', element: <Account /> },
      { path: 'customers', element: <CustomerList userType='Admin' /> },
      { path: 'admins', element: <AdminList userType='User' /> },
      { path: 'dashboard', element: <AllPayments /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: 'products/add', element: <AddProductsPage /> },
      { path: 'products/edit/:id', element: <EditProducts /> },
      { path: '*', element: <Navigate to='/404' /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'error', element: <Error /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Login /> },
      // { path: '/', element: <Navigate to='/app/dashboard' /> },
      { path: '/test', element: <Test to='/test' /> },
      { path: '*', element: <Navigate to='/404' /> }

    ]
  }
]

export default routes
