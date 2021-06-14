#TODO formatar README Após
Comentários sobre o desenvolvimento da aplicação.

Estou usando um ruby 2.4.4 já que eu trabalho com esse e para eu não ficar mudando de versões entre meus projetos optei por fazer direto nele. Sinta-se livre para usar versões mais recentes; 

Setei Rspec e se sobrar tempo escreverei alguns testes.

A aplicação de Rails + React, terá o react já implementado no Rails, invés de trabalhar como API e dois sistemas independentes.
Já que o react está integrado ele pode demorar pra compilar, caso queira fazer mudanças no código, nesse caso rode o seguinte comando em outra janela de terminal para ter live code reloading:

./bin/webpack-dev-server


Vou colocar a lógica de fazer o request para fakerapi na Seed, para popular meu BD.

Rodar rails db:seed para popular seu BD localmente.


A princípio não vou persistir o Usuário. o ideal seria escrever alguns helpers para salvar no cookies ou usar redux para persistir no front e usar o devise para manipular no back. Afim de ganhar tempo não vou fazer isso nesse teste.
