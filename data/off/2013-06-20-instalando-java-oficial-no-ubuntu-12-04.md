---
title: Instalando Java oficial no Ubuntu 12.04
slug: instalando-java-oficial-no-ubuntu-12-04
date_published: 2013-06-21T01:52:30.000Z
date_updated: 2013-06-21T01:52:30.000Z
---

Este tutorial explica como instalar corretamente o Java 7 oficial e remover o JDK.

Será necessário adicionar um repositório ao apt-get.

1. 
Vamos remover o jdk pelo terminal: **sudo apt-get purge openjdk***

2. 
agora rode os comandos abaixo para add o repositorio, atualizar o apt-get e instalar o java7.

> **sudo add-apt-repository ppa:webupd8team/java
> 
> sudo apt-get update
> 
> sudo apt-get install oracle-java7-installer**

Feito, agora deve estar ok.
