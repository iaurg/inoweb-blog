---
title: Alterar porta SMTP 25 para porta segura SSL
slug: alterar-porta-smtp-25-para-porta-segura-ssl
date_published: 2013-06-21T02:15:51.000Z
date_updated: 2013-06-21T02:15:51.000Z
---

 Tutorial de como alterar a porta 25 de saida dos emails no outlook e programas similares. É necessário alterar esta porta para que seus emails funcionem normalmente caso utilize os emails pelo cPanel. Se você usa app google não é necessário alterar.

Nós montamos um vídeo Tutorial bem explicado de como funciona esta alteração para você cliente, colocamos no quadro abaixo o vídeo, veja com calma para configurar corretamente.

Esta mudançã é devida a uma recomendação da ANATEL visando o bloqueio de SPAM.

Ação adotada em grande escala pelas operadoras a partir de agora, caso queira ler sobre este documento acesse em PDF: 
[http://antispam.br/porta25/brasil/acordo-cgibr-anatel-porta25.pdf](http://antispam.br/porta25/brasil/acordo-cgibr-anatel-porta25.pdf)

  
**Caso não consiga ler no vídeo as informações de configurações são**:  
  

 Servidor de entrada de e-mails:   
 server.inoservphp.com.br OU

server.inoservrails.com.br

 Servidor de saída de e-mails:   
 server.inoservphp.com.br OU

server.inoservrails.com.br

 Em "Mais configurações…": 

 Na aba "Avançado" 

 Servidor de entrada(POP3): 995 

 E MARCAR que este servidor requer uma conexão criptografada(SSL)  
   

 Servidor de saída (SMTP): 465 

 Usar o seguinte tipo de conexão criptografada: SSL 
