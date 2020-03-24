import { Component } from 'react';
import { LogoutProps } from 'shared/src/types/logout';
declare class LogoutScreen extends Component<LogoutProps> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof LogoutScreen, Pick<LogoutProps, "navigation">>;
export default _default;
