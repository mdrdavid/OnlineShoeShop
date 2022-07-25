import axios from 'axios'
import { URL } from '../../components/Constants'
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstants"


export const listProduct = ()=> async(dispatch)=>{
    try{
        dispatch({type:PRODUCT_LIST_REQUEST})

        //from product routes
        const {data} = await axios.get(`${URL}/api/products`)
        dispatch({type:PRODUCT_LIST_SUCCESS,
            payload:data})
    }catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}