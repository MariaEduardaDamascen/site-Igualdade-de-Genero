const searchInput = document.querySelector('.busca'); /* se este script  não existir exibe um erro no console */

if (searchInput) { /* é  acionado toda vez que o usuário digitar na barrinha de pesquisa */
  searchInput.addEventListener('input', function (e) {
    const term = e.target.value.toLowerCase();/* convertendo em letras minúsculas para comparar */
    const articles = document.querySelectorAll('.blog-card');

    articles.forEach(article => {
      const titleElement = article.querySelector('h2'); /* verifica se o termo digitado existe no 'h2'*/
      
      // Verifica se o <h2> existe
      if (titleElement) {
        const title = titleElement.textContent.toLowerCase();
        article.style.display = title.includes(term) ? 'block' : 'none';
      } else { /* avisa se o 'h2 não  existe  */
        console.warn('Elemento <h2> não encontrado dentro de um .blog-card.');
      }
    });
  });
} else {
  console.error("Elemento '.busca' não encontrado no HTML.");
};