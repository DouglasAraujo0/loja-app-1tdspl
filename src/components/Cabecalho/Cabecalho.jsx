import Link from "next/link"

export default function Cabecalho() {
  return (
        <header className="bg-gray-800 text-white h-16">
          <nav className="flex flex-row justify-around">
          <Link className="link-cabecalho" href="/consumo/eletro-view">ELETRÔNICOS</Link>
            <Link className="link-cabecalho" href="/produtos/estaticas/tenis">TÊNIS</Link>
            <Link className="link-cabecalho" href="/produtos/dinamicas/estranho/tenis-preto">TÊNIS PRETO</Link>
            <Link className="link-cabecalho" href="/produtos/dinamicas/vestuario/camisa-xadrez">CAMISA XADREZ</Link>
          </nav>
        </header>
  )
}
