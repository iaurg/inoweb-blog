---
title: Usar Thin para dar start em aplicações rails no windows 8
slug: usar-thin-para-dar-start-em-aplicacoes-rails-no-windows-8
date_published: 2013-06-21T02:08:55.000Z
date_updated: 2013-06-21T02:08:55.000Z
---

Pequena dica de como mudar o servidor padrão de start do rails para o thin.

É bastante útil no Windows 8 onde o comando rails s da start no servidor padrão e costuma dar alguns bugs as vezes.

É bem simples, em seu Gemfile adicone no final estas linhas:

**group :development do

  gem 'faye'

  gem 'thin'

end**

Desta forma ele vai usar o thin somente para o modo de desenvolvimento em sua maquina windows.

Quando subir o projeto para um servidor de produção a linha nem será carregada.

Para dar start no servidor com thin use no terminal: **thin start**
