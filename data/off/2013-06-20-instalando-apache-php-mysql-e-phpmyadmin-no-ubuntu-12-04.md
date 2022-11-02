---
title: Instalando Apache, Php, Mysql e Phpmyadmin no Ubuntu 12.04
slug: instalando-apache-php-mysql-e-phpmyadmin-no-ubuntu-12-04
date_published: 2013-06-21T01:48:07.000Z
date_updated: 2019-02-21T17:40:36.000Z
---

Veja neste tutorial como instalar de forma bem fácil o Apache, Php, Mysql e Phpmyadmin no Ubuntu 12.04.

Começando:

1. Instalando apache 2:

No terminal…

`sudo apt-get install apache2`

1. Instalando mysql

`sudo apt-get install mysql-server mysql-client`

ele vai pedir a senha do root, coloque uma senha facil para não se esquecer. tipo 123456 mesmo 🙂

1. Agora instalando o php 5

`sudo apt-get install php5 libapache2-mod-php5`

após instalar é necessario reiniciar o apache

`sudo /etc/init.d/apache2 restart`

se der tudo certo vai mostrar OK

para testar corretamente crie um arquivo php de teste.

abra o Gedit ou qualquer editor de texto similar, no arquivo digite:

`sudo gedit /var/www/info.php`

coloque o codigo abaixo no arquivo e depois salve.

`<?php phpinfo(); ?>`

acesse: [http://localhost/info.php](http://localhost/info.php)

1. Instalando bibliotecas extras para o php:

`sudo apt-get install php5-mysql php5-curl php5-gd php5-idn php-pear php5-imagick`

`sudo apt-get install php5-imap php5-mcrypt php5-memcache php5-mhash php5-ming php5-ps php5-pspell`

`sudo apt-get install php5-recode php5-snmp php5-sqlite php5-tidy php5-xmlrpc php5-xsl php5-json`

Agora restart no apache:

`sudo /etc/init.d/apache2 restart`

1. Agora vamos mudar onde fica a pasta padrão do apache, colocaremos ela para setar na pasta home do usuario, fica melhor para criar e editar arquivos.

primeiro vai na sua pasta do usuario, digamos:**/home/paulo/**

lá crie uma pasta **www**

essa será a nova pasta padrao dos arquivos do apache.

Entre na pasta de instalação do apache (geralmente em **/etc/apache2**)

`cd /etc/apache2`

Entre na pasta **sites-available**

Rode o comando abaixo para podermos editar o arquivo **default**

`sudo nano default`

Procure por **/var/www/** no arquivo **default** e mude para a pasta que você quer.

Pressione Ctrl+O para salvar a alteração e Ctrl+X para sair do editor nano

Rode o comando abaixo para reiniciar o apache:

`sudo/etc/init.d/apache2 restart`

1. Agora vamos instalar o phpmyadmin para navegar no banco.

esse é bem simples, acesse o **[http://www.phpmyadmin.net/home_page/downloads.php](http://www.phpmyadmin.net/home_page/downloads.php)**

**baixe a versao .tar.gz all language**

depois de baixar descompacte ele na pasta do usuario.

Mude o nome da pasta para apenas: **phpmyadmin**

e agora copie esta pasta para dentro de sua pasta WWW que ficou na home do usuario.

Pronto, php, mysql e phpmyadmin instalado no seu ubuntu 12.04 bem simples de configurar.
