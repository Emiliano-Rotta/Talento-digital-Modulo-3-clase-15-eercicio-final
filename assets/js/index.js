// Consigna: Ejercicio 1 Parámetros por Defecto en una Función
// Crea una función llamada calcularArea que reciba dos parámetros: base y altura. Si no se proporciona un valor para altura, este debe ser 5 por defecto. La función debe retornar el área de un triángulo. Prueba la función llamándola con un solo argumento y con dos argumentos.

// const area = (base, altura = 1) => {
//     return base*altura
// }
// console.log(area(2)) //2
// console.log(area(2,5)) //10

// Consigna: ejercicio 2 Destructuring de Objetos 
// Tienes un objeto llamado usuario con las propiedades nombre, edad, y pais. Utiliza destructuring para crear variables individuales nombre, edad, y pais, y muestra cada una en la consola.

// const usuario = {
//     nombre: "Juan",
//     edad: 25,
//     pais: "Chile"
// }
// console.log(usuario.nombre)
// console.log(usuario.edad)
// console.log(usuario.pais)

// const { nombre, edad, pais } = usuario

// console.log(nombre)
// console.log(edad)
// console.log(pais)

// Consigna: ejercicio 3 Destructuring de Arrays 
// Tienes un arreglo llamado puntos con los valores [10, 20, 30]. Utiliza destructuring para crear tres variables a, b, y c, y asigna a cada una los valores correspondientes del arreglo. Luego, muestra estos valores en la consola.

// const puntos = [10, 20, 30]

// const [ a, b, c ] = puntos

// console.log(puntos[0])
// console.log(puntos[1])
// console.log(puntos[2])
// console.log(a)
// console.log(b)
// console.log(c)

// Consigna: 4 Cambio de Propiedades CSS
// En un archivo HTML, crea un botón con el id "botonCambiar". En tu archivo JavaScript, agrega un evento de clic a este botón que cambie el color de fondo del documento a azul cuando se haga clic.

const btn = document.getElementById("botonCambiar")

// btn.addEventListener("click", function(){
//     document.body.style.backgroundColor = "blue"
// })

// Ejercicio 5: Manipulación de CSS
// Consigna:
// En un archivo HTML, crea un div con el id "caja". En tu archivo JavaScript, escribe una función que cambie el ancho de la caja a 200px y su color de fondo a rojo cuando se llame a la función.

const caja = document.getElementById("caja")

const cambiarEstilo = () => {
    caja.style.width = "200px"
    caja.style.backgroundColor = "red"
}

btn.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue"
    cambiarEstilo()
})