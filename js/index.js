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


/*##############################################################################################################*/
/*##############################################################################################################*/
/*______________________________________VARIABLES Y CONSTANTES GLOBALES_____________________________________*/
//Simula una base de datos minima:

//const producto_1=

//const producto_2=

//const producto_3=

//const producto_4=

//const producto_5=



/*##############################################################################################################*/
/*##############################################################################################################*/
/*_______________________________________________FUNCIONES___________________________________________________*/
/*##############################*/


/*#################################################################*/
//______________FUNCION PRINCIPAL (MAIN=Coordinador)________________

function main() {
	/*========================================*/
	//___Variables de inicio del programa____
	let nombre
	let preguntar= true


	/*=======================================*/
	//___________Variables de menu____________
	let opcion=0


	/*=======================================*/
	/*=======================================*/
	/*=======================================*/
	//______________DESARROLLO____________

	alert("Buenas, Bienvenido")
	nombre=prompt("Me podrias dar tu NOMBRE: ")
	alert("Muchas gracias")



	while (preguntar) {
		menu(opcion, nombre)

		micro_procesos()

		preguntar= prompt("Desea iniciar de nuevo?: Presione: \n 1 Continuar \n 0 Terminar")
		if(preguntar==1){
			preguntar=true
		}else{
			preguntar=false
		}
		//NOTA: POner verificacion

	}

	alert("MUCHAS GRACIAS POR UTILIZAR NUESTRA PAGINA. FELIZ NAVIDAD")
	// menu(nombre) // LE DIRE AL TUTOR QUE LA INVOQUE DESDE CONSOLA

	/*=======================================*/
	/*=======================================*/
	/*=======================================*/



//	alert()
//	prompt()

//  confirm
//  warn


}




/*#################################################################*/
//_____________________________MENU_________________________________

function menu(nombre, opcion) {


	opcion=prompt("Hola  "+ nombre +"  Le presentamos el MENU PRESIONE: \n 1 : Si desea saber el Producto con MENOR PRECIO \n 2: Proucto MAYOR PRECIO \n 3: Mayor a \n 4: Menor a \n 5: Igual a ")


	//==============================================================
	//Verificacion
	while(opcion == "" || opcion == null || (opcion!=1 && opcion!=2 && opcion!=3 && opcion!=4 && opcion!=5 )){
		console.warn("ERROR Ingrese una opcion valida: ")
		opcion=prompt("Hola  "+ nombre +"  Le presentamos el MENU PRESIONE: \n 1 : Si desea saber el Producto con MENOR PRECIO \n 2: Proucto MAYOR PRECIO \n 3: Mayor a \n 4: Menor a \n 5: Igual a ")
	}
	//==============================================================


}


/*#################################################################*/
//__________________MICRO-PROCESOS________________

function micro_procesos(nombre, opcion) {

	/*======================================================*/
	/*________Variables de las funciones________*/
	const mayor=null
	const menor=null

	let precio_ingresado= 0


	switch (opcion) {
		case 1:
			//===============================
			//Producto MAYOR PRECIO
			filtrar_Mayor_Menor(mayor, menor)

			alert("El PRODUCTO MAS CARO ES: "+ mayor)

			//RECORDATORIO PARA MI: Cuando pueda usar, objeto y arrays hacer que los productos se vean del mas caro al mas barato
			// 	y en viceversa

			break;
		case 2:
			//===============================
			//Producto MENOR PRECIO
			filtrar_Mayor_Menor(mayor, menor)

			alert("El PRODUCTO MAS BARATO ES: "+ mayor)

			break;
		case 3:
			//===============================
			//Producto MAYOR A....
			precio_ingresado=prompt("Ingrese un precio en numeros, para comparar con nuestros productos: ")
			
			filtrar_MAYOR_a(precio_ingresado)
			
			break;
		case 4:
			//===============================
			//Producto MENOR A....

			break;
		case 5:
			//===============================
			//Producto MENOR A....


			break;
							
		default:

			break;
	}

}



