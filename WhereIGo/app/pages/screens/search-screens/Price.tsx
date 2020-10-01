import *  as React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { View, Text, CheckBox, StyleSheet } from 'react-native';
import {  getNewPosition } from '../../../../app/utils/dimansions/dimansions';
import MainCustomButtonParameter from '../../../shared/buttons/MainCustomButtonParameter';
import MainReturnButton from '../../../shared/buttons/MainReturnButton';

export default function Price(props: any) {
 function turnCheck(){
      setSelection(!isSelected); 
  }


  const [isSelected, setSelection] = React.useState(false);
  let [price, setPrice] = React.useState("0");
  const { destiny, origin } = props.route.params;

  console.log('destiny ===>', destiny)
  console.log('origin ===>', origin)

  const newDimensions = getNewPosition(50, 50, 60);
  const TOP = getNewPosition(20, 50, 250);
  console.log(props)
  return (
    <View style={{ position: 'absolute', top: newDimensions.top, left: newDimensions.left, right: newDimensions.right }}>
      <Text style={{ position: 'relative', fontWeight: '700', color: '#777', top:40, fontSize:17 }}>
        Você está dispoosto a pagar algum valor para acessar o lugar?  Basta pressionar o botão abaixo, caso contrário continue a preencher o restante do formulário!
          </Text>

      {isSelected ?
        <View style= {{ position: 'absolute', top: newDimensions.top}}>

          <TextInput
            placeholder="  Coloque um valor maior que zero"
            underlineColorAndroid='transparent'
            style={{padding:5,  height: 30, borderColor: 'gray', borderWidth: 1, position: 'relative', top: 175, width:'20%', left: '50%' }}
            keyboardType={'numeric'}
            onChangeText={value => value.match(/[0-9]*/gm) && setPrice(value)}
          />
        </View>

        : <View></View>}
      <View style={{ top: newDimensions.top-30 }}>
        {isSelected ? <Text style={{ position: 'relative', top: newDimensions.top+10 }}>Sim</Text> : <Text style={{ position: 'relative', top: newDimensions.top }}>Não</Text>}
        <CheckBox
          value={isSelected}
          onValueChange={turnCheck}
          style={styles.checkbox}
        />

      </View>
      <View style={{ position: 'absolute', top: TOP.top + 30, width: '120%', left: TOP.left }}>
        { (isSelected == true && parseInt(price) > 0) || isSelected == false  ? MainCustomButtonParameter('Distância', 'Próximo ->', '#DDD', '#1C56E6', { origin: origin, destiny: destiny, price: price }):<Text></Text>}
        {MainReturnButton('Início', 'Retornar', '#0768CD', '#8FC1F5')}
      </View>
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
    top: getNewPosition(0, 0, 50).top,
    right: getNewPosition(50, 30, 30).right,
    left: getNewPosition(-30, 30, 30).left,
  },
  label: {
    margin: 8,
  },
});

