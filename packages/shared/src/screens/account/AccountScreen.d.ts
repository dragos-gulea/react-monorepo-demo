import { Component } from 'react';
import { AccountProps } from 'shared/src/types/account';
declare class AccountScreen extends Component<AccountProps> {
    componentDidMount(): void;
    onSubmit(): void;
    onChange(field: string, value: string, validate?: boolean): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof AccountScreen, Pick<AccountProps, "country" | "language" | "title" | "validation">>;
export default _default;
