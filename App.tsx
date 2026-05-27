import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { RegistroIndustrial } from "./src/types/RegistroIndustrial";
import { mockRegistros } from "./src/data/mockRegistros";

import { ListaScreen } from "./src/screens/ListaScreen";
import { CadastroScreen } from "./src/screens/CadastroScreen";
import { DetalheScreen } from "./src/screens/DetalheScreen";

type TelaAtual = "lista" | "cadastro" | "detalhe";

export default function App() {
  const [registros, setRegistros] = useState<RegistroIndustrial[]>(mockRegistros);
  const [telaAtual, setTelaAtual] = useState<TelaAtual>("lista");
  const [registroSelecionado, setRegistroSelecionado] =
    useState<RegistroIndustrial | null>(null);

  function criarRegistro(novoRegistro: Omit<RegistroIndustrial, "id">) {
    const registroComId: RegistroIndustrial = {
      id: Date.now(),
      ...novoRegistro,
    };

    setRegistros((registrosAtuais) => [...registrosAtuais, registroComId]);
    setTelaAtual("lista");
  }

  function abrirDetalhe(registro: RegistroIndustrial) {
    setRegistroSelecionado(registro);
    setTelaAtual("detalhe");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {telaAtual === "lista" && (
        <ListaScreen
          registros={registros}
          onCadastrar={() => setTelaAtual("cadastro")}
          onVerDetalhe={abrirDetalhe}
        />
      )}

      {telaAtual === "cadastro" && (
        <CadastroScreen
          onSalvar={criarRegistro}
          onVoltar={() => setTelaAtual("lista")}
        />
      )}

      {telaAtual === "detalhe" && registroSelecionado && (
        <DetalheScreen
          registro={registroSelecionado}
          onVoltar={() => setTelaAtual("lista")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#121212",
  },
});