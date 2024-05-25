import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { styles } from '../../Constants/styles/PageBan';



export default function PageBan() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.warnContainer}>
                <Image src={require ('../../Assets/bagre.png')} style={styles.userImage} />
                <Text style={styles.user}>@bagre</Text>
                <Text style={styles.warnBan}>You where banned</Text>
                <Text style={styles.becauseBan}>{/*Aqui ficará a Variável*/}
                    "Frase que motivou o Ban aqui"
                </Text>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}


