# 📕 Sobre o Projeto 

#### Esse projeto foi criado para o TCC da Etec de Taboão da Serra no curso de Análise e Desenvolvimento de Sistemas Integrado ao Ensino Médio.
#### O aplicativo Saúde em Mãos foi feito para auxiliar as pessoas que cuidam de idosos e os próprios idosos no gerenciamento de medicamentos, consultas, primeiros-socorros, números de emergência e hospitais/clínicas próximas. Tem-se como funcionalidades:  
 - Notificar os medicamentos a serem tomados no dia;
 - Notificar os medicamentos que já foram tomados e os que não foram;
 - Mostrar um painel semanal dos medicamentos que precisam ser tomados;
 - Cadastrar um medicamento em datas específicas ou em dias únicos;
 - Mostrar um tutorial (vídeo ou texto) rápido e prático de primeiro-socorros em acidentes que mais ocorrem com idosos;
 - Mostrar os principais números de emergência;
 - Lembrete de consultas em hospitais ou clínicas com informações de horário, data, nome, especialidade e número de contato;
 - Marcar consultas como concluídas ou não concluídas;
 - Tutoriais para o uso da plataforma dentro da aplicação;
 - Tema escuro e claro;
 - Mudar foto de perfil, senha ou nome de usuário;
 - Mostrar hospitais e clínicas próximas e o número para contato.

# 💻 Tecnologias usadas
 - NextJs
 - Typescript 
 - Mapboxgl
 - AdonisJs (Backend)


# 💻 Como instalar?
Para utilizar o aplicativo, é necessário antes instalar o BackEnd. https://github.com/KaiqueCampos/ApiAdonisTCC.git

```
# Instale o AdonisJS
$ npm i --global @adonisjs/cli

# Clone o backend
$ git clone https://github.com/KaiqueCampos/ApiAdonisTCC.git

# Instale as dependencias
$ yarn install
# ou
$ npm install

# Certifique-se de configurar o .ENV da mesma maneira do .ENV.example
# É preciso do MySql instalado e de um banco de dados criado (as informações desse banco de dados precisam estar no .ENV)

# Criar as tabelas dentro do banco de dados
$ adonis migration:run

# Rodar o servidor
$ adonis serve --dev
```

##### Instalando a aplicação Web
```
# Clone o repositório
$ git clone https://github.com/KaiqueCampos/FrontEndTCC.git

# Entre no repositório
$ cd FrontEndTCC

# Instale as dependêcias

$ yarn install
# ou
$ npm install

# Rode a aplicação
$ yarn dev
```
