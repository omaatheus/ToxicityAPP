import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList, TextInput, TouchableOpacity, ListRenderItem } from 'react-native';
import { styles } from '../../Constants/styles/Posts';
interface Post {
  id: number;
  title: string;
  content: string;
}


const posts: Post[] = [];

const renderPost: ListRenderItem<Post> = ({ item }) => (
    <View style={styles.postContainer}>
    <Text style={styles.postTitle}>{item.title}</Text>
    <Text style={styles.postContent}>{item.content}</Text>
  </View>
);

const Posts: React.FC = () => {
  return (
    <View style={styles.container}>
      < StatusBar hidden />      
      {posts.length > 0 ? (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPost}
        />
      ) : (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Text style={styles.emoji}>😢</Text>
          <Text style={styles.noPostsText}>nothing here yet</Text>
        </View>
      )}

      <View style={styles.containerForm}>
        
        <Text style={styles.username}> @bagre </Text>
        <TextInput
          style={styles.input}
          placeholder="Make your post"
          placeholderTextColor="#ccc" // Cor do placeholder para melhor visibilidade
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Posts;
