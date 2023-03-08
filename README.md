# Boas-vindas ao repositório do Projeto Trybers and Dragons

Para abrir o projeto, atente-se as orientações descritas a seguir, e, caso tenha qualquer dúvida, entre em contato.

<summary><strong>👨‍💻 Projeto Trybers and Dragons</strong></summary><br  />

Para este projeto, foram aplicados os princípios da arquitetura `SOLID` e  `POO` em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos `RPG` (_Role Playing Game_).

<!-- 
<strong>🚵 Habilidades trabalhadas:</strong>

<ul>
<li>Lógica</li>
<li>Capacidade de interpretação de problemas</li>
<li>Capacidade de otimizar a resolução de problemas</li>
<li>Resolver problemas/Otimizar algoritmos sob pressão.</li>
</ul>
-->

</details>


# Orientações

<details>

<summary><strong>⚠ Como iniciar o projeto</strong></summary><br  />


1. Clone o repositório  


- Use o comando: `git clone https://github.com/tryber/sd-021-a-project-car-shop.git`.

- Entre na pasta do repositório que você acabou de clonar:

-  `cd car-shop`


2. Instale as dependências

 
-  `npm install`

3. E está pronto para usar e testar!


</details>


<details>
<summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br  />

## Com Docker

  

> Rode o serviço `node` com o comando `docker-compose up -d`.

- Esse serviço irá inicializar um container chamado `trybers_and_dragons`.

- A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  

> Use o comando `docker exec -it trybers_and_dragons bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  

> Instale as dependências [**Caso existam**] com `npm install`

⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

  

⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.


✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  
---

## Sem Docker

> Instale as dependências [**Caso existam**] com `npm install`

 

✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  

✨ **Dica:** É esperado que a versão do `node` utilizada seja a 16 ou superior.

  

<br/>

</details>
