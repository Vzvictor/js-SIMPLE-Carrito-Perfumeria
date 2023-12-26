/*
Vazquez Victor Esteban
COSIGNAS:

	_Variables / COnstantes
	_Interaccion con el usuario:
		(Prompt, Alert, Confirm, Console)

	_Ciclo de Interaccion (For, While, Do-while)

	_Un condicional

	_Funciones js


MI CODIGO:
MODULOS clasicos:
	_Ingreso 



MODULOS del PROBLEMA:
*/



/*##############################################################*/
/*________________________FUNCIONES____________________________*/
/*##############################*/
function main() {
	let nombre


	alert("Buenas, Bienvenido")
	nombre=prompt("Me podrias dar tu NOMBRE: ")
	alert("Muchas gracias")


	menu(nombre)

//	alert()
//	prompt()

//  confirm
//  warn


}


function menu(nombre) {
	let opcion
	let preguntar= true

	while (preguntar) {

		opcion=prompt("Hola  "+ nombre +"  Le presentamos el MENU PRESIONE: \n 1 : Si desea saber el Producto con MENOR PRECIO \n 2: Proucto MAYOR PRECIO \n 3: Mayor a \n 4: Menor a \n 5: Igual a ")

		alert("paso")

		switch (opcion) {
			case 1:
				filtrar_Mayor_Menor()
				break;
			case 2:
				// statements_1
				break;
			case 3:
				// statements_1
				break;
			case 4:
				// statements_1
				break;
			case 5:
				// statements_1
				break;
								
			default:
				// statements_def
				break;
		}


	}

}
/*##############################*/
//Mayor, Menor
function filtrar_Mayor_Menor(argument) {
	
}


/*##############################*/
//Mayor a
function filtrar_MAYOR_a(argument) {
	//
}


/*##############################*/
//Menor a
function filtrar_MENOR_a(argument) {
	
}


/*##############################*/
//Igual a
function filtrar_IGUAL_a(argument) {
	
}






/*##############################################################*/
/*____________________LLAMADO DE LAS FUNCIONES____________________________*/








