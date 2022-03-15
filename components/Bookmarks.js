import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Button} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import Issue from "./Issue";
import {removeBookmarks} from "./redux/actions";

function Bookmarks({navigation}) {
    const {bookmark} = useSelector(state => state.bookmarkReducer);
    const dispatch = useDispatch();

    const removeBookmarked = (item) => {
        dispatch(removeBookmarks(item));
    }

    return (
        <View style={styles.items}>
            {
                (bookmark.length < 1) ? <Text>Bookmarks are empty</Text> :
                bookmark.map((item,index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => removeBookmarked(item)}>
                            <Issue title={item.title} description={item.description} status={item.status}/>
                        </TouchableOpacity>
                    );
                })
            }
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    items: {
        paddingHorizontal: 20,
        flex: 1,
        marginTop: 30,
    },
});

export default Bookmarks;
