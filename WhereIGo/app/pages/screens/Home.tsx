import * as React from 'react';
import { View, Text, Dimensions, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import Map from './Map'

import Search from '../screens/Search';
import LastSearch from '../screens/LastSearch'
import CustomDrawer from './CustomDrawer';
export const Routes = createAppContainer(
    createDrawerNavigator({
        Search,
        LastSearch,
        Map,
    },
        {
            initialRouteName: "Map",
            contentComponent: CustomDrawer, 
            hideStatusBar: true
        }
    )
)
export default class Home extends React.Component {
    render() {
        return (<Routes />);
    }
}

