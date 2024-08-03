const randNumber = (n) => {
  return Math.floor(Math.random() * n + 1);
};

//Funcation to generate random 6 unique whole numbers between 0 and n
const sixUniqueRandBetweenZeroAndN = (n) => {
  const set = new Set();
  while (set.size <= 6) {
    set.add(randNumber(n));
  }
  return [...set].sort((a, b) => a - b);
};

export const createTicketData = (drawDate) => {
  const numbers = sixUniqueRandBetweenZeroAndN(60);
  return {
    id: randNumber(100000000),
    drawDate: `For ${drawDate}`,
    picked_number1: numbers[0],
    picked_number2: numbers[1],
    picked_number3: numbers[2],
    picked_number4: numbers[3],
    picked_number5: numbers[4],
    picked_number6: numbers[5],
    "picked_bonus-ball": randNumber(50),
    topPrize: randNumber(100000000),
  };
};
