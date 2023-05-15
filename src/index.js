
// import './style.css'

const addMovie = function() {
    const button = document.querySelector('.button-add__movie');
    const container = document.querySelector('.content-container');
    const body = document.querySelector('body');
    const addMovieContainer = document.querySelector('.add-movie__container');
    
    button.addEventListener('click', function() {
        container.style.opacity = 0.5;
        body.style.overflowY = 'hidden';
        addMovieContainer.style.display = 'block';
        
    }) 
    addMovieContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('closeModal')) {
            container.style.opacity = 1;
            body.style.overflowY = 'auto';
            addMovieContainer.style.display = 'none';
        }
    })
}


addMovie();

