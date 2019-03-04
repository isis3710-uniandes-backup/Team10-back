# Team10-back

## Problema
Diariamente, los estudiantes de las  universidades se enfrentan a la problemática de que no saben que almorzar con el presupuesto diario  que tienen. Para los estudiantes es de suma importancia almorzar platos ricos y nutritivos tratando de ahorrar al máximo su presupuesto.  La mayoría de los estudiantes de las universidades no conocen todos los restaurantes alrededor de sus instituciones y sumado a esto no conocen los valores de los platos que dichos restaurantes venden.

## Descripción del proyecto
Una aplicación web la cual ayuda a los estudiantes de las universidades a encontrar los restaurantes que tenga los platos más acordes a su presupuesto. Esto se podrá realizar mediante un filtro por precios y los restaurantes que estén acorde al presupuesto de cada alumno aparecerán ordenados en orden descendente. Además, los estudiantes podrán organizar los platos de los restaurantes dependiendo de sus necesidades nutricionales y de la calificación de los usuarios con respecto a que tan rico es dicho plato. Finalmente, los estudiantes podrán ver en un mapa los restaurantes que están cerca a sus institución universitaria. 

## Recursos
Los recursos definidos para la aplicación son los siguentes.

* Restaurantes
* Platos
* Clientes/Usuarios
* Promociones
* Reviews
* Platos favoritos
* Zonas donde hay restaurantes  
* Información nutricional más detallada (Macros)
* Historial de busqueda de restaurantes

## Despilegue

Clone el repositorio:

    git clone https://github.com/isis3710-uniandes/Team10-back.git
   
Acceda a la carpeta app (en Windows puede usar el comando dir):

    cd Team10-back/app 
    
Instale las dependecias requeridas:

    npm install

Inicie el proyecto:
    
    npm start
    
La aplicación se desplegará en http://localhost:3000/

## Pruebas

Para realizar las pruebas puede utilizar la colección de Postman ubicada en Team10-back/postman e importar dicha colección que se encuentra allí en Postman y recuerde tener desplegado el proyecto para ejecutar las pruebas.

## Rutas de los recursos

* Restaurantes: http://localhost:3000/restaurants
* Platos: http://localhost:3000/dishes
* Clientes/Usuarios: http://localhost:3000/restaurants_history 
* Promociones: http://localhost:3000/promotions
* Reviews: http://localhost:3000/reviews
* Platos favoritos: http://localhost:3000/favoriteDishes
* Zonas donde hay restaurantes: http://localhost:3000/restaurants_zones  
* Información nutricional más detallada (Macros): http://localhost:3000/nutritionalInformation
* Historial de busqueda de restaurantes: http://localhost:3000/restaurants_history

## Autores

* **Nombre:** Alejandro Dorado - **Código:** 200714182
* **Nombre:** Andrés León - **Código:** 201532885
* **Nombre:** Juan Sosa - **Código:** 201425255
