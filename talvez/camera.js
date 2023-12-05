const fotoRegistrada = localStorage.getItem('fotoRegistrada');
    const fotoPreview = document.getElementById('foto-preview');

    if (fotoRegistrada) {
        fotoPreview.style.backgroundImage = `url(${fotoRegistrada})`;
    }

    function escolherArquivo() {
        // Simula o clique no input de arquivo oculto
        var inputFile = document.getElementById('inputFile');
        inputFile.click();
    }

    function selecionarArquivo() {
        // Lógica para lidar com a seleção de arquivo aqui
        var inputFile = document.getElementById('inputFile');
        var selectedFile = inputFile.files[0];
        
        if (selectedFile) {
            // Salvar a foto no localStorage
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageDataURL = e.target.result;
                localStorage.setItem('fotoRegistrada', imageDataURL);
                
                // Atualizar a visualização da foto
                fotoPreview.style.backgroundImage = `url(${imageDataURL})`;

                // Adicionar lógica adicional, se necessário
            };
            reader.readAsDataURL(selectedFile);
        }
    }








































//TESTE 1



    var mediaStream;

function abrirCamera() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
            mediaStream = stream;
            const areaVideo = document.getElementById('camera');
            areaVideo.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Não foi possível acessar a câmera:', error);
        });
}

function tirarFoto() {
  const areaVideo = document.getElementById('camera');
  const canvas = document.createElement('canvas');
  canvas.width = areaVideo.videoWidth;
  canvas.height = areaVideo.videoHeight;
  const context = canvas.getContext('2d');
  context.drawImage(areaVideo, 0, 0, canvas.width, canvas.height);
  const imageDataURL = canvas.toDataURL();

  // Salvar a foto no localStorage
  localStorage.setItem('fotoRegistrada', imageDataURL);

  const fotoPreviewForm = document.getElementById('foto-preview-form');
  fotoPreviewForm.style.backgroundImage = `url(${imageDataURL})`;
}

// Recuperar a foto do localStorage
const fotoRegistrada = localStorage.getItem('fotoRegistrada');

// Se houver uma foto registrada, substituir o botão pela imagem
if (fotoRegistrada) {
  const entrarMobile = document.querySelector('.entrar-mobile');
  entrarMobile.innerHTML = `<div id="imagemNaBarraDeNavegacao" style="background-image: url(${fotoRegistrada}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;
  // Adicione estilos adicionais conforme necessário
}


function fechar() {
    if (mediaStream) {
        mediaStream.getTracks()[0].stop();
        const areaVideo = document.getElementById('camera');
        areaVideo.srcObject = null;
        mediaStream = null;
    }
}

function exibirFotoPreview(input) {
  const fotoPreviewForm = document.getElementById('foto-preview-form');

  if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
          const imageDataURL = e.target.result;
          fotoPreviewForm.style.backgroundImage = `url(${imageDataURL})`;
      };
      reader.readAsDataURL(input.files[0]);
  }
}

// Função para uploud da imagem via explorador de arquivos


function escolherArquivo() {
  // Simula o clique no input de arquivo oculto
  var inputFile = document.getElementById('inputFile');
  inputFile.click();
}

function selecionarArquivo() {
  // Lógica para lidar com a seleção de arquivo aqui
  var inputFile = document.getElementById('inputFile');
  var selectedFile = inputFile.files[0];
  
  if (selectedFile) {
    // Salvar a foto no localStorage
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageDataURL = e.target.result;
      localStorage.setItem('fotoRegistrada', imageDataURL);
      
      // Atualizar a visualização da foto
      const fotoPreviewForm = document.getElementById('foto-preview-form');
      fotoPreviewForm.style.backgroundImage = `url(${imageDataURL})`;

      // Adicionar lógica adicional, se necessário

      // Limpar as informações do usuário
      limparInformacoes();
    };
    reader.readAsDataURL(selectedFile);
  }
}






















//TESTE 2


const fotoRegistrada = localStorage.getItem('fotoRegistrada');
const entrarMobile = document.querySelector('.entrar-mobile');
const fotoPreview = document.getElementById('foto-preview');
const inputFile = document.getElementById('inputFile');

// Recuperar a foto do localStorage
const fotoRegistrada = localStorage.getItem('fotoRegistrada');

console.log('Foto registrada:', fotoRegistrada);

// Se houver uma foto registrada, substituir o botão pela imagem
if (fotoRegistrada) {
    console.log('Exibindo foto registrada.');

    // Atualizar a visualização da foto no lugar original
    entrarMobile.innerHTML = `<div id="imagemNaBarraDeNavegacao" style="background-image: url(${fotoRegistrada}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;
  
    // Atualizar a visualização da foto no foto-preview
    fotoPreview.innerHTML = `<div id="foto-preview" style="background-image: url(${fotoRegistrada}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;

    // Adicione estilos adicionais conforme necessário
} else {
    console.log('Configurando eventos para escolher arquivo.');

    // Se não houver uma foto registrada, configurar os eventos do botão
    entrarMobile.addEventListener('click', escolherArquivo);
}

function escolherArquivo() {
    console.log('Escolher arquivo foi chamado.');
    // Simula o clique no input de arquivo oculto
    inputFile.click();
}

function selecionarArquivo() {
    console.log('Selecionar arquivo foi chamado.');
    var selectedFile = inputFile.files[0];
    
    if (selectedFile) {
        // Salvar a foto no localStorage
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageDataURL = e.target.result;
            console.log('Imagem carregada:', imageDataURL);
            localStorage.setItem('fotoRegistrada', imageDataURL);
            
            // Atualizar a visualização da foto no lugar original
            entrarMobile.innerHTML = `<div id="imagemNaBarraDeNavegacao" style="background-image: url(${imageDataURL}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;

            // Atualizar a visualização da foto no foto-preview
            fotoPreview.style.backgroundImage = `url(${imageDataURL})`;
            // Remover o botão
            document.querySelector('.btn-take-photo').style.display = 'none';

            // Adicionar lógica adicional, se necessário
        };
        reader.readAsDataURL(selectedFile);
    }
}

























