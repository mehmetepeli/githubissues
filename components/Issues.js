import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Dimensions, Button} from 'react-native';
import Issue from "./Issue";
import IssueDetail from "./IssueDetail";

const githubDatas = [
    {
        title: 'Issue 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque enim, condimentum in dui nec, ' +
            'volutpat aliquam purus. Cras hendrerit iaculis dolor, eu aliquet nisl consequat sed. Phasellus ut ' +
            'condimentum ante, vel pretium velit. Mauris cursus urna ac libero iaculis molestie. Lorem ipsum dolor sit ' +
            'amet, consectetur adipiscing elit. Duis tempor neque sed nisi pretium bibendum. Donec eros diam, auctor ut mi ' +
            'quis, facilisis suscipit est. Phasellus gravida metus enim, id placerat ante tincidunt eget. Vestibulum ' +
            'pellentesque libero a enim faucibus tempus. Praesent in lacus at nulla placerat sodales et ac quam. Morbi ' +
            'ac massa id magna congue porta.',
        status: 'Open'
    },
    {
        title: 'Issue 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque enim, condimentum in dui nec, ' +
            'volutpat aliquam purus. Cras hendrerit iaculis dolor, eu aliquet nisl consequat sed. Phasellus ut ' +
            'condimentum ante, vel pretium velit. Mauris cursus urna ac libero iaculis molestie. Lorem ipsum dolor sit ' +
            'amet, consectetur adipiscing elit. Duis tempor neque sed nisi pretium bibendum. Donec eros diam, auctor ut mi ' +
            'quis, facilisis suscipit est. Phasellus gravida metus enim, id placerat ante tincidunt eget. Vestibulum ' +
            'pellentesque libero a enim faucibus tempus. Praesent in lacus at nulla placerat sodales et ac quam. Morbi ' +
            'ac massa id magna congue porta.',
        status: 'Open'
    },
    {
        title: 'Issue 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque enim, condimentum in dui nec, ' +
            'volutpat aliquam purus. Cras hendrerit iaculis dolor, eu aliquet nisl consequat sed. Phasellus ut ' +
            'condimentum ante, vel pretium velit. Mauris cursus urna ac libero iaculis molestie. Lorem ipsum dolor sit ' +
            'amet, consectetur adipiscing elit. Duis tempor neque sed nisi pretium bibendum. Donec eros diam, auctor ut mi ' +
            'quis, facilisis suscipit est. Phasellus gravida metus enim, id placerat ante tincidunt eget. Vestibulum ' +
            'pellentesque libero a enim faucibus tempus. Praesent in lacus at nulla placerat sodales et ac quam. Morbi ' +
            'ac massa id magna congue porta.',
        status: 'Closed'
    },
    {
        title: 'Issue 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque enim, condimentum in dui nec, ' +
            'volutpat aliquam purus. Cras hendrerit iaculis dolor, eu aliquet nisl consequat sed. Phasellus ut ' +
            'condimentum ante, vel pretium velit. Mauris cursus urna ac libero iaculis molestie. Lorem ipsum dolor sit ' +
            'amet, consectetur adipiscing elit. Duis tempor neque sed nisi pretium bibendum. Donec eros diam, auctor ut mi ' +
            'quis, facilisis suscipit est. Phasellus gravida metus enim, id placerat ante tincidunt eget. Vestibulum ' +
            'pellentesque libero a enim faucibus tempus. Praesent in lacus at nulla placerat sodales et ac quam. Morbi ' +
            'ac massa id magna congue porta.',
        status: 'Closed'
    },
    {
        title: 'Issue 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque enim, condimentum in dui nec, ' +
            'volutpat aliquam purus. Cras hendrerit iaculis dolor, eu aliquet nisl consequat sed. Phasellus ut ' +
            'condimentum ante, vel pretium velit. Mauris cursus urna ac libero iaculis molestie. Lorem ipsum dolor sit ' +
            'amet, consectetur adipiscing elit. Duis tempor neque sed nisi pretium bibendum. Donec eros diam, auctor ut mi ' +
            'quis, facilisis suscipit est. Phasellus gravida metus enim, id placerat ante tincidunt eget. Vestibulum ' +
            'pellentesque libero a enim faucibus tempus. Praesent in lacus at nulla placerat sodales et ac quam. Morbi ' +
            'ac massa id magna congue porta.',
        status: 'Closed'
    },
    {
        title: 'Issue 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque enim, condimentum in dui nec, ' +
            'volutpat aliquam purus. Cras hendrerit iaculis dolor, eu aliquet nisl consequat sed. Phasellus ut ' +
            'condimentum ante, vel pretium velit. Mauris cursus urna ac libero iaculis molestie. Lorem ipsum dolor sit ' +
            'amet, consectetur adipiscing elit. Duis tempor neque sed nisi pretium bibendum. Donec eros diam, auctor ut mi ' +
            'quis, facilisis suscipit est. Phasellus gravida metus enim, id placerat ante tincidunt eget. Vestibulum ' +
            'pellentesque libero a enim faucibus tempus. Praesent in lacus at nulla placerat sodales et ac quam. Morbi ' +
            'ac massa id magna congue porta.',
        status: 'Open'
    },
    {
        title: 'Issue 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque enim, condimentum in dui nec, ' +
            'volutpat aliquam purus. Cras hendrerit iaculis dolor, eu aliquet nisl consequat sed. Phasellus ut ' +
            'condimentum ante, vel pretium velit. Mauris cursus urna ac libero iaculis molestie. Lorem ipsum dolor sit ' +
            'amet, consectetur adipiscing elit. Duis tempor neque sed nisi pretium bibendum. Donec eros diam, auctor ut mi ' +
            'quis, facilisis suscipit est. Phasellus gravida metus enim, id placerat ante tincidunt eget. Vestibulum ' +
            'pellentesque libero a enim faucibus tempus. Praesent in lacus at nulla placerat sodales et ac quam. Morbi ' +
            'ac massa id magna congue porta.',
        status: 'Closed'
    },
    {
        title: 'Issue 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque enim, condimentum in dui nec, ' +
            'volutpat aliquam purus. Cras hendrerit iaculis dolor, eu aliquet nisl consequat sed. Phasellus ut ' +
            'condimentum ante, vel pretium velit. Mauris cursus urna ac libero iaculis molestie. Lorem ipsum dolor sit ' +
            'amet, consectetur adipiscing elit. Duis tempor neque sed nisi pretium bibendum. Donec eros diam, auctor ut mi ' +
            'quis, facilisis suscipit est. Phasellus gravida metus enim, id placerat ante tincidunt eget. Vestibulum ' +
            'pellentesque libero a enim faucibus tempus. Praesent in lacus at nulla placerat sodales et ac quam. Morbi ' +
            'ac massa id magna congue porta.',
        status: 'Open'
    },
]

