import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ExtraInfo = ({ open, setShowInfoDialog, info }) => {
    const handleClose = () => {
        setShowInfoDialog(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
            <DialogTitle id='responsive-dialog-title'>Додаткова інформація</DialogTitle>
            <DialogContent>
                <DialogContentText>{info}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary' autoFocus>
                    Закрити
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ExtraInfo;
