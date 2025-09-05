// Theme persistence across navigation
document.addEventListener("DOMContentLoaded", function() {
    function getTheme() {
        return document.documentElement.getAttribute("data-bs-theme") || "dark";
    }
    function setTheme(theme) {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }
    // On page load, check for ?theme= param
    const params = new URLSearchParams(window.location.search);
    const themeParam = params.get("theme");

    if (themeParam) {
        setTheme(themeParam);
        // Also update themeBg1 class
        const themeBg1 = document.getElementById("theme-bg1");
        if (themeBg1) {
            if (themeParam === "light") {
                themeBg1.classList.remove("earth-bg");
                themeBg1.classList.add("light-earth-bg");
            } else {
                themeBg1.classList.remove("light-earth-bg");
                themeBg1.classList.add("earth-bg");
            }
        }
    }

    // Update all internal <a> links to include ?theme=THEME
    const theme = getTheme();
    document.querySelectorAll('a[href]:not([href^="http"]):not([href^="#"]):not([href^="mailto:"])').forEach(a => {
        let href = a.getAttribute("href");
        if (!href) return;
        // Remove any existing ?theme= or &theme= param
        href = href.replace(/[?&]theme=[^&]*/g, "");
        // Remove trailing ? or & if left
        href = href.replace(/[?&]$/, "");
        // Add theme param
        if (href.includes("?")) {
            href += `&theme=${theme}`;
        } else {
            href += `?theme=${theme}`;
        }
        a.setAttribute("href", href);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const themeTarget = document.documentElement;
    const logo = document.getElementById("logo");
    const logo2 = document.getElementById("nebulalogo");

    AOS.init();

    document.querySelectorAll(".theme-toggle").forEach(toggleBtn => {
        toggleBtn.addEventListener("click", () => {
            const currentTheme = themeTarget.getAttribute("data-bs-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            themeTarget.setAttribute("data-bs-theme", newTheme);

            // Update all internal <a> links to include the new theme param
            document.querySelectorAll('a[href]:not([href^="http"]):not([href^="#"]):not([href^="mailto:"])').forEach(a => {
                let href = a.getAttribute("href");
                if (!href) return;
                href = href.replace(/[?&]theme=[^&]*/g, "");
                href = href.replace(/[?&]$/, "");
                if (href.includes("?")) {
                    href += `&theme=${newTheme}`;
                } else {
                    href += `?theme=${newTheme}`;
                }
                a.setAttribute("href", href);
            });

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
                    themeBg1.classList.add("earth-bg");
                }
            }
        });
    });
});

