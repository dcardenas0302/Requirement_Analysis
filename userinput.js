const container = document.createElement("div");
document.body.appendChild(container);

const input1 = document.createElement("input");
const input2 = document.createElement("input");
const input3 = document.createElement("input");
const input4 = document.createElement("input");

input1.placeholder = "Temp(c)";
input2.placeholder = "Wind Speed (m/s)";
input3.placeholder = "Humidity";
input4.placeholder = "Days Since Rain";

container.appendChild(input1);
container.appendChild(input2);
container.appendChild(input3);
container.appendChild(input4);

const button = document.createElement("button");
button.textContent = "Submit";
document.body.appendChild(button);

document.addEventListener("click", () =>{
    const temp = input1.value;
    const windSpeed = input2.value;
    const humidity = input3.value;
    const daysSinceRain = input4.value;
})