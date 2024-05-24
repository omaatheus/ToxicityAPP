import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../../Constants/styles/Posts';


export default function Posts() {
  return (
    <View style={styles.container}>
      
      <Text>Hello World Three</Text>
      <StatusBar style="auto" />
    </View>
  );
}


