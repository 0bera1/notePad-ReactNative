import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    TextInputComponent,
    InputAccessoryView
} from 'react-native'
import React, { useState } from 'react'

export default function BlogPostForm({ onSubmit, initialValues, isEditable }) {
    const [title, setTitle] = useState(initialValues ? initialValues.title : '');
    const [content, setContent] = useState(initialValues ? initialValues.content : '');
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {isEditable ? (<Text style={styles.tTxt}>Başlığı düzenle :</Text>): 
                (<Text style={styles.tTxt}>Başlık ekle:</Text>)}
                
                <TextInput style={styles.tInp}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                    multiline={true}
                    placeholder="Başlık..."
                    placeholderTextColor="#AAAAAA"
                />
                {isEditable ? (<Text style={styles.tTxt}>İçeriği düzenle :</Text>): 
                (<Text style={styles.tTxt}>İçerik ekle :</Text>) }
                
                <TextInput style={styles.tInp2}
                    value={content}
                    onChangeText={(text) => setContent(text)}
                    multiline={true}
                    placeholder="İçerik..."
                    placeholderTextColor="#AAAAAA"

                />
                <TouchableOpacity style={styles.button}
                    onPress={() => onSubmit(title, content)}
                >
                    <View>
                        {isEditable ? (<Text style={styles.save}>Güncelle</Text>) :
                            (<Text style={styles.save}>Kaydet</Text>)}
                    </View>

                </TouchableOpacity>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#F8F8F8', // Hafif gri arka plan
    },
    container: {
        padding: 25,
    },
    tTxt: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 10,
    },
    tInp: {
        height: 100,
        backgroundColor: '#FFFFFF',
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        fontSize: 16,
        textAlignVertical: 'top',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    tInp2: {
        height: 440,
        backgroundColor: '#FFFFFF',
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        fontSize: 16,
        textAlignVertical: 'top',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    button: {
        backgroundColor: '#4A90E2',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
    },
    save: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});