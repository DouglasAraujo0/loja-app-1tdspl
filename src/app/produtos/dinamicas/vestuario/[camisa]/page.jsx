import React from 'react'
import Link from 'next/link'

export default function CamisaSlug({params}) {
  return (
    <div>
        <h1>dados de Camisas</h1>
        <div>
            <p>O valor é: {params.camisa}</p>
            <p><Link href="/">Voltar...</Link></p>
        </div>
    </div>
  )
}
