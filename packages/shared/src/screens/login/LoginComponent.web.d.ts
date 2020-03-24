import { Component } from 'react';
import { LoginComponentProps } from '../../types/login';
export default class LoginComponent extends Component<LoginComponentProps> {
    handleSubmit(): void;
    renderError(): JSX.Element | null;
    render(): JSX.Element;
}
