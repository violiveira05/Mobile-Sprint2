import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RegistroCard } from "../components/RegistroCard";
import { RegistroIndustrial } from "../types/RegistroIndustrial";

type Props = {
  registros: RegistroIndustrial[];
  onCadastrar: () => void;
  onVerDetalhe: (registro: RegistroIndustrial) => void;
};

export function ListaScreen({ registros, onCadastrar, onVerDetalhe }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Metaindústria</Text>
      <Text style={styles.subtitulo}>
        Monitoramento de Segurança Industrial
      </Text>

      <TouchableOpacity style={styles.botao} onPress={onCadastrar}>
        <Text style={styles.botaoTexto}>+ Novo Registro</Text>
      </TouchableOpacity>

      <FlatList
        data={registros}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <RegistroCard
            registro={item}
            onPress={() => onVerDetalhe(item)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum registro cadastrado.</Text>
        }
      />
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
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#aaa",
    fontSize: 15,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#7c3aed",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  vazio: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 30,
  },
});