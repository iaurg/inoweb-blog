---
title: "Aumentar memória do Wordpress"
excerpt: "O limite de memória padrão do Wordpress é 32MB, porém é muito comum exceder esse limite e receber o erro Fatal error: Allowed memory size"
seoTitle: Aumentar memória do Wordpress
seoDescription: "O limite de memória padrão do Wordpress é 32MB, porém é muito comum exceder esse limite e receber o erro Fatal error: Allowed memory size"
date: "2019-04-23T14:34:43.000Z"
author:
  name: Italo A.
  picture: "/img/authors/italo.jpeg"
category: wordpress
tags: wordpress, tutorial, performance
---

O limite de memória padrão do Wordpress é 32MB, porém é muito comum exceder esse limite e receber o erro `Fatal error: Allowed memory size`, o erro de memória que aparece é similar ao seguinte:

`Fatal error: Allowed memory size of 26598 bytes exhausted (tried to allocate 669588 bytes) in /home/xxxxx/public_html/wp-includes/plugin.php on line xxx`

É um erro simples que apenas informa: **limite de memória excedida no WordPress**

Antes de qualquer alteração em seus arquivos lembre-se de fazer um backup por segurança.

## Para aumentar a memória do Wordpress em seu site:

1. Abra seu _wp-config.php_, por padrão está localizado na pasta root do Wordpress.
2. Encontre a linha com o seguinte comentário no final do arquivo `/* Isto é tudo, pode parar de editar! :) */`
3. Acima desta linha adicione o código `define('WP_MEMORY_LIMIT', '512M');`

Salve suas alterações e envie o arquivo para o servidor com as novas configurações de memória.

Você pode aumentar a memória do Wordpress para números maiores de acordo com suas necessidades. Veja mais detalhes no [Wordpress Codex](https://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP)

Caso ainda permaneça algum erro referente á memória entre em contato com seu servidor de hospedagem para que eles possam analisar sua conta e lhe ajudar.
