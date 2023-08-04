import {createSlice} from "@reduxjs/toolkit"
const initialState=[
    {id:'0',name:"Kayumba Omari 1"},
    {id:'1',name:"Kayumba Omari 2"},
    {id:'2',name:"Kayumba Omari 3"},
    {id:'3',name:"Kayumba Omari 4"},
]
const usersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        }
    },

})
export const selectAllUsers=(state)=>state.users 
export default usersSlice.reducer 
