import { Component } from 'react';
import { RegistrationProps } from 'shared/src/types/registration';
declare class RegistrationScreen extends Component<RegistrationProps> {
    componentDidMount(): void;
    onSubmit(): void;
    onChange(field: string, value: string | boolean, validate?: boolean): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof RegistrationScreen, Pick<RegistrationProps, "country" | "language" | "validation" | "navigation" | "registerClient">>;
export default _default;
