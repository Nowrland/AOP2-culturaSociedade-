function scrollToBottom() {
  const pageEnd = document.getElementById('page-end');
  if (pageEnd) {
    pageEnd.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}

function contactFormSubmit() {
    const RECIPIENTE = "pdf.joao.santos@gmail.com";

    const nome = document.getElementById('nome').value;
    var assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    assunto = `${nome} - ${assunto}`; 

    const mailto = `mailto:${RECIPIENTE}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`;
    
    if (nome && mensagem && assunto !== "") {
        window.location.href = mailto;
    } else {
      window.alert("Preencha todos os campos!");
    }
}