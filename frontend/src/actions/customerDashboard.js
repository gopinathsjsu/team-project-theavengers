import Axios from 'axios';
import config from '../urlConfig';
export const getHotels= () => async dispatch =>{
    Axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    await Axios.get(`${config.BackendURL}/getHotels`)
    .then(async (res)=>{
        console.log("Action",res);
        dispatch({
            type:"GET_HOTELS",
            payload:res.data
        });
    })
    .catch(err=>{
        console.log("Action",err);
        dispatch({
            type:"GET_HOTELS",
            payload:[]
        });
    });
}
export const searchHotels = (search,type) => async dispatch =>{
   Axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    await Axios.get(`${config.BackendURL}/getHotelsOnSearch?search=${search}&type=${type}`)
    .then(async (res)=>{
        console.log("Data from backend",res.data);
        dispatch({
            type:"GET_HOTELS_ON_SEARCH",
            payload:res.data
        });
    })
    .catch(err=>{
        dispatch({
            type:"GET_HOTELS_ON_SEARCH",
            payload:[]
        });
    })
}
export const setRestaurants = (data) =>async dispatch =>{
    dispatch({
        type:"GET_HOTELS_ON_SEARCH",
        payload:data
    })
}
export const updateCustomerProfile=(details) => async dispatch =>{
    dispatch({
        type:"UPDATE_CUSTOMER_PROFILE",
        payload:details
    })
}
export const viewHotelPage= (details)=>async dispatch=>{
    console.log("Action",details);
    dispatch({
        type:"VIEW_HOTEL_PAGE",
        payload:details
    })
}
