/**********
	CREADO POR JAIRO RAMIREZ
	EJERCICIO PROGRAMACION  BASICA
	                         *********/
//Esta es una variable global necesaria para crear el objeto calculadora
var calc;

//Aqui se crea la clase Calculadora
var Calculadora= function(disp)
{
	this.pantalla= disp;
}

function inicio()
{
	var pant = document.getElementById('display');
	calc= new Calculadora(pant);
	document.addEventListener('click',calcula);
}

function calcula()
{
	//En esta variable guardo el objeto que se genera cuando se dispara el evento click
	var objetoenclick= event.target;
	//Esta variable me sirve para sacar el value del boton
	var valor;
	//En esta variable guardo lo que tengo en la pantalla de la calculadora 
	var operacion= calc.pantalla.value;
	//En esta condicion verifico si se hizo clic sobre un boton de la calculadora
	if(objetoenclick.type=="button")
	{	
		//Esta condicion es para verificar si el boton es el "=" entonces realice la operacion
		if(objetoenclick.value=="=")
		{
			if(operacion=="")
			{calc.pantalla.value="";}
			else
			calc.pantalla.value=eval(operacion);
		}else
		if(objetoenclick.value=="C")
		{calc.pantalla.value="";}
		else
		{
			//Aqui se indica que en la pantalla se pone el value del boton
	    	valor= objetoenclick.value;
			calc.pantalla.value+= valor;
		}
	}
}
