import axios from "axios";

export default function VerifyLogin(User) {   
    console.log(JSON.stringify(User))
 
    axios.post('api/user/login', User)   
    .then((res)=>{
        const data = res.data;
        if(data.status){
            localStorage.setItem("token", data.token)
            localStorage.setItem("auth", data.status)
            console.log('login success');
            window.location.href = '/';          
            return true;
        }
        else{
            localStorage.setItem("auth", data.status)
            console.log('login failed');
            return false;
        }
        
    })
    .catch(e=>console.log('login access failed',e));
    return false;  
   
}
