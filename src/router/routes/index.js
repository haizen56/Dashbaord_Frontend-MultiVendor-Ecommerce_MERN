import { privateRoutes } from "./privateRoutes";
import MainLayout from "../../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";


export const getRoutes =() =>{

    const allRoute = [] 
    // console.log(allRoute)
    // privateRoutes.map(r => {
    //     //console.log(r)
    //  //   r.element = <ProtectedRoute route={r}> {r.element}</ProtectedRoute>

    //   <ProtectedRoute route={r}>{r.element}</ProtectedRoute>
    // })

   
    // privateRoutes.map(r => {
    //    return <ProtectedRoute route={r}>{r.element}</ProtectedRoute>;
      
    // // ...r,
    // // element : <ProtectedRoute route={r}> {r.element}</ProtectedRoute>
    // })
      
    privateRoutes.map(r => {
   // return <ProtectedRoute route={r}>{r.element}</ProtectedRoute>;
        r.element = <ProtectedRoute route={r}> {r.element}</ProtectedRoute>
      })
      
   
    return {
        path :"/",
        element : <MainLayout/>,
        children : privateRoutes
    }
}





