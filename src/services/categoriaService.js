import { URL_API } from "./base";

export function consultaCategoria(){
  return fetch(`${URL_API}/categorias`).then(resultado => resultado.json());
}
