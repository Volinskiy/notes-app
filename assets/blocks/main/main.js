import './main.less';


document.addEventListener('DOMContentLoaded', () => {
  let buttonLoadMore = document.querySelector('.jsButtonLoadMore');
  
  buttonLoadMore.addEventListener('click', () => {    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/articles.json');
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      } else {
        addNoteItem(xhr.response);
      }
    };

    // xhr.onprogress = function(event) {
    //   if (event.lengthComputable) {
    //     alert(`Получено ${event.loaded} из ${event.total} байт`);
    //   } else {
    //     alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
    //   }

    // };

    xhr.onerror = function() {
      alert("Запрос не удался");
    };
  })

  let articlesSection = document.querySelector('.jsArticles');
  
  articlesSection.addEventListener('click', (e) => {
    let target = e.target;
    if (!target.classList.contains('jsButtonDeleteNote')) return;
    target.closest('article.note-item').classList.add('display-none');
  })
})

function addNoteItem(response) {
  let additionalArticles = JSON.parse(response);
  let articlesBlick = document.querySelector('.jsArticles');
  
  additionalArticles.forEach((addArt) => {
    let article = document.createElement('article');
    article.className = "note-item main__note-item";
    article.innerHTML = `<button class="note-item__button-delete button--close button jsButtonDeleteNote"></button>
    <h2 class="note-item__header">${addArt.header}</h2>
    <time class="note-item__time" datetime="2020-11-20">${addArt.data}</time>
    <div class="note-item__description">
    <p class="note-item__text">${addArt.description}</p>
    </div>`;
    articlesBlick.append(article);
  })
}
