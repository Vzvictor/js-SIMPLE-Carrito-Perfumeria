/*
Vazquez Victor Esteban
COSIGNAS:
===========================================================================================================
============================================================================================================
===========================================================================================================
PRE-ENTREGAS 1 Y 2 

===========================================================================================================
============================================================================================================
===========================================================================================================
_________________PRE- ENTREGA 1___________________________

Consigna:




===============================
COMPONENTES DEL CODIGO:

	_Variables / COnstantes
	_Interaccion con el usuario:
		(Prompt, Alert, Confirm, Console)

	_Ciclo de Interaccion (For, While, Do-while)

	_Un condicional

	_Funciones js

===============================
MI CODIGO:
MODULOS clasicos:
	_main
	_menu
	_micro-procesos




MODULOS del PROBLEMA:
	_micro-procesos

	_filtrar_Mayor_Menor()
	_filtrar_MAYOR_a_MENOR_a_IGUAL_a(precio_ingresado)

================================

===========================================================================================================
===========================================================================================================
===========================================================================================================
_________________PRE- ENTREGA 2___________________________

=================================================
Consigna segun el tutor:
	_interaccion con prompt, alert, confirm y/o console.log
	_No interactuar con el DOM
	_No variables var (si let o const)
	_incluir array y objetos (comentario mio: calculo que array de objetos)

	_Usar METODOS find y filter aplicado a array	
	_3 metodos de array de FUNCIONES DE ORDEN SUPERIOR
	  visto en clase 

	_

________________________
TAREAS segun el profe:
	_Estructura html del proyecto
	_variables necesarias
	_funciones de orden superior (Metodos de busqueda y transformacion)
	_Funciones esenciales que utilicen variables, constantes, array, etc
	_Objetos JS
	_Logica funcional de la aplicacion
	_Entradas - salidas (prompt, confirm, alert, console.algo)



	_Crear una "funcion buscar prenda", RETORNA UN OBJETO LITERAL
	_Usar 3 metodos
	_Guardar los productos (objetos) en el ARRAY CARRITO

	_Class.Compra: Instanciar la clase pasandole el carrito como parametro

	_Se agradece la compra

	_Vaciamos carrito

	_Mostrar el total de la compra

	_La logica la agrupamos en la f(x) comprar ()


===============================
RESUMEN DE TAREAS:
	_Agregar FUNCIONES (con variables, constantes, array, etc)creadas por el programador (yo) 
	

	_Agregar OBJETOS

	_Array de objetos


	_Agregar Funciones de orden superior


	_

===============================
QUE HACE MI PROGRAMA (MODO SIMPLE):
	

	_Buscar producto

	_Agregar al carrito

	_Filtrar por precio

	_Eliminar

	_Favorito



===============================
COMPONENTES DE MI CODIGO PRE- ENTREGA 2:

MODULOS clasicos:
	_main
	_menu
	_micro-procesos



ARRAY DE OBJETO:
	_carrito
	_productos
	_


CLASES:
	_Agregar



MODULOS del PROBLEMA:
	_micro-procesos

	_filtrar_Mayor_Menor()
	_filtrar_MAYOR_a_MENOR_a_IGUAL_a(precio_ingresado)

	_


================================
BORRADOR de: ¿?(COMPONENTES DE MI CODIGO PRE- ENTREGA 2:)
	_¿Clase?
	_¿Objeto?
	_¿Funciones externas?

	-

================================
===========================================================

*/
/*##############################################################################################################*/
/*##############################################################################################################*/
/*______________________________________INDICE DEL CODIGO_____________________________________*/
/*
_Dudas para el tutor

ARRAY, VARIABLES Y CONSTANTES GLOBALES



*/


/*##############################################################################################################*/
/*##############################################################################################################*/
/*______________________________________DUDAS PARA EL TUTOR_____________________________________*/
/*
Hola profe, aqui dejo mis dudas:
	1: ¿¿¿¿ En los modulos de por ejemplo "iniciar_session" es mejor ponerle un RETURN a la opcion que eleigio el usuario
	O es mejor crear una variable GLOBAR como lo hize con "opcion_cliente_dueño"  ?????, en este sentido a nivel programacion cual es la mejor practica?



*/

/*##############################################################################################################*/
/*##############################################################################################################*/
/*______________________________________ARRAY, VARIABLES Y CONSTANTES GLOBALES_____________________________________*/

/*========================================*/
//________________ARRAYs____________________





