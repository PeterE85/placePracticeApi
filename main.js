const aplication = document.querySelector('.container');

const url = `https://jsonplaceholder.typicode.com/users`; //buscamos la url del API

fetch(url) //aki hacemos la peticion FETCH devuelve una promesa
.then(res => res.json()) //la promesa devuelva una respuesta y la convierto en JSON cdo este resuelta la promesa
.then(data => {             //aqui capturo la data
    //console.log(data) 
    data.forEach(usuario => {
        //console.log(usuario.name)
        const parrafo = document.createElement('p');
        parrafo.setAttribute('id', usuario.id);
        parrafo.innerHTML = usuario.name;
        parrafo.addEventListener("click", function(){
            window.location.href = `./usuario.html?id=${usuario.id}`
        })
        aplication.appendChild(parrafo);
    });
})
.catch(err => console.log(err)) //para lanzar el errorsi hay