//TESTE 3


const fotoPreview = document.getElementById('foto-preview');
const inputFile = document.getElementById('inputFile');
const entrarMobile = document.querySelector('.entrar-mobile');
const btnTakePhoto = document.querySelector('.btn-take-photo');

// Recuperar a foto do localStorage
const fotoRegistrada = localStorage.getItem('fotoRegistrada');

if (fotoRegistrada) {
    // Se houver uma foto registrada, substituir o botão pela imagem
    entrarMobile.innerHTML = `<div id="imagemNaBarraDeNavegacao" style="background-image: url(${fotoRegistrada}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;
    fotoPreview.style.backgroundImage = `url(${fotoRegistrada})`;
    btnTakePhoto.style.display = 'none';
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
            localStorage.setItem('fotoRegistrada', imageDataURL);
            
            // Atualizar a visualização da foto
            entrarMobile.innerHTML = `<div id="imagemNaBarraDeNavegacao" style="background-image: url(${imageDataURL}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;
            fotoPreview.style.backgroundImage = `url(${imageDataURL})`;
            btnTakePhoto.style.display = 'none';

            // Adicionar lógica adicional, se necessário
        };
        reader.readAsDataURL(selectedFile);
    }
}




















//TESTE4


const fotoPreview = document.getElementById('foto-preview');
const inputFile = document.getElementById('inputFile');
const entrarMobile = document.querySelector('.entrar-mobile');
const btnTakePhoto = document.querySelector('.btn-take-photo');

// Recuperar a foto do localStorage
const fotoRegistrada = localStorage.getItem('fotoRegistrada');

if (fotoRegistrada) {
    // Se houver uma foto registrada, substituir o botão pela imagem
    entrarMobile.innerHTML = `<div id="imagemNaBarraDeNavegacao" style="background-image: url(${fotoRegistrada}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;
    fotoPreview.style.backgroundImage = `url(${fotoRegistrada})`;
    btnTakePhoto.style.display = 'none';
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
            localStorage.setItem('fotoRegistrada', imageDataURL);
            
            // Atualizar a visualização da foto
            entrarMobile.innerHTML = `<div id="imagemNaBarraDeNavegacao" style="background-image: url(${imageDataURL}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;
            fotoPreview.style.backgroundImage = `url(${imageDataURL})`;
            btnTakePhoto.style.display = 'none';

            // Adicionar lógica adicional, se necessário
        };
        reader.readAsDataURL(selectedFile);
    }
}
