class Libro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
}
class Biblioteca {
    constructor() {
        this.coleccion = [];
    }

    agregarLibro(libro) {
        this.coleccion.push(libro);
    }

    calcularTotalPaginas() {
        return this.coleccion.reduce((total, libro) => total + libro.paginas, 0);
    }

    buscarLibro(titulo) {
        const libroEncontrado = this.coleccion.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
        if (libroEncontrado) {
            console.log(`Libro encontrado: ${libroEncontrado.titulo} por ${libroEncontrado.autor}`);
        } else {
            console.log('Libro no encontrado en la colección.');
        }
    }

    mostrarColeccion() {
        console.log("Colección de libros:");
        this.coleccion.forEach(libro => {
            console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Páginas: ${libro.paginas}`);
        });
        console.log(`Total de páginas en la colección: ${this.calcularTotalPaginas()}`);
    }
}



//para usarlo 

const biblioteca = new Biblioteca();
let continuar = true;

while (continuar) {
    const tituloLibro = prompt("Ingrese el título del libro:");
    const autorLibro = prompt("Ingrese el autor del libro:");
    const paginasLibro = parseInt(prompt("Ingrese el número de páginas del libro:"), 10);

    // Validar entrada
    if (isNaN(paginasLibro) || paginasLibro <= 0) {
        alert("Número de páginas inválido. Por favor, ingrese un valor numérico positivo.");
        continue;
    }

    const libro = new Libro(tituloLibro, autorLibro, paginasLibro);
    biblioteca.agregarLibro(libro);

    continuar = confirm("¿Desea agregar otro libro a la colección?");
}


biblioteca.mostrarColeccion();

//buscar un libro 
const buscarTitulo = prompt("Ingrese el título del libro que desea buscar:");
biblioteca.buscarLibro(buscarTitulo);