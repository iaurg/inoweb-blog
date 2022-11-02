---
title: Tutorial de como instalar ruby on rails no windows 8
slug: tutorial-de-como-instalar-ruby-on-rails-no-windows-8
date_published: 2013-06-21T02:08:03.000Z
date_updated: 2013-06-21T02:08:03.000Z
---

Neste tutorial mostro como se faz para instalar o **Ruby on Rails no Windows 8** de forma que fique bem funcional com php e mysql também. Desta forma tudo funciona perfeitamente bem como se fosse em um Ubuntu ou MacOsx.

O Windows 8 está muito rápido e fica bastante confortável programar nele se conseguir montar o sistema de forma correta.

Neste tutorial vou mostrar como instalar e configurar o Ruby 1.9.2, o Rails 3.0.12 + Mysql + Php + Phpmyadmin

.

Antes de começar a instalar vamos ativar a visualização de arquivos e pastas ocultas, pois você vai precisar.

No meu Windows 8 é mais ou menos assim para ativar:

– Vai no Windows explorer

– No canto da direita tem uma setinha para baixo ao lado da interrogação, clica nela para aumentar o menu superior

– Agora vai na aba Exibir

– Depois clica em Opções

– Clique em Modo de Exibição

– Procure onde diz: pastas e arquivos ocultos.

Marque a opção: Mostar arquivos, pastas e unidades ocultas

Pronto, vamos seguir com nosso tutorial!

**1) Vamos baixar o Ruby, no meu caso vou instalar o Ruby 1.9.2**

Acesse o site: [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)

No meu caso estou baixando o executável, Rubyinstaller 1.9.2, você pode usar outra versão, basta adaptar este meu tutorial.

Execute o instalador e marque a opção: **Add Ruby executables to you PATH**

Aí é só dar next.

Após instalar crie uma pasta chamada: “**devkit**” no mesmo local onde o Ruby foi instalado. No meu Windows 8 ele foi instalado em:** C:Ruby192　**

Após isso baixa o arquivo: **DevKit (development kit)** no mesmo site.

Instale ele na pasta do** devkit** que acabamos de criar.

O ruby tem que ser sempre instalado no C:

Depois abra o **PowerShell**, ele é um terminal similar ao prompt.

É bacana sempre abrir o PowerShell em modo administrador, basta clicar com o botão direito e escolher para abrir como administrador.

Agora pelo terminal entre na pasta do **devkit**, no meu caso fica assim para entrar:

cd **c:Ruby192devkit**

Use o TAB para autocompletar o caminho, fica mais fácil.

Como o ruby fica nesta pasta e o devkit também, não vou ficar a toda hora citando o caminho da pasta, assim facilita o tutorial.

Execute o comando abaixo pra inicializar o devkit que foi colocado na pasta do ruby

**ruby dk.rb init**

Agora para instalar coloque o comando abaixo:

**ruby dk.rb install**

**2) Vamos instalar o Mysql**

