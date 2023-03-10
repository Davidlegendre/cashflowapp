export const formsRegistrosType = {
    empresanombre: "",
    empresaemail: "",
    personanombre: "",
    personaapellido: "",
    personaemail: "",
    personatelefono: 0,
    personaidentificacion: 0,
    generoitem:"",
    tipoidents: ""
}

export function verificarEmpresa(e: typeof formsRegistrosType): validateResult{
  if(e.empresanombre === "")
      return {mensaje: "El nombre de la empresa esta vacia", result: false}
  else if(e.empresaemail === "")
      return {mensaje: "El email de la empresa esta vacio", result: false}
  else
      return {mensaje: "Todo Correcto", result: true}
}

export function verificarPersona(e: typeof formsRegistrosType):validateResult
{
    if(e.personanombre === "")
        return {mensaje: "Nombre de persona esta vacio", result: false}
    else
        return {mensaje: "Todo Correcto", result: true}
}

export class validateResult {
    mensaje: string = "";
    result: boolean = true;
}