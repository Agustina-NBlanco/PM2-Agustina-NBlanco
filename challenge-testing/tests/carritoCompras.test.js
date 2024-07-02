
/* Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. 
La clase debe tener los siguientes métodos:

1: constructor(): Inicializa el carrito como un array vacío.

2: agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

3: calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

4: aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente 

en diferentes escenarios. */


const { CarritoCompra } = require("../index.js");

describe("Carrito de compras", () => {
    let instance;

    beforeEach(() => {
        instance = new CarritoCompra();
    })

    it("Verificar si la clase CarritoCompra esta definida", () => {
        expect(CarritoCompra).toBeDefined();
    })

    it("Verificar si la clase CarritoCompra tiene un constructor", () => {
        expect(instance).toBeInstanceOf(CarritoCompra);
    })

    it("Verificar si la clase CarritoCompra tiene la propiedad carrito", () => {
        expect(instance).toHaveProperty("carrito");
    })

    it("Verificar si la propiedad carrito tiene como valor un array vacio", () => {
        expect(instance.carrito).toEqual([]);
    })

    it("Verificar si el método agregarProducto está definido", () => {
        expect(instance.agregarProducto).toBeDefined();
    })

    it("Verificar si el metodo agregarProducto agrega un producto al carrito correctamente", () => {
        instance.agregarProducto({ nombre: "Netbook", precio: 55, cantidad: 5 })
        expect(instance.carrito).toHaveLength(1);
    })

    it("Verificar que el metodo agregarProducto no agregues productos que no tengan precio o que el precio sea negativo", () => {
        instance.agregarProducto({ nombre: "Netbook", precio: 0, cantidad: 5 })
        instance.agregarProducto({ nombre: "Netbook", precio: -55, cantidad: 5 })
        expect(instance.carrito).toHaveLength(0);
    })

    it("Verificar que el metodo agregarProducto no agregue productos los cuales su cantidad es igual o menor a 0", () => {
        instance.agregarProducto({ nombre: "Celular", precio: 99, cantidad: 0 })
        instance.agregarProducto({ nombre: "Celular", precio: 99, cantidad: -1 })
        expect(instance.carrito).toHaveLength(0);
    })

    it("Verificar si en carrito hay dos productos iguales la cantidad deberia incrementarse", () => {
        instance.agregarProducto({ nombre: "Celular", precio: 20, cantidad: 3 })
        instance.agregarProducto({ nombre: "Celular", precio: 50, cantidad: 2 })
        expect(instance.carrito).toHaveLength(1);
        expect(instance.carrito[0].cantidad).toBe(5);
    })

    it("Verificar si el metodo calcularTotal está definido", () => {
        expect(instance.calcularTotal).toBeDefined();
    })

    it("Verificar si el metodo calcularTotal calcula bien el total de la compra sumando el precio de los productos en el carrito", () => {
        instance.agregarProducto({ nombre: "Celular", precio: 50, cantidad: 2 })
        expect(instance.calcularTotal()).toBe(100);
    })

    it("Verificar si el metodo aplicarDescuento está definido", () => {
        expect(instance.aplicarDescuento).toBeDefined();
    })

    it("Verificar si el metodo aplicarDescuento aplica correctamente el descuento al total de la compra", () => {
        instance.agregarProducto({ nombre: "Celular", precio: 50, cantidad: 2 })
        expect(instance.aplicarDescuento(10)).toBe(90);
    })

    it("Verificar si el metodo aplicarDescuento puede aplicar correctamente descuento maximo (100%)", () => {
        instance.agregarProducto({ nombre: "Celular", precio: 50, cantidad: 2 })
        expect(instance.aplicarDescuento(100)).toBe(0);
    })

    it("Verificar si el metodo aplicarDescuento puede manejar correctamente el precio cuando no hay descuento (0%)", () => {
        instance.agregarProducto({ nombre: "Tablet", precio: 10, cantidad: 1 })
        expect(instance.aplicarDescuento(0)).toBe(10);
    })

    it("Verificar si el metodo aplicarDescuento puede manejar descuentos fuera de rango", () => {
        instance.aplicarDescuento({ nombre: "Tablet", precio: 10, cantidad: 1 })
        expect(instance.aplicarDescuento(105)).toBe(null)
        expect(instance.aplicarDescuento(-10)).toBe(null)

    })


})

