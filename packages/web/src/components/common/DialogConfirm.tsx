import React, {Component}    from 'react';
import Dialog                from '@material-ui/core/Dialog';
import DialogTitle           from '@material-ui/core/DialogTitle';
import DialogContent         from '@material-ui/core/DialogContent';
import DialogContentText     from '@material-ui/core/DialogContentText';
import DialogActions         from '@material-ui/core/DialogActions';
import Button                from '@material-ui/core/Button';
import {FuncArgsUnknownVoid} from 'shared/src/types/common';

interface Props {
    show          : boolean
    message       : string,
    actionCallback: FuncArgsUnknownVoid
    cancelCallback: FuncArgsUnknownVoid
}

export default class DialogConfirm extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    handleClose = () => {
        this.props.cancelCallback();
    };

    handleAction = () => {
        this.props.actionCallback();
    };

    render () {
        return (
            <div>
                <Dialog
                    open={this.props.show}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Please confirm action</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.props.message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleAction} color="primary" autoFocus>
                            OK
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
