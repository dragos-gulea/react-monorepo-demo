import { Component } from 'react';
import { AccountComponentProps } from 'shared/src/types/account';
export default class AccountComponent extends Component<AccountComponentProps> {
    renderSuccessModal(): JSX.Element | null;
    render(): JSX.Element;
}
