# Plataforma Convite Digital

# Starter Template NextJs

## Instruções de Uso

### Descrição

Este é o starter de templates da nossa plataforma Convite Digital. O código é um componente React que pode ser personalizado para criar convites digitais. O template usa os detalhes do evento, como data, título e tema, para exibir um convite digital atraente.

### Passos para Uso

1. **Clone/Download e inicialização do projeto:**

   - Clone ou faça o download deste repositório para o seu ambiente de desenvolvimento.
     - Instale as dependências do projeto: `npm install`
   - Inicie o projeto: `npm run dev`
   - Abra o navegador e acesse: `http://localhost:3000`

2. **Personalização do Template:**

   - Abra o arquivo `index.tsx` contido na pasta "template/theme-name" e edite de acordo com suas necessidades.
   - Os detalhes do evento, como título, data, tema e outros, são fornecidos como props no componente. Você pode personalizar o visual do convite digital usando esses detalhes.
   - Altere o nome da pasta `theme-name` para o nome do seu tema, e corrija a importação no "arquivo" `page.tsx` da pasta app.

3. **Personalização do Estilo:**
   - O estilo do convite digital é definido no componente usando classes CSS e estilos inline. Você pode personalizar o estilo conforme desejado.
   - *Dica*: Para arquivos css crie como módulos na raiz do tema ex.: style.module.css. 
4. **Estrutura de pastas**
   - O tema usa a seguinte estrutura de pastas
     - /theme-name
     - ├── /components
     - │ ├── ... (seus componentes personalizados)
     - │
     - ├── /assets
     - │ ├── ... (seus recursos, como imagens, fontes, etc.)
     - │
     - ├── /utils
     - │ ├── ... (seus utilitários)
     - │
     - ├── index.tsx (Arquivo principal do tema)

6. **Upload do Tema:**

   - Faça o upload do tema na plataforma Convite Digital da seguinte maneira:
   - Acesse a plataforma Convite Digital.
   - Vá para a área de **Editor**.
   - Clique em **Upload Tema**.
   - Selecione os arquivos do tema.
   - Clique em **Publicar**.
   - O tema será publicado apos a validação da plataforma e verificação da nossa equipe.
   - Após a publicação, o tema estará disponível para uso.

     **Observações:**
     - O tema deve ser enviado como uma pasta inteira na plataforma Convite Digital.
     - O arquivo principal do tema deve ser renomeado para `index.tsx` ou `index.jsx`.
     - Certifique-se de que todos os assets necessários para o tema estejam na mesma pasta.
     - Certifique-se de que o arquivo `index.tsx` ou `index.jsx` esteja na raiz da pasta do tema.
       -A pasta deve ser renomeada para o nome do tema.

7. **Implantação:**
   - Após personalizar o template, e realizar o envio para a plataforma **Convite Digital**. Os utilizadores podem criar e compartilhar convites digitais usando o seu tema.
