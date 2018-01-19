import React, {Component, Fragment} from 'react';
//import MapViews from './MapView';
import {
    Text, View, Image, TouchableHighlight,Alert
} from 'react-native';
//import MapView from 'react-native-maps';
import HeaderComponent from './HeaderComponent';
import FlatListItem from'./Canel';
export default class HomeComponent extends Component {
    constructor(){
        super();
        this.state={
            flag:true,
        }
    }

    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Home';
        let drawerIcon = () => (
            <Image
                source={require('../img/icon.png')}
                style={{ width: 26, height: 26,}}
            />
        );
        return {drawerLabel, drawerIcon};
    };
    onPressButton() {
        this.setState({flag:!this.state.flag})
    };
    render() {
        return (
            <View style={{flex: 1,}} >
                   {this.state.flag&&
                   <View style={{
                     flex: 1,
                     flexDirection: 'column',
                       }}>
                     <HeaderComponent {...this.props} />
                      <View style={{flex:0.9,}}>
                        {/*  <MapViews {...this.props}/>*/}

            </View>
            <View style={{
                flex:0.1,
                flexDirection:'row',
                backgroundColor:'#6E6E6E',
                }}>
                <View style={{justifyContent:'center'}}>
                    <Text style={{fontSize:20, color:'white'}}>  Có 0 phòng đã lưu</Text>
                </View>
                <View>
                      <TouchableHighlight
                    style={{width: 150,
                        height:50,
                        left:50}}
                    onPress={() => this.onPressButton()} underlayColor="white">
                    <View style={{ backgroundColor:'#2E64FE',
                        width: 150,
                        height:50,
                        alignItems:'center',
                        borderRadius:5,
                        justifyContent:'center'}}>
                        <Text style={{ color:'#BDBDBD',fontSize:18}}>Danh sách lưu</Text>
                     </View>
                     </TouchableHighlight>
                </View>
            </View>
        </View>}
                {!this.state.flag&&
                <View style={{flex:1}}>
                    <View style={{flex:0.05,backgroundColor:'#6E6E6E',justifyContent:'center'}}>
                        <Text onPress={()=>this.onPressButton()} style={{left:10}}>Cancel</Text>
                    </View>
                    <View style={{flex:0.95}}>
                    <FlatListItem {...this.props}/>
                    </View>
                </View>}
            </View>);
    }
}