window.onload = () => {
    const calculateButton = document.querySelector("#calculateButton");

    calculateButton.addEventListener("click", calculateLove);
}

function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 100) + 1;

    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2} are ${lovePercentage}% compatible! ❤️`;
}
