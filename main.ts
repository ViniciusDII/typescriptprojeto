
import { elemento } from "./CIENCIADACOMPUTACAO-1-2-A-N-Quinta-Noturno/TaskFlow_Aula1_arquivos_iniciais/src/dom";

const nomeDoSistema: string = "TaskFlow";
const versao: string = "0.1.0";
const hoje: string = new Date().toLocaleDateString("pt-BR");
const autor = "Turma CCO - A - Professor";

elemento("nome-do-sistema").textContent = nomeDoSistema;
elemento("versao").textContent = `v${versao}`;
elemento("data-de-hoje").textContent = hoje;
console.log(`TASKFLOW iniciado. Autor: ${autor}`);