# Sprint 2 - Frontend Mobile

## Integrantes

- Gabriel Yeshua Pasquali Garcia - RM 558273
- Nicolas Alvares - RM 557271
- Victor Augusto Ribeiro Oliveira - RM 558338
- Pedro Henrique de Brito Garcia - RM 558867
- Millena Queiroz Clarindo - RM 558825

## Sobre o projeto

Este projeto é um aplicativo mobile desenvolvido em React Native com Expo para a Sprint 2.

O objetivo é simular um sistema de monitoramento de segurança industrial, permitindo o cadastro, listagem e visualização de registros industriais relacionados ao uso de EPIs, áreas de risco e situações críticas.

Nesta sprint, o aplicativo não possui integração com backend ou API externa. O foco está na estrutura do frontend, componentização, uso de TypeScript, UX e preparação para integração futura.

## Funcionalidades

- Listagem de registros industriais
- Cadastro de novo registro
- Visualização dos detalhes de um registro
- Controle de status:
  - normal
  - alerta
  - critico
- Uso de estado local com useState
- Dados mockados para simular funcionamento do sistema

## Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- Estado local com useState

## Estrutura do projeto

```txt
src/
  components/
    RegistroCard.tsx
  data/
    mockRegistros.ts
  screens/
    ListaScreen.tsx
    CadastroScreen.tsx
    DetalheScreen.tsx
  types/
    RegistroIndustrial.ts
