import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {getNavs} from '../navigation/index';
import { BiLogInCircle } from "react-icons/bi";

import {  useSelector } from 'react-redux';


const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { role } = useSelector((state) => state.auth);

  const { pathname } = useLocation();

  const [allNav, setAllNav] = useState([]);
  useEffect(() => {
    const navs = getNavs(role);

    setAllNav(navs);
  }, [role]);

  //console.log(allNav)
  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar
            ? "invisible"
            : "visible w-screen h-screen bg-[#22292f80] top-0 left-0 z-10"
        }`}
      ></div>
      <div
        className={`w-[260px] fixed bg-[#283046] z-50 top-0 h-screen shadow [0_0_15px_0_rgb(34_47_/_5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img
              className="w-[120px] h-[120px] ml-4 "
              src="http://localhost:3000/images/logo3.png"
              alt="pic not found"
            />
          </Link>
        </div>

        <div className="px-[16px] pt-[60px]  ">
          <ul>
            {allNav.map((n, i) => (
              <li key={i}>
                <Link
                  to={n.path}
                  className={`${
                    pathname === n.path
                      ? "bg-slate-600 shadow-indigo-500/30 text-white duration-500"
                      : "text-[#d0d2d6] font-normal duration-200"
                  }
          px-[12px] py-[9px] rounded-sm flex 
          justify-start items-center gap-3 
          hover:pl-4 transition-all  w-full mb-1 `}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
               
                </Link>
              </li>
            ))}
            <li>
              <button
                className="text-[#d0d2d6] font-normal duration-200'   
           px-[12px] py-[9px] rounded-sm flex  bg-orange-600
           justify-center items-center gap-3 hover:bg-red-600 hover:text-white
           hover:pl-4 transition-all  w-full mb-1 "
              >
                <span>
                  <BiLogInCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


















// gpt code 

// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { getNavs } from '../navigation/index';
// import { BiLogInCircle } from "react-icons/bi";
// import { useSelector } from 'react-redux';

// const Sidebar = ({ showSidebar, setShowSidebar }) => {
//   const { role } = useSelector(state => state.auth);
//   const { pathname } = useLocation();
//   const [allNav, setAllNav] = useState([]);

//   useEffect(() => {
//     const navs = getNavs(role);
//     console.log("Navigation items:", navs); // Debug: Check the navigation items
//     setAllNav(navs);
//   }, [role]);

//   if (!allNav || allNav.length === 0) {
//     console.log("No navigation items to display"); // Debug: Log if no items
//     return null; // Or return a placeholder message
//   }

//   return (
//     <div>
//       {/* Existing Sidebar code... */}
//       <div className="px-[16px] pt-[60px]">
//         <ul>
//           {allNav.map((n, i) => (
//             <li key={i}>
//               <Link to={n.path} className={`${pathname === n.path ? 'bg-slate-600 shadow-indigo-500/30 text-white duration-500' : 'text-[#d0d2d6] font-normal duration-200'} px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-3 hover:pl-4 transition-all w-full mb-1`}>
//                 <span>{n.icon}</span>
//                 <span>{n.title}</span>
//               </Link>
//             </li>
//           ))}
//           {/* Logout button... */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
