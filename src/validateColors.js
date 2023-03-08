function validateColors(colors) {
    console.log(colors);
  return colors.filter((color) => {
    const element = document.createElement("div");
    element.style.color = color;
    return element.style.color !== "";
  });
}

export default validateColors;
