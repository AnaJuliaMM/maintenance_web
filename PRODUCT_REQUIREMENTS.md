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
| Técnicos de Manutenção	 | Precisam cadastrar solicitações de manutenção e informar o status, registrar atividades e acompanhar o estoque de peças. |

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

### 1. Gerenciamento de Máquinas

1.1 ***Cadastrar máquina***
   - **Descrição:** Realizar cadastro de uma nova máquina no sistema.
   - **Critérios de Aceitação:** Incluir no cadastro os campos nome, tipo, modelo, data de fabricação, número de série, localização, histórico de manutenção e a possibilidade de fazer upload de imagens.
   - **Prioridade:** P1

1.2 ***Atualizar registro de máquina***
   - **Descrição:** Atualizar o cadastro de uma máquina no sistema.
   - **Critérios de Aceitação:** Poder alterar o valor dos campos nome, tipo, modelo, data de fabricação, número de série, localização, histórico de manutenção e remover ou adicionar novas imagens.
   - **Prioridade:** P2

1.3. ***Visualizar detalhes da máquina***
   - **Descrição:** Visualizar informações detalhadas sobre a máquina e o histórico de manutenção da mesma.
   - **Critérios de Aceitação:** Incluir nos detalhes o nome, tipo, modelo, data de fabricação, número de série e localização da máquina. Além da visualização de imagens (caso forem adicionadas), histórico de manutenção e as peças e materiais utilizados. 
   - **Prioridade:** P1

### 2. Gestão de solicitações de manutenção

2.1 ***Cadastrar uma solicitação de manutenção***
   - **Descrição:** Cadastrar informações referentes a uma nova solicitação de manutenção.
   - **Critérios de Aceitação:** Incluir no cadastro a descrição do problema, tipo (preventiva, corretiva, preditiva), data de solicitação, prioridade e o responsável. 
   - **Prioridade:** P1

2.2 ***Atribuir equipes de manutenção às solicitações***
   - **Descrição:** Atribuir uma equipe de manutenção como responsável por uma solicitação de manutenção já cadastrada no sistema.
   - **Critérios de Aceitação:** Tornar uma equipe de manutenção responsável por uma soliticação.
   - **Prioridade:** P1

2.3 ***Gerenciar o status da manutenção***
   - **Descrição:** Visualizar e atualizar o status de andamento da manutenção cadastrada.
   - **Critérios de Aceitação:** Visualizar o status da manutenção e atualizar entre as opções: pendente, em andamento, concluída, cancelada.
   - **Prioridade:** P1

2.4.***Adicionar comentários e arquivos***
   - **Descrição:** Adicionar comentários e arquivos a uma solicitação de manutenção já registrada.
   - **Critérios de Aceitação:** Adição de comentários, imagens (jpeg e png) ou documentos (pdf).
   - **Prioridade:** P1

2.5 ***Registrar peças e materiais***
   - **Descrição:** Registrar as peças e materiais utilizados durante a manutenção, incluindo quantidade e fornecedor.
   - **Critérios de Aceitação:** O registro deve conter as peças e materiais utilizados durante a manutenção, bem como a quantidade de cada um e o fornecedor.
   - *Prioridade:* P1

2.6 ***Gerar relatórios de manutenção*** 
   - **Descrição:** Gerar relatórios de manutenção por máquina, por período (data de solicitação) ou por tipo de manutenção (preventiva, corretiva, preditiva).
   - **Critérios de Aceitação:** O relatório deve ser por máquina, período ou tipo de manutenção.
   - **Prioridade:** P1

### 3. Controle de Estoque de Peças

3.1 ***Cadastrar peças***
   - **Descrição:** Realizar cadastro de peças.
   - **Critérios de Aceitação:** Incluir no cadastro nome, código, fornecedor, quantidade em estoque, valor unitário.
   - **Prioridade:** P1

3.2 ***Registrar entrada e saída de peças***
   - **Descrição:** Registrar a entrada e saída de peças no estoque.
   - **Critérios de Aceitação:** O registro pode ser de entrada ou saída, e deve conter os campos data e quantidade.
   - **Prioridade:** P1

