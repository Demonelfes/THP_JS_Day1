// 2.2.1

function factorial(num) {
    var result = num;

    if (num === 0 || num === 1)
      return 1;

    while (num > 1) {
      num--;
      result = result * num;
    }

    return result;
    }

   console.log("Le resultat est : " + factorial(prompt("De quel nombre veux-tu calculer la factorielle?")));
