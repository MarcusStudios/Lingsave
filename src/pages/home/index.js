import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando o hook de navegação

export default function Home() {
  const navigation = useNavigation(); // Obtendo a função de navegação

  return (
    <View style={styles.container}>
      {/* Primeira linha de botões */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Rosto")} // Navega para a Tela de Rosto
        >
          <Text style={styles.buttonText}>Rosto 😊</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Tronco")} // Navega para a Tela de Tronco
        >
          <Text style={styles.buttonText}>Tronco 🧍‍♂️</Text>
        </TouchableOpacity>
      </View>

      {/* Segunda linha de botões */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Bracos")} // Navega para a Tela de Braços
        >
          <Text style={styles.buttonText}>Braços 💪</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Maos")} // Navega para a Tela de Mãos
        >
          <Text style={styles.buttonText}>Mãos ✋</Text>
        </TouchableOpacity>
      </View>

      {/* Terceira linha de botões */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Corpo")} // Navega para a Tela de Corpo
        >
          <Text style={styles.buttonText}>Corpo 🧍</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Pes")} // Navega para a Tela de Pés
        >
          <Text style={styles.buttonText}>Pés 🦶</Text>
        </TouchableOpacity>
      </View>

      {/* Quarta linha de botões - Adicionando o botão para Boca */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Boca")} // Navega para a Tela de Boca
        >
          <Text style={styles.buttonText}>Boca 👄</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly", // Distribui as linhas de forma uniforme
    padding: 20,
    backgroundColor: "#f0f0f5", // Cor de fundo da tela
  },
  row: {
    flexDirection: "row", // Alinha os botões horizontalmente
    justifyContent: "space-between", // Espaço entre os botões
  },
  button: {
    flex: 1,
    backgroundColor: "#ffffff", // Cor de fundo minimalista
    paddingVertical: 50, // Aumenta a altura dos botões
    marginHorizontal: 10, // Espaço entre os botões
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1, // Adiciona uma borda
    borderColor: "#38a69d", // Cor da borda
    elevation: 2, // Sombra no Android
    shadowColor: "#000", // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#38a69d", // Cor do texto
    fontSize: 24, // Tamanho do texto
    fontWeight: "bold",
  },
});