/*========================================*/
//________________CONST Y VAR________________
const opcion_cliente_dueño=0

const opcion_menu_1=0



/*##############################################################################################################*/
/*##############################################################################################################*/
/*____________________________________________OBJETOS_____________________________________*/

const deposito= []


const carrito= new nuevo_carrito()





/*##############################################################################################################*/
/*##############################################################################################################*/
/*_______________________________________________FUNCIONES ( MODULOS )______________________________________________*/

/*#################################################################*/
/*#################################################################*/
/*#################################################################*/
//______________FUNCION PRINCIPAL (MAIN=Coordinador)________________

let opcion=0;


function main() {
	/*========================================*/
	//___Variables de inicio del programa____
	let nombre
	let preguntar= 1


	/*=======================================*/
	//___________Variables de menu____________
	

	/*=======================================*/
	//___________SALUDO GENERAL____________

	alert("Buenas, Bienvenido")
	nombre=prompt("Me podrias decir tu nombre?:")
	//alert("Muchas gracias")



	/*=========================================================*/
	/*=========================================================*/
	/*=========================================================*/
	/*=========================================================*/
	//______________________DESARROLLO__________________________

	//====================================
	//_________INICIAR SESSION______
	iniciar_session(nombre)


	//====================================
	//____VERIFICAR ESTADO DEL CARRITO___
	if(carrito=0){
		llenar_deposito_de_productos_aleatorio()

	}


	//====================================
	//___ACCIONES SI ES CLIENTE O DUEÑO____

	do{

		if(opcion_cliente_dueño==1){
			//====================================
			//_________MODULOS_CLIENTE______
			
			proceso_menu_1_cliente(menu_1_cliente(nombre)) //Primero inicia menu_1, luego segun el valor que e menu_1 inicia el proeceso del menu



			micro_procesos(nombre)			


		}else{
			//====================================
			//_________MODULOS_DUEÑO______
			//MODULO: Verificacion de usuario y contraseña
			//NOTA PARA OTROS: Aun no he creado estos modulos, pero la idea es que el dueño pueda agregar o quitar o modificar cosas del DEPOSITO

		}


		


		preguntar= parseInt(prompt("Desea iniciar de nuevo?: Presione: \n 1: Continuar \n 0: Terminar"))
		
		//NOTA: POner verificacion

	}while (preguntar==1)

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
/*#################################################################*/
/*#################################################################*/


/*#################################################################*/
//_____________________MODULO INCIAR SECCION_________________________


function iniciar_session(nombre) {

	opcion_cliente_dueño=parseInt(prompt("Hola "+nombre+ "Me podrias decir si sos CLIENTE o DUEÑO?: \n PRESIONA 1: si sos cliente \n PRESIONA 2: Si sos dueño"))

	//==============================================================
	//Verificacion
	while(opcion_cliente_dueño == "" || opcion_cliente_dueño == null || (opcion_cliente_dueño!=1 && opcion_cliente_dueño!=2 )){
		console.warn("ERROR Ingrese una opcion valida: ")
	
		opcion_cliente_dueño =parseInt(prompt("Hola "+nombre+ "Me podrias decir si sos CLIENTE o DUEÑO?: \n PRESIONA 1: si sos cliente \n PRESIONA 2: Si sos dueño"))

	}
	//==============================================================

}


/*#################################################################*/
//_____________________LLENAR_CARRITO_ALEATORIO_________________________


function llenar_deposito_de_productos_aleatorio() { //NOTA PARA MI: El apartado MODLULO_DUEÑO tiene una funcion de "llenar_deposito" manual  
	let nombre="a"
	let precio= 0

	//NOTA AL MARGEN 1: 
	/*crearemos 20 productos, aun nose como podria llenarlo aleatoriamente mientras crearemos array
	for (let recorrer=1; i<=20; i++){

		productos.push(new producto())	


	}

	*/

	//NOTA AL MARGEN 2: Por ahora realizare el llenado manual
	deposito.push(new producto("mouse", 23)
	deposito.push(new producto("teclado", 10)		
	deposito.push(new producto("pantalla led", 30)
	deposito.push(new producto("pantalla lcd", 40)
	deposito.push(new producto("Procesador ryzen_5", 55)
	deposito.push(new producto("Procesador intel_i3",66)	
	deposito.push(new producto("Antena Tp linck", 70)
	deposito.push(new producto("Parlantes pc", 80)
	deposito.push(new producto("Pendrive Kingston", 90)
	deposito.push(new producto("Pendrive HP", 4)


}


/*##############################################################################################################*/
/*##############################################################################################################*/
/*_______________________________________________MODULOS CLIENTE QUE COMPRA______________________________________________*/

/*#################################################################*/
//_____________________________menu_1_cliente_______________

function menu_1_cliente(nombre) {
	let opcion

	//opcion=parseInt(prompt("Hola   Le presentamos el MENU PRESIONE: \n 1 : Si desea saber el Producto con MAYOR PRECIO(+) \n 2: Producto MENOR(-) PRECIO \n 3: Mayor a... \n 4: Menor a... \n 5: Igual a... "))
	opcion=parseInt(prompt("Hola"+nombre+"Le presentamos el MENU PRINCIPAL PRESIONE: \n 1 : Si desea COMPRAR productos \n 2: Si desea BUSCAR un producto por su nombre \n3: Si desea FILTRAR por PRECIO "))

	//==============================================================
	//Verificacion
	while(opcion == "" || opcion == null || (opcion!=1 && opcion!=2 && opcion!=3 )){
		console.warn("ERROR Ingrese una opcion valida: ")
		//parseInt(opcion)=prompt("Hola  "+ nombre +"  Le presentamos el MENU PRESIONE: \n 1 : Si desea saber el Producto con MENOR PRECIO \n 2: Proucto MAYOR PRECIO \n 3: Mayor a \n 4: Menor a \n 5: Igual a ")
		opcion=parseInt(prompt("Hola"+nombre+"Le presentamos el MENU PRINCIPAL PRESIONE: \n 1 : Si desea COMPRAR productos \n 2: Si desea BUSCAR un producto por su nombre \n3: Si desea FILTRAR por PRECIO "))

	}
	//==============================================================

	return opcion;

}




/*#################################################################*/
//__________________proceso_menu_1________________

function proceso_menu_1_cliente(nombre) {

	/*======================================================*/
	/*________Variables de las funciones________*/

	let precio_ingresado= 0
	/*======================================================*/




	switch (opcion) {
	//=============================================
	//______________COMPRAR____________________
	case 1:
			//===============================// NO TERMINADO
			//Producto MAYOR PRECIO
		filtrar_Mayor_Menor()

		alert("El PRODUCTO MAS CARO ES: "+ mayor)

			//RECORDATORIO PARA MI: Cuando pueda usar, objeto y arrays hacer que los productos se vean del mas caro al mas barato
			// 	y en viceversa

		break;

	//=============================================
	//______________BUSCAR____________________// NO TERMINADO
	case 2:
			//===============================
			//Producto MENOR PRECIO
		filtrar_Mayor_Menor(mayor, menor)

		alert("El PRODUCTO MAS BARATO ES: "+ menor)

		break;


	//=============================================
	//______________FILTRAR___________________// ADAPTADO
	case 3:
			//===============================
			//Producto MAYOR A....
		precio_ingresado=parseFloat(prompt("Ingrese un precio en numeros, para comparar con nuestros productos: "))
		

		console.log("LISTA DE PRODUCTOS, con PRECIO MAYOR a....: "+precio_ingresado+"\n\n")
		parseInt(senal=1)
		filtrar_MAYOR_a_MENOR_a_IGUAL_a(precio_ingresado)
		
		break;
	}





}





/*#################################################################*/
//__________________MICRO-PROCESOS________________


let mayor=parseInt(0);
let menor=parseInt(0);
let igual=parseInt(0);
let senal=0;

function micro_procesos(nombre) {

	/*======================================================*/
	/*________Variables de las funciones________*/

	let precio_ingresado= 0

	switch (opcion) {
	case 1:
			//===============================
			//Producto MAYOR PRECIO
		filtrar_Mayor_Menor()

		alert("El PRODUCTO MAS CARO ES: "+ mayor)

			//RECORDATORIO PARA MI: Cuando pueda usar, objeto y arrays hacer que los productos se vean del mas caro al mas barato
			// 	y en viceversa

		break;
	case 2:
			//===============================
			//Producto MENOR PRECIO
		filtrar_Mayor_Menor(mayor, menor)

		alert("El PRODUCTO MAS BARATO ES: "+ menor)

		break;
	case 3:
			//===============================
			//Producto MAYOR A....
		precio_ingresado=parseFloat(prompt("Ingrese un precio en numeros, para comparar con nuestros productos: "))
		

		console.log("LISTA DE PRODUCTOS, con PRECIO MAYOR a....: "+precio_ingresado+"\n\n")
		parseInt(senal=1)
		filtrar_MAYOR_a_MENOR_a_IGUAL_a(precio_ingresado)
		
		break;
	case 4:
			//===============================
			//Producto MENOR A....
		precio_ingresado=parseFloat(prompt("Ingrese un precio en numeros, para comparar con nuestros productos: "))
		senal=2
		console.log("LISTA DE PRODUCTOS, con PRECIO MENOR a....: "+precio_ingresado+"\n\n")
		filtrar_MAYOR_a_MENOR_a_IGUAL_a(precio_ingresado)

		break;
	case 5:
			//===============================
			//Producto IGUAL A....
		precio_ingresado=parseFloat(prompt("Ingrese un precio en numeros, para comparar con nuestros productos: "))
		senal=3
		console.log("LISTA DE PRODUCTOS, con PRECIO IGUAL a....: "+precio_ingresado+"\n\n")
		filtrar_MAYOR_a_MENOR_a_IGUAL_a(precio_ingresado)


		break;
		
	default:

		break;
	}


}



/*#################################################################*/
//________________________MAYOR-MENOR________________
function filtrar_Mayor_Menor() {
	let contador=0

	let aux

	mayor=producto_1
	menor=producto_1

	//===================================================================================================
	//Hola porsupuesto deberia UTILIZAR UN ARRAY o los hijos de un objeto, pero no me lo pide la consigna


	do{ 
		contador++
		
		switch (contador) {
		case 1:
			aux=producto_1
			break;
		case 2:
			aux=producto_2
			break;
		case 3:
			aux=producto_3
			break;
		case 4:
			aux=producto_4
			break;
		case 5:
			aux=producto_5
			break;
		default:
			
			break;
		}


		if(aux!=mayor){
			if(aux>mayor){
				//MAYOR
				mayor=aux
			}else{
				if(aux!=menor){
					//MENOR
					menor=aux
				}
			}	
		}else{
			//IGUAL
			//nada
		}

	}while(aux != producto_5); //CUando sea igual deja de comparar y reasignar //ERROR: Aqui esta el error.
	//===================================================================================================

}


/*#################################################################*/
//______________FILTRAR MAYOR A________________
function filtrar_MAYOR_a_MENOR_a_IGUAL_a(precio_ingresado) {
	let contador=0

	let aux=0

	mayor=producto_1
	menor=producto_1

	do{ 

		contador++
		
		switch (contador) {
		case 1:
			aux=producto_1
			break;
		case 2:
			aux=producto_2
			break;
		case 3:
			aux=producto_3
			break;
		case 4:
			aux=producto_4
			break;
		case 5:
			aux=producto_5
			break;
		default:
			
			break;
		}
		alert

		if(aux!=precio_ingresado){
			if(aux>precio_ingresado && senal==1 ){
				//MAYOR
				console.log("Precio ingresado: "+precio_ingresado+"\nPuesto:"+ contador+" precio: "+aux)
			}
		}


		if(aux!=precio_ingresado){
			if(aux<precio_ingresado && senal==2){
				//MENOR
				console.log("Precio ingresado: "+precio_ingresado+"\nPuesto:"+ contador+" precio: "+aux)
			}
		}


		if(aux==precio_ingresado && senal==3){
			//IGUAL
			console.log("Precio ingresado: "+precio_ingresado+"\nPuesto:"+ contador+" precio: "+aux)
		}



	}while(aux != producto_5); //CUando sea igual deja de comparar y reasignar
	//===================================================================================================

	//ERROR: Resolver si no existe ningun producto, mayor, menor o igual

}



/*##############################################################################################################*/
/*##############################################################################################################*/
/*_______________________________________________MODULOS DUEÑO DEL NEGOCIO______________________________________________*/


/*#################################################################*/
//_____________________________MenuPrincipal_Dueño________________


/*#################################################################*/
//________________________INICIAR PRODUCTOS________________

function iniciar_productos_dueño(){
	let aux



	while(){

	}



}





/*##############################################################################################################*/
/*##############################################################################################################*/
/*________________________________________LLAMADO DE LAS FUNCIONES______________________________________________*/
/*##############################*/

//console.log("hola") //SALE POR CONSOLA
//alert("hola 2") //Es CARTEL
//confirm("hola A")//Es CARTEL
//console.warn("hola 3") //SALE POR CONSOLA


//Por favor, invoque "main()" desde la consola, presionando f12, gracias.


