


// import { lazy } from "react";


// const SellerDashboard = lazy(() => import("../../views/seller/SellerDashboard"));
// const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
// const AllProducts = lazy(() => import("../../views/seller/AllProducts"));
// const DiscounteProducts = lazy(() => import("../../views/seller/DiscounteProducts"));
// const Orders = lazy(() => import("../../views/seller/Orders"));
// const SellerToCustomer = lazy(() => import("../../views/seller/SellerToCustomer"));
// const SellerToAdmin = lazy(() => import("../../views/seller/SellerToAdmin"));
// const Payments = lazy(() => import("../../views/seller/Payments"));
// const Profile  = lazy(() => import("../../views/seller/Profile"));
// const EditProduct  = lazy(() => import("../../views/seller/EditProduct"));
// const OrderDetails  = lazy(() => import("../../views/seller/OrderDetails"));
// const Pending  = lazy(() => import("../../views/Pending"));
// const Deactive  = lazy(() => import("../../views/Deactive"));


// export const sellerRoutes = [
//   // {
//   //   path: "/",
//   //   element: <Home />,
//   //   ability: ['admin', 'seller'],
//   // },

//   {
//     path: "/seller/account-pending",
//     element: <Pending/>,
//     abliity: 'seller',
//   },

//   {
//     path: "/seller/account-deactive",
//     element: <Deactive />,
//     abliity: 'seller',
//   },

//   {
//     path: "/seller/dashboard",
//     element: <SellerDashboard />,
//     role: 'seller',
//     status: 'active',
//   },

//   {
//     path: "/seller/dashboard/add-product",
//     element: <AddProduct />,
//     role: 'seller',
//     status: 'active',
//   },

//   {
//     path: "/seller/dashboard/edit-product/:productId",
//     element: <EditProduct />,
//     role: 'seller',
//     status: 'active',
//   },

//   {
//     path: "/seller/dashboard/all-product",
//     element: <AllProducts />,
//     role: 'seller',
//     status: 'active',
//   },


  

//   {
//     path: "/seller/dashboard/discount-product",
//     element: <DiscounteProducts />,
//     role: 'seller',
//     status: 'active',
//   },

//   {
//     path: "/seller/dashboard/orders",
//     element: <Orders />,
//     role: 'seller',
//     visibility: ['active', 'deactive'],
//   },


  
//   {
//     path: "/seller/dashboard/order/details/:orderId",
//     element: <OrderDetails />,
//     role: 'seller',
//     visibility: ['active', 'deactive'],
//   },

//   {
//     path: "/seller/dashboard/payments",
//     element: <Payments />,
//    role: 'seller',
//    status: 'active'
//   },

//   {
//     path: "/seller/dashboard/chat-support",
//     element: <SellerToAdmin />,
//     role: 'seller',
//     visibility: ['active', 'deactive','pending'],
//   },

//   {
//     path: "/seller/dashboard/chat-customer/:Id",
//     element: <SellerToCustomer />,
//    role: 'seller',
//    status: 'active'
//   },

//   {
//     path: "/seller/dashboard/chat-customer",
//     element: <SellerToCustomer />,
//    role: 'seller',
//    status: 'active'
//   },

//   {
//     path: "/seller/dashboard/profile",
//     element: <Profile />,
//    role: 'seller',
//    status: 'active'
//   },

 

// ];




import { lazy } from 'react'
const SellerDashboard = lazy(() => import("../../views/seller/SellerDashboard"))
const AddProduct = lazy(() => import("../../views/seller/AddProduct"))
const AllProducts = lazy(() => import("../../views/seller/AllProducts"))
const DiscounteProducts = lazy(() => import("../../views/seller/DiscounteProducts"))
const Orders = lazy(() => import("../../views/seller/Orders"))
const Payments = lazy(() => import("../../views/seller/Payments"))
const SellerToAdmin = lazy(() => import("../../views/seller/SellerToAdmin"))
const SellerToCustomer = lazy(() => import("../../views/seller/SellerToCustomer"))
const Profile = lazy(() => import("../../views/seller/Profile"))
const EditProduct = lazy(() => import("../../views/seller/EditProduct"))
const OrderDetails = lazy(() => import("../../views/seller/OrderDetails"))
const Pending = lazy(() => import("../../views/Pending"))
const Deactive = lazy(() => import("../../views/Deactive"))
export const sellerRoutes = [

    {
        path: '/seller/account-pending',
        element: <Pending />,
        ability: 'seller'
    },
    {
        path: '/seller/account-deactive',
        element: <Deactive />,
        ability: 'seller'
    },

    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        role: 'seller',
        status: 'active'
    },

    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/edit-product/:productId',
        element: <EditProduct />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/all-product',
        element: <AllProducts />,
        role: 'seller',
        status: 'active'
    },

    {
        path: '/seller/dashboard/discount-product',
        element: <DiscounteProducts />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/orders',
        element: <Orders />,
        role: 'seller',
        visibility: ['active', 'deactive']
    },
    {
        path: '/seller/dashboard/order/details/:orderId',
        element: <OrderDetails />,
        role: 'seller',
        visibility: ['active', 'deactive']
    },
    {
        path: '/seller/dashboard/payments',
        element: <Payments />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-support',
        element: <SellerToAdmin />,
        role: 'seller',
        visibility: ['active', 'deactive', 'pending']
    },
    {
        path: '/seller/dashboard/chat-customer/:customerId',
        element: <SellerToCustomer />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-customer',
        element: <SellerToCustomer />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/profile',
        element: <Profile />,
        role: 'seller',
        visibility: ['active', 'deactive', 'pending']
    }
]