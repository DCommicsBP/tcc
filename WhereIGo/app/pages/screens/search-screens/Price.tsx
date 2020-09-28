import *  as React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { View, Text, CheckBox, StyleSheet } from 'react-native';
import Checkbox from '../../../shared/buttons/checkbox/Checkbox';
import { getNewDimensions, getNewPosition } from '../../../utils/dimansions/dimansions';
import CustomImputText from '../../../shared/buttons/inputtext/CustomImputText';

export default function Price(props: any) {
  const [isSelected, setSelection] = React.useState(false);
  const [price, setPrice] = React.useState(0);
  const [valueInput, onChangeText] = React.useState('Useless Multiline Placeholder');
  const {destiny, origin}  =  props.route.params; 

  console.log('destiny ===>', destiny)
  console.log('origin ===>', origin)

  const newDimensions = getNewPosition(50, 50,60); 
  console.log(props)
    return (
      <View style={{ position:'absolute', top: newDimensions.top, left: newDimensions.left, right: newDimensions.right}}>
          <Text style={{position: 'relative', fontWeight: '700',color:'#777'}}>
            Você está dispoosto a pagar algum valor para acessar o lugar?  Basta pressionar o botão abaixo, caso contrário continue a preencher o restante do formulário! 
            
            
            {isSelected?
            <View>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={valueInput}
              />
            </View>

             :""}
          </Text>
          <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
      </View>
    );


}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  },
  checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
  },
  checkbox: {
      alignSelf: "center",
      position: 'relative', 
            top: getNewPosition(0,0,30).top, 
      right: getNewPosition(50,30,30).right,
      left: getNewPosition(-30,30,30).left,
  },
  label: {
      margin: 8,
  },
});

