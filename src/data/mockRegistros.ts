import { RegistroIndustrial } from "../types/RegistroIndustrial";

export const mockRegistros: RegistroIndustrial[] = [
  {
    id: 1,
    nome: "Operador sem capacete",
    descricao: "Sistema identificou ausência de capacete em área industrial.",
    status: "alerta",
    data: "27/05/2026",
  },
  {
    id: 2,
    nome: "Área segura",
    descricao: "Todos os operadores estão utilizando os EPIs corretamente.",
    status: "normal",
    data: "27/05/2026",
  },
  {
    id: 3,
    nome: "Risco próximo à máquina",
    descricao: "Operador detectado muito próximo de uma zona de risco.",
    status: "critico",
    data: "27/05/2026",
  },
];