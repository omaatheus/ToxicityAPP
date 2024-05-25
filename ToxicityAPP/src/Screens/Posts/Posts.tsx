import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList } from 'react-native';
import { styles } from '../../Constants/styles/Posts';
import { noPostsMessage } from '../../Components/noPosts';

const posts = [];

const renderPost = ({ item }) => (
  <View style={styles.postContainer}>
    <Text style={styles.postTitle}>{item.title}</Text>
    <Text style={styles.postContent}>{item.content}</Text>
  </View>
);

export default function Posts() {
  return (
    <View style={styles.container}>
      {posts.length > 0 ? (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPost}
        />
      ) : (
        
        <View>
             <Text style={styles.emoji}>
                😢
            </Text>
            <Text style={styles.noPostsText}>
                nothing here yet
            </Text> 
        </View>
        
      )}

      <View style={styles.containerForm}>
        
      </View>

    </View>
  );
};
