---
title: Dica de como desistalar o Ruby e o RVM
slug: dica-de-como-desistalar-o-ruby-e-o-rvm
date_published: 2013-06-21T02:00:09.000Z
date_updated: 2019-02-21T17:39:49.000Z
---

As vezes da aquele bug no rails, no ruby ou no rvm.

Tem uma forma de desistalar somente o ruby e uma de explodir tudo que tem no rvm para começar do zero.

Geralmente quando da problema no rails, ruby e rvm é complicadinho de arrumar. Então é melhor meter o pé em tudo e fazer de novo.

Limpar a maioria das gems: **gem clean**

Para desinstalar o ruby:** rvm uninstall 1.9.2**

Para explodir o rvm e deletar tudo:** rvm implode**

Feito, agora você pode instalar o rvm e começar de novo!
