import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight,TextInput,StatusBar,Button
} from 'react-native';
import InfoComponent from './InfoComponent';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Phone: '',
            password: '',
            flag: false,
        };
    }
    onPressDN(){
        this.setState({flag:!this.state.flag})
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:0.05,
                    backgroundColor: '#D8D8D8',
                }} >
                    <TouchableHighlight style={{
                        top:1,
                        width: 60,
                        justifyContent: 'center',
                    }}
                                        onPress={() => this.onPressDN()
                                        }>
                        <Text style={{ fontSize: 15,fontWeight:'bold',color:'#585858',
                            left:10,}}>Cancel</Text>
                    </TouchableHighlight>
                </View >
                <View style={{flex:0.5}}>
                    <TextInput
                        onChangeText={(Phone) => this.setState({Phone})}
                        keyboardType='phone-pad'
                        maxLength = {11}
                        style={{height: 40,width:280,
                        }}
                        placeholder="Mobile number"
                    />
                    <TextInput
                        onChangeText={(Phone) => this.setState({Phone})}
                        style={{height: 40,width:280,
                        }}
                        placeholder="Họ Tên"
                    />
                    <TextInput
                        onChangeText={(Phone) => this.setState({Phone})}
                        style={{height: 40,width:280,
                        }}
                        placeholder="Mật khẩu"
                    />
                    <TextInput
                        onChangeText={(Phone) => this.setState({Phone})}
                        style={{height: 40,width:280,
                        }}
                        placeholder="Họ Tên"
                    />
                </View>
            </View>
        );
    }
}
