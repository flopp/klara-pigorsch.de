function main() {
    switch_color();
    const switcher = document.getElementById("hero");
    switcher.onclick = function () {
        switch_color();
    };
}

function switch_color() {
    const colors = [
        "is-info",
        "is-primary",
        "is-danger",
        "is-link",
        "is-success",
        "is-warning",
        "is-dark",
        "is-light"
    ];

    const hero = document.getElementById("hero");
    
    var current_color = "";
    hero.classList.forEach((cls) => {
        if (colors.includes(cls)) {
            current_color = cls;
        }
    });

    var random_color = current_color;
    while (random_color === current_color) {
        random_color = colors[Math.floor(Math.random() * colors.length)];
    }

    hero.classList.add(random_color);
    hero.classList.remove(current_color);

    document.head.querySelector('meta[name="theme-color"]').content = color_to_hex(random_color);
}

function color_to_hex(color) {
    switch (color) {
        case "is-info":
            return "#3298dc";
        case "is-primary":
            return "#00d1b2";
        case "is-danger":
            return "#f14668";
        case "is-link":
            return "#3273dc";
        case "is-success":
            return "#48c774";
        case "is-warning":
            return "#ffdd57";
        case "is-dark":
            return "#363636";
        case "is-light":
            return "#f5f5f5";
    }

    return "#48c774";
}
