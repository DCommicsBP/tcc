import * as  React from 'react'
import * as Native from 'react-native'
import { mainTitleStyle } from './mainTitle.style'

export default function  MainTitle (title: string){
        return  <Native.View style={mainTitleStyle.mainView}>
        <Native.View style={mainTitleStyle.intermediateView}>
            <Native.View style={mainTitleStyle.viewTitle}>
                <Native.Text style={mainTitleStyle.title}>
                    {title} 
                </Native.Text>
            </Native.View>
        </Native.View>
    </Native.View>
}

