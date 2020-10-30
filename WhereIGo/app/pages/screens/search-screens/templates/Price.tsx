import *  as React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { View, Text, CheckBox, StyleSheet } from 'react-native';
import { getNewDimensions, getNewPosition } from '../../../../utils/dimansions/dimansions';
import MainReturnButton from '../../../../shared/buttons/MainReturnButton';
import MainCustomButtonParameter from '../../../../shared/buttons/MainCustomButtonParameter';
import { priceStyle } from '../styles/price.style';

export default function Price(props: any) {
 function turnCheck(){
      setSelection(!isSelected); 
  }


  const [isSelected, setSelection] = React.useState(false);
  let [price, setPrice] = React.useState("0");
  const { destiny, origin } = props.route.params;

  return (
    <View style={priceStyle.principal}>
      <View style={priceStyle.viewTitle}>
      <Text style={priceStyle.describe}>
        Você está dispoosto a pagar algum valor para acessar o lugar?  Basta pressionar o botão abaixo, caso contrário continue a preencher o restante do formulário!
          </Text>
      </View>
      <View style={priceStyle.checkboxView }>
        {isSelected ? <Text style={priceStyle.describe}>Selecionado</Text> : <Text style={priceStyle.describe}>Não Selecionado</Text>}
        <CheckBox
          value={isSelected}
          onValueChange={turnCheck}
          style={priceStyle.checkbox}
        />

      </View>
  
      {isSelected ?
        <View style= {priceStyle.textInputView}>
          <TextInput
            placeholder=""
            underlineColorAndroid='transparent'
            style={priceStyle.textInput}
            keyboardType={'numeric'}
            onChangeText={value => value.match(/[0-9]*/gm) && setPrice(value)}
          />
        </View>
        : <View></View>}
   
   <View style={{ position: 'absolute', left: getNewDimensions(15, 0).width, flex: 0.5, top: '75%', width:'100%' }}>
                {MainCustomButtonParameter('Distância', 'Próximo ->', '#FFF', '#AAA', { origin: origin, destiny: destiny, price: price })}
                {MainReturnButton('Orgiem/Destino', 'Retornar', '#CCC', '#FFF')}
            </View>
    </View>
  );
}


/*
    <View style={{ }}>
        { (isSelected == true && parseInt(price) > 0) || isSelected == false  ? MainCustomButtonParameter('Distância', 'Próximo ->', '#DDD', '#1C56E6', { origin: origin, destiny: destiny, price: price }):<Text></Text>}
        {MainReturnButton('Início', 'Retornar', '#0768CD', '#8FC1F5')}
      </View>
*/

