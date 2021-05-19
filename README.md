# Teste Synvia - Back-end

API REST desenvolvida para o teste de desenvolvedor back-end NodeJS da Synvia.

## Instalação

Baixe ou clone o projeto e execute o comando npm install para instalar as dependências:

```bash
npm install
```

## Executando o projeto

Para executar o projeto e rodar na máquina local execute o comando::

```node
node bin/www.js
```

## Collection da API e documentação
Para acessar a API e testá-la diretamente no Postman você pode baixar a collection [AQUI](https://www.postman.com/collections/cd3bda3dabf71602a8ee) ou acompanhar diretamente na documentação abaixo ou a complementar no final do README:

*Base Url:* https://synviabackend.herokuapp.com

**Geração de token de autenticação**:

 - Endpoint: ***auth/token***
 - ex: https://synviabackend.herokuapp.com/auth/token
 - Método: **POST**

Request body:

```json
{
    "client_id": "synvia",
    "client_secret": "project"
}
```

Response:
```json
{
    "tokenType": "bearer",
    "expiresIn": 3600,
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzeW52aWEiLCJhbGdvcml0aG0iOiJSUzI1NiIsImlzc3VlciI6InN5bnZpYV9iYWNrZW5kIiwic3ViamVjdCI6IlRva2VuIGF1dGhlbnRpY2F0b3IgZW5kcG9pbnRzIiwiaWF0IjoxNjIxMzg2ODcwLCJleHAiOjE2MjEzOTA0NzB9.TgeP8bGcYLwVsGRoexZCYtB5wMavILGAkPSsQ5K2-69vm-PKDBYhQZoSSzOA29c9JG6e4HdugxF55nbtI1-KSCGx3LQ1AqAN9D5BB3QnIwyoVVDk8hnit8JUZyUyIih9U0WJplBQtSsL1J3cugThbmNdCaoDXUe-SayuwhHKoxs",
    "message": "Token gerado!"
}
```
**Análise de amostras:**

 - Endpoint: ***sample/check***
 - ex: https://synviabackend.herokuapp.com/sample/check
 - Método: **POST**
 - Headers: Authorization Bearer

Request body:
```json
{
   "codigo_amostra": "80",
	"Cocaína": 0.678,
	"Anfetamina": 1.1,
	"Metanfetamina": 1.1,
	"MDA": 1.1,
	"MDMA": 1,
	"THC": 1,
	"Morfina": 1.1,
	"Codeína": 1.1,
	"Heroína": 1.1,
	"Benzoilecgonina": 1,
	"Cocaetileno": 1,
	"Norcocaína": 1
}
```
Response:
```json
{
	"message": "Teste positivo para as seguintes substâncias: Cocaína,Anfetamina,Metanfetamina,MDA,MDMA,THC,Morfina,Codeína,Heroína",
	"positive": true,
	"positiveSubstances": [
		"Cocaína",
		"Anfetamina",
		"Metanfetamina",
		"MDA",
		"MDMA",
		"THC",
		"Morfina",
		"Codeína",
		"Heroína"
	]
}
```
**Listagem de amostras:**

 - Endpoint: ***sample/list***
 - ex: https://synviabackend.herokuapp.com/sample/list
 - Método: **GET**
 - Headers: Authorization Bearer

Response:
```json
[
	{
	"positiveSubstances": [
		"Anfetamina",
		"MDA",
		"THC"
	],
	"_id": "60a4573c83a6a74e52d9994e",
	"codigo_amostra": "05",
	"Cocaína": 0,
	"Anfetamina": 1,
	"Metanfetamina": 0.1,
	"MDA": 1.1,
	"MDMA": 0,
	"THC": 1,
	"Morfina": 0.1,
	"Codeína": 0.1,
	"Heroína": 0.1,
	"Benzoilecgonina": 0,
	"Cocaetileno": 0,
	"Norcocaína": 0,
	"isPositive": true,
	"__v": 0
	},
	{
	"positiveSubstances": [
		"Cocaína",
		"Anfetamina",
		"Metanfetamina",
		"MDA",
		"MDMA",
		"THC",
		"Morfina",
		"Codeína",
		"Heroína"
	],
	"_id": "60a463daf46bb90015c00012",
	"codigo_amostra": "01",
	"Cocaína": 0.678,
	"Anfetamina": 1.1,
	"Metanfetamina": 1.1,
	"MDA": 1.1,
	"MDMA": 1,
	"THC": 99,
	"Morfina": 1.1,
	"Codeína": 1.1,
	"Heroína": 1.1,
	"Benzoilecgonina": 1,
	"Cocaetileno": 1,
	"Norcocaína": 1,
	"isPositive": true,
	"__v": 0
	},
]
```

**Documentação complementar:**
https://documenter.getpostman.com/view/9570928/TzRYdQU9

## Tecnologias utilizadas

 1. NodeJS 
 2. ExpressJS
 3. Mongoose
 4. Nodemon
 5. Dotenv
 6. JWT
 7. MongoDB Atlas
 8. Heroku
 9. JavaScript ES8+

## Referências
[documentacao-api](https://github.com/eGestor/documentacao-api)