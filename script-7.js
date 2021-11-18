console.log("---script_7---");

bot = prompt("Salut la famille, ca va ?");
console.log(`ta réponse : ${bot}`);

sentence = bot.split("");

// --> Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ; <--
if (sentence[sentence.length - 1] == "?") {
  console.log("Bot : Ouais ouais ouais");
}

// --> Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "heu tu t'emballe la !..." ; <--
else if (bot == bot.toUpperCase() && bot !== "") {
  console.log("heu tu t'emballe la !");
}

// --> Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie en soum-soum ?" ; <--
else if (bot.toLowerCase().includes("Fornite")) {
  console.log("Bot : on s'fait une partie en soum-soum ?");
}

// --> Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ; <--
else if (bot === "") {
  console.log("Bot : T'es en pls ou quoi ?");
}

// --> Pour tout autre phrase que tu lui envoies, le bot répond "Je m'en balek la famille." ; <--
else {
  console.log("Bot : Je m'en balek la famille.");
}
