import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../../Constants/styles/PageBan';


export default function PageBan() {
  return (
    <View style={styles.container}>
      
      <Text>Hello World Two</Text>
      <StatusBar style="auto" />
    </View>
  );
}


