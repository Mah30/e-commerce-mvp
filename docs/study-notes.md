## Business Rules
Business rules sao as regras que dizem como o sistema deve se comportar para fazer sentido para o negocio.

# Checkout And Order Rules 
Explicacao em portugues: checkout e uma area critica. Se o pedido for criado mas o estoque nao baixar, ou se o estoque baixar mas o pedido falhar, o banco fica inconsistente.



## QA Strategy 
Explicacao em portugues: primeiro vamos aprender como o sistema deve funcionar. Depois, quando os fluxos estiverem claros, podemos automatizar os testes mais importantes.

Uma boa anotacao de QA permite que outra pessoa entenda o problema e consiga reproduzir o bug.


## Manual QA Checklist
Checklist ajuda a testar com consistencia e evita esquecer fluxos importantes.


## Accessibility Checklist
Accessibility significa criar uma interface que funcione bem para pessoas com diferentes necessidades, dispositivos e formas de navegacao.


## API Plan
API routes sao os caminhos que o frontend chama para buscar ou alterar dados no backend.

Explicacao em portugues: `401` significa que o usuario nao esta autenticado. `403` significa que ele esta logado, mas nao tem permissao.


## Bug Report Template
Bug report bom precisa permitir que outra pessoa reproduza o problema sem adivinhar o que aconteceu.


## Database Plan
PostgreSQL e o banco de dados relacional. Prisma e a ferramenta que ajuda o backend a criar, ler, atualizar e relacionar dados no banco.

Em banco relacional, relationships mostram como as tabelas se conectam. Esses relacionamentos precisam refletir as regras reais do e-commerce.


## Definition Of Done
Definition of Done e uma lista minima para decidir se uma tarefa realmente terminou.


## Regression Checklist
Regression testing verifica se uma mudanca nova quebrou algo que antes funcionava.


## Security Notes
Explicacao em portugues: seguranca nao e so login. Tambem envolve permissao, dados sensiveis, validacao e configuracao correta do navegador/API.

Authorization e uma das areas mais importantes. O backend sempre deve decidir se a pessoa pode executar uma acao.


## Sample Manual Test Cases
Test case e um passo a passo especifico com resultado esperado. Ele transforma uma ideia de teste em algo repetivel.