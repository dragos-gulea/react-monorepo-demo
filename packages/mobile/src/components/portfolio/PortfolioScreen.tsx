import React, {Component}                                               from 'react';
import {connect}                                                        from 'react-redux';
import {View, FlatList, Alert, RefreshControl, Image, TouchableOpacity} from 'react-native';
import {ScrollView}                                                     from 'react-navigation';
import {Spinner}                                                        from '../common/Spinner';
import PortfolioListRow                                                 from './PortfolioListRow';
import {PortfolioItem, PortfolioProps}                                  from 'shared/src/types/portfolio';
import {AppState, OnPressCallback}                                      from 'shared/src/types/common';
import {loadPortfolioData, loadMorePortfolioData, removePortfolioItem}  from 'shared/src/actions/portfolio';
import styles                                                           from './styles';


class PortfolioScreen extends Component<PortfolioProps> {

    componentDidMount() {
        this.props.loadPortfolioData();
    }

    viewDetails(item: PortfolioItem) {
        this.props.navigation.navigate('PortfolioItem', {item: item});
    }

    removeItem(item: PortfolioItem) {
        Alert.alert(
            'Are you sure you want to completely delete the item ' + item.title + ' ?',
            '',
            [
                {text: 'Yes', style: 'default', onPress: () => this.props.removePortfolioItem(item.id)},
                {
                    text: 'No', style: 'default', onPress: () => {
                    },
                },
            ],
            {cancelable: false},
        );
    }

    renderPrependLoader() {
        if (this.props.allowPrepend) {
            return this.renderLoader(() => this.loadMore(false));
        }

        return null;
    }

    renderAppendLoader() {
        if (this.props.allowAppend) {
            return this.renderLoader(() => this.loadMore());
        }

        return null;
    }

    renderLoader(callback: OnPressCallback) {
        if (this.props.isLoadingMore) {
            return <Spinner size="large"/>;
        }

        return <View style={styles.loaderContainer}>
            <TouchableOpacity onPress={callback}>
                <Image source={require('../../../../shared/src/assets/img/three-dots.png')}
                       style={styles.loaderButton}/>
            </TouchableOpacity>
        </View>;
    }

    loadMore(append: boolean = true) {
        if (this.props.isRefreshing) {
            return null;
        }

        let page = append ? this.props.pagesActive.slice(-1)[0] + 1 : this.props.pagesActive[0] - 1;

        this.props.loadMorePortfolioData(page, append);
    }

    onRefresh() {
        if (!this.props.isLoadingMore) {
            this.props.loadPortfolioData();
        }
    }

    checkNeedRefresh() {
        if (this.props.needRefresh && !this.props.isRefreshing) {
            this.props.loadPortfolioData();
        }
    }

    render() {
        this.checkNeedRefresh();

        return (
            <ScrollView refreshControl={<RefreshControl refreshing={this.props.isRefreshing}
                                                        onRefresh={this.onRefresh.bind(this)}/>}>
                <View style={styles.container}>
                    {this.renderPrependLoader()}

                    <FlatList
                        data={this.props.list}
                        renderItem={
                            ({item}) => <PortfolioListRow
                                item={item}
                                showDetails={() => {
                                    this.viewDetails(item)
                                }}
                                removeItem={() => {
                                    this.removeItem(item)
                                }}
                                removingItemId={this.props.removingItemId}
                            />
                        }
                        keyExtractor={(item: PortfolioItem) => item.id}
                    />

                    {this.renderAppendLoader()}
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    list          : state.portfolio.list,
    isRefreshing  : state.portfolio.isRefreshing,
    isLoadingMore : state.portfolio.isLoadingMore,
    allowAppend   : state.portfolio.allowAppend,
    allowPrepend  : state.portfolio.allowPrepend,
    pagesActive   : state.portfolio.pagesActive,
    removingItemId: state.portfolio.removingItemId,
    needRefresh   : state.portfolio.needRefresh,
});

export default connect(mapStateToProps, {
    loadPortfolioData, loadMorePortfolioData, removePortfolioItem
},)(PortfolioScreen);
