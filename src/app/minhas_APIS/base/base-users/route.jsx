import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

const handleLogin = async (email, senha) => {

    const file = await fs.readFile(process.cwd() + "src/app/minhas_APIS/basedb.json", "utf8");

    const dados = await JSON.parse(file);

    const user = await dados.usuario.find((ObjUsuario) => ObjUsuario.email == email && ObjUsuario.senha == senha);

    return user
}


export async function POST(request, response) {

    //Capturar o request e tratar os dados.
    const {info, email, senha} = await request.json();

    //Estrutura de decisão switch/case para definir o tipo de requisição, se é login ou cadastro.
    switch (info) {
        case "login":
            const user = await handleLogin(email, senha)

            if (user) {
                return NextResponse.json({"status":true});
            } else{
                return NextResponse.json({"status":false});
            }
        case "cadastro":
            break;
        default:
            break;
    }

    return NextResponse.json({"status":false});
}