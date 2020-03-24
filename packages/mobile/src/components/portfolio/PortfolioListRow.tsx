import React, {Component}                     from 'react';
import {View, Text, Image, TouchableOpacity}  from 'react-native';
import {Spinner}                              from '../common/Spinner';
import {formatMoney, shortenString}           from 'shared/src/helpers';
import {PortfolioItem, PortfolioListRowProps} from 'shared/src/types/portfolio';
import {OnPressCallback}                      from 'shared/src/types/common';
import styles                                 from './styles/row';

class PortfolioListRow extends Component<PortfolioListRowProps> {
    constructor(props: PortfolioListRowProps) {
        super(props);
    }

    renderField(label: string, value: string | number | null) {
        if (!value || value === '') {
            value = '--';
        }

        return <Text style={styles.description}>
            <Text style={styles.fieldName}>{label}:</Text> {value}
        </Text>;
    }

    renderRemoveButton(item: PortfolioItem, callback: OnPressCallback, removingItemId: string | null = null) {
        if (item.is_own) {
            if (item.id === removingItemId) {
                return <Spinner size="large"/>;
            }

            return (
                <TouchableOpacity onPress={callback} style={styles.actionButton}>
                    <Text style={styles.actionButtonLabel}>remove</Text>
                </TouchableOpacity>
            );
        }

        return null;
    }

    render() {
        const {item, showDetails, removeItem, removingItemId} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={showDetails}>
                    <Image source={{uri: item.thumb_url}} style={styles.photo}/>
                </TouchableOpacity>

                <View style={styles.containerText}>
                    <TouchableOpacity onPress={showDetails}>
                        <Text style={styles.title}>
                            {shortenString(item.title)}
                        </Text>
                    </TouchableOpacity>

                    {this.renderField('year', item.year)}
                    {this.renderField('format', item.unit)}
                    {this.renderField('price bought', item.price_bought ? '£' + formatMoney(item.price_bought) : null)}
                    {this.renderField('quantity', item.quantity)}

                    <View style={styles.containerActions}>
                        {this.renderRemoveButton(item, removeItem, removingItemId)}
                    </View>
                </View>
            </View>
        );
    }
}

export default PortfolioListRow;
