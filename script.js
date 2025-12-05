const defaultPhrases = {
  geral:[
    "Hoje é um ótimo dia para começar algo novo.",
    "Cada pequeno passo conta para grandes conquistas.",
    "Acredite no seu potencial e siga em frente.",
    "O universo conspira a favor dos que agem.",
    "Sua energia positiva atrai coisas boas.",
    "Tudo acontece no tempo certo.",
    "Mantenha o foco e a perseverança.",
    "Pequenas atitudes geram grandes resultados.",
    "Sorria, sua luz contagia os outros.",
    "A paciência abre portas inesperadas.",
    "Valorize cada momento do presente.",
    "Confiança em si mesmo é essencial.",
    "O melhor ainda está por vir.",
    "Seja grato por tudo que tem.",
    "A felicidade está nas coisas simples.",
    "Não desista, grandes conquistas vêm a quem espera.",
    "O aprendizado está em cada experiência.",
    "A gentileza retorna multiplicada.",
    "Faça hoje o que fará diferença amanhã.",
    "Seja a mudança que quer ver no mundo.",
    "Respire fundo e siga com calma.",
    "Aceite o que não pode mudar.",
    "Cada dia é uma nova oportunidade.",
    "Valorize quem está ao seu lado.",
    "Acredite, você é capaz.",
    "A coragem abre caminhos desconhecidos.",
    "Seja consistente nos seus objetivos.",
    "O tempo revela grandes surpresas.",
    "A vida é feita de pequenas vitórias.",
    "Cultive pensamentos positivos sempre."
  ],
  amor:[
    "O amor verdadeiro começa em você.",
    "Seja gentil com quem você ama.",
    "Pequenos gestos fortalecem relacionamentos.",
    "Abra o coração para novas experiências.",
    "A paciência é essencial para o amor.",
    "Aprecie cada momento juntos.",
    "Escute mais, julgue menos.",
    "A confiança constrói vínculos fortes.",
    "Demonstre carinho diariamente.",
    "Respeito é a base de toda relação.",
    "O amor cresce com atitudes simples.",
    "Valorize quem se importa com você.",
    "A felicidade compartilhada é maior.",
    "Comunique-se com clareza e afeto.",
    "O perdão fortalece o relacionamento.",
    "Seja parceiro nos desafios da vida.",
    "Gestos de atenção nunca são demais.",
    "Apreciar o outro fortalece a união.",
    "Cada dia é uma chance de amar melhor.",
    "O amor próprio reflete nas relações.",
    "A empatia cria conexões profundas.",
    "Mostre gratidão pelo que recebe.",
    "A paciência suaviza conflitos.",
    "Cumplicidade é a alma do amor.",
    "A presença vale mais que palavras.",
    "Um sorriso sincero conquista corações.",
    "A confiança é construída com ações.",
    "Valorize pequenos detalhes do outro.",
    "O amor cresce quando compartilhado.",
    "Gentileza e carinho transformam relações."
  ],
  trabalho:[
    "Sua dedicação será recompensada.",
    "Organize suas tarefas e alcance metas.",
    "Pequenos avanços geram grandes resultados.",
    "Aprender algo novo amplia oportunidades.",
    "Colaboração traz melhores resultados.",
    "Sua criatividade é um diferencial.",
    "Foque no que pode controlar.",
    "Persistência é a chave do sucesso.",
    "Mantenha a disciplina e a produtividade.",
    "Planejar hoje facilita o amanhã.",
    "Motivação surge com ação diária.",
    "Inspire colegas com seu exemplo.",
    "Aceite desafios como oportunidades.",
    "Valorize seu tempo e prioridades.",
    "Pequenas vitórias constroem grandes conquistas.",
    "Seja proativo em resolver problemas.",
    "A inovação surge de tentativas.",
    "Trabalhe com paixão e propósito.",
    "Aprender com erros fortalece habilidades.",
    "Networking abre portas inesperadas.",
    "Organização gera mais liberdade.",
    "Persistência vence a falta de sorte.",
    "Desafios estimulam crescimento pessoal.",
    "Mantenha a mente aberta para mudanças.",
    "A prática constante aprimora a performance.",
    "Foque na qualidade do seu trabalho.",
    "Planejamento estratégico aumenta resultados.",
    "Colabore para alcançar objetivos comuns.",
    "Reconheça conquistas e celebre vitórias.",
    "Trabalhe com entusiasmo todos os dias."
  ],
  dinheiro:[
    "Poupar hoje garante mais segurança amanhã.",
    "Invista em conhecimento e habilidades.",
    "Controle seus gastos com consciência.",
    "O planejamento financeiro evita problemas.",
    "A disciplina gera estabilidade.",
    "Gaste com intenção e propósito.",
    "Economizar pequenos valores faz diferença.",
    "Avalie oportunidades antes de agir.",
    "O equilíbrio financeiro traz paz de espírito.",
    "Aprenda com experiências passadas.",
    "Renda extra abre novas possibilidades.",
    "Priorize necessidades antes de desejos.",
    "O sucesso financeiro exige planejamento.",
    "Poupar é investir no seu futuro.",
    "Decisões conscientes trazem resultados.",
    "Evite dívidas desnecessárias.",
    "A organização financeira reduz ansiedade.",
    "Invista em coisas que valorizam com o tempo.",
    "A consistência supera a sorte.",
    "Gastos inteligentes fortalecem a liberdade.",
    "Aproveite oportunidades com cuidado.",
    "Estabeleça metas e objetivos claros.",
    "O dinheiro bem gerido multiplica oportunidades.",
    "Aprender sobre finanças é essencial.",
    "Controle hoje evita arrependimentos amanhã.",
    "Faça escolhas conscientes diariamente.",
    "A estabilidade financeira gera confiança.",
    "Planejar é mais importante que ganhar rápido.",
    "Pequenas economias somam grandes valores.",
    "Invista em experiências que trazem crescimento."
  ],
  humor:[
    "Ria sem motivo, a alegria é contagiante.",
    "Um sorriso transforma o dia.",
    "Brincadeiras leves aliviam a mente.",
    "Humor é um aliado do bem-estar.",
    "Não leve tudo tão a sério.",
    "Rir aumenta a energia positiva.",
    "Momentos divertidos são essenciais.",
    "Compartilhe gargalhadas com amigos.",
    "Uma piada leve acalma a tensão.",
    "Alegria contagia quem está perto.",
    "O bom humor aproxima pessoas.",
    "Faça pausas para sorrir diariamente.",
    "A diversão também é produtiva.",
    "Sorrir é um ato de coragem.",
    "Um momento de risada renova a mente.",
    "O humor suaviza dificuldades.",
    "Aprenda a rir de si mesmo.",
    "Pequenos prazeres geram grande alegria.",
    "A leveza melhora a perspectiva.",
    "Brincar com ideias cria criatividade.",
    "A alegria está nos detalhes simples.",
    "Mantenha o bom humor em desafios.",
    "Rir com amigos fortalece vínculos.",
    "A espontaneidade traz felicidade.",
    "Risos curtos renovam a energia.",
    "A positividade começa com um sorriso.",
    "A diversão não tem hora marcada.",
    "Humor é combustível da alma.",
    "Sorria mesmo em dias difíceis.",
    "Uma risada muda o estado de espírito."
  ]
};
const categoriesList=["geral","amor","trabalho","dinheiro","humor"];
let phrases={},favorites=[],lastResult=null;
const uid=()=>Math.random().toString(36).slice(2,9);

