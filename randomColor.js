function randomColor() {
    let color = "#";
    const alphas = ["A", "B", "C", "D", "E", "F"];

    function _generateRandomColor() {
        return Math.floor(Math.random() * 16);
    }

    for (let i = 0; i < 6; i++) {
        const random = _generateRandomColor();
        if (random >= 10) {
            const alphasIndex = random % 10;
            color = color.concat(alphas[alphasIndex]);
        } else {
            color = color.concat(random);
        }
    }

    return color;
}
