//O uso de 'use strict'; ativa o "modo estrito" do JavaScript, que impõe um conjunto mais rigoroso de regras e boas práticas, ajudando a evitar erros comuns.

'use strict';



/*PRE-CARREGAMENTO*/ //id e class

const preloader = 
document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded",
 function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});




/* Adicionar Evento em Múltiplos Elementos */


// Recebe uma lista de elementos, o tipo de evento(eventType), e a função de retorno. Itera sobre os elementos e adiciona o evento com função de retorno (callback)  especifica.
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





/* Efeito de Inclinação em Elementos javascript */

const tiltElements = 
document.querySelectorAll("[data-tilt]");
const initTilt = function (event) {

  // Cálculo do efeito de inclinação - determinam o centro do elemento em relação á sua largura e altura, respectivamente.
  const centerX = this.offsetWidth / 2;
  const centerY = this.offsetHeight / 2;

  // Calculam a posição do mouse em relação ao centro do elemento.
  const tiltPosY = 
  ((event.offsetX - centerX) / centerX) * 10;
  const tiltPosX = 
  ((event.offsetY - centerY) / centerY) * 10;

  // Aplica o efieto de inclinação ao elemento
  this.style.transform =

  // Define a perspectiva dav transformação 3D.
   `perspective(1000px) rotateX(${tiltPosX}deg)
  
    rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;
  // Rotacinam o elemento em torno dos eixos x e y respectivamente, criando o efeito de inclinação.
}

// Ativação pelo movimento do mouse.
addEventOnElements(tiltElements,
   "mousemove", initTilt);

   // Repouso da imagem ao tirar o mouse de cima da imagem.
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

/** posição do ponto do cursor */
  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

/** posição do contorno do cursor */
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




// Login e Cadastre-se //

function flipCard() {
  var card = document.getElementById('card');
  card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

function validarEntrada() {
  const emailEntrada = document.getElementById('email').value;
  const senhaEntrada = document.getElementById('senha').value;
  const botaoEntrar = document.getElementById('botaoEntrar');

  if (!emailEntrada || !senhaEntrada) {
    alert('Por favor, preencha todos os campos antes de entrar.');
    botaoEntrar.disabled = true;
  } else {
    botaoEntrar.disabled = false;
  }
}

function validarCadastro() {
  const nomeCadastro = document.getElementById('nome').value;
  const emailCadastro = document.getElementById('cadastroEmail').value;
  const senhaCadastro = document.getElementById('cadastroSenha').value;
  const botaoCadastrar = document.getElementById('botaoCadastrar');

  if (!nomeCadastro || !emailCadastro || !senhaCadastro) {
      alert('Por favor, preencha todos os campos antes de cadastrar.');
      botaoCadastrar.disabled = true;
  } else {
      botaoCadastrar.disabled = false;
      // Continue com a lógica de cadastro
      // cadastrar(nomeCadastro, emailCadastro, senhaCadastro);
  }
}

function entrar() {
  // Obter os valores dos campos de login
  var email = document.getElementById('loginEmail').value;
  var senha = document.getElementById('loginSenha').value;

  // Verificar se o usuário está cadastrado
  var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
  var usuarioEncontrado = usuariosCadastrados.find(function (user) {
      return user.email === email && user.senha === senha;
  });

  if (usuarioEncontrado) {
      alert('Login bem-sucedido!');
      // Lógica para redirecionar ou realizar outras ações após o login
  } else {
      alert('Usuário não encontrado. Verifique suas credenciais.');
  }
}

function cadastrar() {
  // Obter os valores dos campos de cadastro
  var nome = document.getElementById('cadastroNome').value;
  var email = document.getElementById('cadastroEmail').value;
  var senha = document.getElementById('cadastroSenha').value;
  var fotoRegistrada = localStorage.getItem('fotoRegistrada');

  // Verificar se o email já está cadastrado
  var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
  var emailExistente = usuariosCadastrados.some(function (user) {
      return user.email === email;
  });

  if (emailExistente) {
      alert('Este email já está cadastrado. Por favor, use outro.');
  } else if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos antes de cadastrar.');
  } else {
      // Adicionar novo usuário ao armazenamento local
      var novoUsuario = { nome: nome, email: email, senha: senha, foto: fotoRegistrada };
      usuariosCadastrados.push(novoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

      // Limpar as informações do formulário
      document.getElementById('cadastroNome').value = '';
      document.getElementById('cadastroEmail').value = '';
      document.getElementById('cadastroSenha').value = '';
      document.getElementById('fotoRegistrada').value = '';

      // Limpar as informações do usuário
      limparInformacoes();

      alert('Cadastro bem-sucedido! Você pode fazer login agora.');
      // Lógica para redirecionar ou realizar outras ações após o cadastro
  }
}

// Subpagina//




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
    
      // Função para abrir o modal com os detalhes do produto
      function openProductModal(productId) {
        // Lógica para buscar e exibir os detalhes do produto com base no productId
        // Por simplicidade, vamos mostrar/ocultar o modal por enquanto
        productModal.style.display = 'flex';
      }
    
      // Função para fechar o modal
      function closeProductModal() {
        productModal.style.display = 'none';
      }
    
      // Adiciona ouvintes de evento aos cards de produto
      productCards.forEach((card) => {
        card.addEventListener('click', () => {
          const productId = card.getAttribute('data-product-id');
          openProductModal(productId);
        });
      });
    
      // Adiciona ouvinte de evento ao botão de fechar no modal
      closeBtn.addEventListener('click', closeProductModal);
    
      // Fecha o modal ao clicar fora dele
      window.addEventListener('click', function (event) {
        if (event.target === productModal) {
          closeProductModal();
        }
      });
    });
    
    
// Open Product Details Modal
function openProductDetails(jjj) {
  var modal = document.getElementById('productDetailsModal'+jjj);
  modal.style.display = 'block';
}

// Close Product Details Modal
function closeProductDetails(jjj) {
  var modal = document.getElementById('productDetailsModal'+jjj);
  modal.style.display = 'none';
}

// Close Modal on Outside Click
window.onclick = function (event) {
  var modal = document.getElementById('productDetailsModal');
  if (event.target == modal) {
      modal.style.display = 'none';
  }
}



// Foto Registrada//

const fotoRegistrada = localStorage.getItem('fotoRegistrada');
const fotoPreview = document.getElementById('foto-preview');
const entrarMobile = document.querySelector('.entrar-mobile');
const inputFile = document.getElementById('inputFile');

if (fotoRegistrada) {
  const entrarMobile = document.querySelector('.entrar-mobile');
  const fotoPreview = document.getElementById('foto-preview');
  entrarMobile.innerHTML = `<div id="imagemNaBarraDeNavegacao" style="background-image: url(${fotoRegistrada}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;
    fotoPreview.style.backgroundImage = `url(${fotoRegistrada})`;
    fotoTeste.style.width = "50px"
    // Atualizar a visualização da foto no lugar original
    
    // entrarMobile.innerHTML =  `<div id="imagemNaBarraDeNavegacao" style="background-image: url(${fotoRegistrada}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;
} else {
    console.log('Configurando eventos para escolher arquivo.');

    // Se não houver uma foto registrada, configurar os eventos do botão
    entrarMobile.addEventListener('click', escolherArquivo);
}

