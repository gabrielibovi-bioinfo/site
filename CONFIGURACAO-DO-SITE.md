# GB Bioinformatics — atualização do site

## O que foi atualizado
- Identidade visual clara, inspirada na paleta PiYG (RColorBrewer).
- Ajustes responsivos para telas menores e navegação mobile.
- CTA flutuante de contato em todas as páginas.
- Página inicial com proposta comercial, processo de trabalho, entregáveis, FAQ, consultoria e modelos de estudos de caso.
- Nova página `divulgacao-cientifica.html` com textos introdutórios sobre 16S rRNA e transcriptômica/RNA-seq.
- Navegação e busca atualizadas.
- Integração preparada com Plausible Analytics.

## Ativar o Plausible Analytics
1. Crie uma conta/propriedade no Plausible e cadastre o domínio público do site.
2. Em todos os arquivos HTML, localize `data-domain="SEU-DOMINIO"` e substitua pelo domínio cadastrado (por exemplo, seu domínio próprio ou `gabrielibovi-bioinfo.github.io`, conforme a propriedade criada).
3. Publique o site e confirme a recepção de visitas no painel Plausible. A integração não coleta dados enquanto o identificador estiver como `SEU-DOMINIO`.

## Estudos de caso
Os dois cards da home usam nomes e depoimentos explicitamente provisórios. Substitua `[Nome do(a) pesquisador(a)]` e os textos ilustrativos por informações e depoimentos reais, com autorização dos colaboradores. Não publique os exemplos como avaliações reais.

## Carrossel 16S
As imagens atuais do carrossel foram mantidas. A atualização dos gráficos foi deixada pendente, conforme solicitado, para receber os arquivos definitivos posteriormente.

## Formulário de contato
O formulário Web3Forms existente foi preservado. Antes de publicar, faça um teste real de envio e confirme o recebimento. Não compartilhe publicamente a chave de acesso em outros canais.

## Publicação no GitHub Pages
Envie os arquivos atualizados para o repositório que publica o GitHub Pages, mantendo a estrutura da pasta `site-main`. Verifique os links internos após a publicação.


## Analytics (Cloudflare Web Analytics)

O Plausible foi removido. Para ativar a alternativa gratuita Cloudflare Web Analytics em um site estático hospedado no GitHub Pages:

1. Crie uma conta gratuita na Cloudflare e abra Web Analytics.
2. Adicione o hostname exato do site (por exemplo, o domínio `github.io` utilizado pelo projeto, se permitido no painel).
3. Copie o snippet JavaScript gerado para esse site.
4. Substitua o bloco comentado `Cloudflare Web Analytics` no `<head>` dos arquivos HTML pelo snippet fornecido pela Cloudflare.
5. Publique e confirme no painel se as visitas aparecem.

O código permanece comentado até que o token real seja inserido; portanto, a coleta ainda não está ativa. O site não recebeu um banner genérico de cookies. A Política de Privacidade é um texto-base e deve ser revisada conforme o formulário e os serviços efetivamente ativados.

## Conteúdos editoriais

A página `divulgacao-cientifica.html` funciona como índice e cada artigo possui uma página própria. Os textos atuais foram separados do conteúdo que já estava no projeto; o arquivo DOCX prometido poderá ser usado para revisar/substituir o texto de cada artigo.
