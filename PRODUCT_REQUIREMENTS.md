# PRD - Product Requirements Document

# *Introdução & objetivo*

O objetivo deste projeto é desenvolver uma aplicação web para gerenciar as atividades de manutenção em uma empresa industrial que fabrica peças automotivas. O sistema atual, que é manual, apresenta diversos problemas como falta de organização, comunicação ineficiente e perda de produtividade. A nova aplicação visa otimizar os processos, melhorar a comunicação e organização, e, consequentemente, aumentar a produtividade e segurança dos colaboradores.

# *Por que* implementar isto?

A implementação deste sistema visa resolver problemas críticos do sistema manual atual, como desorganização e comunicação ineficaz, que afetam a produtividade e geram custos elevados. Ao centralizar dados e automatizar processos, o sistema promete melhorar a comunicação entre equipes, reduzir atrasos e aumentar a eficiência operacional. Essa solução não apenas alinha a empresa às demandas de mercado por tecnologias mais eficientes, mas também oferece uma base sólida para redução de custos e melhor gestão, agregando valor significativo ao negócio e garantindo uma vantagem competitiva.

---

# ***Público alvo***

A aplicação será utilizada principalmente por três grupos de usuários dentro da empresa:


| Perfil de usuário | Descrição, necessidades e interesses. |
| --- | --- |
| Gerentes de Manutenção	| Necessitam de uma visão geral das atividades de manutenção, relatórios detalhados e controle de custos.  |
| Equipes de Manutenção	 | Precisam cadastrar solicitações de manutenção e informar o status, registrar atividades e acompanhar o estoque de peças. |

# Personas

1. **Carlos, o Gerente de Manutenção:** 
    - Nome: Carlos Silva
    - Ocupação: Gerente de Manutenção
    - Objetivos: Manter a operação eficiente, reduzir custos de manutenção, garantir a segurança.
    - Frustrações: Falta de visibilidade sobre o status das manutenções e dificuldade em gerar relatórios detalhados.

2. **Camila, a Técnica de Manutenção:** 
    - Nome: Camila Yukari
    - Ocupação: Técnica de Manutenção
    - Objetivos: Resolver problemas de manutenção rapidamente, registrar atividades de forma eficaz.
    - Frustrações: Comunicação ineficiente com outros membros da equipe e dificuldade em rastrear peças e materiais utilizados.

---

# *Requisitos Funcionais*

## Gerenciamento de Máquinas

1. *FI - Cadastrar Máquina*
   - **Descrição:** Realizar cadastro de uma nova máquina no sistema
   - **Critérios de Aceitação:** Incluir no cadastro os campos nome, tipo, modelo, data de fabricação, número de série, localização, histórico de manutenção e a possibilidade de fazer upload de imagens
   - **Prioridade:** P1

2. *FI - Visualizar detalhes da Máquina*
   - **Descrição:** Visualizar informações detalhadas sobre a máquina e o histórico de manutenção.
   - **Critérios de Aceitação:** Incluir nos detalhes o nome, tipo, modelo, data de fabricação, número de série e localização da máquina. Além da visualização de imagem (caso forem adicionadas), histórico de manutenção e as peças e materiais utilizados. 
   - **Prioridade:** P1

## Gestão de solicitações de manutenção

3. *FI - Cadastro de solicitações de manutenção*
   - **Descrição:** Cadastrar informações referentes a uma nova solitcitação de manutenção
   - **Critérios de Aceitação:** Incluir no cadastro a descrição do problema, data de solicitação, prioridade e o responsável. 
   - **Prioridade:** P1

4. *FI - Visualizar o status da manutenção*
   - **Descrição:** Visualizar o status da solicitação de manutenção 
   - **Critérios de Aceitação:** Visualizar o status da manutenção 
   - **Prioridade:** P1

5. *FI - Atualizar o status da manutenção*
   - **Descrição:** Atualizar o status da solicitação de manutenção
   - **Critérios de Aceitação:** Atualizar o status entre pendente, em andamento, concluída, cancelada. 
   - **Prioridade:** P1

6. *FI - Adicionar comentários e arquivos*
   - **Descrição:** Adicionar comentários e arquivos relacionados à uma solicitação de manutenção já registrada
   - **Critérios de Aceitação:** Adição de comentários e arquivos  
   - **Prioridade:** P1

