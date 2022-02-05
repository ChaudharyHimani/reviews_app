import { StyleSheet, View, Text } from "react-native";
import * as Font from 'expo-font';
import { useState } from "react";


export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,

    }
});