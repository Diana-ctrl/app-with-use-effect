const requestURL = 'https://jsonplaceholder.typicode.com/users';


//XMLHttpRequest (XHR) - это встроенный в браузер объект, 
//который даёт возможность делать 
//HTTP-запросы к серверу без перезагрузки страницы.

const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL)

xhr.onload = () => {
    console.log(JSON.parse(xhr.response))
}
xhr.sent()