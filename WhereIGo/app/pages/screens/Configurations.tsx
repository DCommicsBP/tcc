import *  as React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import SearchInput from '../../shared/inputs/SearchInput';
import MainCustomButton from '../../shared/buttons/MainCustomButton';

export default function Configurations(){ 
return(
    <ScrollView>
             <View style={{
                    position:   'relative', 
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
                    { MainCustomButton("Test", "Test", "#FFF","#000")}
                         
                    </React.Fragment>
                </View>

                 
                <View style={{
                    position:   'absolute',
                    width: '100%' 
                }}>
                    <Text style={{
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: 20,
                        marginRight: 20,
                    }}>

                    </Text>
                    <View style={{position:'relative', top: '60%'}}>

                    </View>

                 
                </View>
               
 
    </ScrollView>
); 


}