import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { images } from './imageList'; // Adjust the path according to your project structure

export default function Gallery() {
    const [index, setIndex] = useState(0); // Start with the first image

    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const handleNext = () => {
        if (index < images.length - 1) {
            setIndex(index + 1);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: images[index].url }} style={styles.image} />
            <Text style={styles.description}>{images[index].description}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Previous" onPress={handlePrevious} disabled={index === 0} />
                <Button title="Next" onPress={handleNext} disabled={index === images.length - 1} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 10
    },
    description: {
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    }
});