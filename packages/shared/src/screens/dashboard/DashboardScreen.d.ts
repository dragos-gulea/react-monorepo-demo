import { Component } from 'react';
import { DashboardProps } from 'shared/src/types/dashboard';
declare class DashboardScreen extends Component<DashboardProps> {
    componentDidMount(): void;
    buildWelcomeMessage(): string;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof DashboardScreen, Pick<DashboardProps, never>>;
export default _default;
