import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert } from 'react-native';
import flatListData from '../data/FlatLis';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
        };
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        //Refresh FlatList !
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }},
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex: 1,
                    flexDirection:'column',
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection:'row',
                        backgroundColor: 'mediumseagreen'
                    }}>
                        <Image
                            source={{uri: this.props.item.imageUrl}}
                            style={{width: 100, height: 100, margin: 5}}
                        >

                        </Image>
                        <View style={{
                            flex: 1,
                            flexDirection:'column',
                            height: 100
                        }}>
                            <Text style={{color: 'white', padding: 2, fontSize: 20,}}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.mota}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.sdt}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.DC}</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor:'white'
                    }}>
                    </View>
                </View>
            </Swipeout>

        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 1,
        fontSize: 12,
    }
});

export default class BasicFlatList extends Component {
    onPress(){

    }
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
        });
    }
    refreshFlatList = (deletedKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            };
        });
    }
    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index})=>{
                        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>

                            </FlatListItem>);
                    }}
                >

                </FlatList>
            </View>
        );
    }
}