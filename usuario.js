const container = document.querySelector('.container');
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get('id');
// console.log(id);
const url = `https://jsonplaceholder.typicode.com/users`;

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    //console.log(data)
    const p = document.createElement('p');
    p.innerHTML = data.name;
    const email = document.createElement('p');
    email.innerHTML = data.email;
    container.appendChild(p);
    container.appendChild(email);

})
.catch(err => console.log(err));
