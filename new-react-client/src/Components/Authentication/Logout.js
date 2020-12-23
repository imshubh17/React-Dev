import Button from "@material-ui/core/Button";
import React from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const handleClickOpen = ()=>{
        localStorage.clear();
        window.location.href = '/';     
}

export default function Logout() {     
        return (
                <Button variant="contained" size="small" color="secondary" onClick={handleClickOpen}>
                Logout <LockOutlinedIcon/>
              </Button>
        )
}
