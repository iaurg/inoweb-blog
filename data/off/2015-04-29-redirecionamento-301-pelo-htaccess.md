---
title: Redirecionamento 301 pelo htaccess
slug: redirecionamento-301-pelo-htaccess
date_published: 2015-04-29T16:19:21.000Z
date_updated: 2015-04-29T16:19:21.000Z
tags: Tutoriais, Servidor
---

Ao mudar seu site para um outro domínio ou fazer upgrade de uma plataforma, muitas vezes acaba se perdendo os links já indexados do site ou domínio anterior.

Para evitar perda de links, faça um redirecionamento 301 pelo htacess para informar aos buscadores qual seu novo domínio ou qual é o endereço de cada uma das páginas novas.

Exemplo: Se o seu domínio anterior era: lojadojoaquim.com.br e mudou para: superlojademoveis.com.br

Faça um redirecionamento no htacess dentro da hospedagem do seu antigo domínio conforme abaixo:

> **Options +FollowSymLinks
> 
> RewriteEngine on
> 
> RewriteRule (.*) [http://www](http://www).superlojademoveis.com.br/$1 [R=301,L]**

Mas se quiser indicar as páginas antigas de um mesmo domínio para as páginas novas, geralmente quando se muda a plataforma ou coisas do gênero, faça de outra forma.

Exemplo: Se o seu domínio continua o mesmo, mas a página antiga se chamava seusite.com.br/servicos-para-escola/ e agora a página nova se chama seusite.com.br/site/servicos/ crie no htacess conforme abaixo:

> **redirect 301 /servicos-para-escola/ [http://www.seusite.com.br/site/servicos/](http://www.seusite.com.br/site/servicos/)**

## Qual a diferença entre redirecionamento 301 e 302?

Se você quer redirecionar uma página para outro endereço definitivamente, então use o 301.

O 302 é utilizado para redirecionamento temporário. Se ele for usado por muito tempo, o Google pode “tirar” pontos de seu site por conta do mau uso.
