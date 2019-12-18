<h1>FRONT END DASHPLAN 👩‍💻</h1> 

<p>Foi arquitetado com base para vários users como: planejador, cliente, financeiro... e por ai vai; 
Os principais frameworks utilizados são o React Js, Material Ui, Dev Express e Styled Components.</p>

<h3> * Conexão com o backend </h3> 
<p>Na pasta src/services/api temos a configuração do axios aonde você troca a baseURL para aonde o backend está armazenado.
Nesse caso está conectado com uma VM do Google Cloud rodando o backend com PM2 e NGINX. </p>

<pre> 
  const api = axios.create({
    baseURL: "http://34.68.36.127"
  });
  
</pre>

<h3> * Estruturação do backend (auth) </h3> 

<p>Fazendo a consulta na rota /sessions com um JSON de email e senha você faz a autenticação que retorna esses dados:</p>

<pre> 
{
  "user": {
    "id": 2,
    "name": "Giulia",
    "email": "giulia@giulia.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTc2NTIzNzk4LCJleHAiOjE1NzcxMjg1OTh9.f1Ztx-yCqiir_tjlUtUjno943da4vUP_XAZsYv5ZzGk"
}
</pre>

<p>Esse token é colocado no localStorage caso o usuário exista e o login é feito, o sistema de logout é o reverso, ao apertar em sair é deletado o token do localStorage, assim proibindo o acesso a rotas PRIVADAS</p>

<h3> * Organização de pages e components </h3>

<p>Ambas as pastas estão organizadas entre: 
    <li> - Default </li>
    <li> - Planejador </li>
    <li> - Backoffice </li>
</p>

<h4> * Default</h4>
<p> A pasta default são para components que podem ser usados em qualquer úsuário como: Botões, inputs, saudações, Cards, entre outros</p>

<h4> * Planejadores</h4>
<p> A pasta Planejadores serve para components e páginas que somente o user Planejador pode ver </p>

<h3> * CSS = Styled Components </h3>

<p> Temos alguns components que possuem algumas configurações diferentes como: </p>

<h4> < Body /> </h4>

<p> Você consegue alterar o background da pagina alterando a <i>props</i> "background" da seguinte forma: </p>

<pre> 
    < Body background="https://dashplan.com.br/img/wallpaper/walppaper3.png"/>
</pre>