Acesse o site [http://www.mysql.com/downloads/](http://www.mysql.com/downloads/)

Vamos baixar o **Mysql Community Server.**

Baixe a versão 64 ou 32 de acordo com seu Windows, no meu caso é o 64.

Pega a versão MSI que já vem com instalador, é melhor.

Inicie a instalação normal.

Quando ele perguntar o tipo de instalação marque: **COMPLETE**

Na opção depois de instalar deixe marcado **DETALHADO CONFIGURAÇÃO**

Na tela seguinte em Instance:

Deixe marcado **“developer machine”**

Na tela seguinte marque banco **multifunctional**

Na tela InoDB setting

deixe **C**:

E onde tem a pasta coloque:** data**

Agora vai em next.

No próximo: **decision suport**

Na próxima deixe marcado:

**– tcp/ip

– port 3306

– add firewall exeption

– enable strict mod**

Na próxima default char marque:

– **best support for multilingualism**

No próximo de windows option

marque as duas opções
**– de inicializar automatico

–  incluir windows path**

O próximo é a senha do root, coloque uma senha simples para não esquecer.

Depois de instalado feche e abra o powershell novamente.

Dica: A gente fecha e abre o Powershell para ele carregar novamente as novas configurações.

No terminal vamos testar se o mysql esta ok.

entre na pasta C:/

digite o comando: **mysql –version**

Ele deve dizer a versão do mysql.

Agora vamos de novo no site Mysql Download.

Clique em  **Mysql Connectors**

E agora em: **Connector/C (libmysql)**

Baixe a versão ZIP da versão 32, tem que ser a de 32. Mesmo que seu Windows seja 64 precisa ser a versão 32 neste caso.

**Tem um que diz VS2005, não pegue ele.**

– Abre o zip e copia um único arquivo que fica em:** /lib/libmysql.dll**

– Copia ele para a pasta do ruby192/bin e cola lá.

– Copia essa mesma dll para a pasta: windows/system32 do windows.

Agora no windows explorer entre na pasta: C**:/ProgramData/**

– Crie uma pasta "**gemrc**"

– Entra nesta pasta

Agora abre o Bloco de Notas como administrador:

– Coloque o comando: **"gem:" "–no-rdoc –no-ri"**  (com as aspas)

– Salve como arquivo:

.gemrc (marque todos os arquivos no tipo de arquivo antes de salvar, senão ele grava como arquivo de texto)

– Salva dentro daquela pasta que criamos agora, a gemrc

– Fecha e abre o powershell de novo

**3) Instalando o Rails**

No terminal entre na pasta C: e de o comando:

**gem update**

(ele da uma mensagem de permissão na pasta do usuário e arquivo gemrc, não se preocupe com isso)

Com esse comando ele atualiza as gems do Ruby.

Agora vamos instalar o Rails na versão que no meu caso é a **3.0.12.**

De o comando:

**gem install rails -v 3.0.12**

Ele da umas mensagens de erro sobre documentação, é estranho mas é normal.

Agora da um comando **rails -v** pra ver se ta ok.

Crie uma pasta para testar o projeto, digamos:** mkdir testerails**

Entra na pasta e agora da o comando do rails que cria um projeto usando banco de dados mysql.

**rails new teste -d mysql**

entra na pasta do projeto e da um comando para atualizar as gems do projeto:

**bundle update**

Agora vamos ver se esta tudo funcionando, vamos dar START no servidor do Rails.

Digite o comando:** rails s**

O servidor rails utiliza a **porta 3000** como porta padrão, então para acessar o projeto entre no endereço seguinte em seu navegador: **[http://localhost:3000](http://localhost:3000)**

**4- Instalando um bom editor para o Ruby on Rails**

Eu utilizo o **RubyMine**, no caso recomendo o uso dele por ser prático, mas fica a seu critério que editor de rails usar. O Rubymine você encontra aqui: [http://www.jetbrains.com/ruby/](http://www.jetbrains.com/ruby/)

Após instalar vamos fazer uma configuração de caminho dele para que seja possível abrir o projeto via terminal.

Vamos alterar as variaveis de sistema.

Acesse o Painel de controle,

clique em Sistema e Segurança,

Sistema e depois vai em Configuração Avançada de Sistema

e depois em Avançado e depois no botão Variavel de Ambiente

Agora vai na caixa Variaveis de Sistema e localiza a variável Path.

Seleciona e edita ela.

Depois do último código coloque um ponto e virgula ; e cole o caminho do executável do seu rubymine.exe com o caminho completo.

No meu caso a linha inteira do meu Path ficou assim:

**%SystemRoot%system32;%SystemRoot%;%SystemRoot%System32Wbem;%SYSTEMROOT%System32WindowsPowerShellv1.0;C:Program FilesMySQLMySQL Server 5.5bin;C:Program Files (x86)JetBrainsRubyMine 4.5.4bin**

Agora você pode abrir os projetos de rails pelo terminal com o comando:

**rubymine**

depois do nome rubymine você coloca o caminho onde está seu projeto, assim ele abre o programa já com o projeto na pasta certa.

ex: rubymine c:testerailsteste

**5- Instalando o Imagemagick**

Vamos baixar o arquivo binário do imagemagick para Windows na página
[http://www.imagemagick.org/script/binary-releases.php#windows](http://www.imagemagick.org/script/binary-releases.php#windows)

Na instalação do imagemagick:

Deixe marcado onde diz:** add application directory to your path**

Agora para testar e ver se funciona:

no terminal digite:

**convert logo: logo.gif**

identify logo.gif

imdisplay

**6- Instalando o GIT**

Entre no site msysgit.github.com

Vai em download e baixa a última versão executável.

Executa ele para iniciar a instalação.

Na instalação onde pergunta ajuste do PATH: Selecione o segundo que é: **Run Git the Windows Command Prompt**

Na próxima tela selecione: **Checkout as -is, commit as -is**

**7- Agora vamos instalar o apache**

Vai no site www.baixaki.com.br e procura por: Apache Windows.

Baixe a versão **apache 2.2.**

Ao instalar selecione a opção **CUSTOM.**

Na próxima tela marque para instalar também onde tem **Build Headers and Libraries**

Ela é a única que não fica por padrão marcada para instalar.

Após isso mude o caminho de onde o apache vai ser instalado.

Coloque para ele instalar em **c:wwwapache**

No caso precisa criar a pasta www e a pasta apache dentro dela, fica mais organizado.

Agora precisamos instalar o** PHP.**

Acesse [http://windows.php.net/download/](http://windows.php.net/download/)

Vamos instalar a versão** 5.3 para Windows com instalador Thread Safe**.

Veja que no site tem a Non Thread e a Thread. Vamos baixar esta versão: VC9 x86 Thread Safe

Pega o instalador para facilitar.

Na tela de instalação onde ele pede o caminho para instalar, selecione a pasta **www/apache/php5**

Na tela seguinte selecione o tipo de Web Server:

**Apache 2.2.x Module**

Na tela seguinte ele pede para você colocar o caminho da pasta de configuração do apache, coloque ali:

**C:wwwapacheconf**

Na próxima tela é sobre as **bibliotecas**

Em Extras selecione o **PEAR INSTALL**

Em** Extensions** selecione** Internationalization**

O resto deixe como está e de um next/install.

Vamos alterar a configuração padrão do caminho das páginas que o apache abre para ficar melhor.

Eu gosto de mudar porque organizo tudo em um local de fácil acesso.

Edite o arquivo com o bloco de notas aberto como administrador:

**apache/conf/httpd.conf**

localize a linha **"htdocs"**

tem duas linhas que tem q alterar.

Eu mudo para:

**DocumentRoot "D:/Sites"**

<Directory "D:/Sites">

Você pode mudar para o caminho que achar melhor, ou se preferir nem mude!

Agora vamos adicionar um outro detalhe no config para ele ler arquivos php automaticamente.

**Procure por: DirectoryIndex index.html**

Altere para: DirectoryIndex index.html index.php

Pronto, pode salvar o arquivo de configurações do apache.

Agora para testar crie um arquivo index.php neste caminho novo que você alterou.

No conteúdo desse arquivo coloque com o Bloco de Notas:

**<?**

phpinfo();

?>

Salve ele e reinicie o apache. O botão do apache para iniciar, parar e reiniciar está do lado do relógio.

Agora via navegador acesse **[http://localhost](http://localhost)**

Deve aparecer sua pagina index.php se o apache estiver ok com a configuração do PHP.

Vamos fazer uma última configuração do PHP para conseguirmos usar o phpmyadmin um pouco a frente.

Vá até a pasta **www/apache/php5**

Copie o arquivo **php.ini**

Tem 3 arquivos chamados php lá, um é aplicativo, outro é um gif e outro é o php.ini

Copia ele e cola na pasta do Windows em **c:windows**

**Pronto, terminamos!**

Agora que o apache e o php estão OK, vamos colocar o **phpmyadmin** para facilitar a navegação ao banco de dados.

Acesse o site [http://www.phpmyadmin.net/home_page/downloads.php](http://www.phpmyadmin.net/home_page/downloads.php)

Baixe o phpmyadmin em zip.

Descompacta o conteúdo dele lá na pasta onde o apache carrega as páginas, no meu caso no

D:Sitesphpmyadmin (coloque tudo minúsculo)

E agora tente acessar: [http://localhost/phpmyadmin](http://localhost/phpmyadmin)

Entre com o usuário: root

E a senha que você cadastrou para o mysql no inicio deste tutorial.

Se conseguiu conectar, então é porque está tudo funcionando!

Agora o final do tutorial… com o php instalado a gente consegue usar o phpmyadmin que é para navegar entre os bancos.

Como já temos o Ruby, Rails e o Mysql prontos, então agora sim podemos colocar um projeto de testes para ver o que acontece.

Vamos lá, faz o seguinte teste bem simples:

Abre o terminal como administrador

Crie uma pasta: **mkdir teste2**

Entre nela

Agora de o comando rails: **rails new blog –d mysql**

Depois o outro comando:

**rails g scaffold noticia texto:text data:date**

Agora você precisa editar o arquivo do banco de dados do aplicativo rails para conseguir criar e migrar o banco.

Abre lá em conf/database.yml com o Rubymine ou seu editor de preferencia.

Você precisa adicionar a senha do banco de dados nos bancos de teste, desenvolvimento e produção.

Também é necessário trocar a linha abaixo:

**Onde tiver: host: localhost**

Coloque: host: 127.0.0.1

E adicione mais duas linhas no final de cada dado do banco teste, desenvolvimento e produção:

**socket: mysql

port: 3306**

Salve o arquivo.

Agora no terminal de os comandos:

**rake db:create**

rake db:migrate

Acesse o phpmyadmin e veja que lá estão seus bancos de dados criados.

Vai no navegador em **[http://localhost:3000/noticia](http://localhost:3000/noticia)**

O rails pluraliza os temos, mas noticia ele não transforma em notícias.

Sua aplicação está lá pronta para uso com banco rodando.

**Bom uso do Rails no Windows 8!**