3.3 ***Visualizar o estoque de peças***
   - **Descrição:** Visualizar o estoque de peças em tempo real e gerar relatórios de estoque.
   - **Critérios de Aceitação:** Visulizar o estoque atualizado em tempo real
    - **Prioridade:** P1

3.4 ***Gerar relatório de estoque***
   - **Descrição:** Visualizar o estoque de peças em tempo real e gerar relatórios de estoque.
   - **Critérios de Aceitação:** gerar relatório com os itens no estoque  
   - **Prioridade:** P1

### 4. Autenticação e Autorização

4.1 ***Criação de Contas de Usuário***
   - **Descrição:** O sistema deve permitir a criação de contas de usuário para diferentes tipos de acesso (gerentes, técnicos de manutenção.).
   - **Critérios de Aceitação:** Contas criadas com sucesso e acessos controlados conforme perfil.
   - **Prioridade:** P1

4.2 ***Controle de Acessos***
   - **Descrição:** O sistema deve controlar o acesso das funcionalidadescom base no tipo de usuário.
   - **Critérios de Aceitação:** Acesso controlado corretamente e funcionalidades acessíveis conforme o tipo de usuário. 
   - **Prioridade:** P1


# *Casos de uso para os requisitos funcionais*

### 1. Gerenciamento de Máquinas

1.1 ***Cadastrar máquina***
> Como um **gerente de manutenção**, eu quero **cadastrar uma nova máquina** para que **o sistema possa rastrear e gerenciar as manutenções dessa máquina de forma eficiente**.

1.2 ***Atualizar registro de máquina***

> Como um **gerente de manutenção**, eu quero **atualizar o cadastro de uma máquina** para que **as informações estejam sempre corretas e atualizadas no sistema**.

1.3 ***Visualizar detalhes da máquina***

> Como um **gerente de manutenção** ou um **técnico de manutenção**, eu quero **visualizar os detalhes de uma máquina** para que **eu possa acessar informações relevante, o histórico de manutenção e verificar as pessoas que foram utilizadas no processo**.


### 2. Gestão de solicitações de manutenção

2.1 ***Cadastrar uma solicitação de manutenção***

> Como um **gerente de manutenção**, eu quero **cadastrar uma solicitação de manutenção** para que **minha equipe tenha acesso à novas demandas.**

2.2 ***Atribuir equipes de manutenção às solicitações***

> Como um **gerente de manutenção**, eu quero **atribuir equipes de manutenção às solicitações** para que **as tarefas sejam distribuídas de forma organizada e eficiente**.

2.3 ***Gerenciar o status da manutenção***

> Como um **técnico de manutenção**, eu quero **atualizar o status da manutenção** para que **todos saibam em que estágio o processo está e possam agir de acordo**.

2.4 ***Adicionar comentários e arquivos***

> Como um **técnico de manutenção**, eu quero **adicionar comentários e arquivos** a uma solicitação de manutenção para que **possa fornecer informações adicionais ou evidências do problema e assim compartilhar com a equipe todas as informações necessárias para a resolução**.

2.5 ***Registrar peças e materiais***

> Como um **técnico de manutenção**, eu quero **registrar as peças e materiais utilizados** para que **o sistema tenha um registro preciso do que foi utilizado em cada manutenção**.

2.6 ***Gerar relatórios de manutenção***

> Como um **gerente de manutenção**, eu quero **gerar relatórios de manutenção** para que **possa analisar o desempenho das máquinas e a eficiência das manutenções realizadas**.

### 3. Controle de Estoque de Peças

3.1 ***Cadastrar peças***

> Como um **técnico de manutenção**, eu quero **cadastrar peças** para que **o estoque esteja atualizado e disponível para consulta**.

3.2 ***Registrar entrada e saída de peças***

> Como um **técnico de manutenção**, eu quero **registrar a entrada e saída de peças** para que **o sistema mantenha o controle preciso do estoque**.

3.3 ***Visualizar o estoque de peças***

> Como um **técnico de manutenção**, eu quero **visualizar o estoque de peças em tempo real** para que **possa tomar decisões informadas sobre novas solicitações de compra e uso de materiais**.

3.4 ***Gerar relatório de estoque***

