<p align="center">
 <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
 <img src="https://img.shields.io/github/repo-size/devrafasouza/Projeto-Web-2?style=for-the-badge"/>
 <img src="https://img.shields.io/github/license/devrafasouza/Projeto-Web-2?label=license&style=for-the-badge"/>
</p>
<h1 align="center"><b>Math Game</b></h1>


<h4 align="center"> 
	🚧  Math Game 🚀 Em construção...  🚧
</h4>
<br></br>


<h2> :bookmark_tabs: Descrição do projeto</h2>

<p>Projeto em desenvolvimento para disciplina de Programação Web 2 do curso de Engenharia de Software da Universidade Tecnológica Federal do Paraná.</p>
<p>O projeto é uma implementação dos conceitos aprendidos em aula. O conceito pré estabelecido pelo professor, implica em desenvolver uma ferramenta para apoio de estudos para alunos de níveis do ensino fundamental e médio.</p
<p>Tema selecionado pelos Alunos é uma ferramenta Web para que os usuários alvos possam praticar seus conhecimentos em matemática de uma forma dinâmica e lúdica. O Math Game é uma gameficação para questões de matemática, onde os usuários possuem seus perfis e podem jogar rodadas de questões matemáticas.</p
<br></br>


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


### Backend

- [NodeJS](https://nodejs.org/en/)
  - [Express](https://expressjs.com/pt-br/)
  - [Sequelize](https://sequelize.org/)
  - [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  - [mysql2](https://www.npmjs.com/package/mysql2)
  - [body-parser](https://www.npmjs.com/package/body-parser)
  - [path](https://nodejs.org/api/path.html)

### Frontend

- [Javascript](https://www.javascript.com/)
- [HTML](https://html.com/)
- [CSS](https://www.w3schools.com/css/)
- [Mustache](https://mustache.github.io/mustache.5.html)

### Banco de dados

- [Mysql](https://www.mysql.com/)

<br></br>


<h2> :dart: Requisitos / Features </h2>

- [ ] Login: realização do login da aplicação utilizando o conceito de Sessões ou JSON Web Token.
  - [ ] Frontend
  - [X] Backend

- [ ] Cadastro de usuários: página web que contém um formulário para cadastro do usuário. O
formulário deve apresentar validação de existência dos campos, verificação de unicidade
do login e email. Os dados devem ser persistidos no banco de dados.
  - [ ] Frontend
  - [X] Backend

- [ ] Alteração dos dados pessoais: Cada usuário logado poderá alterar seus dados pessoais como
seu nome e senha de acesso.
  - [ ] Frontend
  - [X] Backend

- [ ] Recurso educacional: Cada equipe deve desenvolver uma atividade dinâmica com correção
automática relacionada a alguma disciplina de exatas (qualquer nível de ensino). A atividade deve possuir pelos menos 2 níveis (fácil e difícil). O resultado desta atividade
deve ser registrado no banco de dados e o usuário precisa estar logado no sistema para
acessa-la.
  - [ ] Frontend
  - [ ] Backend

- [ ] Histórico de atividades: Será necessário apresentar um histórico das atividades desenvolvidas e o resultado obtido. Além disso, é necessário mostrar um resumo do histórico contendo pelo menos o número de atividades desenvolvidas, acertos e erros em cada um dos
níveis. O usuário precisa estar logado no sistema para acessar este recurso.
  - [ ] Frontend
  - [ ] Backend

- [ ] Visualização do desempenho dos usuários: A aplicação deverá possuir um administrador
que poderá visualizar o histórico dos usuários, assim como ver o resumo de desempenho de cada usuário. Apenas o administrador poderá acessar este recurso.
  - [ ] Frontend
  - [X] Backend
