import { AppRegistry } from 'react-native';
//import App from './App'
import { AppRegistry, Dimensions } from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/DBComponent';
/*import SettingsComponent from './components/SettingsComponent';
import CloudComponent from './components/CloudComponent';*/
//Screen names
import {Home, post, Settings, Cloud,} from './screenNames';
import Registration from "./components/Registration";
//Screen size
var {height, width} = Dimensions.get('window');

let routeConfigs = {
    Home: {
        path: '/',
        screen: HomeComponent,
    },
    post: {
        path: '/post',
        screen: InfoComponent,
    },
   /* Settings: {
        screen: SettingsComponent,
    },
    Cloud: {
        screen: CloudComponent,
    },*/


};
let drawerNavigatorConfig = {
    initialRouteName: Home,
    drawerWidth: width / 1.7,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // drawerBackgroundColor: 'orange',
    contentOptions: {
        activeTintColor: 'red',
    },
};
const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
AppRegistry.registerComponent('PhongTro', () => App);
