function main() {
	switch_color();
    const switcher = document.getElementById("hero");
    switcher.onclick = function () {
        switch_color();
    };
	
}

function switch_color() {
	const colors = ["color1", "color2", "color3", "color4"];

	var current_color = "";
    document.body.classList.forEach((cls) => {
        if (colors.includes(cls)) {
            current_color = cls;
        }
    });

    var random_color = current_color;
    while (random_color === current_color) {
        random_color = colors[Math.floor(Math.random() * colors.length)];
    }

    document.body.classList.add(random_color);
    document.body.classList.remove(current_color);
}
