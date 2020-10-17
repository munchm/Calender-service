
# Project Name

> Project description

## Server API
## Get reservation info

   - GET `/api/reservation`


 #### Success Status Code `200`

 #### Returns: `JSON`


```sh

 [
   {
      "reservationId : "Number",
      "restaurantId": "Number",
      "reservationDate": “String”,
      "reservationMonth": “String”,
      "reservationDay": “String”
      "reservationTimes": “String”,
      "currentYear": “String”,
      "Available": “Boolean”,
      "People": “String”,
      "userId" :"Number",
      "firstName": “String”,
      "lastName": “String”,
      "Email": “String” ,
      "phoneNumber":”String”,
      "notes": “String”
      "openingTime": “Number”,
      "closingTime": “Number”


}

{
      "reservationId : "Number",
      "restaurantId": "Number",
      "reservationDate": “String”,
      "reservationMonth": “String”,
      "reservationDay": “String”
      "reservationTimes": “String”,
      "currentYear": “String”,
      "available": “Boolean”,
      "people": “String”,
      "userId" :"Number",
      "firstName": “String”,
      "lastName": “String”,
      "email": “String” ,
      "phoneNumber":”String”,
      "notes": “String”
      "openingTime": “Number”,
      "closingTime": “Number”

}

]

```




## Get reservation for one restaurant

 - GET `/api/reservation/restaurant/:id`

 - :id `restaurant id`

#### Success Status Code `200`


 #### Returns: `JSON`


```sh
 [
   {
      "reservationId : "Number",
      "restaurantId": "Number",
      "reservationDate": “String”,
      "reservationMonth": “String”,
      "reservationDay": “String”
      "reservationTimes": “String”,
      "currentYear": “String”,
      "available": “Boolean”,
      "people": “String”,
      "userId" :"Number"
      "firstName": “String”,
      "lastName": “String”,
      "email": “String” ,
      "phoneNumber":”String”,
      "notes": “String”
      "openingTime": “Number”,
      "closingTime": “Number”

}

{
      "reservationId : "Number",
      "restuarantId": "Number",
      "reservationDate": “String”,
      "reservationMonth": “String”,
      "reservationDay": “String”
      "reservationTimes": “String”,
      "currentYear": “String”,
      "available": “Boolean”,
      "people": “String”,
      "userId" :"Number"
      "firstName": “String”,
      "lastName": “String”,
      "email": “String” ,
      "phoneNumber":”String”,
      "notes": “String”
      "openingTime": “Number”,
      "closingTime": “Number”

}

]
```




## Add a resrvation for one restaurant

 - POST `/api/reservation`


#### Success Status Code `201`

#### Request body


```sh

   {
      "reservationId : "Number",
      "restaurantId": "Number",
      "reservationDate": “String”,
      "reservationMonth": “String”,
      "reservationDay": “String”
      "reservationTimes": “String”,
      "currentYear": “String”,
      "available": “Boolean”,
      "people": “String”,
      "userId" :"Number",
      "firstName": “String”,
      "lastName": “String”,
      "email": “String” ,
      "phoneNumber":”String”,
      "notes": “String”
      "openingTime": “Number”,
      "closingTime": “Number”

}
```



## Update reservation info

 - PATCH `/reservation/:id`
 - :id `reservation id`

#### Success Status Code `201`


#### Request body


```sh

   {
      "reservationId : "Number",
      "restaurantId": "Number",
      "reservationDate": “String”,
      "reservationMonth": “String”,
      "reservationDay": “String”
      "reservationTimes": “String”,
      "currentYear": “String”,
      "available": “Boolean”,
      "people": “String”,
      "userId" :"Number",
      "firstName": “String”,
      "lastName": “String”,
      "email": “String” ,
      "phoneNumber":”String”,
      "notes": “String”
      "openingTime": “Number”,
      "closingTime": “Number”
}
```





## DELETE reservation from restaurunt

 - DELETE `/api/reservation/:id`
 - :id `reservation id`

#### Success Status Code `204`



## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

