import React, {Component, Fragment} from 'react';
import MapView from 'react-native-maps';
export default class MapViews extends Component{
    constructor(){
        super();
        this.state={
            region: {
                latitude: 21.0572038,
                longitude:105.7488718,
                latitudeDelta: 0.4,
                longitudeDelta: 0.4
            },
            marker:{
                latitude: 21.0572038,
                longitude:105.7488718,
            },
        }
    }
    componentWillMount(){
        navigator.geolocation.getCurrentPosition((position)=>{
            this.setState({
                region:{
                    latitude: position.coords.latitude,
                    longitude:position.coords.longitude,
                    latitudeDelta: 0.4,
                    longitudeDelta: 0.4
                },
                marker:{
                    latitude: position.coords.latitude,
                    longitude:position.coords.longitude,
                }
            })
        },(error)=>console.log(error),{enableHighAccuracy:true,timeout:2000,maximumAge:1000})
    }
    render(){
        return(
            <MapView style={{flex:1}}
                     initialRegion={this.state.region}>
                <MapView.Marker coordinate={this.state.marker}
                                title="Im here!"
                />
            </MapView>
        );
    }
}