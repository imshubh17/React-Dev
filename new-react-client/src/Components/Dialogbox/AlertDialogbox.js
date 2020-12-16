import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({alertTitle, alertMessage}) {

  const [open, setOpen] = React.useState(false);
  const [Msg, SetMsg] = useState("this is sample alert message");
  const [Title, SetTitle] = useState("this is sample Title");

  //set values
  setOpen(true);
  SetTitle(alertTitle);
  SetMsg(alertMessage);

  const handleClose = () => {
    setOpen(false);
  };
  
  return (  
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{Title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {Msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>    
  );
}
