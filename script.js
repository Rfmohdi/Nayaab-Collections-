
// Product data for nayaab-collection
const sampleProducts = [
  {id:1,title:'Elegant Silver Ring',price:'35 KWD',img:'products/20241006_122816.jpg',desc:'Elegant silver ring with crystal accents.'},
  {id:2,title:'Handcrafted Necklace',price:'45 KWD',img:'products/necklace.jpg',desc:'Delicate handcrafted necklace.'},
  {id:3,title:'Luxury Shawl',price:'75 KWD',img:'products/shawl.jpg',desc:'Soft luxury shawl with intricate design.'},
  {id:4,title:'Statement Earrings',price:'30 KWD',img:'products/earrings.jpg',desc:'Eye-catching statement earrings.'}
];

function createProductCard(p){
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <img src="${p.img}" alt="${p.title}" />
    <h3>${p.title}</h3>
    <div class="price">${p.price}</div>
    <p style="font-size:13px;opacity:0.9;margin-bottom:8px">${p.desc}</p>
    <div class="actions">
      <button class="btn primary" onclick="addToCart(${p.id})">Add to Cart</button>
      <button class="btn secondary" onclick="quickView(${p.id})">Quick View</button>
    </div>
  `;
  return div;
}

function initProducts(){
  const grid = document.getElementById('productsGrid');
  sampleProducts.forEach(p => grid.appendChild(createProductCard(p)));
}

let cartCount = 0;
function addToCart(id){
  cartCount += 1;
  document.getElementById('cartCount').textContent = cartCount;
  showToast('Item added to cart');
}

function quickView(id){
  const p = sampleProducts.find(x=>x.id===id);
  const html = `<strong>${p.title}</strong>\nPrice: ${p.price}\n\n${p.desc}`;
  alert(html);
}

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  t.style.opacity = '1';
  setTimeout(()=>{ t.style.opacity='0'; t.style.display='none'; },1400);
}

document.addEventListener('DOMContentLoaded',()=>{
  initProducts();
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
});
