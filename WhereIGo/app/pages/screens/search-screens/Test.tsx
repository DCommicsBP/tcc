import *  as React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import SearchInput from '../../../shared/inputs/SearchInput';

export default function Test() {
    return (
        <ScrollView>
            <View style={{
                position: 'relative',
            }}>
                <Text style={{
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20,
                }}>
                    Test
                    </Text>
                <React.Fragment>
                    <SearchInput />
                </React.Fragment>
            </View>


            <View style={{
                position: 'absolute',
                width: '100%'
            }}>
                <Text style={{
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20,
                }}>
                    Sai de
                    </Text>
                <React.Fragment>
                    <SearchInput />
                </React.Fragment>
            </View>
        </ScrollView>
    );


}