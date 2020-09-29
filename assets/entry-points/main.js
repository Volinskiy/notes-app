import '../blocks/header/header';
import '../blocks/main/main';
import '../blocks/note-item/note-item';
import '../blocks/pop-up/pop-up';

function addNoteItem(newArticleData) {
  console.log(newArticleData);
  // addNoteItem()
}

document.addEventListener('DOMContentLoaded', () => {
  
  let buttonLoadMore = document.querySelector('.jsButtonLoadMore');
  
  buttonLoadMore.addEventListener('click', () => {    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/articles.json');

    xhr.send();

    // 4. Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = function() {
      if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
      } else { // если всё прошло гладко, выводим результат
        // alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
        addNoteItem(JSON.parse(xhr.response));
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
})