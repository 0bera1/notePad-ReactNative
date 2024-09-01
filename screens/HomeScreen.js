import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    const { state, addBlogPosts, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();


        const listener = navigation.addListener('focus', () => {
            getBlogPosts();
        });
        return () => {
            listener.remove(); 
        }
    }, [])
    return (

        <View style={styles.container}>
            <FlatList
                data={state}
                keyExtractor={value => value.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.itemContent} onPress={() =>
                            navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.itemContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() => deleteBlogPost(item.id)}>
                                    <FontAwesome name="trash" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }} />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED', // Açık gri arka plan
        padding: 10,
    },
    itemContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 15,
        elevation: 4,
    },
    itemContent: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333333',
        textAlign: 'left',
    },
    deleteButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
    },
})