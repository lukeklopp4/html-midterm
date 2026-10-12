/*
 - Name: Lucas Klopp
 - File: script.js
 - Professor: Ratul Mazumder
 - File Contents:
    - toggleMenu (opens and closes the menu on phones)
    - closeMenu (closes the menu after a link is tapped)
*/

/*
 - runs when the menu button is tapped
 - if the menu has no class, adds the class "responsive" to show it
 - otherwise removes the class to hide it again
*/
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.className === "") {
        menu.className = "responsive";
    } else {
        menu.className = "";
    }
}

/*
 - runs when a menu link is tapped
 - removes the class "responsive" so the menu closes and the
   page jumps to the section with nothing covering it
*/
function closeMenu() {
    var menu = document.getElementById("menu");
    menu.className = "";
}