function loadStorage(){
  try{
    const custom=JSON.parse(localStorage.getItem('cs_custom_phrases')||'{}');
    const fav=JSON.parse(localStorage.getItem('cs_favorites')||'[]');
    phrases={...defaultPhrases};
    for(const k in custom){ if(!phrases[k]) phrases[k]=[]; phrases[k]=phrases[k].concat(custom[k]); }
    favorites=fav||[];
  }catch(e){ phrases={...defaultPhrases}; favorites=[]; }
}
function saveCustom(custom){ localStorage.setItem('cs_custom_phrases',JSON.stringify(custom)); }
function saveFavorites(){ localStorage.setItem('cs_favorites',JSON.stringify(favorites)); }
loadStorage();

const categoriesEl=document.getElementById('categories');
const favListEl=document.getElementById('favList');
const resultTextEl=document.getElementById('resultText');
const resultCatEl=document.getElementById('resultCategory');
const boxInner=document.getElementById('boxInner');

function renderCategories(){
  categoriesEl.innerHTML='';
  categoriesList.forEach(cat=>{
    const btn=document.createElement('button');
    btn.className='px-3 py-1 rounded-full border text-sm text-slate-600 hover:bg-slate-50';
    btn.textContent=cat[0].toUpperCase()+cat.slice(1);
    btn.onclick=()=>pickCategoryAndShow(cat);
    categoriesEl.appendChild(btn);
  });
}

