/**
 *
 * @param {'16' | 'rgb'} colorType
 * @return {*}
 */
function randomColor(colorType) {
  /**
   *
   * @param {number} start
   * @param {number} end
   * @returns start-end 的随机数
   */
  function _generateRandomColor(start = 0, end) {
    return Math.floor(Math.random() * end) + start;
  }

  let color = "#fff"; // 默认颜色

  if (colorType === "16") {
    color = "#";
    const alphas = ["A", "B", "C", "D", "E", "F"];

    for (let i = 0; i < 6; i++) {
      const random = _generateRandomColor(0, 16);
      if (random >= 10) {
        const alphasIndex = random % 10;
        color = color.concat(alphas[alphasIndex]);
      } else {
        color = color.concat(random);
      }
    }
  } else if (colorType === "rgb") {
    color = "rgb(";
    for (let i = 0; i < 3; i++) {
      const random = _generateRandomColor(0, 255);
      color = color.concat(`${random},`);
    }

    color = color.slice(0, color.length - 1).concat(")");
  }
  return color;
}
