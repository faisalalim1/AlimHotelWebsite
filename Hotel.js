const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
const book = document.getElementById('book-btn');


navBtn.addEventListener('click', function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target == modal){
        sideNav.classList.remove('show');
        modal.classList.remove('show');
    }
});

book.addEventListener('click', function(){
    alert("Booking succesfull");
});