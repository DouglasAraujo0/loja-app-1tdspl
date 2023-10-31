import Image from "next/image";
import { redirect } from "next/navigation";

export default async function EletroView() {

    let items;

    try{
        const response = await fetch('http://localhost:3000/minhas_APIS/eletronicos/0');
        items = await response.json();
        
    }catch(error){
        console.log(error);
        redirect('/error');
    }

  return (
    <div>
        <h1>Página dos Eletrônicos</h1>
        
        <div className="card-eletro-view">
            <ul>
                {
                    items.map((item)=>(
                        <li key={item.id}>
                            <h2>{item.nome}</h2>
                            <figure>
                                <Image
                                    src={item.img}
                                    alt={item.descricao}
                                    width={300}
                                    height={200}
                                    />
                                <figcaption>{item.descricao} - R$ <span>{item.preco}</span></figcaption>
                            </figure>
                        </li>
                    ))
                }
            </ul>
        </div>

    </div>
  )
}