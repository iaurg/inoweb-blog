---
title: Corrigindo erro de mysql 5.5 no rails 3 pelo snow leopard
slug: corrigindo-erro-de-mysql-5-5-no-rails-3-pelo-snow-leopard
date_published: 2013-06-21T02:01:05.000Z
date_updated: 2013-06-21T02:01:05.000Z
---

Existe um bug bem chado de mysql 5.5 no rails3 pelo snow leopard e pelo lion.

O que acontece é que a gem mysql2 não encontra o caminho correto do mysql e vice-versa, é uma salada.

Encontrei na internet um tempo atrás e até divulguei no blog de um colega, segue a dica:

Após instalar o mysql e o rails tudo certinho, seu rake e scaffold vai dar problema ao executar uma tarefa, o erro vai ser mais ou menos isso:

(um monte de bla bla bla +) mysql2.bundle, 9): Library not loaded: libmysqlclient.18.dylib (LoadError)

Solução: Setar o caminho certo pro mysql e mysql2 dando o caminho inteiro. Este caminho pode variar de acordo com sua versão do mysql2, por isso é legal usar o TAB para auto-completar e não fazer errado.

No meu caso ficou assim:
**sudo install_name_tool -change libmysqlclient.18.dylib /usr/local/mysql/lib/libmysqlclient.18.dylib ~/.rvm/gems/ruby-1.9.2-p180/gems/mysql2-0.2.17/lib/mysql2/mysql2.bundle**

Desta forma eu não tive mais problemas.

Mas para completar ainda mais, segue a dica de uma pessoa que comentou no outro blog que postei.

Ele disse que a solução acima deu certo, só que em um novo projeto ele teve que fazer o processo de novo, então ele encontrou uma outra dica que dizia para fazer este comando abaixo, recomendo usar somente se a solução acima não for satisfatória:

**sudo ln -s /usr/local/mysql/lib/libmysqlclient.18.dylib /usr/lib/libmysqlclient.18.dylib**
