import React, { Component } from 'react';
//import Registration from './Registration';
//import Swipeout from 'react-native-swipeout';
//import DangTin from './DangTin';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    Text, View, Image,FlatList, TouchableHighlight,ToastAndroid, TextInput, StatusBar, Button, AppRegistry
} from 'react-native';
/*
import DatePicker from 'react-native-datepicker'
var SQLite = require('react-native-sqlite-storage')
var db=SQLite.openDatabase({name : "siginDB.db", readOnly: true, createFromLocation : "~SqLine.db"});
*/

export default class InfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {Phone: '',
            password:'',
            flag:true,
            a:true,
            date:"20-10-2016"
        };

    }
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Đăng phòng';
        let drawerIcon = () => (
            <Image
                source={require('../img/dangbai.png')}
                style={{ width: 26, height: 26 }}
            />
        );
        return { drawerLabel, drawerIcon };
    };
    onPressDK(){
        this.setState({flag:!this.state.flag})
    }
    /*onPress(){
        db.transaction((tx) => {
            var sql = 'SELECT * FROM Signin WHERE Phone=\'' + this.state.Phone + '\'';
            tx.executeSql(sql, [], (tx, results) => {
                var len = results.rows.length;
                if (len == 0)
                    ToastAndroid.show('tai khoan khong ton tai', ToastAndroid.SHORT);
                else {
                    var row = results.rows.item(0);
                    if (this.state.password == row.Password){
                        ToastAndroid.show('thang cong', ToastAndroid.SHORT);
                        this.setState({a:!this.state.a})
                    }
                    else
                        ToastAndroid.show('sai password', ToastAndroid.SHORT);
                }
            })
        })
    }*/
    render() {
        return (<View style={{flex:1}}>
            {!this.state.a&& <View style={{flex: 1, flexDirection: 'column'}}>
            {this.state.flag&&
                <View style={{flex:1,}}>
                    <View style={{flex:0.6,backgroundColor: '#D8D8D8'}}>
                    <TouchableHighlight style={{
                        top:1,
                        width: 60,
                        justifyContent: 'center',
                    }}
                                        onPress={() => {
                                            this.props.navigation.goBack();
                                        }}>
                        <Text style={{ fontSize: 15,fontWeight:'bold',color:'#585858',
                            left:10,}}>Cancel</Text>
                    </TouchableHighlight>
                    </View>
            <View style={{flex:2,backgroundColor: '#D8D8D8', justifyContent:'center',
                alignItems:'center',}}>
                <Text>  </Text>
                <Text style={{fontSize:45,color:'red',fontWeight:'bold'}} >Nhà trọ tốt!</Text>

                <Text style={{fontSize:12,}}>Vui lòng đăng nhập hoặc đăng ký tài khoản </Text>
            </View>

                <View style={{flex:4.45,alignItems:'center'}}>
                    <StatusBar hidder={true}/>

                    <TextInput
                        onChangeText={(Phone) => this.setState({Phone})}
                        keyboardType='phone-pad'
                        maxLength = {11}
                        style={{height: 40,width:280,
                        }}
                        placeholder="Mobile number"
                    />
                    <TextInput
                        style={{height: 40,width:280,}}
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                    />
                    <TouchableHighlight style={{
                        marginTop: 20,
                        width: 250,
                        height: 40,
                        backgroundColor: '#5858FA',
                        padding: 10,
                        justifyContent:'center',
                        alignItems: 'center',
                        borderRadius:10
                    }} /*onPress={() => this.onPress()}*/>
                        <Text style={{color: 'white',fontWeight:'bold', fontSize: 18}}>Tiếp tục</Text>
                    </TouchableHighlight>

                </View>
            <View style={{flex:3,alignItems: 'center',justifyContent:'flex-end'}}>
                <Text>Bạn chưa có tài khoản</Text>
                <TouchableHighlight style={{
                    width: 250,
                    height: 40,
                    marginBottom:40,
                    marginTop:10,
                    backgroundColor: 'white',
                    borderWidth:1,
                    padding: 10,
                    justifyContent:'center',
                    alignItems: 'center',
                    borderRadius:10
                }}
                                    onPress={() => this.onPressDK()
                                    }>
                    <Text style={{color: '#5858FA',fontWeight:'bold', fontSize: 18}}>Tạo tài khoản</Text>
                </TouchableHighlight>
            </View>
                </View>}





            {!this.state.flag&&
            <View style={{flex:1}}>
                <View style={{flex:0.05,
                    backgroundColor: '#D8D8D8',justifyContent:'center'
                }} >
                    <TouchableHighlight style={{
                        margin:1,
                        width: 60,
                        justifyContent: 'center',
                    }}
                                        onPress={() => this.onPressDK()
                                        }>
                        <Text style={{ fontSize: 15,fontWeight:'bold',color:'#585858',
                            left:10,}}>Cancel</Text>
                    </TouchableHighlight>
                </View >
         {/*       <KeyboardAwareScrollView>*/}
                <View style={{flex:0.45, alignItems:'center'}}>
                    <Text style={{ fontSize: 40,fontWeight:'bold',color:'#585858',}}>Đăng ký</Text>

                    <View style={{flexDirection: 'row',alignItems:'center'}}>
                    <TextInput
                        onChangeText={(Phone) => this.setState({Phone})}
                        style={{height: 40,width:100,
                        }}
                        placeholder="Họ"
                    />
                    <TextInput
                        onChangeText={(Phone) => this.setState({Phone})}
                        style={{height: 40,width:170,
                        }}
                        placeholder="Tên"
                    /></View>
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
                        placeholder="Mật khẩu"
                        secureTextEntry={true}
                    />
                    <TextInput
                        onChangeText={(Phone) => this.setState({Phone})}
                        style={{height: 40,width:280,
                        }}
                        placeholder="Địa chỉ "
                    />

                    <View style={{alignItems:'flex-start'}}>
                   {/* <Text>Ngày sinh</Text>
                    <DatePicker
                        style={{width: 250}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-1960"
                        maxDate="01-01-2017"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />*/}
                    </View>

                </View>
                    <View style={{alignItems:'center',justifyContent:'center',flex:0.4}}>
                         <View >
                             <TouchableHighlight style={{
                              width: 250,
                              height: 40,
                              marginBottom:40,
                             marginTop:10,
                             backgroundColor: '#D8D8D8',
                              borderWidth:1,
                              padding: 10,
                              justifyContent:'center',
                              alignItems: 'center',
                               borderRadius:10
                               }}
                                        onPress={() => this.onPressDK()
                                        }>
                              <Text style={{color: '#5858FA',fontWeight:'bold', fontSize: 18}}>Đăng ký tài khoản</Text>
                             </TouchableHighlight>
                         </View>
                         <View style={{flexDirection: 'row'}}><Text>Bạn đã có tài khoản </Text>
                                <Text  onPress={() => this.onPressDK()} style={{color:'blue'}}>Đăng nhập </Text>
                         </View>

                    </View>
               {/* </KeyboardAwareScrollView>*/}
                </View>
               }
             </View>}



            {this.state.a&&
            <View style={{flex:1}}>
                <View style={{flex:0.05,justifyContent:'center'}}>
                    <TouchableHighlight style={{
                        margin:1,
                        width: 60,
                        justifyContent: 'center',
                    }}
                                        onPress={() => {
                                            this.props.navigation.goBack();
                                        }}>
                        <Text style={{ fontSize: 15,fontWeight:'bold',color:'#585858',
                            left:10,}}>Cancel</Text>
                    </TouchableHighlight>
                </View>
                {/*<View style={{flex:0.95}}>
                    <DangTin {...this.props}/></View>*/}
            </View>}
        </View>);
    }
}