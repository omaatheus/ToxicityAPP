import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#270343',
      alignItems: 'center',
      justifyContent: 'center',
    },
    warnContainer: {
      width: '100%',
      height: 400,
      backgroundColor: '#210A34',
      alignItems: 'center',
      
      borderRadius: 40,
    },
    userImage: {
        borderRadius: 50,
    },
    user: {
        color: '#fff',
        marginTop: 40,
        marginLeft: -100,
        fontSize: 25,
        fontWeight: '200',
    },

    warnBan: {
        color: '#fff',
        fontWeight: '100',
        fontSize: 25,
        marginTop: 40,
        marginLeft: -150,
        letterSpacing: 0.25,
    },

    becauseBan: {
        color: '#A00000',
        fontSize: 20,
        fontWeight: '300',
        marginTop: 140,
    },
  });