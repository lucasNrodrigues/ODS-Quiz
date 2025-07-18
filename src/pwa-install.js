let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installButton = document.getElementById('installBtn');
  if (installButton) {
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
      installButton.style.display = 'none';
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou a instalação');
        } else {
          console.log('Usuário recusou a instalação');
        }
        deferredPrompt = null;
      });
    });
  }
});
window.addEventListener('appinstalled', () => {
  console.log('Aplicativo instalado com sucesso!');
  deferredPrompt = null;
});