import React, {Component}                                               from 'react';
import {View, FlatList, Alert, RefreshControl, Image, TouchableOpacity} from 'react-native';
import {ScrollView}                                                     from 'react-navigation';
import {Spinner}                                                        from 'mobile/src/components/common/Spinner';
import PortfolioListRow                                                 from 'mobile/src/components/portfolio/PortfolioListRow';
import {PortfolioItem, PortfolioListComponentProps}                     from '../../types/portfolio';
import {OnPressCallback}                                                from '../../types/common';
import styles                                                           from 'mobile/src/components/portfolio/styles';

export default class PortfolioListComponent extends Component<PortfolioListComponentProps> {

    viewDetails(item: PortfolioItem) {
        this.props.data.navigation.navigate('PortfolioItem', {item: item});
    }

    removeItem(item: PortfolioItem) {
        Alert.alert(
            'Are you sure you want to completely delete the item ' + item.title + ' ?',
            '',
            [
                {text: 'Yes', style: 'default', onPress: () => this.props.data.removePortfolioItem(item.id)},
                {
                    text: 'No', style: 'default', onPress: () => {
                    },
                },
            ],
            {cancelable: false},
        );
    }

    renderLoader(callback: OnPressCallback) {
        if (this.props.data.isLoadingMore) {
            return <Spinner size="large"/>;
        }

        return <View style={styles.loaderContainer}>
            <TouchableOpacity onPress={callback}>
                <Image source={require('../../assets/img/three-dots.png')}
                       style={styles.loaderButton}/>
            </TouchableOpacity>
        </View>;
    }

    render() {
        return (
            <ScrollView refreshControl={<RefreshControl refreshing={this.props.data.isRefreshing}
                                                        onRefresh={this.props.onRefresh.bind(this)}/>}>
                <View style={styles.container}>
                    {this.props.renderPrependLoader(this.renderLoader.bind(this))}

                    <FlatList
                        data={this.props.data.list}
                        renderItem={
                            ({item}) => <PortfolioListRow
                                item={item}
                                showDetails={() => {
                                    this.viewDetails(item)
                                }}
                                removeItem={() => {
                                    this.removeItem(item)
                                }}
                                removingItemId={this.props.data.removingItemId}
                            />
                        }
                        keyExtractor={(item: PortfolioItem) => item.id}
                    />

                    {this.props.renderAppendLoader(this.renderLoader.bind(this))}
                </View>
            </ScrollView>
        );
    }
}
