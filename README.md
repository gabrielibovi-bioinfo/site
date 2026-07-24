# Gabrieli Bovi dos Santos — Site institucional

>Site institucional para divulgação de serviços de bioinformática aplicada a dados ômicos (metagenômica, proteômica, transcriptômica e genômica).

---
🔗 **Site publicado:** https://gabrielibovi-bioinfo.github.io/site/

##Sobre

Landing page com páginas de detalhe para cada tipo de análise oferecida, formulário de contato integrado (via Web3Forms) e busca interna por serviço.

```
Estrutura do projeto
├── index.html                  # Página inicial (home, sobre, contato)
├── metagenomica-16s.html        # Metagenômica 16S rRNA & shotgun (Illumina/Nanopore)
├── metagenomica-viral.html      # Metagenômica viral (viroma)
├── proteomica.html              # Proteômica quantitativa (label-free, TMT, DIA)
├── transcriptomica.html         # Transcriptômica (RNA-seq bulk & single-cell)
├── variant-calling.html         # Variant calling & genômica clínica
├── style.css                    # Estilos compartilhados por todas as páginas
├── script.js                    # Busca, animação do terminal e carrossel de imagens
└── img/                         # Figuras de exemplo (gráficos reais de análises)
```

##Tecnologias
- HTML, CSS e JavaScript puro (sem framework e build step)
- Formulário de contato via Web3Forms (sem backend próprio)
- Hospedado gratuitamente via GitHub Pages

##Rodando localmente
Não é necessário nenhum processo de build. Basta clonar o repositório e abrir index.html no navegador:

```
bash
git clone https://github.com/gabrielibovi-bioinfo/site.git
cd site
open index.html   # ou dois cliques no arquivo
```

##Contato
📧 gabrieli.bioinfo@gmail.com
