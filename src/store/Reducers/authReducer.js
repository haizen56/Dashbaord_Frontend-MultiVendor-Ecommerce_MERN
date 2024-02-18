import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from '../../api/api';
import {jwtDecode} from 'jwt-decode';


export const admin_login = createAsyncThunk(
    'auth/admin_login',

    async(info, {rejectWithValue,fulfillWithValue})=> {
        // console.log(info);
        try{ 
             const {data} = await api.post('/admin-login',info, {withCredentials:true})
            //  console.log(data)
            localStorage.setItem('accessToken',data.token)
            return fulfillWithValue(data)
        }catch(error){
        // console.log(error.response.data)
        return rejectWithValue(error.response.data)
        }
    }
)





export const seller_login = createAsyncThunk(
    'auth/seller_login',

    async(info, {rejectWithValue,fulfillWithValue})=> {
        // console.log(info);
        try{ 
             const {data} = await api.post('/seller-login',info, {withCredentials:true})
              console.log(data)
            localStorage.setItem('accessToken',data.token)
            
           
           return fulfillWithValue(data)
        }catch(error){
        // console.log(error.response.data)
        return rejectWithValue(error.response.data)
        }
    }
)



export const seller_register = createAsyncThunk(
    'auth/seller_register',

    async(info, {rejectWithValue,fulfillWithValue})=> {
        // console.log(info);
        try{ 
            console.log(info)
             const {data} = await api.post('/seller-register',info, {withCredentials:true})
            //  console.log(data)
            localStorage.setItem('accessToken',data.token)
            return fulfillWithValue(data)
        }catch(error){
        // console.log(error.response.data)
        return rejectWithValue(error.response.data)
        }
    }
)

export const get_user_info = createAsyncThunk(
    'auth/get_user_info',

    async(_, {rejectWithValue,fulfillWithValue})=> {
        // console.log(info);
        try{ 
            //console.log(info)
             const {data} = await api.get('/get-user', {withCredentials:true})
           // console.log('import data',data)
            //localStorage.setItem('accessToken',data.token)
            console.log("get_user_info: Data received:", data);
            return fulfillWithValue(data)
        }catch(error){
        // console.log(error.response.data)
        console.log("get_user_info: Error:", error.response.data);
        return rejectWithValue(error.response.data)
        }
    }
)





const returnRole = (token) => {
    if (token) {
        const decodeToken = jwtDecode(token);
        console.log(decodeToken);
        const expireTime = new Date(decodeToken.exp *1000)
        if(new Date() > expireTime){
            localStorage.removeItem('accessToken')
            return ''
        } else {
            return decodeToken.role
        }
       
    } else {
        return '';
    }
}






//export const  authReducer = createSlice({  using builderSlice as createSlice will depricate in future
export const  authReducer = createSlice({
    name : "auth",
    initialState : {
        // isAuthenticated : false,
        successMessage : '',
        errorMessage : '',
        userInfo : '',
        role: returnRole(localStorage.getItem('accessToken')),
        token : localStorage.getItem('accessToken'),

        loader:false,
    },
    reducers : {
        // login : (state, action) => {
        //     state.isAuthenticated = true;
        //     state.user = action.payload;
        // },
        // logout : (state) => {
        //     state.isAuthenticated = false;
        //     state.user = null;
        // }

messageClear :(state, _) =>{
    state.errorMessage =""
    state.successMessage=""
}

    },
    extraReducers:{
        // [admin_login.pending]:(state, {payload}) =>{
        //     state.loader = true
        //  },
        
        [admin_login.pending]: (state, _) => {
            state.loader = true
        },
        [admin_login.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [admin_login.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.successMessage = payload.message
            state.token = payload.token
            state.role = returnRole(payload.token)
        },
        [seller_login.pending]: (state, _) => {
            state.loader = true
        },
        [seller_login.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [seller_login.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.successMessage = payload.message
            state.token = payload.token
            state.role = returnRole(payload.token)
        },
        [seller_register.pending]: (state, _) => {
            state.loader = true
        },
        [seller_register.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [seller_register.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.successMessage = payload.message
            state.token = payload.token
            state.role = returnRole(payload.token)
        },
        [get_user_info.fulfilled]: (state, { payload }) => {
            state.loader = false
          //  console.log("Reducer - User Info Payload:", payload);
            state.userInfo = payload.userInfo
            // state.role = payload.userInfo.role
        },
       
    }
})
export const {messageClear} = authReducer.actions
export default authReducer.reducer

