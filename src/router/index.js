import AboutUs from '../pages/AboutUs/AboutUs'
import AdminPanel from '../pages/AdminPanel/AdminPanel'
import AdminTabs from '../components/AdminTabs'
import BillingDetail from '../components/BillingDetail'
import Checkout from '../pages/Checkout/Checkout'
import EditProduct from '../components/EditProduct'
import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'
import NewProduct from '../components/NewProduct'
import OrderDetail from '../pages/OrderDetail/OrderDetail'
import ProductPage from '../pages/ProductPage/ProductPage'
import Profile from '../pages/Profile/Profile'
import Signin from '../pages/Signin/Signin'
import Signinform from '../components/Signinform'
import Signup from '../pages/Signup/Signup'
import Signupform from '../components/Signupform'
import UserCheckoutForm from '../components/UserCheckoutForm'
import VerifyAccount from '../components/AccountVerify'
import { createBrowserRouter } from 'react-router-dom'

const indexRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/aboutUs',
                element: <AboutUs />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/product/:id',
                element: <ProductPage />,
            },
            {
                path: '/signup',
                element: <Signup />,
                children: [
                    {
                        path: '/signup',
                        element: <Signupform />,
                    },
                ],
            },
            {
                path: '/signin',
                element: <Signin />,
                children: [
                    {
                        path: '/signin',
                        element: <Signinform />,
                    },
                ],
            },
            {
                path: '/checkout',
                element: <Checkout />,
                children: [
                    {
                        path: '/checkout',
                        element: <UserCheckoutForm />,
                    },
                    {
                        path: '/checkout/details',
                        element: <BillingDetail />,
                    },
                ],
            },
            {
                path: '/admin',
                element: <AdminPanel />,
                children: [
                    {
                        path: '/admin',
                        element: <AdminTabs />,
                    },
                    {
                        path: '/admin/product/:id',
                        element: <EditProduct />,
                    },
                    {
                        path: '/admin/product/new',
                        element: <NewProduct />,
                    },
                ],
            },
            {
                path: '/order/detail',
                element: <OrderDetail />,
            },
        ],
    },
    {
        path: '/verify/:user_id/:verify_code',
        element: <VerifyAccount />,
    },
])

export default indexRouter
