import React, {Component}           from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {Cell, Section, TableView}   from 'react-native-tableview-simple';
import {formatPounds}               from 'shared/src/helpers';
import {DashboardComponentProps}    from 'shared/src/types/dashboard';
import DashboardSection             from 'mobile/src/components/dashboard/DashboardSection';

export default class DashboardComponent extends Component<DashboardComponentProps> {

    render() {
        return (
            <ScrollView refreshControl={<RefreshControl refreshing={this.props.data.isRefreshing}
                                                        onRefresh={this.props.data.loadDashboardData}/>}>
                <TableView>
                    <Section header={this.props.welcomeMessage} sectionTintColor='black' separatorTintColor='black'
                             headerTextColor='white'>

                    </Section>
                    <Section header="Wallet">
                        <Cell cellStyle="RightDetail" title="Current balance:"
                              detail={formatPounds(this.props.data.balance)}/>
                        <Cell cellStyle="Basic" title=""/>
                    </Section>

                    <DashboardSection title={'Acquired performance'} data={this.props.data.statistics.ig}/>
                    <DashboardSection title={'Own performance'} data={this.props.data.statistics.own}/>
                    <DashboardSection title={'Totals'} data={this.props.data.statistics.totals}/>
                </TableView>
            </ScrollView>
        );
    }
}
