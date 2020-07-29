import * as React from "react";
import { View, Text } from "react-native";
import { Routes } from "./Home";

export default class LastSearch extends React.Component {
    render() {
        return (
        <View>
            <Routes />
            <Text>Last Search
                </Text>
        </View>
        );
    }
}