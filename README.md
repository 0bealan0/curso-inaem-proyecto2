# Práctica 2


```bash
git clone <repo>
npm install
```  


**PARTE 1**

1. Crea una  función *whereami* que coja como entrada la longitud (lat) y la longitud(lng). Esto son coordenadas GPS, abajo de proporciono datos de ejemplo.

2. Haz  geolocalización inversa de las coordenadas. Geolocalización inversa significa convertir las coordenadas a una localidad y un país. Usa esta API para conseguirlo: https://geocode.xyz/api. La llamada tendrá el siguiente formato: https://geocode.xyz/52.508,13.381?geoit=json. Usa la fetch API y  promesas.

3. Muestra todos los datos recibidos por  consola. Usando estos datos escribe en consola un mensaje similar al siguiente: "Estás en Berlin, Germany".

4. Encadena un método catch a la cadena de promesas y muestra los errores por consola.

5. Esta API permite realizar 3 peticiones por segundo. Si recargas rápido la página obtendrás  un error 403. En estos casos fetch no hace un  reject de la promesa,  así que lanza un  error por tu  cuenta con  un  mensaje adecuado para que se muestre por consola.

**PARTE 2**

6. Usa los datos para mostrar el país de las coordenadas introducidas. Utiliza la API de países que hemos visto  anteriormente y te proporciono en el fichero script.js.

7. Renderiza el país como hemos visto anteriormente.

*TEST DE COORDENADAS 1: 52.508, 13.381 (Latitud, Longitud)*
*TEST DE COORDENADAS 2: 19.037, 72.873*
*TEST DE COORDENADAS 3: -33.933, 18.474*

