import React, { Component } from 'react';
import MapViews from './MapView';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    Text, View, Image,FlatList, TouchableHighlight, TextInput, StatusBar, Button, AppRegistry
} from 'react-native';

export default class DangTin extends Component {
render(){
    return(
        <View style={{backgroundColor:'#E6E6E6'}}>
            <KeyboardAwareScrollView>
            <View>
                <Text>Ảnh phòng trọ</Text>
                <TouchableHighlight onPress={this.show().bind(this)}>
                    <Text>chọn ảnh</Text>
                </TouchableHighlight>
            </View>
            <View style={{flexDirection:'column',margin:10,}}><Text style={{margin:5,fontSize:18,color:'black'}}>Thông tin địa chỉ</Text>
                <View style={{flexDirection:'column',backgroundColor:'white',borderRadius:10}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>  Tỉnh thành : </Text>
                    <TextInput style={{height: 40,width:220,
                    }}
                               placeholder="Hà nội">
                    </TextInput>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text>  Quận huyện :</Text>
                        <TextInput style={{height: 40,width:220,
                        }}
                                   placeholder="Ba Đình">
                        </TextInput>
                    </View>
                    <TextInput style={{height: 40,width:320,
                    }}
                               placeholder=" số nhà:  ,ngõ:  ,đường:   ">

                    </TextInput>
                </View>
            </View>
            <View>
                <Text style={{margin:5,fontSize:18,color:'black'}}>Chạm để xác định vị trí nhà trọ</Text>
                <View style={{height:200}}>
                    <MapViews {...this.props}/>
                </View>
            </View>
            <View style={{flexDirection:'column',margin:10,}}>
                <Text style={{margin:5,fontSize:18,color:'black'}}>Thông tin cơ bản</Text>
                <View style={{borderRadius:10,marginLeft:10,backgroundColor:'white'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>  Giá phòng: </Text>
                    <TextInput style={{height: 40,width:220,
                    }}
                               placeholder="1tr500">
                    </TextInput>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>  Diện tích: </Text>
                    <TextInput style={{height: 40,width:220,
                    }}
                               placeholder="20m2">
                    </TextInput>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>  Giá điện: </Text>
                    <TextInput style={{height: 40,width:220,
                    }}
                               placeholder="200k/người or 4k/số">
                    </TextInput>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>  Giá nước: </Text>
                    <TextInput style={{height: 40,width:220,
                    }}
                               placeholder="200k/người or 15k/số">
                    </TextInput>
                </View>
                </View>
            </View>
            <View>
                <Text style={{margin:5,fontSize:18,color:'black'}}>  Mô phỏng chi tiết:</Text>
                <View style={{backgroundColor:'white',borderRadius:10,margin:10}} >
                    <TextInput style={{margin:5}} multiline={true}
                               placeholder="Phòng kép kín,có sân để xe,...."
                               underlineColorAndroid="white"/>
                </View>
            </View>
                <View style={{alignItems:'center'}}>
                <TouchableHighlight style={{
                    margin: 20,
                    width: 250,
                    height: 40,
                    backgroundColor: '#5858FA',
                    padding: 10,
                    justifyContent:'center',
                    alignItems: 'center',
                    borderRadius:10
                }} onPress={() => this.onPress()}>
                    <Text style={{color: 'white',fontWeight:'bold', fontSize: 18}}>Đăng tin</Text>
                </TouchableHighlight></View>
            </KeyboardAwareScrollView>
        </View>
    );
}

}