function renderFavs(){
  favListEl.innerHTML='';
  if(!favorites.length){ favListEl.innerHTML='<div class="text-slate-400 text-sm">Nenhum favorito ainda.</div>'; return; }
  favorites.slice().reverse().forEach(f=>{
    const item=document.createElement('div');
    item.className='p-2 rounded-xl bg-slate-50 flex items-start justify-between gap-2';
    item.innerHTML=`<div class="text-sm"><div class="font-semibold">${f.text}</div><div class="text-xs text-slate-400 mt-1">${f.category}</div></div>`;
    const actions=document.createElement('div');
    actions.className='flex flex-col gap-2';
    const copy=document.createElement('button'); copy.textContent='📋'; copy.className='p-1'; copy.onclick=()=>navigator.clipboard.writeText(f.text);
    const del=document.createElement('button'); del.textContent='🗑️'; del.className='p-1'; del.onclick=()=>{
      favorites=favorites.filter(x=>x.id!==f.id); saveFavorites(); renderFavs();
    };
    actions.appendChild(copy); actions.appendChild(del); item.appendChild(actions); favListEl.appendChild(item);
  });
}

function showResult(obj){
  if(!obj) return;
  lastResult={...obj,id:uid()};
  boxInner.classList.add('open');
  setTimeout(()=>boxInner.classList.remove('open'),1200);
  resultCatEl.textContent=obj.category.toUpperCase();
  resultTextEl.textContent=obj.text;
}

function pickRandomFrom(cat){
  const arr=(phrases[cat]||[]).slice();
  if(!arr.length) return null;
  const idx=Math.floor(Math.random()*arr.length);
  return {text:arr[idx],category:cat};
}
function pickCategoryAndShow(cat){
  const res=pickRandomFrom(cat);
  if(!res){ resultTextEl.textContent='Sem frases nessa categoria.'; return; }
  showResult(res);
}

async function pickAnyAndShow(){
  const all=[];
  for(const c of categoriesList){ (phrases[c]||[]).forEach(t=>all.push({text:t,category:c})); }
  const result=all[Math.floor(Math.random()*all.length)];
  if(!result){ resultTextEl.textContent='Sem frases disponíveis.'; return; }
  showResult(result);
}

document.getElementById('addPhraseBtn').addEventListener('click',()=>{
  const text=(document.getElementById('newPhrase').value||'').trim();
  const cat=document.getElementById('newPhraseCat').value;
  if(!text) return alert('Escreva algo antes.');
  const customRaw=JSON.parse(localStorage.getItem('cs_custom_phrases')||'{}');
  if(!customRaw[cat]) customRaw[cat]=[];
  customRaw[cat].push(text);
  localStorage.setItem('cs_custom_phrases',JSON.stringify(customRaw));
  loadStorage(); renderCategories(); alert(`Frase adicionada em ${cat.charAt(0).toUpperCase()+cat.slice(1)}.`); document.getElementById('newPhrase').value='';
});

document.getElementById('favBtn').addEventListener('click',()=>{
  if(!lastResult) return alert('Sortear algo primeiro.');
  if(favorites.some(f=>f.text===lastResult.text)) return alert('Já favoritou essa frase.');
  favorites.push({id:lastResult.id,text:lastResult.text,category:lastResult.category});
  saveFavorites(); renderFavs(); alert('Favorito salvo.');
});

document.getElementById('clearFavs').addEventListener('click',()=>{
  if(!confirm('Limpar favoritos?')) return;
  favorites=[]; saveFavorites(); renderFavs();
});

document.getElementById('copyBtn').addEventListener('click',()=>{
  if(!lastResult) return alert('Sortear algo primeiro.');
  navigator.clipboard.writeText(lastResult.text).then(()=>alert('Copiado para área de transferência'));
});

document.getElementById('shareBtn').addEventListener('click',async()=>{
  if(!lastResult) return alert('Sortear algo primeiro.');
  if(navigator.share){ try{ await navigator.share({title:'Caixinha da Sorte',text:lastResult.text}); }catch(e){} } 
  else{ navigator.clipboard.writeText(lastResult.text); alert('Compartilhar não suportado. Texto copiado.'); }
});

renderCategories();
renderFavs();
document.getElementById('shakeBtn').addEventListener('click',pickAnyAndShow);

document.getElementById('dailyBtn').addEventListener('click',()=>{
  const seed=(new Date()).toISOString().slice(0,10);
  const arr=phrases['geral']||[];
  if(!arr.length) return alert('Sem frases gerais.');
  let hash=0; for(let ch of seed) hash=((hash<<5)-hash)+ch.charCodeAt(0);
  const idx=Math.abs(hash)%arr.length;
  showResult({text:arr[idx],category:'geral'});
});
