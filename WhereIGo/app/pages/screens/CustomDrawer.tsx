import * as React from 'react';
import { View, Text } from 'react-native';
import { customDrawer } from '../styles/customDrawer.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Routes } from './Home';


export default function CustomDrawer() {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={customDrawer.title}>
                Where I Go?
                </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Text>Nova busca</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LastSearch')}>
                <Text>Busca recente</Text>
            </TouchableOpacity>
        </View>
    );
}