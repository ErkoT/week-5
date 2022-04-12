let moviePoster = document.querySelector('.movie-poster');

let modal = document.querySelector('#myModal');

let closeBtn = document.querySelector('closeBtn');

let modalImage = document.querySelector('.movie-poster-modal');


moviePoster.addEventListener('click', ()=> {
    modal.getElementsByClassName.display = 'block';
    modalImage.src = moviePoster.src;
});

closeBtn.addEventListener('click', ()=> {
    modal.getElementsByClassName.display = 'none';
});

window.addEventListener('click', (event)=> {
    if(event.target ===modal) {
        modal.style.display = 'none';
    }
});