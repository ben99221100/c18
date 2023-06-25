let container = document.getElementById("container")
let movies = [
    "https://m.media-amazon.com/images/M/MV5BNDFmMzM3NzctZGE0MC00NGVmLTljZmUtYTNiZjA2ZTE4NjQwXkEyXkFqcGdeQXVyNzg3MDUyMzc@._V1_.jpg", 
    "https://upload.wikimedia.org/wikipedia/he/c/ce/%D7%91%D7%95%D7%91%D7%A1%D7%A4%D7%95%D7%92_%D7%94%D7%A1%D7%A8%D7%98_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.png", 
    "https://www.disccenter.co.il/content/products/prodimage_19094.jpg",
    "https://images.movies.org.il/t/p/original/kWOSubV8hI4gUFsd0ObHDJaJpGC.jpg",
]

showAllMovies()

function showAllMovies() {
    container.innerHTML = ""
    for (  let i = 0 ; i < movies.length; i++) {
        container.innerHTML += `
        <img onclick="remove(${i})" class="poster" src="${movies[i]}" alt="">
        `
    }
}

function remove(index) {
    movies.splice(index, 1)
    showAllMovies()
}


