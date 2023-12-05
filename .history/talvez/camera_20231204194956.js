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