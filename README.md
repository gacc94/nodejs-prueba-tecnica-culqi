<h1 align="center">🚀</h1>
<hr>
<h1 align="center">Prueba Tecnica - Tokenizacion de Tarjeta de Credito</h1>
<hr>

## Instalaciones Necesarias
* MongoDB
* NodeJS (18.18.0)
* Docker

## Ejecucion en modo de desarrollo

##  1) Ejecucion de Docker Compose

```sh
docker-compose up
```

##  2) Instalacion de dependencias

Es importante duplicar el archivo **.env.template** y renombrarla como **.env** luego se debe modificar la 
variable MONGODB_URI con el valor de la url de conexion de la instalacion en local de MongoDB

```sh
npm run install
npm run dev
```
##  3) Demostracion en Postman

Enviamos mediante el metodo post al endpoint **/api/v1/creditCard/sign** el siguiente JSON con los datos del body
```json
{
  "email": "gustavocaqui94@yahoo.es",
  "expiration_year": "2020",
  "expiration_month": "12",
  "cvv": "455",
  "card_number": "4111111111111111"
}
```
![Token de Tarjeta de Credito](https://github.com/gacc94/nodejs-prueba-tecnica-culqi/blob/main/imgs/sign.png?raw=true)

Luego utilizamos el siguiente endpoint con el metodo POST **/api/v1/creditCard/verify**
y enviamos el token por el Header de tipo Bearer
![Verificacion de Token](https://github.com/gacc94/nodejs-prueba-tecnica-culqi/blob/main/imgs/verify.png?raw=true)


##  4) Ejecutar Test
Se ejecutan pruebas unitarias
```sh
npm run test
```
Se ejecutan pruebas unitarias y covertura
```sh
npm run coverage
```