7. *FI - Atribuir equipes de manutenção às solicitações.*
   - **Descrição:** Atribuir uma equipe de manutenção como responsável por uma solicitação de manutenção já cadastrada no sistema
   - **Critérios de Aceitação:** Tornar uma equipe de manutenção responsável por uma soliticação.
   - **Prioridade:** P1




1. **F1: Gerenciamento de Máquinas**
   - **Descrição:** Cadastro de máquinas com informações detalhadas, visualização do histórico de manutenções.
   - **Critérios de Aceitação:** Deve ser possível cadastrar, editar e visualizar máquinas e seu histórico.
   - **Prioridade:** P1

2. **F2: Gerenciamento de Manutenções**
   - **Descrição:** Cadastro e acompanhamento de solicitações de manutenção, atribuição de equipes.
   - **Critérios de Aceitação:** Deve ser possível cadastrar solicitações, atualizar status e adicionar comentários e arquivos.
   - **Prioridade:** P1

3. **F3: Controle de Estoque de Peças**
   - **Descrição:** Cadastro e gerenciamento de peças de reposição, visualização de estoque em tempo real.
   - **Critérios de Aceitação:** Deve ser possível registrar entrada e saída de peças, visualizar relatórios de estoque.
   - **Prioridade:** P1

4. **F4: Gerenciamento de Equipes**
   - **Descrição:** Cadastro de equipes de manutenção e gerenciamento da disponibilidade dos colaboradores.
   - **Critérios de Aceitação:** Deve ser possível cadastrar equipes, atribuir solicitações e visualizar disponibilidade.
   - **Prioridade:** P2

5. **F5: Autenticação e Autorização**
   - **Descrição:** Criação de contas de usuário com diferentes níveis de acesso.
   - **Critérios de Aceitação:** Deve ser possível criar contas e controlar acesso às funcionalidades da aplicação.
   - **Prioridade:** P1

**P1** = **Crítico | P1 = Importante | P2 = Bom ter**

### *Casos de uso*

> **Caso de uso 1:** Descreva como os usuários utilizarão o produto em diferentes cenários. Isso ajuda a ilustrar a aplicação prática das funcionalidades.
> 

> **Caso de uso 2:** Descreva como os usuários utilizarão o produto em diferentes cenários. Isso ajuda a ilustrar a aplicação prática das funcionalidades.
> 

> **Caso de uso 3:** Descreva como os usuários utilizarão o produto em diferentes cenários. Isso ajuda a ilustrar a aplicação prática das funcionalidades.
> 

---

# *Requisitos Não Funcionais*

[Os requisitos não funcionais descrevem os critérios de desempenho, segurança, usabilidade e outras características que o sistema deve possuir. Eles garantem que o sistema funcione eficientemente sob diversas condições.]

1. **NF1:** Identifique aspectos como desempenho, segurança, usabilidade, confiabilidade, etc. **P1**
2. **NF2:** Identifique aspectos como desempenho, segurança, usabilidade, confiabilidade, etc. **P2**
3. **NF3:** Identifique aspectos como desempenho, segurança, usabilidade, confiabilidade, etc. **P3**

**P1** = **Crítico | P1 = Importante | P2 = Bom ter**

### 📊 Métricas

[Seja específico ao descrever os padrões ou métricas que devem ser atendidos. Inclua descrições detalhadas e, se possível, métricas mensuráveis.]

| Medida | Estado atual | Esperado | Resultados |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

---

# *Fora de escopo*

<aside>
🚫 Liste todos os itens que estarão fora do escopo deste recurso do produto

</aside>

# *User Experience*

<aside>
🖍️ Crie links para seu arquivos de UX aqui: UX Flows, UI, etc.

</aside>

# *Dependências*

<aside>
⚠️ Quais necessidades que precisam ser supridas para que este produto/feature seja desenvolvido?

</aside>

# *Plano de lançamento*

*Crie uma lista de itens que precisão ser atendidos para o lançamento do produto no mercado, por exemplo:*

1. *Regras para lançamento interno:*
    - [ ]  *Validação*
    - [ ]  *Divulgação*

# 💌 *Plano de comunicação*

Quando as comunicações acontecerão? Quem será notificado sobre esse novo recurso? Enviaremos e-mails e notificações no aplicativo?