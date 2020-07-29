import * as  React from 'react'
import * as Native from 'react-native'
import { mainTitleStyle } from './mainTitle.style'

export default class MainTitle extends React.Component{
    render () {
        return  <Native.View style={mainTitleStyle.mainView}>
        <Native.View style={mainTitleStyle.intermediateView}>
            <Native.View style={mainTitleStyle.viewTitle}>
                <Native.Text style={mainTitleStyle.title}>
                    Dados da Última Busca
            </Native.Text>
            </Native.View>
        </Native.View>
    </Native.View>
    }

}