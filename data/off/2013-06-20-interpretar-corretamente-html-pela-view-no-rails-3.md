---
title: Interpretar corretamente html pela view no rails 3
slug: interpretar-corretamente-html-pela-view-no-rails-3
date_published: 2013-06-21T01:59:25.000Z
date_updated: 2019-03-27T12:51:53.000Z
tags: Programação
---

Por padrão o rails 3 não deixa código html ser mostrado na view, é um fator de segurança.

Mas aonde você sabe que é seguro e quer que mostre como por ex. um campo editado pelo ckeditor, coloque o código:

Estive com problemas de como mostrar texto com html no rails 3 usando um editor ckeditor.

Pesquisei e descobri que o rails por segurança bloqueia as string com html, para mostrar tem que fazer uma alteração simples na view no campo que deseja mostrar codigo html correto.

ex:

seu campo esta: <%= blog.texto %>

mude para: <%= blog.texto.html_safe %>

Desta forma deve resolver o problema de não ler html.
