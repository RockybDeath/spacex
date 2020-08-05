import { menuOpen } from "./menu.js";
import { menuClose } from "./menu.js";

// $(document).ready(() => {
document.addEventListener("DOMContentLoaded", () => {

const buttonMenu = document.querySelector('#hamburger');

// buttonMenu.addEventListener("click", () => {
//     if(buttonMenu.attributes.getNamedItem("aria-expanded").value === "false") {
//         menuOpen();
//         buttonMenu.attributes.getNamedItem("aria-expanded").value = "true";
//     } else {
//         menuClose();
//         buttonMenu.attributes.getNamedItem("aria-expanded").value = "false";
//     }
// });
$(function () {
    $("#hamburger").on("click", function(e){
        var menuItem = $(e.currentTarget);
        
        if (menuItem.attr( 'aria-expanded') === 'true') {
            $(this).attr( 'aria-expanded', 'false');
            menuClose();
        } else {
            $(this).attr( 'aria-expanded', 'true');
            menuOpen();
        }
    });
})
$(window).scroll(function() {
    if(buttonMenu.attributes.getNamedItem('aria-expanded').value === "true"){
        buttonMenu.attributes.getNamedItem('aria-expanded').value = "false";
        menuClose();
    }
});
})