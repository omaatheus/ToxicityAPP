import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { styles } from '../../Constants/styles/Posts';

interface Post {
  id: number;
  content: string;
}

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([
    
  ]);
  const [message, setMessage] = useState('');

  const publicar = () => {
    if (message.trim() === '') {
      Alert.alert('Postagem Vazia', 'Por favor, insira algum texto antes de publicar.');
      return; 
    }

    const novoPost: Post = {
      id: posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1,
      content: message,
    };

    setPosts([novoPost, ...posts]); // adicione ao início
    setMessage('');  // limpe a entrada

    // console log do post
    console.log('Novo Post Criado', novoPost); 
  };

  const renderizarPost = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>@bagre</Text>
      <Text style={styles.postContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {posts.length > 0 ? (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderizarPost}
        />
      ) : (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Text style={styles.emoji}>😢</Text>
          <Text style={styles.noPostsText}>nothing here yet</Text>
        </View>
      )}

      <View style={styles.containerForm}>
        <Text style={styles.username}>@bagre</Text>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Make your post"
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity onPress={publicar} style={styles.button}>
          <Text style={styles.buttonText}>publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Posts;