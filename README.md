# Project Name

> Project description

## Server API
## Get reservation info
   - GET `/api/calendar`

 #### Success Status Code `200`

 #### Returns: `JSON`


```sh
 {
      "restuarantId": "Number",
      "reservationDacte": “String”,
      "reservationMonth": “String”,
      "reservationDay": “String”
      "reservationTimes": “String”,
      "currentYear": “String”,
      "Available": “Boolean”,
      "People": “String”,
      "firstName": “String”,
      "lastName": “String”,
      "Email": “String” ,
      "phoneNumber":”String”,
      "notes": “String”
      "openingTime": “Number”,
      "closingTime": “Number”
}
```



## Get reservation info for one restuarant

 - GET `/api/calendar/:id`

#### Success Status Code `200`




## Add info to reservation

 - POST `/api/calendar`

#### Success Status Code `201`

#### Request body :


```sh
 {
      "restuarantId": "Number",
      "reservationDacte": “String”,
      "reservationMonth": “String”,
      "reservationDay": “String”
      "reservationTimes": “String”,
      "currentYear": “String”,
      "Available": “Boolean”,
      "People": “String”,
      "firstName": “String”,
      "lastName": “String”,
      "Email": “String” ,
      "phoneNumber":”String”,
      "notes": “String”
      "openingTime": “Number”,
      "closingTime": “Number”
}
```





## Update reservation info

 - PATCH `/api/calendar/:id`

#### Success Status Code `201`

#### Request body :

```sh
{
      "firstName": “String”,
      "lastName": “String”,
      "Email": “String” ,
      "phoneNumber":”String”,
}
```



## DELETE info from reservation

 - DELETE `/api/calendar/:id`

#### Success Status Code `200`




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

