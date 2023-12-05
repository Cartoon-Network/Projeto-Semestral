const fotoRegistrada = localStorage.getItem('fotoRegistrada');

        if (fotoRegistrada) {
            const entrarMobile = document.querySelector('.entrar-mobile');
            entrarMobile.innerHTML = `<div id="imagemNaBarraDeNavegacao" style="background-image: url(${fotoRegistrada}); width: 50px; height: 50px; background-size: cover; border-radius: 15px"></div>`;
            // Adicione estilos adicionais conforme necessário
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
                    const fotoPreviewForm = document.getElementById('foto-preview-form');
                    fotoPreviewForm.style.backgroundImage = `url(${imageDataURL})`;

                    // Adicionar lógica adicional, se necessário
                };
                reader.readAsDataURL(selectedFile);
            }
        }