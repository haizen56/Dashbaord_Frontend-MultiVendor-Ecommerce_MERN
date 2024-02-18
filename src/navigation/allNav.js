import {AiFillDashboard, AiOutlineShopping, AiOutlinePlus} from 'react-icons/ai'
import {BiLoaderCircle,BiCategory} from 'react-icons/bi'
import { FaRegUserCircle, FaShoppingCart, FaUsers   } from "react-icons/fa";
import { BsCurrencyDollar, BsChat } from "react-icons/bs";
import {FaUser} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {CiChat1} from 'react-icons/ci'
import { RiProductHuntLine } from 'react-icons/ri';
import { MdAttachMoney } from "react-icons/md";


export const allNav =[

{
    id:1,
    title:'Dashboard',
    icon:<AiFillDashboard/>,
    role:'admin',
    path:'/admin/dashboard'
},
{
    id:2,
    title:'Orders',
    icon:<AiOutlineShopping/>,
    role:'admin',
    path:'/admin/dashboard/orders'
},
{
    id:3,
    title:'Category',
    icon:<BiCategory/>,
    role:'admin',
    path:'/admin/dashboard/category'
},
{
    id:4,
    title:'Sellers',
    icon:<FaUser/>,
    role:'admin',
    path:'/admin/dashboard/sellers'

},
{
    id:5,
    title:'Payement request',
    icon:<BsCurrencyDollar />,
    role:'admin',
    path:'/admin/dashboard/payment-request'
},
{
    id:6,
    title:'Deactivate Sellers',
    icon:<FiUsers/>,
    role:'admin',
    path:'/admin/dashboard/deactive-sellers'
},
{
    id:7,
    title:'Seller Request',
    icon:<BiLoaderCircle/>,
    role:'admin',
    path:'/admin/dashboard/sellers-request'
},
{
    id:8,
    title:'Chat with Seller',
    icon:<CiChat1 />,
    role:'admin',
    path:'/admin/dashboard/chat-sellers'
},
{
    id:9,
    title:'Dashboard',
    icon:<AiFillDashboard/>,
    role:'seller',
    path:'/seller/dashboard'
},
{
    id:10,
    title:'Add Product',
    icon:<AiOutlinePlus />,
    role:'seller',
    path:'/seller/dashboard/add-product'
},
{
    id:11,
    title:'All Products',
    icon:<RiProductHuntLine />,
    role:'seller',
    path:'/seller/dashboard/all-product'
},
{
    id:12,
    title:'Discount Product',
    icon:<AiFillDashboard/>,
    role:'seller',
    path:'/seller/dashboard/discount-product'
},
{
    id:13,
    title:'Orders',
    icon:<FaShoppingCart />,
    role:'seller',
    path:'/seller/dashboard/orders'
},
{
    id:14,
    title:'Payments',
    icon:<MdAttachMoney/>,
    role:'seller',
    path:'/seller/dashboard/payments'
},
{
    id:15,
    title:'Chat Customer',
    icon:<BsChat/>,
    role:'seller',
    path:'/seller/dashboard/chat-customer'
},
{
    id:16,
    title:'Chat Support',
    icon:<CiChat1/>,
    role:'seller',
    path:'/seller/dashboard/chat-support'
},

{
    id:17,
    title:'Profile',
    icon:<FaUsers />,
    role:'seller',
    path:'/seller/dashboard/profile'
}


]