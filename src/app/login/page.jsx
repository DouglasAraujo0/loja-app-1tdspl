"use client";
import { useState } from "react";

export default function LoginUsers() {

        //Criando um useState para armazenar o objeto usuário que será preenchido no formulário,e que será enviado para a base de dados para validação.{Email,Senha}
        const [usuario, setUsuario] = useState({
            info: "login",
            email: "",
            senha: "",
            });

//Criando uma função para capturar os dados do formulário e armazenar no useState.
const handleChange = (e) => {
    //Desestruturando o evento.
    //O evento é um objeto que possui várias propriedades, sendo que as mais importantes são: name e value.
    //O name é o nome do campo do formulário e o value é o valor que foi digitado no campo.
    //Exemplo: name="email" value="teste@teste"
    const { name, value } = e.target;
    //Atualizando o useState com os dados do formulário.
    //O useState é um objeto que possui várias propriedades, sendo que as mais importantes são: email e senha.
    //O email e senha são as propriedades do objeto usuário.
    //Utilizamos o operador spread para manter as propriedades do objeto e atualizar apenas a propriedade que foi alterada.
    setUsuario({ ...usuario, [name]: value });
}

    //Preciso de uma função que submeta os dados do formulário para a base de dados realizando a validação do email e senha.
    const handleSubmit = async (e) => {
        //Prevenir o comportamento padrão do formulário.
        e.preventDefault();

        //Criar uma constante para armazenar o resultado da requisição.
        //A requisição será realizada pelo método POST.
        //A requisição será enviada para a rota: /api/login.
        //A requisição será enviada com os dados do formulário.
        const resposta = await fetch("http://localhost:3000/dados/base/base-users", {
            method: "POST",
            body: JSON.stringify(usuario),
        });

        //Criar uma constante para armazenar o resultado da requisição em formato JSON.
        const resultado = await resposta.json();

        //Verificar o resultado.
        if (resultado.status) {
            //Redirecionar para a página de produtos.
            window.location.href = "/";
        } else {
            //Exibir uma mensagem de erro.
            alert("Usuário ou senha inválidos!");
        }
    };

  return (
    <div className="login-user">
      <h1>Identificação de Usuários</h1>
      <h2>-</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Login</legend>
            <div>
              <label htmlFor="idEmail">EMAIL:</label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite seu e-mail" value={usuario.email} onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="idSenha">SENHA:</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua senha" value={usuario.senha} onChange={handleChange}
              />
            </div>
            <div>
              <button>Entrar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}