function top_menu_toggle() {
    burger.classList.toggle("burger_menu_open")
    topMenu.classList.toggle("top_menu_open")
    body.classList.toggle("body_no_scroll")
}
burger.onclick = top_menu_toggle