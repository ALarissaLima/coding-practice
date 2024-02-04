# Boas-vindas ao repositório do exercício Trybe Tech-Gallery

Para realizar o exercício, atente-se a cada passo descrito a seguir e se tiver **qualquer dúvida**, nos envie no _Slack_ da turma! #vqv 🚀

Aqui, você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

<br />

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/learn/student-manual/codigo-de-conduta-da-pessoa-estudante).

<br />

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício, você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/1a530297-e176-4c79-8ed9-291ae2950540/lesson/2b2edce7-9c49-4907-92a2-aa571f823b79) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Você vai desenvolver uma página web que é uma galeria de fotos com algumas linguagens e frameworks front-end. Para isso você deve utilizar `HTML` e `CSS` com conceitos de _Flexbox_.

  💡 Veja no exemplo a seguir como pode ser a aparência do exercício depois de pronto. Você pode, ao final, ir além para deixar o site com sua cara.

  ![exemplo](./images/trybe-tech-gallery.jpeg)

  <br />

</details>

<details>
  <summary><strong>📝 Habilidades a serem trabalhadas</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Criar uma página web utilizando HTML.
- Estilizar sua página utilizando conceitos de CSS Flexbox.
- Utilizar seletores de classes no CSS.
- Utilizar a propriedade `justify-content` com os valores `center`, `flex-start`, `flex-end`, `space-around`, `space-between`, `space-evenly`
- Utilizar a propriedade `align-items` com os valores `stretch`, `center`, `flex-start`, `flex-end`, `baseline`

</details>

<details>
<summary><strong>🗓 Data de Entrega</strong></summary><br />

- Este exercício é individual

- Data para entrega final do exercício: `20/11/2023 às 23:59 (Horário de Brasília)`.

</details>

# Orientações

<details>
  <summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório:

- `git clone git@github.com:tryber/sd-038-exercise-trybe-tech-gallery.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-038-exercise-trybe-tech-gallery`

2. Instale as dependências:

    - `npm install`

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
- Exemplo: `git branch`
- Se você não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora, crie uma branch à qual você vai submeter os `commits` do seu exercício:
  - Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-exercício`;
  - Exemplo: `git checkout -b maria-soares-trybe-tech-gallery`

4. Crie na raiz do exercício os arquivos que você precisará desenvolver:

- Verifique que você está na raiz do exercício:
  - Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/maria/code/**sd-0x-project-trybe-tech-gallery**_
- Crie os arquivos index.html e style.css:
  - Exemplo: `touch index.html style.css`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_:
  - Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
- Adicione o novo arquivo ao _stage_ do Git:
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (devem aparecer listados os arquivos em verde)
- Faça o `commit` inicial:
  - Exemplo:
    - `git commit -m 'iniciando o exercício. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin maria-soares-trybe-tech-gallery`

7. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-038-exercise-trybe-tech-gallery/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para o seu _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_, um título nítido que o identifique, e clique no botão verde _"Create pull request"_
  [exemplo de pull request](./images/pull_request-img.png)

- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-038-exercise-trybe-tech-gallery/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

Faça `commits` das alterações que você fizer no código regularmente, pois assim você garante visibilidade para o time da Trybe e treina essa prática para o mercado de trabalho :) ;

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;
- Os comandos que você utilizará com mais frequência são:

  - `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;
  - `git add` _(para adicionar arquivos ao stage do Git)_;
  - `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;
  - `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;
  - `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

</details>

<details>
<summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste exercício o `ESLint`. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! Para poder rodar o `ESLint` certifique-se de ter executado o comando `npm install` dentro do repositório.

Para rodá-los localmente no repositório, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

Em caso de dúvidas, confira o material na plataforma sobre [ESLint e Stylelint](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/3b1546b5-f7bc-40f7-a674-77b16c408756/lesson/0c9e8c0e-24c3-4526-ba6b-60d95913e022).

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

Para que os testes sejam executados localmente, verifique se a versão do node na sua máquina é a `16`:

```bash
node -v
```

Caso a versão seja diferente, você pode utilizar o `nvm` para trocar de versão com o seguinte comando:

```bash
nvm use 16
```

Todos os requisitos do exercício serão testados **automaticamente** por meio do `Cypress`.

## Cypress

O Cypress é uma ferramenta de teste de front-end desenvolvida para a web.

Antes de utilizá-lo, certifique-se de ter executado o comando `npm install` dentro do exercício.

Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute o um dos seguintes comandos:

Para testar o exercício utilizando apenas o terminal, execute o comando abaixo:

```bash
npm test
```

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

ou

```bash
npx cypress open
```

Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js).

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

## Observações técnicas

Alguns requisitos devem seguir um padrão pré-estabelecido para que os testes automáticos funcionem corretamente, leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _classes_ que alguns elementos do seu exercício devem possuir**.

⚠️ **Alguns requisitos pedem para utilizar Flexbox. Tenha atenção no que é solicitado caso vá usar algum framework CSS para que os requisitos sejam atendidos.**

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

