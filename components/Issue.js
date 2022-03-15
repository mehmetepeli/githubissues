import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';

function Issue(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.title}</Text>
            </View>
            <View style={[styles.status, {borderColor: props.status === 'Open' ? '#55bcf6' : '#e5848e'}]}></View>
        </View>

    );
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 20,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        marginRight: 15,
        borderRadius: 5,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
    },
    itemText: {
        maxWidth: '80%',
    },
    status: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#55bcf6'
    },
});

export default Issue;
