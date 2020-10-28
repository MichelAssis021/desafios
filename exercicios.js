const frutas = [{"nome":"Abacate","preco":37},{"nome":"Abacaxi","preco":10},{"nome":"Abiu","preco":36},{"nome":"Abricó","preco":16},{"nome":"Abrunho","preco":65},{"nome":"Açaí","preco":29},{"nome":"Acerola","preco":11},{"nome":"Akee","preco":75},{"nome":"Alfarroba","preco":34},{"nome":"Ameixa","preco":60},{"nome":"Amêndoa","preco":11},{"nome":"Amora","preco":41},{"nome":"Ananás","preco":55},{"nome":"Anona","preco":53},{"nome":"Araçá","preco":85},{"nome":"Arando","preco":58},{"nome":"Araticum","preco":12},{"nome":"Ata","preco":19},{"nome":"Atemoia","preco":26},{"nome":"Avelã","preco":64},{"nome":"Babaco","preco":45},{"nome":"Babaçu","preco":10},{"nome":"Bacaba","preco":29},{"nome":"Bacuri","preco":80},{"nome":"Bacupari","preco":27},{"nome":"Banana","preco":88},{"nome":"Baru","preco":49},{"nome":"Bergamota","preco":98},{"nome":"Biribá","preco":22},{"nome":"Buriti","preco":53},{"nome":"Butiá","preco":39},{"nome":"Cabeludinha","preco":60},{"nome":"Cacau","preco":50},{"nome":"Cagaita","preco":1},{"nome":"Caimito","preco":16},{"nome":"Cajá","preco":68},{"nome":"Caju","preco":53},{"nome":"Calabaça","preco":79},{"nome":"Calabura","preco":46},{"nome":"Calamondin","preco":41},{"nome":"Cambucá","preco":96},{"nome":"Cambuci","preco":2},{"nome":"Camu-camu","preco":57},{"nome":"Caqui","preco":84},{"nome":"Carambola","preco":75},{"nome":"Carnaúba","preco":36},{"nome":"Castanha","preco":45},{"nome":"Castanha-do-pará","preco":22},{"nome":"Cereja","preco":6},{"nome":"Ciriguela","preco":21},{"nome":"Ciruela","preco":39},{"nome":"Coco","preco":55},{"nome":"Cranberry","preco":28},{"nome":"Cupuaçu","preco":53},{"nome":"Damasco","preco":79},{"nome":"Dekopon","preco":14},{"nome":"Dendê","preco":47},{"nome":"Dióspiro","preco":2},{"nome":"Dovyalis","preco":61},{"nome":"Durião","preco":93},{"nome":"Embaúba","preco":26},{"nome":"Embaubarana","preco":80},{"nome":"Engkala","preco":91},{"nome":"Escropari","preco":18},{"nome":"Esfregadinha","preco":45},{"nome":"Figo","preco":90},{"nome":"Framboesa","preco":96},{"nome":"Fruta-do-conde","preco":12},{"nome":"Fruta-pão","preco":30},{"nome":"Feijoa","preco":100},{"nome":"Figo-da-índia","preco":86},{"nome":"Fruta-de-cedro","preco":25},{"nome":"Fruta-de-lobo","preco":56},{"nome":"Fruta-do-milagre","preco":63},{"nome":"Fruta-de-tatu","preco":11},{"nome":"Gabiroba","preco":98},{"nome":"Glicosmis","preco":68},{"nome":"Goiaba","preco":24},{"nome":"Granadilla","preco":77},{"nome":"Gravatá","preco":44},{"nome":"Graviola","preco":79},{"nome":"Groselha","preco":98},{"nome":"Grumixama","preco":38},{"nome":"Guabiju","preco":97},{"nome":"Guabiroba","preco":34},{"nome":"Guaraná","preco":96},{"nome":"Hawthorn","preco":86},{"nome":"Heisteria","preco":55},{"nome":"Hilocéreo","preco":49},{"nome":"Ibacurupari","preco":14},{"nome":"Ilama","preco":32},{"nome":"Imbe","preco":35},{"nome":"Imbu","preco":56},{"nome":"Inajá","preco":68},{"nome":"Ingá","preco":20},{"nome":"Inharé","preco":16},{"nome":"Jabuticaba","preco":67},{"nome":"Jaca","preco":77},{"nome":"Jambo","preco":86},{"nome":"Jambolão","preco":15},{"nome":"Jamelão","preco":46},{"nome":"Jaracatiá","preco":82},{"nome":"Jatobá","preco":41},{"nome":"Jenipapo","preco":51},{"nome":"Jerivá","preco":89},{"nome":"Juá","preco":63},{"nome":"Jujuba","preco":58},{"nome":"Kiwi","preco":87},{"nome":"Kumquat","preco":39},{"nome":"Kinkan","preco":51},{"nome":"Kino","preco":22},{"nome":"Kiwano","preco":64},{"nome":"Kabosu","preco":97},{"nome":"Karité","preco":34},{"nome":"Laranja","preco":97},{"nome":"Limão","preco":29},{"nome":"Lima","preco":74},{"nome":"Lichia","preco":92},{"nome":"Longan","preco":25},{"nome":"Lucuma","preco":54},{"nome":"Lacucha","preco":11},{"nome":"Lulo","preco":31},{"nome":"Lobeira","preco":93},{"nome":"Langsat","preco":53},{"nome":"Laranja-de-pacu","preco":96},{"nome":"Mabolo","preco":63},{"nome":"Maçã","preco":13},{"nome":"Macadâmia","preco":92},{"nome":"Macaúba","preco":91},{"nome":"Mamão","preco":82},{"nome":"Mamey","preco":71},{"nome":"Mamoncillo","preco":89},{"nome":"Maná-cubiu","preco":32},{"nome":"Manga","preco":20},{"nome":"Mangaba","preco":9},{"nome":"Mangostão","preco":66},{"nome":"Maracujá","preco":18},{"nome":"Marang","preco":54},{"nome":"Marmelo","preco":16},{"nome":"Marolo","preco":15},{"nome":"Marula","preco":71},{"nome":"Massala","preco":20},{"nome":"Melancia","preco":53},{"nome":"Melão","preco":64},{"nome":"Meloa","preco":80},{"nome":"Mexerica","preco":2},{"nome":"Mirtilo","preco":20},{"nome":"Morango","preco":77},{"nome":"Murici","preco":11},{"nome":"Naranjilla","preco":4},{"nome":"Nectarina","preco":63},{"nome":"Nêspera","preco":46},{"nome":"Noni","preco":21},{"nome":"Noz","preco":67},{"nome":"Noz-pecã","preco":73},{"nome":"Noz-macadâmia","preco":88},{"nome":"Oiti","preco":56},{"nome":"Oxicoco","preco":99},{"nome":"Orangelo","preco":92},{"nome":"Pera","preco":11},{"nome":"Pêssego","preco":48},{"nome":"Pitanga","preco":7},{"nome":"Pinha","preco":12},{"nome":"Pitaia","preco":56},{"nome":"Pitomba","preco":39},{"nome":"Pitangatuba","preco":77},{"nome":"Pindaíba","preco":67},{"nome":"Pequi","preco":57},{"nome":"Pequiá","preco":49},{"nome":"Physalis","preco":28},{"nome":"Pulasan","preco":18},{"nome":"Pomelo","preco":78},{"nome":"Pupunha","preco":5},{"nome":"Puçá","preco":72},{"nome":"Patauá","preco":97},{"nome":"Pajurá","preco":56},{"nome":"Pixirica","preco":26},{"nome":"Pistache","preco":93},{"nome":"Quina","preco":84},{"nome":"Quiuí","preco":56},{"nome":"Romã","preco":47},{"nome":"Rambai","preco":17},{"nome":"Rambutão","preco":40},{"nome":"Rukam","preco":100},{"nome":"Saguaraji","preco":44},{"nome":"Salak","preco":90},{"nome":"Santol","preco":10},{"nome":"Sapota","preco":74},{"nome":"Sapoti","preco":40},{"nome":"Sapucaia","preco":15},{"nome":"Saputá","preco":81},{"nome":"Seriguela","preco":23},{"nome":"Sorvinha","preco":88},{"nome":"Tangerina","preco":21},{"nome":"Tamarindo","preco":87},{"nome":"Tâmara","preco":48},{"nome":"Toranja","preco":87},{"nome":"Tucumã","preco":45},{"nome":"Taiuva","preco":84},{"nome":"Tapiá","preco":95},{"nome":"Tarumã","preco":49},{"nome":"Tangor","preco":29},{"nome":"Tucujá","preco":1},{"nome":"Uva","preco":50},{"nome":"Umbu","preco":53},{"nome":"Uvaia","preco":38},{"nome":"Uchuva","preco":98},{"nome":"Umê","preco":75},{"nome":"Uxi","preco":13},{"nome":"Vacínio","preco":59},{"nome":"Veludo","preco":34},{"nome":"Vergamota","preco":84},{"nome":"Wampi","preco":69},{"nome":"Xixá","preco":61},{"nome":"Yamamomo","preco":89},{"nome":"Yuzu","preco":43},{"nome":"Zimbro","preco":10},{"nome":"<input type=\"radio\" id=\"improvement0Option-0\" name=\"improvement0Option\" value=\"Este conteúdo contém informação incorreta\"><label for=\"improvement0Option-0\">Este conteúdo contém informação incorreta</label>","preco":37},{"nome":"<input type=\"radio\" id=\"improvement0Option-1\" name=\"improvement0Option\" value=\"Este conteúdo não tem a informação que procuro\"><label for=\"improvement0Option-1\">Este conteúdo não tem a informação que procuro</label>","preco":53},{"nome":"<input type=\"radio\" id=\"improvement0Option-2\" name=\"improvement0Option\" value=\"Outro\"><label for=\"improvement0Option-2\">Outro</label>","preco":80}]
const filtroFrutas = [];
const argumento = process.argv[2];

