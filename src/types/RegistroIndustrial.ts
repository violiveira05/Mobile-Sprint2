export type StatusRegistro = "normal" | "alerta" | "critico";

export type RegistroIndustrial = {
  id: number;
  nome: string;
  descricao: string;
  status: StatusRegistro;
  data: string;
};
