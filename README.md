# Prueba Tecnica - Tokenizacion de Tarjeta de Credito 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/gacc94/nodejs-prueba-tecnica-culqi/tree/main)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)

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
![Token de Tarjeta de Credito](https://github.com/maximopeoficiales/node-ts-prueba-tecnica-culqi/blob/master/imgs/sign.png?raw=true)

##  4) Ejecutar Test
Se ejecutan pruebas unitarias
```sh
npm run test
```
Se ejecutan pruebas unitarias y covertura
```sh
npm run coverage
```