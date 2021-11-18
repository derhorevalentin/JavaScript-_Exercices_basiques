console.log("---script_3---");

let choice_number = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu la famille ?"
); //prompt qui demande un nombre d'étage au user.

let n = `${choice_number}`; // n = nombre rentrer par l'utilisateur.
let pyramide = "";
for (let i = 1; i <= n; i++) {
  // boucle principale
  for (let e = 0; e < n - i; e++) {
    pyramide += " "; // bouble secondaire espace.
  }

  for (let d = 0; d < i; d++) {
    pyramide += "#"; // boucle secondaire diese.
  }
  pyramide += "\n";
}
console.log(pyramide); // retourne la pyramide
console.log("Look sa la famille !!!!!!!!!!!");

// -----> autre solution <-----
//for (let count = 1; count <= choice_number; count++) {
// let spaceArray = Array(choice_number - count).fill(" ");
//  let signArray = Array(count).fill("#");
//  let line = spaceArray.join("") + signArray.join(""); // array.join(",")
//console.log(line); //dusplay the pyramid
//}
