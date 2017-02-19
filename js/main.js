function overlayChange(element) {

    var overlay = document.getElementById("welcomeOverlay");

    var opac = 1.0;

    var id = setInterval(frame, 10);


    function frame() {

        if (opac == 0.0) {
            clearInterval(id);
            overlay.style.display = "none";
        } else {
            opac -= 0.01;
            overlay.style.opacity = opac;
        }

    }

    var sidebar = document.getElementById("sidebarForm");

    sidebar.style.display = "block";

    codeAddress(element);
}

