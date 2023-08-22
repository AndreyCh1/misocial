function top_menu_toggle() {
    burger.classList.toggle("burger_menu_open")
    topMenu.classList.toggle("top_menu_open")
    background.classList.toggle("background_open")
    body.classList.toggle("body_no_scroll")
    footerCopy.classList.toggle("footer-copy")
}
burger.onclick = top_menu_toggle
background.onclick = top_menu_toggle