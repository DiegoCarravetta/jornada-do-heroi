console.clear();
const prompt = require('prompt-sync')();

let vitorias = 0;
let derrotas = 0;
let i = false;

console.log('A Lenda de Zelda');
console.log();

console.log('Link.');
console.log();

console.log('Um jovem Elfo, adotado pelos Kokires, precisa vencer o mal instaurado em Hyruliam.');
console.log();

console.log('Foram diversas dificuldades até chegar o momento de enfrentar o grande vilão Ganon.');
console.log();

console.log('Finalmente, ele avista os grandes portões do castelo da Princesa Zelda.');
console.log();

console.log('O cheiro podre vindo dos corpos mutilados dos guardas estão por toda parte.');
console.log();

console.log('O som de sua respiração acelerada é audível por Ganon, que sorri!');
console.log();
  
console.log('Ao adentrar no castela, ele ouve a risada macabra de Ganon! "HAHAHAHAHAHA!');
console.log();

console.log('A Espada Mestre brilha ao sentir a energia negativa.');
console.log();
  
console.log('Lá estava ele, uma besta, querendo derrotar o último Elfo, capaz de barrar os seus planos');
console.log();

let resposta = prompt(`VOCÊ ACREDITA QUE PODE SALVAR A PRINCESA, SER INFERIRO? `);
console.log();

do {
  if (resposta.toUpperCase() == "SIM") {
    console.log(`HAHAHAHAHAHAHA, INSETO!`);
    vitorias++;
    i = true;
  } else if (resposta.toUpperCase() == "NAO" || resposta.toUpperCase() == "NÃO") {
    console.log(`INTELIGENTE, PROMETO QUE TERÁ UMA MORTE RÁPIDA!`);
    derrotas++;
    i = true;
  } else {
    console.log('INSETO, RESPONDA APENAS COM UM SIM OU NÃO');
    resposta = prompt(``);
  }
} while (i == false);
console.log();

console.log('MESMO ASSIM VOCÊ SACOU A ESPADA MESTRE');
console.log();

resposta = prompt(`ESTÁ PEMSANDO EM ME ATACAR? `);
console.log();

do {
  if (resposta.toUpperCase() == "SIM") {
    console.log('ESSA DOR AGONIANTE, VOCÊ CORTOU O MEU CHIFRE, MALDITO!');
    vitorias++;
    i = false;
  } else if (resposta.toUpperCase() == "NAO" || resposta.toUpperCase() == "NÃO") {
    console.log('AGORA QUE A ESPADA MESTRE É MINHA, PROMETO MATAR VOCÊS DOIS BEM RÁPIDO!');
    derrotas++;
    i = false;
  } else {
    console.log('INSETO, RESPONDA APENAS COM UM SIM OU NÃO');
    resposta = prompt(``);
  }
} while (i == true);
console.log();

console.log('Recochetiando o poder imenso de Gonan, a Espada Mestre se quebra');
console.log();

console.log('A ESPADA ERA FRACA COMO O DONO...');
console.log();

console.log('Link está vendo como a Princesa Zelda está sofrendo com a possível morte do seu herói');
console.log();

console.log('Pensando em um último movimento, Link retira de seu bolso o Medalhão da Luz');
console.log();
  
resposta = prompt(`INSETO, PENSA EM USAR ESSA LUIZINHA CONTRA UM DEUS? `);
console.log();

do {
  if (resposta.toUpperCase() == "SIM") {
    console.log('ESSA LUZ PERFUROU O MEU CORAÇÃO, NÃO CONSIGO RESPIRAR');
    vitorias++;
    i = true;
  } else if (resposta.toUpperCase() == "NAO" || resposta.toUpperCase() == "NÃO") {
    console.log('EU ABSORVI TODO O PODER DESSE MEDALHÃO, AGORA NIGUÉM PODERÁ ME VENCER');
    derrotas++;
    i = true;
  } else {
    console.log('INSETO, RESPONDA APENAS COM UM SIM OU NÃO.');
    resposta = prompt(``);
    i = false;
  }
} while (i == false);
console.log();

console.log('Com o grande poder do medalhão, Ganon não consegue segurar sua energia e acaba liberando o feitiço que prendia a Princesa Zelda.');
console.log();

resposta = prompt(`ZELDA, VOCÊ PENSA QUE VAI EM ALGUM LUGAR? `);
console.log();

do {
  if (resposta.toUpperCase() == "SIM") {
    console.log('SUA MALDITA, COMO USA USAR ESSA MAGIA NOJENTA EM MIM?');
    vitorias++;
    i = false;
  } else if (resposta.toUpperCase() == "NAO" || resposta.toUpperCase() == "NÃO") {
    console.log('CORREU PARA SE FAZER DE ESCUDO E MORRER JUNTO COM O FRACO HHAHAHAHAHA');
    derrotas++;
    i = false;
  } else {
    console.log('INSETO, RESPONDA APENAS COM UM SIM OU NÃO');
    resposta = prompt(``);
    i = true;
  }
} while (i == true);
console.log();

console.log('Ganon conseguia ver o medo nos olhos de suas vítimas...');
console.log();

console.log('Mesmo fraco, depois de ter absorvido o poder do Medalão da Luz, ele estava com muita raiva');
console.log();

console.log('Eis quando ele percebe que Zelda e Link estão juntando energias em um arco com uma flecha especial, o Arco da Luz!');
console.log();

resposta = prompt(`VOCÊ PENSA QUE ESSA ESPERANÇA VAI ME DERROTAR? `);
console.log();

do {
  if (resposta.toUpperCase() == "SIM") {
    console.log('Ganon recebe a flechada e fica imóvel...');
    vitorias++;
    i = true;
  } else if (resposta.toUpperCase() == "NAO" || resposta.toUpperCase() == "NÃO"
  ) {
    console.log('Ganon recebe a flechada e fica imóvel...');
    derrotas++;
    i = true;
  } else {
    console.log('INSETO, RESPONDA APENAS COM UM SIM OU NÃO');
    resposta = prompt(``);
    i = false;
  }
} while (i == false);
console.log();

if (vitorias == 0) {
  console.log('Após um grande silêncio, Ganon aponta o seu dedo indicador na direção de nossos heróis, e em um piscar de ólhos, tudo, em um raio de 1 quilometro, tudo é evaporado, levando a morte dos nossos heróis. "EU VENCI! HAHAHAHAHA"');
} else if (vitorias == 1 || vitorias == 2 || vitorias == 3 || vitorias == 4) {
  console.log('Após um grande silêncio, Ganon percebe que está muito ferido e resolve fugir por um portal para poder lutar outro dia. "EU VOLTAREI, HERÓI DO TEMPO! HAHAHAHAHA"');
} else if (vitorias == 5) {
  console.log('Após um grande silêncio, Ganon cai de joelhos. O poder recebido é tão grande que o seu corpo não consegue suportar e desintegra. Nossos heróis salvaram o mundo!');
}

console.log();
console.log('FIM');