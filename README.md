<p align="center">
  <img 
src="https://user-images.githubusercontent.com/70600553/146774102-d84dbc51-7c3c-46af-af70-5f8e2ca21a22.png"
width=250
/>
</p>
<h1 align='center'>Saúde em Mãos</h1>
<br>

![2021 12 21-12 19](https://user-images.githubusercontent.com/70600553/146954861-32816f0c-c369-4547-a3c5-2b52874351e6.gif)
![2021 12 21-12 14 (1)](https://user-images.githubusercontent.com/70600553/146954900-03b82666-fc5d-4469-969c-79419e4751ae.gif)
![Captura de Tela (893)](https://user-images.githubusercontent.com/70600553/146951425-e3d25870-7334-448f-932a-777f92882b27.png)
![Captura de Tela (905)](https://user-images.githubusercontent.com/70600553/146951371-7194259c-328e-4589-ac70-cbb99d80664a.png)
![Captura de Tela (896)](https://user-images.githubusercontent.com/70600553/146951385-3cf1e354-699f-4864-a7be-b9e60d070973.png)
![Captura de Tela (898)](https://user-images.githubusercontent.com/70600553/146951402-ef6803a6-817f-4252-83fa-79408f852d4a.png)
![screen2](https://user-images.githubusercontent.com/70600553/146951489-d552f4ed-4aee-42bc-b311-45b93dee88ba.png)
![screen](https://user-images.githubusercontent.com/70600553/146951501-a3fbb674-0e1a-4980-9f0f-a4247fc9a701.png)
![screen](https://user-images.githubusercontent.com/70600553/146951527-663b50bb-3a0a-4b06-a5bb-4b27ac1d475e.png)
![screen](https://user-images.githubusercontent.com/70600553/146951552-77ce6994-ccad-4a2c-9f26-1da9130223b4.png)
![screen](https://user-images.githubusercontent.com/70600553/146951587-914b84d1-7cb7-46d7-9213-cd15e4df9139.png)
![Captura de Tela (899)](https://user-images.githubusercontent.com/70600553/146951603-90a3c648-9bfa-43aa-83d0-8e682cacfb99.png)





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
Para utilizar a plataforma, é necessário antes instalar o BackEnd. https://github.com/KaiqueCampos/ApiAdonisTCC.git

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
