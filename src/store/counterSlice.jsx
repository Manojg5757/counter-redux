import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count:0
}
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
       increase(state){
        state.count +=1;
       },
       decrease(state){
        state.count===0 ? state.count : state.count  -= 1;
       },
       reset(state){
        state.count = 0;
       },
       incrementByAmount(state,action){
        state.count += action.payload;
       }
    }
})

export const {increase,decrease,reset,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;