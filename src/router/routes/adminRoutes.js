
import { lazy } from "react";



const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));
const ChatSeller = lazy(() => import("../../views/admin/ChatSeller"));
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails"));

const Category = lazy(() => import("../../views/admin/Category"));
const PayementRequest = lazy(() => import("../../views/admin/PayementRequest"));
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const DeactiveSellers = lazy(() => import("../../views/admin/DeactiveSellers"));

export const adminRoutes = [
  {
    path: 'admin/dashboard',
    element: <AdminDashboard />,
    role: 'admin',
  },

  {
    path: 'admin/dashboard/orders',
    element: <Orders />,
    role: 'admin',
  },

  {
    path: 'admin/dashboard/category',
    element: <Category />,
    role: 'admin',
  },

  {
    path: 'admin/dashboard/sellers',
    element: <Sellers />,
    role: 'admin',
  },

  
  {
    path: 'admin/dashboard/payment-request',
    element: <PayementRequest />,
    role: 'admin',
  },


  {
    path: 'admin/dashboard/deactive-sellers',
    element: <DeactiveSellers />,
    role: 'admin',
  },

  {
    path: 'admin/dashboard/sellers-request',
    element: <SellerRequest />,
    role: 'admin',
  },
  {
    path: 'admin/dashboard/sellers/details/:sellerId',
    element: <SellerDetails />,
    role: 'admin',
  },

  {
    path: 'admin/dashboard/chat-sellers',
    element: <ChatSeller />,
    role: 'admin',
  },


  {
    path: 'admin/dashboard/order/details/:orderId',
    element: <OrderDetails />,
    role: 'admin',
  },
  

 
];
