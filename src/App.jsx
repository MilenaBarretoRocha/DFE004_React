import React from "react";
import Card from "./components/Card";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = React.useState([]); // Recebe dois parâmetros, o primeiro é o estado, e o segundo é a função atualizadora do estado. Sendo que o estado começa como uma array vazia.

  // Toda vez que o que tiver na array de dependencias for atualizada ele executa o que estiver dentro do useEffect. Nesse caso a array está vazia então só vai renderizar uma vez.
  React.useEffect(() => {
    async function obterDadosDaAPI() {
      try {
        const resposta = await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        setData(dados)
      } catch (erro) {
        console.error('Erro ao obter dados da API:', erro);
      }
    }
    obterDadosDaAPI();
  }, [])

  // Formata para o formato da moeda brasileira. Só aceita valores do tipo numbers(00.00) e não strings("00.00")
   const formatBRL = new Intl.NumberFormat("pt-br", {
    style: "currency", // Formata o valor para o formato de moeda.
    currency: "BRL", // Define a moeda como Real Brasileiro.
  });

  return (
    <>
      <Header/>

      <main className="generalContainer">
          <h1 className="title">Produtos</h1>

          <div className="containerCard">
            {data.map((produto) => {
              return <Card nome={produto.title} categoria={produto.category} preco={formatBRL.format(produto.price)} img={produto.image} key={produto.id}/>
            })}
          </div>
      </main>

      <Footer/>
    </>
  )
}

export default App
