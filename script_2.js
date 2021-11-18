console.log("---script_2---");

let user_number = prompt(
  "Quel nombre veux-tu calculer en factorielle mamène ?"
); //prompt qui demande un nombre au user.

let number = 1; // donne une valeure de 1 à la variable number.

const factorielle = () => {
  //  => : peut être utilisée de la même manière que vous utiliseriez les expressions de fonction (function (foo) {...}).

  while (user_number >= 1) {
    //calcule le factorielle du nombre choisi.

    number = number * user_number;
    user_number--; // user_number-- : l'opérateur décrémentera la valeur et renverra la valeur avant l'incrément (user_number - 1 jusqu'à 1).
  }
  return number;
};

console.log(`Le résultat est : ${factorielle()}`); // retourne la réponse du calcule factorielle.