> Como um **gerente de manutenção**, eu quero **gerar relatórios de estoque** para que **possa avaliar as necessidades futuras de peças e materiais**.

### 4. Autenticação e Autorização

4.1 ***Criação de Contas de Usuário***

> Como um **gerente de manutenção**, eu quero **criar contas de usuário** para que **cada técnico de manutenção tenha o acesso ao sistema e suas funcionalidades**.

4.2 ***Controle de Acessos***

> Como um **gerente de manutenção**, eu quero **controlar o tipo de usuário** para que **cada usuário só tenha acesso ao que é relevante para sua função**.

---

# *Requisitos Não Funcionais*

1. ***Desempenho***
   - **Descrição:** O sistema deve suportar até 500 solicitações de manutenção simultaneamente com um tempo de resposta inferior a 2 segundos.
   - **Critérios de Aceitação:** Testes de desempenho mostram que o sistema atende aos requisitos estabelecidos.
   - **Prioridade:** P1

2. ***Segurança***
   - **Descrição:** O sistema deve garantir que apenas usuários autorizados possam acessar e modificar informações sensíveis.
   - **Critérios de Aceitação:** Implementação de autenticação e autorização adequadas, com testes de segurança realizados.
   - **Prioridade:** P1

3. ***Usabilidade***
   - **Descrição:** O sistema deve ter uma interface intuitiva e fácil de usar para garantir que os usuários possam realizar suas tarefas sem dificuldades.
   - **Critérios de Aceitação:** Feedback positivo de testes de usabilidade realizados com usuários representativos.
   - **Prioridade:** P1

4. ***Responsividade***
   - **Descrição:** A aplicação web deve funcionar perfeitamente em diferentes dispositivos (computadores, tablets, smartphones).
   - **Critérios de Aceitação:** Testes de responsividade confirmam que a aplicação é utilizável e funcional em diversos tamanhos de tela.
   - **Prioridade:** P1



### 📊 Métricas

### Desempenho

| Medida                | Estado atual | Esperado                                               | Resultados |
| --------------------- | ------------ | ------------------------------------------------------ | ---------- |
| **Latência máxima**   | N/A          | Resposta em < 2 segundos para 95% das solicitações     |            |
| **Capacidade de Carga** | N/A        | Suportar até 500 solicitações simultâneas              |            |
| **Testes de Stress**  | N/A          | Suporte até 700 solicitações simultâneas sem falhas    |            |

### Segurança

| Medida                              | Estado atual | Esperado                                                        | Resultados |
| ----------------------------------- | ------------ | --------------------------------------------------------------- | ---------- |
| **Cobertura de Autenticação**       | N/A          | 100% das páginas/funcionalidades requerem autenticação |            |
| **Teste de Penetração**             | N/A          | 0 vulnerabilidades críticas ou altas após testes semestrais     |            |
| **Auditoria de Segurança**          | N/A          | Correções em até 30 dias para vulnerabilidades encontradas       |            |

### Usabilidade

| Medida                                | Estado atual | Esperado                                                   | Resultados |
| ------------------------------------- | ------------ | ---------------------------------------------------------- | ---------- |
| **Taxa de Erros de Usuário**          | N/A          | < 5% dos usuários relatarão dificuldades                    |            |
| **Tempo Médio para Completar Tarefas** | N/A          | Completar tarefas principais em < 3 minutos                |            |
| **Satisfação do Usuário**             | N/A          | Alcançar uma pontuação mínima de 85% de satisfação          |            |
| **Índice de Aprendizagem**            | N/A          | Novos usuários executam tarefas comuns em < 10 minutos      |            |

### Responsividade

| Medida                                | Estado atual | Esperado                                                | Resultados |
| ------------------------------------- | ------------ | ------------------------------------------------------- | ---------- |
| **Compatibilidade Multidispositivo**  | N/A          | 100% das funcionalidades críticas testadas e aprovadas  |            |
| **Taxa de Zoom e Escala**             | N/A          | Layout funcional e legível em resoluções de 1024px a 2560px |            |
| **Teste de Cross-Browser**            | N/A          | Compatibilidade em, no mínimo, 2 navegadores principais  |            |


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