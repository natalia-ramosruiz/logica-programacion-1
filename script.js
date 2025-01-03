function ordenarNumeros() {
    //* Pedir 3 números al usuario
    let num1 = Number(prompt("Ingresa el primer número:"));
    let num2 = Number(prompt("Ingresa el segundo número:"));
    let num3 = Number(prompt("Ingresa el tercer número:"));

    //~ Validar que los valores sean números
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, ingresa solo números.");
        return;
    }

    //^ Identificar si todos los números son iguales
    if (num1 === num2 && num2 === num3) {
        document.getElementById("resultado").innerText = "Todos los números son iguales: " + num1;
        console.log("Todos los números son iguales: " + num1);
        return;
    }

    //? Ordenar los números
    let numeros = [num1, num2, num3];
    let mayorAMenor = [...numeros].sort((a, b) => b - a);
    let menorAMayor = [...numeros].sort((a, b) => a - b);

    //& Mostrar los resultados
    let resultado = `
        Números ordenados de mayor a menor: ${mayorAMenor.join(", ")}<br>
        Números ordenados de menor a mayor: ${menorAMayor.join(", ")}
    `;
    document.getElementById("resultado").innerHTML = resultado;

    console.log("De mayor a menor: ", mayorAMenor);
    console.log("De menor a mayor: ", menorAMayor);
}