function escolherArquivo() {
    // Simula o clique no input de arquivo oculto
    inputFile.click();
}

function selecionarArquivo() {
    // Lógica para lidar com a seleção de arquivo aqui
    var selectedFile = inputFile.files[0];
    
    if (selectedFile) {
        // Salvar a foto no localStorage
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageDataURL = e.target.result;
            console.log('Imagem carregada:', imageDataURL);
            const fotoPreview = document.getElementById('foto-preview');
            localStorage.setItem('fotoRegistrada', imageDataURL);
            const entrarMobile = document.querySelector('.entrar-mobile');
            // Atualizar a visualização da foto no lugar original
            entrarMobile.innerHTML = `<div id="imagemNaBarraDeNavegacao" style="background-image: url(${imageDataURL}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;
            // Atualizar a visualização da foto
            fotoPreview.style.backgroundImage = `url(${imageDataURL})`;
            document.querySelector('.btn-take-photo').style.display = 'none';
        };
        reader.readAsDataURL(selectedFile);
    }
}



//Alert//

function validateAndSubmit() {
  var nomeInput = document.getElementById('nome');

  if (nomeInput.value.trim() === '') {
    alert('O nome é essencial para efetuar o cadastro.');
    return;
  }

  window.location.href = 'index.html';

}

function showConfirmationAlert() {
  var confirmResult = confirm("Você quer comprar esse produto?");
  if (confirmResult) {
    // Aqui você pode adicionar a lógica para realizar a compra
    alert("Compra realizada com sucesso!");
  } else {
    alert("Compra cancelada.");
  }
}