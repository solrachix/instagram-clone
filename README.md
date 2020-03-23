
<!-- PROJECT SHIELDS -->

[![expo](https://img.shields.io/npm/v/expo.svg?label=Expo)](https://www.npmjs.com/package/react-native-template-expo-basic)
[![npm](https://img.shields.io/npm/v/react-native-template-expo-basic.svg?label=npm-package)](https://www.npmjs.com/package/react-native-template-expo-basic)
[![NPM](https://img.shields.io/npm/l/react-native-template-rocketseat-basic.svg)](https://choosealicense.com/licenses/mit)

<!-- [![GitHub issues](https://img.shields.io/github/issues-raw/rocketseat/react-native-template-rocketseat-basic.svg)](https://github.com/Rocketseat/react-native-template-rocketseat-basic/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/rocketseat/react-native-template-rocketseat-basic.svg)](https://github.com/Rocketseat/react-native-template-rocketseat-basic/commits/master)
[![npm](https://img.shields.io/npm/dt/react-native-template-rocketseat-basic.svg)](https://www.npmjs.com/package/react-native-template-rocketseat-basic) 
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/solrachix/-DevCommunity">
    <img src="" alt="Logo">
  </a>

  <h3 align="center">Template Expo Basic</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
  - [Edição](#edi%C3%A7%C3%A3o)
  - [Publicação](#publica%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando React Native e o Expo, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [Expo](https://docs.expo.io/) - O Expo é uma plataforma de código aberto para criar aplicativos nativos universais que são executados no Android, iOS e na web;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade da comunidade do React Native de uma navegação de forma fácil de se usar e escrita toda em JavaScript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Styled Components](https://styled-components.com) - Permite escrever código CSS real ao estilo de seus componentes(CSS in JS);
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console) - Esse plugin do Babel remove todos os console.\* da sua aplicação ([Dica no site oficial do RN](https://facebook.github.io/react-native/docs/performance#using-consolelog-statements));

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do Expo CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em Expo, para isso você pode seguir o guia do link abaixo:

[Ambiente Expo (Android/iOS)](http://www.matera.com/blog/post/aplicacoes-mobile-multiplataforma-com-react-native-e-expo)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
rocketseat-basic
├── assets/
├── src/
│   ├── Pages/
│   │   └── Home/
│   │       └── index.js
│   │       └── style.js
│   ├── services/
│   │   └── api.js
│   ├── routes.js
├── .gitignore
├── babel.config.js
├── App.js
├── App.json
├── LICENSE
├── package.json
└── README.md
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
expo init --template react-native-expo-basic
```

2. Depois do projeto criado você pode deletar o arquivo `App.js` da raiz, pois o arquivo `index.js` agora aponta para a pasta **src**.

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron para ser usado na aplicação;

  - **images** - Diretório para armazenar imagens em geral que possam ser utilizadas na aplicação, esse diretório pode ser renomeado para `assets` e dentro de `assets` criar um novo diretório para guardar somente as imagens, assim é possível ter um diretório para guardar todo tipo de arquivo, e não apenas imagens;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Main** - Diretório exemplo de uma página cujo nome é **Main**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.js** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado por padrão é para a API do Github;

  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

  - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigators disponibilizados na biblioteca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **devDependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências de desenvolvimento que devem ser instaladas na aplicação, vale lembrar que as dependências de desenvolvimento que já vem por padrão no projeto como `@babel/core`, `@babel/runtime`, entre outras, não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do JavaScript no Editor, ele é o responsável por ativar o Auto Complete de códigos JavaScript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

### Publicação

Para publicar um template como esse, o processo é bastante simples e rápido.

1. Crie uma conta no [site do NPM](https://www.npmjs.com/);

2. Com a conta criada execute o comando abaixo e insira suas credenciais;

```sh
npm login
```

3. Basta abrir o arquivo `package.json` e modificar as informações de acordo com o seu template, mas as informações mais importantes são duas, o `name` e o `version`, que são os únicos que tem restrições, seguem abaixo as restrições:

   1. O `name` sempre deve começar com o prefixo `react-native-template-` seguido do nome do seu template;
   2. O template deve ser publicado em uma conta pessoal, pois quando publicado em uma **Organization** é acrescentado o prefixo `@<nome_da_organization>` no nome do pacote;
   3. O `name` deve ser único, não podendo ser igual ao de um template já publicado;
   4. A `version` deve ser atualizada a cada publicação, se o template está na versão **0.0.1** e é preciso publicar uma atualização no mesmo, a `version` deve ser diferente e superior a versão atual, por exemplo, **0.0.2**;

4. Após configurar corretamente o `package.json` basta executar no terminal/prompt o comando `npm publish`;

5. Com a publicação finalizada o template deve ficar disponível através do link `https://www.npmjs.com/package/react-native-template-<nome_do_template>`.

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Solrachix - [Github](https://github.com/solrachix) - **carlos.miguel.oliveira.17@gmail.com**