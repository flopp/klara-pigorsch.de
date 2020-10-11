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
}
