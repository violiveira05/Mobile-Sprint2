import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { RegistroIndustrial, StatusRegistro } from "../types/RegistroIndustrial";

type Props = {
  onSalvar: (registro: Omit<RegistroIndustrial, "id">) => void;
  onVoltar: () => void;
};

export function CadastroScreen({ onSalvar, onVoltar }: Props) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState<StatusRegistro>("normal");

  function salvarRegistro() {
    if (!nome.trim() || !descricao.trim()) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    const novoRegistro = {
      nome,
      descricao,
      status,
      data: new Date().toLocaleDateString("pt-BR"),
    };

    onSalvar(novoRegistro);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar Registro</Text>

      <Text style={styles.label}>Nome do registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Operador sem EPI"
        placeholderTextColor="#777"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descreva a ocorrência"
        placeholderTextColor="#777"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <Text style={styles.label}>Status</Text>

      <View style={styles.statusContainer}>
        <TouchableOpacity
          style={[
            styles.statusButton,
            status === "normal" && styles.statusSelecionado,
          ]}
          onPress={() => setStatus("normal")}
        >
          <Text style={styles.statusTexto}>Normal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.statusButton,
            status === "alerta" && styles.statusSelecionado,
          ]}
          onPress={() => setStatus("alerta")}
        >
          <Text style={styles.statusTexto}>Alerta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.statusButton,
            status === "critico" && styles.statusSelecionado,
          ]}
          onPress={() => setStatus("critico")}
        >
          <Text style={styles.statusTexto}>Crítico</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoSalvar} onPress={salvarRegistro}>
        <Text style={styles.botaoTexto}>Salvar Registro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
        <Text style={styles.botaoTexto}>Voltar</Text>
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
  label: {
    color: "#fff",
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1f1f",
    color: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#333",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  statusContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
  },
  statusButton: {
    flex: 1,
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  statusSelecionado: {
    backgroundColor: "#7c3aed",
  },
  statusTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  botaoSalvar: {
    backgroundColor: "#2ecc71",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  botaoVoltar: {
    backgroundColor: "#555",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});