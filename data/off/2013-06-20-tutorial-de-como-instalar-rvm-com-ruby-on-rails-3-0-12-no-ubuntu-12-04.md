---
title: Tutorial de como instalar RVM com Ruby on Rails 3.0.12 no Ubuntu 12.04
slug: tutorial-de-como-instalar-rvm-com-ruby-on-rails-3-0-12-no-ubuntu-12-04
date_published: 2013-06-21T01:50:28.000Z
date_updated: 2013-06-21T01:50:28.000Z
---

Segue um tutorial bem rapido de como instalar o RVM com Ruby 1.9.2 e Rails 3.0.12 com Mysql e Sqlite3 rodando redondinho para Ubuntu 12.04.

Primeiro vamos instalar o curl

> **sudo apt-get install curl**

agora vamos instalar o rvm pelo terminal:

> **curl -L get.rvm.io | bash -s stable**

agora para funcionar o rvm no terminal digite:

> **source /home/SUAPASTADOUSUARIO/.rvm/scripts/rvm**

apos isso digite: **rvm**

vai mostrar varias infos do rvm, se isso acontecer é porque deu certo.

Existem algumas dependencias que o rvm pede, digite: **rvm requerments**

no meu caso ele pediu as dependencias que posso instalar no comando abaixo:

> **sudo apt-get install build-essential openssl libreadline6 libreadline6-dev curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev automake libtool bison subversion**

> **sudo apt-get install git-core libmysqlclient-dev**

feito, nosso rvm ta ok.

vamos instalar o ruby agora na versão 1.9.2

digite:

> **rvm install 1.9.2**

agora é necessario setar como default esse ruby.

> **rvm 1.9.2 –default**

vamos testar:

> **ruby -v**

deve mostrar a versão do ruby instalada se voce fez certo.

Feito, vamos atualizar o pacote de gem.

digite:

> **gem update –system**

a seguir vamos instalar a versão 3.0.12 do Rails

> **gem install rails –version=3.0.12**

veja que setamos qual versão eu quero instalar.

depois de instalar digite:

> **source /home/SUAPASTADOUSUARIO/.rvm/scripts/rvm**

verifique se deu certo digitando:

> **rails -v**

ele deve mostrar a versão do Ruby on Rails como 3.0.12

Agora precisamos instalar a gem que usa o mysql, o nome dela é mysql2.

Para a versão do rails que instalamos, só funciona a 0.2.17

para instalar digite:

> **gem install mysql2 –version=0.2.17**

Agora vamos instalar a gem sqlite3

> **gem install sqlite3**

Pronto!

Vamos testar…

> **gem list**

estão lá todas as gems !

E agora uma ultima coisa, setar para não precisar digitar o "source" toda vez que abrir o terminal.

**nano .bashrc**

no final do arquivo coloque: **source $HOME/.rvm/scripts/rvm **

Bom uso de seu **Ruby on Rails 3.0.12 no Ubuntu 12.04**
