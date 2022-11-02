---
title: Como remover e instalar o broffice no ubuntu 12.04
slug: como-remover-e-instalar-o-broffice-no-ubuntu-12-04
date_published: 2013-06-21T01:58:22.000Z
date_updated: 2013-06-21T01:58:22.000Z
---

Bem, já tive problemas com o broffice padrão do ubuntu, várias vezes ele já "sumiu" depois de um simples update do ubuntu aqui na empresa.

Não sei dizer qual update acabou removendo ele, mas aconteceu em duas maquinas, então resolvi desinstalar manualmente nas outras e instalar de novo. Após isso nunca mais o problema voltou a acontecer.

Segue tutorial simples:

1. Vamos remover o broffice da maquina

> **sudo apt-get remove openoffice*.***

1. 
Recomendo instalar o Java 7 official, tem um topico aqui no nosso blog que explica certinho.

2. 
Baixe a última versão do broffice no site: **[http://www.libreoffice.org/download](http://www.libreoffice.org/download)**

Pega a versão .deb que vem .tar.gz, é o Main Installer

1. 
Vamos descompactar, acessa via navegador de pasta no Downloads(geralmente fica nesta pasta seus downloads), clique com o direito e coloca para descompactar ali.

2. 
Agora via terminal acesse a pasta que foi descompactado e digite:

> **cd DEBS**
> 
> sudo dpkg -i *deb

Desta forma você vai instalar corretamente o programa.

Aguarde a instalação.

No ubuntu 12 não precisa instalar o desktop integration, mas se quiser no caso de não achar o aplicativo…

Acesse na pasta DEBS a pasta desktop-integration e de um duplo clique no arquivo que esta lá para instalar.

Reinicie a maquina e pronto!
