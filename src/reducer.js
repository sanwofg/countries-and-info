import { SEARCH, REGION, MODE } from "./action"
const reducer = (state, action)=>{
    if(action.type === MODE){
        if (state.color === true){
            return {...state, color: false}
        }else if(state.color === false){
            return {...state, color: true}
        } 
    }

    if (action.type === REGION){
        const val = state.data2
        const newDate = val.filter((data)=> data.region.toUpperCase() === action.payload.toUpperCase() )
        return{...state, data1:newDate}
    }

    if(action.type === SEARCH){
        if(action.payload){
            const val = state.data2
            const newData = val.filter((data) =>data.name.toUpperCase().startsWith(action.payload.toUpperCase()))
            return{...state, data1:newData}
        }else return {...state, data1:state.data2}
    }
    return state
}
export default reducer;