import { styles } from '../../src/Constants/styles/Posts';
import { Text, View } from 'react-native';

export function noPostsMessage() {
    return (
        <View>
            <Text style={styles.emoji}>
                😢
            </Text>
            <Text style={styles.noPostsText}>
                nothing here yet
            </Text>
        </View>
    )
}

