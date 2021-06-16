
# Comentários sobre o desenvolvimento da aplicação.

Estou usando um **ruby 2.4.4** já que eu trabalho com esse e para eu não ficar mudando de versões entre meus projetos optei por fazer direto nele. Sinta-se livre para usar versões mais recentes; 


A aplicação de Rails + React, terá o react já implementado no Rails, invés de trabalhar como API e dois sistemas independentes, afim de ganhar tempo de desevolvimento.
Já que o react está integrado ele pode demorar pra compilar, caso queira fazer mudanças no código, nesse caso rode o seguinte comando em outra janela de terminal para ter live code reloading:

>./bin/webpack-dev-server


Vou colocar a lógica de fazer o request para fakerapi na Seed, para popular meu DB.

Rodar para popular seu DB localmente:
>rails db:seed

Deixei alguns testes no Rspec.


Coloquei a lógica de salvar mudanças no kanban em um callback do proprio kanban que dispara um request pro rails para salvar no banco, isso faz que o salvamento seja um flow instântaneo. Já vi muitos trellos boards que salvam a cada minuto, essa é uma outra opção de fazer criar, um setInterval a cada 2 minutos e salva o que tá no kanban.



TODO restante: 
- [ ] #1 Trabalhar o Layout do Sistema

- [X] #2 Passar as lógicas do shelves_controller para serviços para não deixar os controles inchados.

- [ ] #3 Fazer um própria Navbar com logout e login por ela, invés de deixar o cookie sobescrever toda vez que alguem refaz o login.

- [ ] #4 Setar o rails-react-devise e passar toda a lógica do user para dentro do devise, garantir proteção de senhas.

- [x] #5 Realizar testes de EndPoints
