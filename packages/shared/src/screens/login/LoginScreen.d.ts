import { Component } from 'react';
import { LoginProps } from 'shared/src/types/login';
import { FuncArgsUnknownVoid } from 'shared/src/types/common';
declare class LoginScreen extends Component<LoginProps> {
    onChange(field: string, value: string, validate?: boolean): void;
    onButtonPress(callback: FuncArgsUnknownVoid): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof LoginScreen, Pick<LoginProps, "navigation">>;
export default _default;