function Issues({ navigation }) {
    const listTab = [
        {status: 'All'},
        {status: 'Open'},
        {status: 'Closed'},
    ];

    const [status, setStatus] = useState('All');
    const setStatusFilter = status => {
        if(status !== 'All') {
            setDataList([...githubDatas.filter(e => e.status === status)]);
        } else {
            setDataList(githubDatas);
        }
        setStatus(status);
    }

    const [dataList, setDataList] = useState(githubDatas);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.issuesWrapper}>
                <View style={styles.listTab}>
                    {
                        listTab.map(e => {
                            return (
                                <TouchableOpacity onPress={() => setStatusFilter(e.status)} key={e.status} style={[styles.btnTab, status === e.status && styles.btnTabActive]}>
                                    <Text style={[styles.textTab, status === e.status && styles.textTabActive]}>{e.status}</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>

                <ScrollView style={styles.items}>
                    {
                        dataList.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => {
                                    navigation.navigate("IssueDetail", {
                                        data: item,
                                    });
                                }}>
                                    <Issue title={item.title} description={item.description} status={item.status}/>
                                </TouchableOpacity>
                            );
                        })
                    }
                </ScrollView>
                <View style={styles.bookmarkBtnContainer}>
                    <Button
                        title="Go to Bookmarks"
                        onPress={() => navigation.navigate('Bookmarks')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    issuesWrapper: {
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    items: {
        maxHeight: '88%',
        marginTop: 30,
    },
    listTab: {
        marginTop: 10,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
    },
    textTab: {
        fontSize: 14,
    },
    btnTabActive: {
        backgroundColor: '#55bcf6',
    },
    textTabActive: {
        color: '#fff',
    },
    bookmarkBtnContainer: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#e1e1e1'
    }
});

export default Issues;
