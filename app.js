fetch('https://ghibliapi.herokuapp.com/films')
.then(response => {
    return response.json()
})
.then(films => {
    // console.log(films)

    const containerDiv = document.querySelector('#container')

    films.forEach(film => {
        const filmDiv = document.createElement('div')
        filmDiv.innerHTML = '<div class="title">' + film.title + '</div><div>' + film.description + '</div>'

        containerDiv.append(filmDiv)
    });

})
