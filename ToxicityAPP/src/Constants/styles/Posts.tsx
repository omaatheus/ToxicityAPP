import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4B0082', // Fundo roxo escuro
  },
  containerForm: {
    padding: 50, // Mais espaçoso
    backgroundColor: '#270343', // Fundo roxo
    borderTopLeftRadius: 45, // Bordas superiores arredondadas
    borderTopRightRadius: 45,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%', // Ocupa metade da tela na parte inferior
  },
  image: {
    width: 200,
    height: 200,
  },

  postContainer: {
    margin: 20,
    padding: 60,
    marginVertical: 8,
    backgroundColor: '#270343',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  postTitle: {
    marginBottom: 4,
    // marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
    
  },
  postContent: {
    marginLeft: -20,
    fontSize: 17,
    marginTop: 4,
    color:'white',
  },

  username: {
    fontSize: 19,
    color: 'white',
  },

  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },

  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Torna a imagem circular

  },  

  emoji: {
    fontSize: 50,
    textAlign: 'center',
    marginVertical: 20,
  },
  noPostsText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: -15,
    height: 300,
  },
  
  input: {
    width: '100%',
    height: 40,
    fontSize: 20,
    paddingHorizontal: 8,
    marginBottom: 30, // Movido mais para baixo
    marginTop: 20, // Movido para cima 
    backgroundColor: 'transparent', // Fundo transparente
    color: '#fff', // Texto branco para melhor contraste
    borderWidth: 0, // Remover a borda
    textAlignVertical: 'bottom',//alinha o texto para parte inferior 
  },

  button: {
    height: 40, // Menor altura
    backgroundColor: '#b53337', // Cor rosada
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150, // Arredondar o botão
    marginBottom: 90, // Adiciona espaço inferior
  },
  
  buttonText: {
    color: 'white',
    fontSize: 22,
  },
});