import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostForm from '../component/BlogPostForm'
import { Context } from '../context/BlogContext'

export default function CreateScreen({ navigation }) {
  const { addBlogPosts } = useContext(Context)
  return (
    <View>
      <BlogPostForm
        isEditable={false}
        onSubmit={(title, content) => {
          addBlogPosts(title, content, () => navigation.navigate('Home'));
        }} />
    </View>
  )
}

const styles = StyleSheet.create({})