console.log(argumento);
// 1. remova os elementos que não são frutas (Pesquise sobre REGEX)

for (let i=0; i < frutas.length; i++){
    var fruta = frutas[i];
    if(!(/<\/.+?>/g).test(fruta.nome)){
        filtroFrutas.push(fruta)
    }
    
} 

// 2. Liste todos os nomes de frutas - Argumento: listarTodas

if(argumento == "listarTodas"){
    for(var i = 0; i < filtroFrutas.length; i++){
        console.log(filtroFrutas[i].nome)
    }
}



// 3. Pesquise o preço de uma fruta pelo nome - Argumento: pesquisar=nomedafruta

// 4. Listar 4 frutas mais caras - Argumento: caras

// 5. Adicionar uma propriedade para cada fruta (sabor: doce/amargo/azedo) pode ser aleatório  (pre processamento para Argumento: listarPorTipo)

// 6. Liste o nome por tipo de sabor - Argumento: listarPorTipo

// console.log("Doces")
// console.log("---------------------")
// console.log("Abacaxi")
// console.log("Mamão")

// console.log("==================")

// console.log("Azedas")
// console.log("-----------------------")
// console.log("Limão")
// console.log("Kiwi")


// 7. Exibir média de preço por sabor  Argumento: mediaPorSabor

// 8. Pesquisar uma fruta pelo nome, exibir o valor e o sabor e quais frutas tem o mesmo preço em sabores diferentes. Argumento: equivalentes=nomedafruta

// console.log("Abacaxi - preco = 13, sabor = doce")
// console.log("Equivalentes")
// console.log("-----------------------")
// console.log("Limão - preco = 13, sabor = azedo")
// console.log("Carambola - preco = 13, sabor = amargo");






