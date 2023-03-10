const faviconTag = document.getElementById("faviconTag");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

const changeFavicon = () => {
    if (isDark.matches) faviconTag.href = "content/favicondark.png";
    else faviconTag.href = "content/faviconlight.png";
}

changeFavicon()