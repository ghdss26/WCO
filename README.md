# Sistema Wco - Web Consulta Odontológica 

Projeto que tem como principio fazer agendamentos de marcação de consultas para dentistas 

## Conhecimentos Adquiridos nesse projeto 

Integração de APIS - (Interface de Programação de Aplicação), onde foi feito uma arquitetura Monólito para receber na otimização da velocidade 
entre as requisições feitas pelo comando dos usuários. As APIS foram autenticadas através de Tokens que distribui por camadas de segurança 
a geração dos dados por rotas definidas em entidades. Essas informações são geradas pelo SGDB - Sistema de Gerenciamentos de banco de dados, vinda do 
pacote Controller que é responsavel por controlar o fluxo de cadastro, alteração, listagem e exclusão dos dados. Esse pacote vai esta atrelado as camadas
dos services que vai obter a finalidade de cadastrar, alterar, listar e excuir essas informações das tabelas e atributos vindas do banco e vai passar no 
pacote model que é responsavel por criar as entidades para constituir esses resultados de informações. 

Foi usado para o projeto o Dto que obtém a ideia de consistir basicamente, 
o agrupamento de conjunto de atributos em varias classes simples de forma a otimizar a comunicação.

## Dificuldades Adquiridos nesse projeto 

1 - Como pegar dados das entidades Paciente e Dentista e coloca dentro de uma tag select no html 

2 - Como mostrar dados dos atributos Paciente e Dentista, ligadas a entidade Consulta em uma tela de visualização na web 

3 - Dificuldade em saber listar por id, dentro do Spring Boot os dados que vêm das entidade consulta com os atributos Paciente e Dentista 

4 - Orientação a objeção entre os pacotes do Spring boot, sendo realizado um dto 

5 - Dificuldade em atualizar os dados que vêm da tabela consulta la no front - end. 

Relacionamento de Tabelas - um para muitos 

## Tecnologia Utilizada 

-[Java](https://www.java.com/pt-BR/download/ie_manual.jsp?locale=pt_BR) 

-[JDBC](https://www.oracle.com/br/database/technologies/appdev/jdbc.html) 

-[Mysql](https://www.mysql.com/)

-[Jsp](https://www.ibm.com/docs/pt-br/rsas/7.5.0?topic=files-javaserver-pages-jsp-technology) 

-[Spring Boot](https://spring.io/projects/spring-boot) 

-[Insomnia](https://insomnia.rest/download) 

-[React](https://pt-br.reactjs.org/)

## Depedências do Spring Boot 

-[Lombok](https://imasters.com.br/back-end/projeto-lombok-escrevendo-menos-codigo-em-java) 

-[Spring Dev Tools](https://www.javatpoint.com/spring-boot-devtools) 

-[Maven](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-devtools)

-[Versão 11](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html)

-[Spring Boot Start Web](https://www.javatpoint.com/spring-boot-starter-web)

## Depedências do React 

-[Hooks](https://reactjs.org/docs/hooks-intro.html) 

-[Axios](https://axios-http.com/ptbr/docs/intro) 

-[npm react-rout-dom](https://www.npmjs.com/package/react-router-dom) 

-[npm Bootstrap](https://www.npmjs.com/package/bootstrap)

## Rotas do Spring Boot - Sistema Wco - Web Consulta Odontológica 

Precisa adicionar essas rotas no Postman, Insomnia ou Navegadores para ver os dados do back - end, vindas pelo banco de dados.

Entidade Consulta - localhost:8050/consulta 

Entidade Dentista - localhost:8050/dentista

Entidade Paciente - localhost:8050/paciente

## Informações sobre a Api do Sistema Wco 

```bash 
  
  $ Clique na Pasta Api
  
  $ no arquivo Wco.yaml
  
  $ Vai mostrar as todas as informações da API do Sistema, pelo banco de dados no programa Insomnia
```


## Baixar e visualizar o Projeto 

  ```bash 
  
  $ fazer um git clone do projeto pelo terminal, através - https://github.com/ghdss26/Obras.git
  
  $ Obter o Eclipse ou intellij instalado na sua maquina
  
  $ Ter Instalado e configurado o My Sql Workbench 
  
  $ Obter Java Jre e Jdk na versão 11.0 para ver o funcionamento do projeto e Testar ele
  
  $ Obter sua conexão ativa no Banco de dados como servidor local 
  
  $ Possuir um programa Postman ou Insmonia para copiar e colar as rotas das entidades e ver o crud completo
 
```
## Como executar o projeto no Spring Boot 

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/ghdss26/wco.git

# entrar na pasta do projeto wco
cd wco 
cd back-end 

# executar o projeto
./mvnw spring-boot:run
```
## Como executar o projeto no React 

```bash
# clonar repositório
git clone https://github.com/ghdss26/wco.git

# entrar na pasta do projeto wco
cd wco 
cd front-end 

# executar o projeto
npm start run 

digitar no navegador: http://localhost/3000
```
