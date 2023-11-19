'use strict';

/*PRE-CARREGAMENTO*/

const preloader = 
document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded",
 function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});


/* Adicionar Evento em Múltiplos Elementos */

const addEventOnElements =
 function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; 
    i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }555555555
}



/*Toggle de Navegação Móvel*/

const navbar =
 document.querySelector("[data-navbar]");
const navTogglers = 
document.querySelectorAll("[data-nav-toggler]");
const navLinks =
 document.querySelectorAll("[data-nav-link]");
const overlay = 
document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click",
 function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
});

addEventOnElements(navLinks, "click", function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
});



/* Cabeçalho Ativo no Rolamento */

const header = 
document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" :
   "remove"]("active");
});



/* Efeito de Inclinação em Elementos
javascript */

const tiltElements = 
document.querySelectorAll("[data-tilt]");

const initTilt = function (event) {

  // Cálculo do efeito de inclinação
  const centerX = this.offsetWidth / 2;
  const centerY = this.offsetHeight / 2;

  const tiltPosY = 
  ((event.offsetX - centerX) / centerX) * 10;
  const tiltPosX = 
  ((event.offsetY - centerY) / centerY) * 10;

  this.style.transform =
   `perspective(1000px) rotateX(${tiltPosX}deg)
    rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;

}

addEventOnElements(tiltElements,
   "mousemove", initTilt);

addEventOnElements(tiltElements, 
  "mouseout", function () {
  this.style.transform = 
  `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});



/* Conteúdo de Abas */

const tabBtns = 
document.querySelectorAll("[data-tab-btn]");
const tabContents = 
document.querySelectorAll("[data-tab-content]");

let lastActiveTabBtn = tabBtns[0];
let lastActiveTabContent = tabContents[0];

const filterContent = function () {

  if (!(lastActiveTabBtn === this)) {

    lastActiveTabBtn.classList.remove("active");
    lastActiveTabContent.classList.remove("active");

    this.classList.add("active");
    lastActiveTabBtn = this;

    const currentTabContent =
document.querySelector(`[data-tab-content="${
  this.dataset.tabBtn}"]`);

    currentTabContent.classList.add("active");
    lastActiveTabContent = currentTabContent;

  }

}

addEventOnElements(tabBtns, "click", filterContent);



/* Cursor Personalizado */

const cursors =
 document.querySelectorAll("[data-cursor]");
const hoveredElements = 
[...document.querySelectorAll("button"),
 ...document.querySelectorAll("a")];

 // Adicionando ouvinte de evento mousemove
window.addEventListener("mousemove",
// Posição do cursor personalizado
 function (event) {

  const posX = event.clientX;
  const posY = event.clientY;

  /** cursor dot position */
  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  /** cursor outline position */
  setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);

});

/** add hovered class when mouseover on hoverElements */
addEventOnElements(hoveredElements,
   "mouseover", function () {
  for (let i = 0, len = cursors.length;
     i < len; i++) {
    cursors[i].classList.add("hovered");
  }
});

// Removendo a classe "hovered"
addEventOnElements(hoveredElements,
   "mouseout", function () {
  for (let i = 0, len = cursors.length; 
    i < len; i++) {
    cursors[i].classList.remove("hovered");
  }
});

// Login e Cadastr-se //

function flipCard() {
  var card = document.getElementById('card');
  card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

function signInWithGoogle() {
  // Implemente a lógica de autenticação com o Google aqui
  // Por exemplo, você pode usar o Google Sign-In API
  // https://developers.google.com/identity/sign-in/web/sign-in
  console.log('Autenticar com Google');
}

    function mostrarSubpagina(imagemSrc, titulo, descricao) {
        // Preencher os dados da subpágina
        document.getElementById('subpagina-imagem').innerHTML = '<img src="' + imagemSrc + '" alt="Imagem do Projeto">';
        document.getElementById('subpagina-titulo').innerText = titulo;
        document.getElementById('subpagina-descricao').innerText = descricao;

        // Exibir a subpágina
        document.getElementById('subpagina').style.display = 'block';
    }

    function fecharSubpagina() {
        // Fechar a subpágina
        document.getElementById('subpagina').style.display = 'none';
    }

    document.addEventListener('DOMContentLoaded', function () {
      const productCards = document.querySelectorAll('.product-card');
      const productModal = document.getElementById('productModal');
      const closeBtn = document.getElementById('closeBtn');
    
      // Function to open modal with product details
      function openProductModal(productId) {
        // Add logic to fetch and display product details based on productId
        // For simplicity, we'll just show/hide the modal for now
        productModal.style.display = 'flex';
      }
    
      // Function to close the modal
      function closeProductModal() {
        productModal.style.display = 'none';
      }
    
      // Event listeners for product cards
      productCards.forEach((card) => {
        card.addEventListener('click', () => {
          const productId = card.getAttribute('data-product-id');
          openProductModal(productId);
        });
      });
    
      // Event listener for close button in modal
      closeBtn.addEventListener('click', closeProductModal);
    });
    
// Open Product Details Modal
function openProductDetails() {
  var modal = document.getElementById('productDetailsModal');
  modal.style.display = 'block';
}

// Close Product Details Modal
function closeProductDetails() {
  var modal = document.getElementById('productDetailsModal');
  modal.style.display = 'none';
}

// Close Modal on Outside Click
window.onclick = function (event) {
  var modal = document.getElementById('productDetailsModal');
  if (event.target == modal) {
      modal.style.display = 'none';
  }
}