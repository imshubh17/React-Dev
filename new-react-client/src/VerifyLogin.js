import axios from "axios";

function VerifyLogin(User) {   
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

function VerifySignup(User) {   
    console.log(JSON.stringify(User))
 
    axios.post('api/user/register', User)   
    .then((res)=>{
        const data = res.data;
        if(data.status){         
            console.log('singup success');
            window.location.href = '/login'; 
            alert('Registed, Please Login!');
            return true;
        }
        else{            
            console.log('singup failed');
            return false;
        }
        
    })
    .catch(e=>console.log('login access failed',e));
    return false;  
   
}

export {VerifyLogin, VerifySignup};