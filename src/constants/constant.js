//lodaing and parsing JSON data
//Maybe find a way to load this data from a file
export const lotteryData = JSON.parse(`{
    "draws": [
    {
      "id": "draw-1",
      "drawDate": "2023-05-15",
      "number1": "2",
      "number2": "16",
      "number3": "23",
      "number4": "44",
      "number5": "47",
      "number6": "52",
      "bonus-ball": "14",
      "topPrize": 4000000000
    },
    {
      "id": "draw-2",
      "drawDate": "2023-05-22",
      "number1": "5",
      "number2": "45",
      "number3": "51",
      "number4": "32",
      "number5": "24",
      "number6": "18",
      "bonus-ball": "28",
      "topPrize": 6000000000
    },
    {
      "id": "draw-3",
      "drawDate": "2023-05-29",
      "number1": "34",
      "number2": "21",
      "number3": "4",
      "number4": "58",
      "number5": "1",
      "number6": "15",
      "bonus-ball": "51",
      "topPrize": 6000000000
    }
  ]
}`);
