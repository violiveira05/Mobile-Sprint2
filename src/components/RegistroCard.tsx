import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RegistroIndustrial } from "../types/RegistroIndustrial";

type Props = {
  registro: RegistroIndustrial;
  onPress: () => void;
};

export function RegistroCard({ registro, onPress }: Props) {
  function getStatusColor() {
    if (registro.status === "normal") return "#2ecc71";
    if (registro.status === "alerta") return "#f1c40f";
    return "#e74c3c";
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.nome}>{registro.nome}</Text>

        <View style={[styles.statusBox, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>
            {registro.status.toUpperCase()}
          </Text>
        </View>
      </View>

      <Text style={styles.descricao}>{registro.descricao}</Text>
      <Text style={styles.data}>Data: {registro.data}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#333",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nome: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    marginRight: 8,
  },
  statusBox: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 11,
  },
  descricao: {
    color: "#ccc",
    marginTop: 8,
    fontSize: 14,
  },
  data: {
    color: "#888",
    marginTop: 8,
    fontSize: 12,
  },
});