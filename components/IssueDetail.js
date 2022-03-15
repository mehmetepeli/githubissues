import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useSelector,useDispatch} from "react-redux";
import {setBookmarks} from "./redux/actions";

function IssueDetail({ route, navigation }) {
    const { data } = route.params;

    const {bookmark} = useSelector(state => state.bookmarkReducer);
    const dispatch = useDispatch();

    const handleAddBookmark = (data) => {
        dispatch(setBookmarks(data));
        navigation.navigate('Bookmarks');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.description}><Text>{data.description}</Text></View>
            <View style={styles.statusContainer}>
                <View style={[styles.status, {borderColor: data.status === 'Open' ? '#55bcf6' : '#e5848e'}]}></View>
                <Text style={styles.statusText}>{data.status}</Text>
            </View>
            <View style={styles.bookmarkButtons}>
                <Button title="Add to Bookmarks" onPress={() => handleAddBookmark(data)}/>
                <Button
                    title="Go to Bookmarks"
                    onPress={() => navigation.navigate('Bookmarks')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        padding: 15,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        marginVertical: 15,
    },
    status: {
        width: 12,
        height: 12,
        marginRight: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#55bcf6'
    },
    statusText: {
        fontWeight: 'bold',
    },
    statusContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    bookmarkButtons: {
        flexDirection: 'row',
        marginTop: 20,
    }
});

export default IssueDetail;
