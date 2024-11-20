// Informações complementares da requisição da API
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDgzM2ExZjg2YzFjODViZDVkYzkwMjNhYTgwMmI0OCIsIm5iZiI6MTczMTcxMTYyMS4wMzE0NTIsInN1YiI6IjY3MzdkMWFjNjI0YTg1Yjg4OTllOGM0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ObyavVYSud8qSO2zJcMxD7Da9-29rhPnCL3-hvQ-fXg'
    }
};
  
// Recuperando filmes populares da API The Movie DB
async function request_popular_mv(){
    const req = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options)
    
    const json = req.json()
    
    return json
}
  
// Request dos filmes populares de animação da API The Movie DB
async function request_animation_mv() {
      const req = await fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=16&sort_by=popularity.desc', options)
    
      const json = req.json()
    
      return json
}

// Recuperando filmes populares de terror da API The Movie DB
async function request_horror_mv(){
    const req = await fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=27&sort_by=popularity.desc', options)
        
    const json = req.json()

    return json
}

// Utilizar dados das funções que fazem a requisição para montar o HTML da DOM
async function show_mv(){
    const req_popular = await request_popular_mv()
    const req_action = await request_animation_mv()
    const req_horror = await request_horror_mv()

    const movies_popular = req_popular.results
    const movies_action = req_action.results
    const movies_horror = req_horror.results

    for(const movie of movies_popular){
        const $p1 = document.createElement("p")
        const $p2 = document.createElement("p")
        const $img = document.createElement("img")
        const $movie_div = document.createElement("div")
        document.querySelector("#popular-movies").append($movie_div)
        $movie_div.className = "div_movie"

        $img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        $p1.innerHTML = movie.title
        $p2.innerHTML = `Nota do filme: ${movie.vote_average.toFixed(2)}`
        
        $p1.className = "info_movie"
        $p2.className = "info_movie"

        //mouse hover function 
        $movie_div.addEventListener('mouseover',() => {
            $movie_div.append($p1, $p2)
        })
        $movie_div.addEventListener('mouseout',() => {
            $p1.remove()
            $p2.remove()
        })
        
        $movie_div.append($img)
    }
    
    for(const movie of movies_action){
        const $p1 = document.createElement("p")
        const $p2 = document.createElement("p")
        const $img = document.createElement("img")
        const $movie_div = document.createElement("div")
        document.querySelector("#action-movies").append($movie_div)
        $movie_div.className = "div_movie"

        $img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        $p1.innerHTML = movie.title
        $p2.innerHTML = `Nota do filme: ${movie.vote_average.toFixed(2)}`
        
        $p1.className = "info_movie"
        $p2.className = "info_movie"
        
        $movie_div.addEventListener('mouseover',() => {
            $movie_div.append($p1, $p2)
        })
        $movie_div.addEventListener('mouseout',() => {
            $p1.remove()
            $p2.remove()
        })
        
        $movie_div.append($img)
    }
    
    for(const movie of movies_horror){
        const $p1 = document.createElement("p")
        const $p2 = document.createElement("p")
        const $img = document.createElement("img")
        const $movie_div = document.createElement("div")
        document.querySelector("#horror-movies").append($movie_div)
        $movie_div.className = "div_movie"
        
        $img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        $p1.innerHTML = movie.title
        $p2.innerHTML = `Nota do filme: ${movie.vote_average.toFixed(2)}`
        
        $p1.className = "info_movie"
        $p2.className = "info_movie"
        
        $movie_div.addEventListener('mouseover',() => {
            $movie_div.append($p1, $p2)
        })
        $movie_div.addEventListener('mouseout',() => {
            $p1.remove()
            $p2.remove()
        })
        
        $movie_div.append($img)
    }
}

// Execução da função
show_mv()