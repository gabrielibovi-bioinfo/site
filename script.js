// ---------- Search index (shared across all pages) ----------
const SEARCH_INDEX = [
  { title: "Metagenômica 16S & Shotgun", tag: "Illumina / Nanopore", url: "metagenomica-16s.html",
    keywords: "16s rrna shotgun illumina nanopore microbioma solo agua fezes taxonomia diversidade qiime dada2 kraken metaphlan" },
  { title: "Metagenômica viral", tag: "Viroma", url: "metagenomica-viral.html",
    keywords: "viroma virus viral one health epidemiologia spades virsorter contigs filogenia" },
  { title: "Proteômica quantitativa", tag: "Label-free / TMT / DIA", url: "proteomica.html",
    keywords: "proteomica espectrometria de massas maxquant perseus spectronaut dia tmt proteinas" },
  { title: "Transcriptômica", tag: "RNA-seq bulk & single-cell", url: "transcriptomica.html",
    keywords: "transcriptomica rna-seq rnaseq expressao genica deseq2 edger seurat scanpy single cell scrna umap" },
  { title: "Variant calling & genômica clínica", tag: "WGS / WES", url: "variant-calling.html",
    keywords: "variant calling genomica clinica gatk wgs wes snp indel cnv variantes vep annovar manhattan" },
  { title: "Home", tag: "Página inicial", url: "index.html", keywords: "home inicio servicos" },
  { title: "Sobre", tag: "Quem somos", url: "index.html#sobre", keywords: "sobre empresa equipe quem somos" },
];

function initSearch(){
  const input = document.getElementById('site-search');
  const results = document.getElementById('search-results');
  if(!input || !results) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if(q.length < 2){ results.classList.remove('active'); results.innerHTML=''; return; }
    const matches = SEARCH_INDEX.filter(item =>
      item.title.toLowerCase().includes(q) || item.keywords.includes(q)
    ).slice(0,6);

    if(matches.length === 0){
      results.innerHTML = '<div class="search-empty">Nenhum resultado</div>';
    } else {
      results.innerHTML = matches.map(m =>
        `<a href="${m.url}"><div>${m.title}</div><div class="sr-tag">${m.tag}</div></a>`
      ).join('');
    }
    results.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if(!e.target.closest('.nav-search')) results.classList.remove('active');
  });
}

// ---------- Terminal typing animation (home hero) ----------
function initTerminal(){
  const body = document.getElementById('terminal-body');
  if(!body) return;

  const lines = [
    { html: `<span class="prompt">$</span> <span class="cmd">analyze --input amostra_solo.fastq --pipeline 16s</span>` },
    { html: `<span class="tag-out" style="background:var(--green-dim);color:var(--green);">QC</span> 2.1M reads · Q30 96.4%` },
    { html: `<span class="tag-out" style="background:var(--purple-dim);color:var(--purple);">TAXONOMIA</span> 340 ASVs classificados (SILVA)` },
    { html: `<span class="tag-out" style="background:var(--coral-dim);color:var(--coral);">DIVERSIDADE</span> Shannon: 4.82 · Chao1: 512` },
    { html: `<span class="prompt">✓</span> relatório gerado em <span class="cmd">report_16s.html</span>` },
  ];

  let i = 0;
  function next(){
    if(i >= lines.length) return;
    const div = document.createElement('div');
    div.className = 'terminal-line';
    div.innerHTML = lines[i].html;
    body.appendChild(div);
    i++;
    setTimeout(next, 650);
  }
  setTimeout(next, 400);
}

// ---------- Image carousel ----------
function initCarousels(){
  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const counter = carousel.querySelector('.carousel-counter');
    const caption = carousel.querySelector('.carousel-caption');
    const dotsWrap = carousel.querySelector('.carousel-dots');
    let index = 0;

    const captions = Array.from(slides).map(s => s.dataset.caption || '');

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => go(i));
      dotsWrap.appendChild(dot);
    });
    const dots = carousel.querySelectorAll('.carousel-dot');

    function go(i){
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      counter.textContent = `${index + 1} / ${slides.length}`;
      caption.textContent = captions[index];
      dots.forEach((d, di) => d.classList.toggle('active', di === index));
    }

    carousel.querySelector('.carousel-prev').addEventListener('click', () => go(index - 1));
    carousel.querySelector('.carousel-next').addEventListener('click', () => go(index + 1));
    go(0);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSearch();
  initTerminal();
  initCarousels();
});
