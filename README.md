# Curso-React-Native-App

Curso de criação de aplicativo em React Native

## Instalar o Git Cli

Primeiro vamos instalar o Chocolatey como gerenciador de pacotes para usar na instalação do Git

Install with PowerShell.exe
With PowerShell, there is an additional step. You must ensure Get-ExecutionPolicy is not Restricted. We suggest using Bypass to bypass the policy to get things installed or AllSigned for quite a bit more security.

`Get-ExecutionPolicy`

Se voltar como Restricted, rode o comando abaixo:

`Set-ExecutionPolicy AllSigned`

Now run the following command:

`Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`

Por fim instale o Git com:

`choco install git`

### Configurar o Git na máquina

Use os comandos abaixo caso o git fique puto e não te deixe fazer nada sem dar erro:

`git config --global user.name "Fulano de Tal"`

`git config --global user.email fulanodetal@exemplo.br`

### Clonar o repositório

Clone o repositório em um diretório vazio com:

`git clone https://github.com/Castrozan/Curso-React-Native-App.git`

Em um diretório do projeto, mas desatualizado, puxe as atualizações mais recentes com:

`git pull https://github.com/Castrozan/Curso-React-Native-App.git`

## Setup do projeto

Seguir os passos abaixo pra instalar as dependencias. Vamos Vendo o que precisa e atualizando isso aqui pra que todos tenham as mesmas dependencias na hr de editar o projeto

### Configurando, instalando as dependências do App

Tendo o Node.js instalado em sua máquina:

`npm install -g expo-cli`

Use o comando abaixo para iniciar o projeto:

`npx expo start`

### Inicializando o projeto

Entre no diretório do projeto pelo SMD ou PowerShell e use:

`npx expo start`

### Commitando alterações

Garanta que você está no branch correto para commitar as alterações. Vamos fazer commit somente em nossa branch pessoal

1. Lucas Zanoni -> Branch zlucas
2. Lucas Borba -> Branch blucas
3. Gabriele -> Branch gabi

Para visualizar as branchs do projeto use:

`git branch`

Para trocar para algum branch, você deve usar o comando:

`git checkout zlucas`

Agora que você está na sua branch, deve ser capaz de realizar seu primeiro commit usando:

> ATENÇÃO: nunca esquerça de usar o `git pull` antes de commitar

`git commit -m "Comentário top do commit"`

Uma outra opção é:

`git commit -a`

Este comando irá abrir um editor de texto no terminal para que você possa adicionar seu comentário mais extenso. Caso o terminal abra o editor de texto vim e tu não conseguir ecrever, chama eu ou o Joel pra ajudar kkkk

> Atenção! Suas alterações ainda não foram enviadas para o GitHub. O `git commit` apenas salva as alterações que você fez no repositório local da sua máquina.

> Na primeira vez em que você utilizar o git para commitar, você será redirecionado para logar na sua conta do git pelo navegador

Utilize o comando abaixo para enviar seu commit para o GitHub

`git push origin zlucas`

#### Agora suas alterações já devem estar registradas no repositório no GitHub. Parabéns! 🎊

## Setup do projeto

Seguir os passos abaixo pra instalar as dependencias. Vamos Vendo o que precisa e atualizando isso aqui pra que todos tenham as mesmas dependencias na hr de editar o projeto

### Configurando, instalando as dependências do App

Tendo o Node.js instalado em sua máquina:

`npm install -g expo-cli`

Use o comando abaixo para iniciar o projeto:

`npx expo start`

### Inicializando o projeto

Entre no diretório do projeto pelo SMD ou PowerShell e use:

`npx expo start`
