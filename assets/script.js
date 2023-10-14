



document.getElementById("button").onclick = () => {
    // get the color
    color = document.getElementById("paragraph").style.backgroundColor;  
    // toggle between 
    color = (color == "") ? "rgba(0, 175, 185, 0.8)" : "";
    // sendddd iiittt!!!
    setBackgroundColorById("paragraph", color);
}

document.getElementById("alert").onclick = () => {
    alert(document.getElementById("popup-input").value);
}

document.getElementById("hover-this").onmouseover = () => {
    setBackgroundColorById("body", "rgba(240, 113, 103, 0.8)");
}

document.getElementById("hover-this").onmouseout = () => {
    setBackgroundColorById("body", "rgb(0, 0, 10)");
}

const setBackgroundColorById = (id, color) => {
    document.getElementById(id).style = "background-color: " + color;
}

const getValueFromId = id => document.getElementById(id).value;

const mouseOverFunction = el => el.style = "background-color: rgba(0, 175, 185, 0.8)";
const mouseOutFunction = el => el.style = "background-color: ''";
