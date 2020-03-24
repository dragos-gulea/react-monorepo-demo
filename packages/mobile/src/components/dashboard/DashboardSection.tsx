import React, {Component}             from 'react';
import {formatPercents, formatPounds} from 'shared/src/helpers/index';
import {DashboardSectionProps}        from 'shared/src/types/dashboard';
import {Cell, Section}                from 'react-native-tableview-simple';

export default class DashboardSection extends Component<DashboardSectionProps> {

    render() {
        return (
            <Section header={this.props.title}>
                <Cell cellStyle="RightDetail" title="Invested:" detail={formatPounds(this.props.data.invested)}/>
                <Cell cellStyle="RightDetail" title="Current Value:" detail={formatPounds(this.props.data.value)}/>
                <Cell cellStyle="RightDetail" title="Performance:"
                      detail={formatPercents(this.props.data.performance)}/>
                <Cell cellStyle="Basic" title=""/>
            </Section>
        );
    }
}
