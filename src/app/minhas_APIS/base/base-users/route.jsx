import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function POST(request, response) {

    //Recebendo o arquivo JSON.
    const file = await fs.readFile(process.cwd() + "/src/app/minhas_APIS/base/db.json", "utf8");
    
    //Converter o arquivo para poder realizar o trabalho.
    const dados = await JSON.parse(file)

    //Capturar o request e tratar os dados.
    const dadosDoRequest = await request.json();

    console.log(dadosDoRequest)
    //Gerando uma resposta:response.
    return NextResponse.json({"status":true});
}