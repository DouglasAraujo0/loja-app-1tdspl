import { NextResponse } from "next/server";

export async function GET() {
  const eletros = [
    {
      id: 1,
      nome: "TV",
      preco: 1000,
      descricao: "TV 4K",
      img: "https://images.pexels.com/photos/6316063/pexels-photo-6316063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      nome: "Smartphone",
      preco: 500,
      descricao: "Smartphone Android",
      img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      nome: "Notebook",
      preco: 1200,
      descricao: "Notebook com SSD",
      img: "https://images.pexels.com/photos/3999538/pexels-photo-3999538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      nome: "Fones de Ouvido",
      preco: 50,
      descricao: "Fones de Ouvido Bluetooth",
      img: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      nome: "Câmera Digital",
      preco: 800,
      descricao: "Câmera DSLR",
      img: "https://images.pexels.com/photos/371909/pexels-photo-371909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      nome: "Relógio Inteligente",
      preco: 100,
      descricao: "Relógio Fitness",
      img: "https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      nome: "Tablet",
      preco: 300,
      descricao: "Tablet Android",
      img: "https://images.pexels.com/photos/106341/pexels-photo-106341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      nome: "Console de Videogame",
      preco: 400,
      descricao: "Console de última geração",
      img: "https://images.pexels.com/photos/13189272/pexels-photo-13189272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      nome: "Câmera de Segurança",
      preco: 150,
      descricao: "Câmera de vigilância Wi-Fi",
      img: "https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 10,
      nome: "Monitor de Computador",
      preco: 200,
      descricao: "Monitor LED de 24 polegadas",
      img: "https://images.pexels.com/photos/5240543/pexels-photo-5240543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return NextResponse.json(eletros);
}
