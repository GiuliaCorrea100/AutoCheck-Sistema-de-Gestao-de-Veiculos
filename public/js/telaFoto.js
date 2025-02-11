
// Ativar câmera ao carregar a página
const video = document.getElementById('video');
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => video.srcObject = stream)
    .catch(err => console.error("Erro ao acessar a câmera:", err));

// Captura uma foto da câmera
function tirarFoto() {
    const canvas = document.getElementById('canvas');
    const foto = document.getElementById('foto');
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    foto.src = canvas.toDataURL("image/png"); // Exibir a foto tirada
    processarOCR(foto.src); // Processar a foto tirada
}

// Processar imagem de upload
function processarImagem() {
    const input = document.getElementById("uploadPlaca");
    if (input.files.length === 0) {
        alert("Selecione uma imagem da placa.");
        return;
    }

    const leitor = new FileReader();
    leitor.onload = function (e) {
        document.getElementById("foto").src = e.target.result; // Exibir imagem carregada
        processarOCR(e.target.result); // Processar OCR
    };
    leitor.readAsDataURL(input.files[0]);
}

// Processar OCR com Tesseract.js
function processarOCR(imagem) {
    Tesseract.recognize(
        imagem,
        'eng', // Pode adicionar 'por' ou customizar para português, se necessário
        {
            logger: m => console.log(m) // Log do progresso
        }
    ).then(({ data: { text } }) => {
        document.getElementById("resultado").textContent = text.trim();
        document.getElementById("placaCorrigida").value = text.trim(); // Carregar o texto detectado para o campo de correção
    });
}

// Atualizar o texto com a correção manual
function atualizarPlaca() {
    const placaCorrigida = document.getElementById('placaCorrigida').value;
    document.getElementById("resultado").textContent = placaCorrigida; // Exibir a placa corrigida
}