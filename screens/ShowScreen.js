import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import { FontAwesome5 } from '@expo/vector-icons';


export default function ShowScreen({ route }) {
    const { state } = useContext(Context)
    console.log(route.params.id)
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id)

    return ( 
        <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
        <FontAwesome5 name="brain" size={50} color="lightgray" style={styles.icon} />
        <Text style={styles.titleTxt}>{blogPost.title}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.labelTxt}>İçerik:</Text>
          <Text style={styles.contentTxt}>{blogPost.content}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2F2F2',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
    alignItems: 'center',
    position: 'relative', // İkonun başlığın üstünde görünmesi için
    overflow: 'hidden', // Gölge ve kesmeleri önlemek için
  },
  icon: {
    position: 'absolute', // İkonun başlığın üstünde olmasını sağlar
    top: -19,
    right: 20,
  },
  titleTxt: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5, // İkon ile başlık arasındaki boşluk
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  labelTxt: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 10,
  },
  contentTxt: {
    fontSize: 18,
    lineHeight: 26,
    color: '#555555',
  },
})