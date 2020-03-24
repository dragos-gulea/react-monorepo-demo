import React, {Component}    from 'react';
import Dialog                from '@material-ui/core/Dialog';
import DialogTitle           from '@material-ui/core/DialogTitle';
import DialogContent         from '@material-ui/core/DialogContent';
import DialogContentText     from '@material-ui/core/DialogContentText';
import DialogActions         from '@material-ui/core/DialogActions';
import Button                from '@material-ui/core/Button';
import {FuncArgsUnknownVoid} from 'shared/src/types/common';

interface Props {
    title   : string,
    message : string,
    btnTitle: string,
    callBack: FuncArgsUnknownVoid | null
}

export default class DialogAlert extends Component<Props, {isOpen: boolean}> {

    constructor(props: Props) {
        super(props);

        this.state = {isOpen: true}
    }

    handleClose = () => {
        this.setState({isOpen: false});

        if (this.props.callBack) {
            this.props.callBack();
        }
    };

    render () {
        return (
            <div>
                <Dialog
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.props.message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            {this.props.btnTitle}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
