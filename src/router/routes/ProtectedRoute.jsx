
import React from 'react'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ route, children }) => {

  //console.log('route of',route)


    const { role, userInfo } = useSelector(state => state.auth)

   console.log("ProtectedRoute: Role from Redux:", role);
   console.log("ProtectedRoute: UserInfo from Redux:", userInfo);
   console.log("ProtectedRoute: Expected Role for Route:", route.role);

    if (role) {
        if (userInfo) {
            if (route.role) {
                if (userInfo.role === route.role) {
                    if (route.status) {
                        if (route.status === userInfo.status) {
                            return <Suspense fallback={null}>{children}</Suspense>
                        } else {
                            if (userInfo.status === 'pending') {
                        
                                return <Navigate to='/seller/account-pending' replace />
                            } else {
                                return <Navigate to='/seller/account-deactive' replace />
                            }
                        }
                    } else {
                        if (route.visibility) {
                            if (route.visibility.some(r => r === userInfo.status)) {
                                return <Suspense fallback={null}>{children}</Suspense>
                            } else {
                                return <Navigate to='/seller/account-pending' replace />
                            }
                        } else {
                            return <Suspense fallback={null}>{children}</Suspense>
                        }
                    }
                    //return <Suspense fallback={null}>{children}</Suspense>
                } else {
                    return <Navigate to='/unauthorized' replace />
                }
            } else {
                if (route.ability === 'seller') {
                    return <Suspense fallback={null}>{children}</Suspense>
                }
            }
        }
    } else {
        return <Navigate to='/login' replace />
    }
}

export default ProtectedRoute







// // ProtectedRoute.jsx
// import React from 'react'
// import { Suspense } from 'react'
// import { useSelector } from 'react-redux'
// import { Navigate } from 'react-router-dom'

// const ProtectedRoute = ({ route, children }) => {
//     const { role, userInfo } = useSelector(state => state.auth);

//     if (!role || !userInfo) {
//         return <Navigate to='/login' replace />;
//     }

// if(role){
//   if (route.role && userInfo.role !== route.role) {
//     return <Navigate to='/unauthorized' replace />;
// }

// if (route.status && userInfo.status !== route.status) {
//     return <Navigate to='/seller/account-pending' replace />;
// }

// if (route.visibility && !route.visibility.includes(userInfo.status)) {
//     return <Navigate to='/seller/account-pending' replace />;
// }
// }

//     return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
// }

// export default ProtectedRoute;










// import React, { Suspense } from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ route, children }) => {
//   const { role, userInfo } = useSelector((state) => state.auth);

//   // Added console logs for debugging
//   console.log("ProtectedRoute: Role from Redux:", role);
//   console.log("ProtectedRoute: UserInfo from Redux:", userInfo);
//   console.log("ProtectedRoute: Expected Role for Route:", route.role);

//   if (role) {
//     if (userInfo) {
//       if(route.role){
//         if (userInfo.role === route.role) {
//           if (route.status) {
//             if (route.status === userInfo.status) {
//               return <Suspense fallback={null}>{children}</Suspense>;
//             } else {
//               if (userInfo.status === "pending") {
//                 return <Navigate to="/seller/account-pending" replace />;
//               } else {
//                 return <Navigate to="/seller/account-deactive" replace />;
//               }
//             }
//           } else {
//               if(route.visibility){
//                  if(route.visibility.some(r=> r === userInfo.status)){
//             return <Suspense fallback={null} >{children}</Suspense>
    
//                  } else {
//                 return <Navigate to="/seller/account-pending" replace />;
  
//                  }
//               } else {
//                       return <Suspense fallback={null} >{children}</Suspense>
  
//               }
//           }
//           //  return <Suspense fallback={null} >{children}</Suspense>
//         } else {
//           return <Navigate to="/unauthorized" replace />;
//         }
//       } else {
//         if(route.ability === 'seller'){
//           return <Suspense fallback={null}>{children}</Suspense>

//         }
//       }
//     }
//   } else {
//     return <Navigate to="/login" replace />;
//   }
// };

// export default ProtectedRoute;

// // import React, { Suspense } from 'react';
// // import { useSelector } from 'react-redux';
// // import { Navigate } from 'react-router-dom';

// // const ProtectedRoute = ({ route, children }) => {
// //   const { role, userInfo } = useSelector(state => state.auth);

// //   // Debug statements
// //   console.log("ProtectedRoute: Role from Redux:", role);
// //   console.log("ProtectedRoute: UserInfo from Redux:", userInfo);
// //   console.log("ProtectedRoute: Expected Role for Route:", route.role);

// //   // Check if the user has a role
// //   if (!role) {
// //     return <Navigate to='/login' replace />;
// //   }

// //   // Check if the user's role matches the required role
// //   if (userInfo.role !== route.role) {
// //     console.log("ProtectedRoute: Role mismatch, navigating to '/unauthorized'");
// //     return <Navigate to='/unauthorized' replace />;
// //   }

// //   // Render the children components if the user has the correct role
// //   return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
// // };

// // export default ProtectedRoute;
