import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const url = `http://localhost:3000`

function login(cpf: string, senha: string){
    const base = {
        cpf: cpf,
        senha: senha
    }
    
    var response = axios.post(`${url}/login`, base)

    if (response["statusCode"] != 201){
        return console.log(response)
    } else {
        return console.log("Logado com sucesso")
    }
}