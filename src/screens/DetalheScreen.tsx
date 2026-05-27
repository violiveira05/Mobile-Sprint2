import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RegistroIndustrial } from "../types/RegistroIndustrial";

type Props = {
  registro: RegistroIndustrial;
  onVoltar: () => void;
};

export function DetalheScreen({ registro, onVoltar }: Props) {
  function getStatusColor() {
    if (registro.status === "normal") return "#2ecc71";
    if (registro.status === "alerta") return "#f1c40f";
    return "#e74c3c";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhe do Registro</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.valor}>{registro.nome}</Text>

        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.valor}>{registro.descricao}</Text>

        <Text style={styles.label}>Status</Text>
        <View style={[styles.statusBox, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusTexto}>
            {registro.status.toUpperCase()}
          </Text>
        </View>

        <Text style={styles.label}>Data</Text>
        <Text style={styles.valor}>{registro.data}</Text>
      </View>

      <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
        <Text style={styles.botaoTexto}>Voltar para Lista</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  titulo: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#1f1f1f",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#333",
  },
  label: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 12,
  },
  valor: {
    color: "#fff",
    fontSize: 17,
    marginTop: 4,
  },
  statusBox: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 6,
  },
  statusTexto: {
    color: "#000",
    fontWeight: "bold",
  },
  botaoVoltar: {
    backgroundColor: "#7c3aed",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 24,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
}); 