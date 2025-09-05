
document.addEventListener("DOMContentLoaded", function() {
    const themeTarget = document.documentElement;
    const toggleBtn = document.querySelector(".theme-toggle");
    const logo = document.getElementById("logo");
    const logo2 = document.getElementById("nebulalogo");

    AOS.init();

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const currentTheme = themeTarget.getAttribute("data-bs-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            themeTarget.setAttribute("data-bs-theme", newTheme);

            // logo.src = newTheme === "dark" 
            // ? "assets/logoWhite.png" 
            // : "assets/logoBlack.png";

            // if (nebulalogo) {
            //     logo2.src = newTheme === "dark"
            //         ? "assets/oldlogoWhite.png"
            //         : "assets/oldlogoBlack.png";
            // }

            const themeBg1 = document.getElementById("theme-bg1");
            if (themeBg1) {
                if (newTheme === "light") {
                    themeBg1.classList.remove("earth-bg");
                    themeBg1.classList.add("light-earth-bg");
                } else {
                    themeBg1.classList.remove("light-earth-bg");
                    themeBg1.classList.add("eartg-bg");
                }
            }
        });
    }
});

