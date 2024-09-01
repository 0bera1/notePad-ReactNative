import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostForm from '../component/BlogPostForm'
import { Context } from '../context/BlogContext'


export default function EditScreen({ route, navigation }) {
    const { state, editBlogPosts } = useContext(Context);
    const id = route.params.id;
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

    return (
        <View>
            <BlogPostForm
                isEditable={true}
                initialValues={{ title: blogPost.title, content: blogPost.content }}
                onSubmit={(title, content) => {
                    editBlogPosts(id, title, content, () => navigation.pop());
                }}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({})