/*#################################################################*/
//________________________MAYOR-MENOR________________
function filtrar_Mayor_Menor(precio_ingresado) {
	let contador=0

	let aux= producto_2 

	mayor=producto_1
	menor=producto_1


	//===================================================================================================
	//Hola porsupuesto deberia UTILIZAR UN ARRAY o los hijos de un objeto, pero no me lo pide la consigna


	do{ 

		if(aux!=mayor && aux!=menor){
			if(aux>mayor){
				//MAYOR
				mayor=aux2
			}else{
				//MENOR
				menor=aux2
			}	
		}else{
			//IGUAL
			//nada
		}

		contador++

		switch (contador) {
			case 1:
				aux=producto_3
				break;
			case 2:
				aux=producto_4
				break;
			default:
				aux=producto_5
				break;
		}

	}while(aux != producto_5); //CUando sea igual deja de comparar y reasignar
	//===================================================================================================



}


/*#################################################################*/
//______________FILTRAR MAYOR A________________
function filtrar_MAYOR_a(precio_ingresado) {
	let contador=0
	let aux= producto_2 



	console.log("LISTA DE PRODUCTOS, con PRECIO MAYOR a....: "+precio_ingresado+"\n\n")


	do{ 

		if(aux!=mayor && aux!=menor){
			if(aux>mayor){
				//MAYOR
				console.log("Precio ingresado: "+precio_ingresado+"\nPuesto:"+ contador+" precio"+aux)
			}else{
				//MENOR
				console.log("Precio ingresado: "+precio_ingresado+"\nPuesto:"+ contador+" precio"+aux)
			}	
		}else{
			//IGUAL
			console.log("Precio ingresado: "+precio_ingresado+"\nPuesto:"+ contador+" precio"+aux)
		}

		contador++

		switch (contador) {
			case 1:
				aux=producto_3
				break;
			case 2:
				aux=producto_4
				break;
			default:
				aux=producto_5
				break;
		}

	}while(aux != producto_5); //CUando sea igual deja de comparar y reasignar
	//===================================================================================================

}

/*#################################################################*/
//______________FILTRAR MENOR A________________
function filtrar_MENOR_a(argument) {
	let contador=0
	let aux= producto_2 

	console.log("LISTA DE PRODUCTOS, con PRECIO IGUAL a....: "+precio_ingresado+"\n\n")


	do{ 

		if(aux!=precio_ingresado){
			if(aux<precio_ingresado){
				//MENOR
				console.log("Precio ingresado: "+precio_ingresado+"\nPuesto:"+ contador+" precio"+aux)
			}
		}


		contador++

		switch (contador) {
			case 1:
				aux=producto_3
				break;
			case 2:
				aux=producto_4
				break;
			default:
				aux=producto_5
				break;
		}

	}while(aux != producto_5); //CUando sea igual deja de comparar y reasignar
	//===================================================================================================

}

/*#################################################################*/
//______________FILTRAR IGUAL A________________
function filtrar_IGUAL_a(argument) {
	let contador=0
	let aux= producto_2 

	console.log("LISTA DE PRODUCTOS, con PRECIO IGUAL a....: "+precio_ingresado+"\n\n")


	do{ 

		if(aux===precio_ingresado){
			//IGUAL
			console.log("Precio ingresado: "+precio_ingresado+"\nPuesto:"+ contador+" precio"+aux)
		}


		contador++

		switch (contador) {
			case 1:
				aux=producto_3
				break;
			case 2:
				aux=producto_4
				break;
			default:
				aux=producto_5
				break;
		}

	}while(aux != producto_5); //CUando sea igual deja de comparar y reasignar
	//===================================================================================================

}




/*##############################################################################################################*/
/*##############################################################################################################*/
/*________________________________________LLAMADO DE LAS FUNCIONES______________________________________________*/
/*##############################*/

console.log("hola") //SALE POR CONSOLA
alert("hola 2") //Es CARTEL
confirm("hola A")//Es CARTEL
console.warn("hola 3") //SALE POR CONSOLA






