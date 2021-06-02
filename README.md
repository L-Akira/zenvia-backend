# backend-typescript-zenvia

## Conteúdos

- [Sobre](#about)
- [Começando](#getting_started)
- [Como usar](#usage)

## Sobre👨‍🏫 <a name = "about"></a>

A solução para o teste do [Caixa eletrônico](https://dojopuzzles.com/problems/caixa-eletronico/) foi o uso de uma API RESTful utilizando princípios S.O.L.I.D adaptados para a dinâmica do ambiente Typescript, e altamente escalavel.

## Começando ✔ <a name = "getting_started"></a>

Antes de iniciar, a API possui algumas bibliotecas, para instalá-las recomenda-se o uso do [Yarn](https://classic.yarnpkg.com/lang/en/), porém pode-se usar o npm também.

### Pré-requisitos 📝

| Requisito | Versão  | 
| ------- | --- |
| Node.js | 14.0.0^ |
| Yarn** | 1.x |


 **Opcional

Para instalá-los usa-se: ```$yarn``` ou ```$npm i```

## Como usar 🛠 <a name = "usage"></a>

Após instalar as bibliotecas e frameworks nescessarios basta executar 
```$npm run dev``` ou ```$yarn dev``` para executar a aplicação, que por padrão estará em [http://localhost:3333](http://localhost:3333), sendo posivel trocar a porta em ./src/index.ts

### Rota 🎯

Para excutar o saque de dinheiro como proposto no teste, utilize a rota [/atm/withdraw](), passando no corpo da requisição uma estrutura JSON, como exemplificado abaixo:

```
{
	"withdraw": {
		"amount": 80
	}
}
```

Onde em "amount" será inserido o valor desejado.

Supondo que o exemplo acima tenha sido requerido na API, sua resposta então será em JSON como abaixo:

```
{
  "result": {
    "cash": {
      "100x": 0,
      "50x": 1,
      "20x": 1,
      "10x": 1
    },
    "properties": {
      "code": 200,
      "type": "SUCCESS"
    }
  }
}
```

Onde em "cash" conterá os tipos de notas e suas respectivas quantidades no saque, neste caso, contém 1 nota de R$50, 1 nota de R$20 e 1 nota de R$10.

Ja em "properties", são miscelaneas que contribuem para o entendimento do receptor dos dados

### Testes 🧪

Para executar os testes automatizados utilize o comando: ```$npm test``` ou ```$yarn test```
