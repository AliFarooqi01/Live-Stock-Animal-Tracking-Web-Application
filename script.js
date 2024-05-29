function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    var header = document.getElementById("header");

    if (sidebar.classList.contains('collapsed-sidebar')) {
        sidebar.classList.remove('collapsed-sidebar');
        main.style.marginLeft = "250px";
        header.style.marginLeft = "250px";
    } else {
        sidebar.classList.add('collapsed-sidebar');
        main.style.marginLeft = "80px";
        header.style.marginLeft = "80px";
    }

    // Re-initialize tooltips after toggling sidebar
    $('[data-toggle="tooltip"]').tooltip('dispose').tooltip();
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
