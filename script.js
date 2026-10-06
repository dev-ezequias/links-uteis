const shareData = {
  title: 'Dev Ezequias | Links',
  text: 'Confira meus links e redes sociais!',
  url: window.location.href,
};

async function handleShare() {
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      // Ignora erro se o usuário fechar a janela de compartilhamento nativa
      console.log('Compartilhamento cancelado ou não concluído.');
    }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    } catch (err) {
      console.error('Erro ao copiar o link:', err);
    }
  }
}

// O QUE FALTAVA: Conectar a função ao evento de clique no botão
document.addEventListener('DOMContentLoaded', () => {
  const shareBtn = document.getElementById('btn-share');

  if (shareBtn) {
    shareBtn.addEventListener('click', handleShare);
  }
});