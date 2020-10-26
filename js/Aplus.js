
// function myFunction() {
//     var x = document.getElementsByClassName("hamburgerMenu");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
// }

hamburgerID.addEventListener( 'click', (e) => {
    let menu = document.getElementsByClassName('menu')[0];
    menu.classList.toggle('open');
});