- Os requisitos do seu exercício são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

- ⚠️ Logo, recomenda-se desenvolver seu exercício usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução.

- As imagens utilizadas estarão disponíveis para você, mas… caso queira, sinta-se livre para criar a página com a temática que você preferir, nesse caso atente-se para o tamanho das imagens que você utilizará neste exercício. **Não utilize imagens com um tamanho maior que _500Kb_.**

- ⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens.

- Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensioná-las para um tamanho menor.

- Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

- Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

- Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

- Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

- Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252);

- Você tem liberdade para adicionar novos comportamentos ao seu exercício, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

- Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

- Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._

⚠️ **O avaliador automático não necessariamente avalia seu exercício na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>

# Requisitos

## 1. Crie um cabeçalho para sua aplicação utilizando a tag `header`

<details>

<summary> Este Cabeçalho <strong>deve</strong> possuir a classe <code>header-container</code>, ser um <code>flex-container</code> e ter 3 elementos filhos:
um <strong>logotipo</strong> com a classe <code>header-img</code>, um <strong>título</strong> com a classe <code>header-title</code> e um <strong>link</strong> de login com a classe <code>header-login</code>. </code>
</summary><br/>

- Observe o exemplo abaixo:

  ![exemplo](./images/trybe-tech-gallery-header.jpeg)

👀 **De olho na dica**: A imagem para você usar já veio nesse repositório. Você pode encontrá-lá no caminho: `./images/trybe-logo.png`.

**O que será testado:**

- Se existe um cabeçalho na página;
- Se o cabeçalho tem a classe `header-container`;
- Se o cabeçalho é um elemento flex container;
- Se o cabeçalho possui exatamente três elementos filhos;
- Se existe um elemento `img` com a classe `header-img`;
- Se existe um elemento `h1` com a classe `header-title`;
- Se existe um elemento `a` com a classe `header-login`;
- Se o titulo está centralizado, ou seja elemento com a classe `header-title` está no meio do cabeçalho;

</details>

## 2. Implemente o conteúdo da primeira `section`

<details>

<summary> Esta seção deverá conter no mínimo um elemento de texto que deverá ser posicionado utilizando <strong>Flexbox</strong>. </code>
</summary><br/>

- O posicionamento deve ser feito de acordo com o exemplo abaixo:

  ![exemplo](./images/trybe-tech-gallery-text.jpeg)

**O que será testado:**

- Se existe um elemento section com a classe `text-section` na página;
- Se a section com a classe `text-section` é um elemento flex container;
- Se a section tem, no mínimo, um elemento de texto;
- Se o elemento filho é uma tag `p`;

</details>

## 3. Implemente o conteúdo da segunda `section`

<details>

<summary> Esta seção deverá conter no mínimo 6 imagens e um título para cada uma delas que deverão ser posicionados utilizando <strong>Flexbox</strong>. </code>
</summary><br/>

- O posicionamento deve ser feito de acordo com o exemplo abaixo:

  ![exemplo](./images/trybe-tech-gallery-cards.jpeg)

- Sinta-se livre para usar a imaginação e selecionar as imagens que preferir, só não esqueça de seguir a estrutura de posicionamento proposta.

**O que será testado:**

- Se existe uma section com a classe `gallery` na página;
- Se a section com a classe `gallery` é um elemento flex container;
- Se a section tem, no mínimo, seis elementos filhos (cards com imagens e texto);
- Se cada card é uma section e possui a classe `gallery-card` na página;
- Se cada card tem uma tag `h4` com o respectivo título;
- Se cada card tem uma tag `img` com a respectiva imagem;

</details>

## 4. Crie um rodapé para sua aplicação utilizando a tag `footer`

<details>

<summary> Este rodapé <strong>deve</strong> possuir, no mínimo, 2 elementos e estes devem ser posicionados utilizando <strong>Flexbox</strong>. </code>
</summary><br/>

- Observe o exemplo abaixo:

  ![exemplo](./images/trybe-tech-gallery-footer.jpeg)

- Você pode fazer com que as imagens redirecionem a pessoa usuária para suas redes sociais.

**O que será testado:**

- Se existe um rodapé na página;
- Se o rodapé possui a classe `footer-container`;
- Se o rodapé com a classe `footer-container` é um elemento flex container;
- Se o rodapé possui, no mínimo, dois elementos filhos;
- Se o elemento `img` com o logo do instagram tem a classe `social-instagram` e possui o atributo src apontando para `./images/instagram-logo.png`;
- Se o elemento `img` com o logo do linkedin tem a classe `social-linkedin` e possui o atributo src apontando para `./images/linked-in-logo.png`

<details>
  <summary>De olho na dica 👀</summary>
  Você pode colocar uma tag <code>img</code> dentro de uma tag <code>a</code>, dessa forma você consegue transformar suas imagens em links clickáveis.
</details>

</details>
