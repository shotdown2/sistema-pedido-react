import { URL_API } from "./base";

export function consultaProduto(){
  return fetch(`${URL_API}/produtos`).then(resultado => resultado.json());
}
