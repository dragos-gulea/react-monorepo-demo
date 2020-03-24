import React, {Component}              from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Button}                        from 'react-native-elements';
import {formatMoney}                   from 'shared/src/helpers';
import {PortfolioProps}                from 'shared/src/types/portfolio';
import styles                          from './styles/itemScreen';

export default class PortfolioItemScreen extends Component<PortfolioProps> {

    renderField(label: string, value: string | number | null) {
        if (!value || value === '') {
            value = '--';
        }

        return <Text style={styles.description}>
            <Text style={styles.fieldName}>{label}:</Text> {value}
        </Text>;
    }

    render() {
        const {navigation} = this.props;
        const item         = navigation.getParam('item');

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Image source={{uri: item.image_url}} style={styles.photo}/>
                    </View>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <View style={styles.containerText}>
                        {this.renderField('Year', item.year)}
                        {this.renderField('Format', item.unit)}
                        {this.renderField('Quantity', item.quantity)}
                        {this.renderField('Price bought', item.price_bought ? '£' + formatMoney(item.price_bought) : null)}
                        {this.renderField('Market price', item.price_market ? '£' + formatMoney(item.price_market) : null)}
                        {this.renderField('Performance', item.performance ? '%' + item.performance : null)}
                        {this.renderField('Tasting notes', item.tasting_notes)}
                        {this.renderField('Parker score', item.parker_score)}
                        {this.renderField('Description', item.description)}
                    </View>
                    <View style={styles.containerActions}>
                        <Button
                            buttonStyle={styles.actionButton}
                            title="Back to list"
                            onPress={() => this.props.navigation.navigate('Portfolio')}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}
