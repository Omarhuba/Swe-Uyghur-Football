import "./styles/main.scss";

ducument.getElementById("login").addEventListener("click", () => {
    console.log('login my page!')
})


const btn = document.querySelector('button');
btn.addEventListener("click", () => {
    alert('Hello to my new webpack!')
})

// dropdown function
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
// myFunction()
// window.onclick = function (event) {
//     if (!event.target.matchs('.menuBtn')) {
//         let dropdowns = document.getElementById("dropdown-content")
//         // let i;
//         for (let i = 0; i < dropdowns.length; i++) {
//             let openDropdown = dropdowns[i];
//             if (openDropdown.cliassList.contains('show')) {
//                 openDropdown.classList.remove('show')
//             }
//         }
//     }
// }



console.log("Hello World!");
