import {
    loginClicked,
  
} from './actions';
import axios from "axios";


export const loginRequest = user => async dispatch => {
    try {
        let resdata;
        axios({
            method: 'post',
            url: 'api/user/login',
            data: JSON.stringify(user)
          })   
        .then((res)=>{
            resdata = res.data;
            if(resdata.status){
                localStorage.setItem("token", resdata.token)
                localStorage.setItem("auth", resdata.status)
            }
            else{
                localStorage.setItem("auth", resdata.status)
            }
        });
        dispatch(loginClicked(resdata));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}


export const displayAlert = text => () => {
    alert(text);
};