import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import Map from './Map'
import Search from '../screens/Search';
import LastSearch from '../screens/LastSearch'
import { Text } from 'react-native';
import { homeStyles } from '../styles/home.style';


export const Routes = createAppContainer(
    createDrawerNavigator({
        Search: {screen: Search, navigationOptions: {drawerLabel: ()=> <Text style={homeStyles.text}>Nova Busca </Text>}},
        LastSearch: {screen: LastSearch, navigationOptions: {drawerLabel: ()=> <Text style={homeStyles.text}>Última Busca Realizada</Text>}} ,
        Map: {screen: Map, navigationOptions: {drawerLabel: ()=> null}}
        },
        {
            initialRouteName: "Map",
            statusBarAnimation: 'slide',
            drawerBackgroundColor:'rgba(0,102,51,1)',
            drawerWidth:250, 
            overlayColor: {light:'#476545', dark: 'grey'}, 
            drawerType: 'slide'     
        }
    ), 
)

export default class Home extends React.Component {
    render() {
        return (<Routes />)
    }
}

