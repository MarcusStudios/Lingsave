import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
        {/* Título LINGUAGEANDO abaixo da imagem */}
        <Animatable.Text animation="fadeIn" delay={500} style={styles.logoText}>
          LINGUAGEANDO
        </Animatable.Text>
      </View>

      <Animatable.View
        delay={1000}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Aprenda e explore a linguagem corporal de forma prática e intuitiva.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  containerLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20, // Espaço adicional para garantir que o logo e o texto caibam
  },
  logoImage: {
    width: "80%", // Reduzindo a largura para garantir que o texto caiba
    height: "50%", // Limitando a altura para dar espaço ao texto
  },
  logoText: {
    fontSize: 36,   
    color: "white",
    fontWeight: "bold",
    marginTop: 10,  // Pequena margem entre logo e o texto
    textAlign: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 24,
    marginTop: 28,
    marginBottom: 12,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "#38a69d",
    borderRadius: 10,
    paddingVertical: 12,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
