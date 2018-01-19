import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';

export default class HeaderComponent extends Component {
    render() {
        return (<View style={{
            alignItems:'center',
            justifyContent:'flex-start',
            backgroundColor:'#FA8258',
            flexDirection:'row',}}>
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 5 }}
                                onPress={() => {
                                    const { navigate } = this.props.navigation;
                                    navigate('DrawerOpen');

                                }}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={require('../img/icon.png')}
                />
            </TouchableHighlight>
            <Text style={{fontSize:20,color:'white',padding:20 }}>
                Phòng trọ tốt
            </Text>
            <Image style={{width:40, height:30,left: 60,}}
                   source={require('../img/tim-kiem.png')}/>
            <Image style={{width:30, height:30,left: 65,}}
                   source={require('../img/dinhvi.png')}/>
        </View>);
    }
}