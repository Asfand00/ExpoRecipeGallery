import React from 'react';
import { StyleSheet, View } from 'react-native';
import Gallery from './Gallery'; 

export default function App() {
    return (
        <View style={styles.container}>
            <Gallery />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});
