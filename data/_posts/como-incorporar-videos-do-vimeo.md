---
title: "Como incorporar videos do Vimeo em seu site"
excerpt: "Entenda como incorporar vídeos do Vímeo dentro do seu site e conheça os parâmetros de configuração do Vimeo."
seoTitle: Como incorporar videos do Vimeo em seu site
seoDescription: Entenda como incorporar vídeos do Vímeo dentro do seu site e conheça os parâmetros de configuração do Vimeo.
date: "2019-04-17T15:54:53.000Z"
author:
  name: Italo A.
  picture: "/img/authors/italo.jpeg"
category: marketing
tags: site, tutorial
---

Para ter um conteúdo mais atraente incorporar um vídeo em seu site pode ser muito interessante.

É comum querermos adicionar videos dentro dos sites que desenvolvemos, normalmente utilizamos plataformas de compartilhamento de videos como o Vimeo ou Youtube para não sobrecarregar o servidor dos clientes.

Para publicar os videos dentro de sites utilizamos o embed ou mais conhecido como incorporar, um recurso presente na maioria das plataformas de vídeos que permitem a compartilhação do conteúdo por meio de um código simples.

Saiba como você mesmo pode incorporar um vídeo do Vimeo em seu site e entreter seu público.

Esse tutorial ensinará você:

- Como incorporar vídeo do Vimeo sem som
- Como incorporar vídeo do Vimeo em loop
- Como colocar vídeo do Vimeo em seu site

## Resumindo como incorporar videos Vimeo

1. Acesse no [Vimeo](https://vimeo.com/) o vídeo que deseja incorporar
2. Passe o mouse sobre o vídeo e clique em **compartilhar**
3. Copie o código do campo **Incorporação**
4. Cole o código copiado dentro de seu site na parte de editor de texto

Confirar abaixo o passo-a-passo ilustrado de como incorporar vídeos do **Vimeo** em seu site.

## 1. Selecione o Video que deseja incorporar

![como-incorporar-video-vimeo](/content/images/2019/04/como-incorporar-video-vimeo.png)

Ao acessar qualquer vídeo dentro do vimeo você tem a opção de incorporar (embed) que permite que você mostre um video dentro de seu site ou plataforma, esta opção está localizada no canto direito ao passar o mouse por cima do vídeo, é última opção chamada "Compartilhar".

## 2. Configurar a incorporação do vídeo

Ao clicar em "Compartilhar" será disposta a seguinte tela para você:

![compartilhar-video-vimeo](/content/images/2019/04/compartilhar-video-vimeo.png)

Neste caso vamos utilizar a última opção de "Incorporação" que disponibiliza um código para que possa ser copiado e colado para mostrar um vídeo em seu site.

Clique em **+ Mostrar opções** para que você possa configurar o vídeo de acordo com o que precisa.

![incorporar-video-vimeo](/content/images/2019/04/incorporar-video-vimeo.png)

As opções de incorporação permitem que você ative o autoplay, loop, video responsivo, descrição do vídeo e mostrar link do video. Basta selecionar as caixas das opções que deseja utilizar no seu caso. No exemplo que estamos trabalhando queremos um vídeo em loop, responsivo com autoplay e sem som, então vamos marcar as seguintes opções:

![opcoes-video-vimeo](/content/images/2019/04/opcoes-video-vimeo.png)

Após marcarmos todas as opções necessárias vamos copiar o código gerado, que fica no campo abaixo do título "Incorporação", temos o seguinte código para copiar e colar no site, este código já é funcional, porém sem a opção de vídeo mudo.

`<div style="padding:52.81% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/120680495?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`

Caso queira apenas colocar um vídeo do Vimeo dentro de seu site pode parar por aqui, copie o código gerado no incorporar do Vimeo e cole em seu site. Pronto, o player de vídeo já aparecerá em seu site.

## 3. Removendo som do vídeo

Para deixarmos o vídeo mudo precisaremos editar um pouco o código que o Vimeo fornece, é uma adição bem básica. Iremos adicionar um parâmetro para configuração do vídeo. Você pode conferir todos os parâmetros disponíveis [clicando aqui](https://help.vimeo.com/hc/en-us/articles/360001494447-Using-Player-Parameters).

Para deixar o video sem som vamos aplicar o parâmetro `muted=1` ao final da linha `src="https://player.vimeo.com/video/120680495?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0&muted=1"`, atente em manter as aspas e divisores (&) de parâmetros, cada parâmetro é separado por um divisor caso queira adicionar mais. Neste caso o muted=1 significa true, dizendo que o vídeo deve ser mudo.

O código final fica dessa maneira:

`<div style="padding:52.81% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/120680495?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0&muted=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`

E funciona da seguinte maneira incorporado em um site:

## Conclusão

A incorporação de vídeos dentro de sites é bem simples e prática, a plataforma do Youtube também possui uma opção similar para que você possa adicionar vídeos em seu site.

Caso tenha ficado com alguma dúvida ou dificuldade no processo comente abaixo para que possamos ajudá-lo.

Tenha um bom dia! :D
