/* ----- List Of All Pokemon Data ----- */
var pokemon = [ 
  { 
    name: 'Bulbasaur',
    number: '#001',
    image: 'img/001.png',
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Flying', 'Ice', 'Psychic']
  },
  {
    name: 'Ivysaur',
    number: '#002',
    image: 'img/002.png',
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Flying', 'Ice', 'Psychic']
  },
  {
    name: 'Venusaur',
    number: '#003',
    image: 'img/003.png',
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Flying', 'Ice', 'Psychic']
  },
  {
    name: 'Charmander',
    number: '#004',
    image: 'img/004.png',
    type: ['Fire'],
    weakness: ['Ground', 'Rock', 'Water']
  },
  {
    name: 'Charmeleon',
    number: '#005',
    image: 'img/005.png',
    type: ['Fire'],
    weakness: ['Ground', 'Rock', 'Water']
  },
    {
    name: 'Charizard',
    number: '#006',
    image: 'img/006.png',
    type: ['Fire', 'Flying'],
    weakness: ['Ground', 'Rock', 'Water']
  },
  {
    name: 'Squirtle',
    number: '#007',
    image: 'img/007.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Wartortle',
    number: '#008',
    image: 'img/008.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
    {
    name: 'Blastoise',
    number: '#009',
    image: 'img/009.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Caterpie',
    number: '#010',
    image: 'img/010.png',
    type: ['Bug'],
    weakness: ['Fire', 'Flying', 'Rock']
  },
  {
    name: 'Metapod',
    number: '#011',
    image: 'img/011.png',
    type: ['Bug'],
    weakness: ['Fire', 'Flying', 'Rock']
  },
  {
    name: 'Butterfree',
    number: '#012',
    image: 'img/012.png',
    type: ['Bug'],
    weakness: ['Rock', 'Electric', 'Fire', 'Flying', 'Ice']
  },
  {
    name: 'Weedle',
    number: '#013',
    image: 'img/013.png',
    type: ['Bug', 'Poison'],
    weakness: ['Fire', 'Flying', 'Psychic', 'Rock']
  },
  {
    name: 'Kakuna',
    number: '#014',
    image: 'img/014.png',
    type: ['Bug', 'Poison'],
    weakness: ['Fire', 'Flying', 'Psychic', 'Rock']
  },
  {
    name: 'Beedrill',
    number: '#015',
    image: 'img/015.png',
    type: ['Bug', 'Poison'],
    weakness: ['Fire', 'Flying', 'Psychic', 'Rock']
  },
  {
    name: 'Pidgey',
    number: '#016',
    image: 'img/016.png',
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Ice', 'Rock']
  },
  {
    name: 'Pidgeotto',
    number: '#017',
    image: 'img/017.png',
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Ice', 'Rock']
  },
  {
    name: 'Pidgeot',
    number: '#018',
    image: 'img/018.png',
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Ice', 'Rock']
  },
  {
    name: 'Rattata',
    number: '#019',
    image: 'img/019.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Raticate',
    number: '#020',
    image: 'img/020.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Spearow',
    number: '#021',
    image: 'img/021.png',
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Ice', 'Rock']
  },
  {
    name: 'Fearow',
    number: '#022',
    image: 'img/022.png',
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Ice', 'Rock']
  },
  {
    name: 'Ekans',
    number: '#023',
    image: 'img/023.png',
    type: ['Poison'],
    weakness: ['Ground', 'Psychic']
  },
  {
    name: 'Arbok',
    number: '#024',
    image: 'img/024.png',
    type: ['Poison'],
    weakness: ['Ground', 'Psychic']
  },
  {
    name: 'Pikachu',
    number: '#025',
    image: 'img/025.png',
    type: ['Electric'],
    weakness: ['Ground']
  },
  {
    name: 'Raichu',
    number: '#026',
    image: 'img/026.png',
    type: ['Electric'],
    weakness: ['Ground']
  },
  {
    name: 'Sandshrew',
    number: '#027',
    image: 'img/027.png',
    type: ['Ground'],
    weakness: ['Grass', 'Ice', 'Water']
  },
  {
    name: 'Sandslash',
    number: '#028',
    image: 'img/028.png',
    type: ['Ground'],
    weakness: ['Grass', 'Ice', 'Water']
  },
  {
    name: 'Nidoran♀',
    number: '#029',
    image: 'img/029.png',
    type: ['Poison'],
    weakness: ['Ground', 'Psychic']
  },
  {
    name: 'Nidorina',
    number: '#030',
    image: 'img/030.png',
    type: ['Poison'],
    weakness: ['Ground', 'Psychic']
  },
  {
    name: 'Nidoqueen',
    number: '#031',
    image: 'img/031.png',
    type: ['Poison', 'Ground'],
    weakness: ['Ground', 'Ice', 'Psychic', 'Water']
  },
  {
    name: 'Nidoran♂',
    number: '#032',
    image: 'img/032.png',
    type: ['Poison'],
    weakness: ['Ground', 'Psychic']
  },
  {
    name: 'Nidorino',
    number: '#033',
    image: 'img/033.png',
    type: ['Poison'],
    weakness: ['Ground', 'Psychic']
  },
  {
    name: 'Nidoking',
    number: '#034',
    image: 'img/034.png',
    type: ['Poison', 'Ground'],
    weakness: ['Ground', 'Ice', 'Psychic', 'Water']
  },
  {
    name: 'Clefairy',
    number: '#035',
    image: 'img/035.png',
    type: ['Fairy'],
    weakness: ['Steel', 'Poison']
  },
  {
    name: 'Clefable',
    number: '#036',
    image: 'img/036.png',
    type: ['Fairy'],
    weakness: ['Steel', 'Poison']
  },
  {
    name: 'Vulpix',
    number: '#037',
    image: 'img/037.png',
    type: ['Fire'],
    weakness: ['Ground', 'Rock', 'Water']
  },
  {
    name: 'Ninetales',
    number: '#038',
    image: 'img/038.png',
    type: ['Fire'],
    weakness: ['Ground', 'Rock', 'Water']
  },
  {
    name: 'Jigglypuff',
    number: '#039',
    image: 'img/039.png',
    type: ['Fairy'],
    weakness: ['Steel', 'Poison']
  },
  {
    name: 'Wigglytuff',
    number: '#040',
    image: 'img/040.png',
    type: ['Fairy'],
    weakness: ['Steel', 'Poison']
  },
  {
    name: 'Zubat',
    number: '#041',
    image: 'img/041.png',
    type: ['Poison', 'Flying'],
    weakness: ['Electric', 'Ice', 'Psychic', 'Rock']
  },
  {
    name: 'Golbat',
    number: '#042',
    image: 'img/042.png',
    type: ['Poison', 'Flying'],
    weakness: ['Electric', 'Ice', 'Psychic', 'Rock']
  },
  {
    name: 'Oddish',
    number: '#043',
    image: 'img/043.png',
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Flying', 'Ice', 'Psychic']
  },
  {
    name: 'Gloom',
    number: '#044',
    image: 'img/044.png',
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Flying', 'Ice', 'Psychic']
  },
  {
    name: 'Vileplume',
    number: '#045',
    image: 'img/045.png',
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Flying', 'Ice', 'Psychic']
  },
  {
    name: 'Paras',
    number: '#046',
    image: 'img/046.png',
    type: ['Bug', 'Grass'],
    weakness: ['Fire', 'Flying', 'Bug', 'Ice', 'Poison', 'Rock']
  },
  {
    name: 'Parasect',
    number: '#047',
    image: 'img/047.png',
    type: ['Bug', 'Grass'],
    weakness: ['Fire', 'Flying', 'Bug', 'Ice', 'Poison', 'Rock']
  },
  {
    name: 'Venonat',
    number: '#048',
    image: 'img/048.png',
    type: ['Bug', 'Poison'],
    weakness: ['Fire', 'Flying', 'Psychic', 'Rock']
  },
  {
    name: 'Venomoth',
    number: '#049',
    image: 'img/049.png',
    type: ['Bug', 'Poison'],
    weakness: ['Fire', 'Flying', 'Psychic', 'Rock']
  },
  {
    name: 'Diglett',
    number: '#050',
    image: 'img/050.png',
    type: ['Ground'],
    weakness: ['Grass', 'Ice', 'Water']
  },
  {
    name: 'Dugtrio',
    number: '#051',
    image: 'img/051.png',
    type: ['Ground'],
    weakness: ['Grass', 'Ice', 'Water']
  },
  {
    name: 'Meowth',
    number: '#052',
    image: 'img/052.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Persian',
    number: '#053',
    image: 'img/053.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Psyduck',
    number: '#054',
    image: 'img/054.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Golduck',
    number: '#055',
    image: 'img/055.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Mankey',
    number: '#056',
    image: 'img/056.png',
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy']
  },
  {
    name: 'Primeape',
    number: '#057',
    image: 'img/057.png',
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy']
  },
  {
    name: 'Growlithe',
    number: '#058',
    image: 'img/058.png',
    type: ['Fire'],
    weakness: ['Ground', 'Rock', 'Water']
  },
  {
    name: 'Arcanine',
    number: '#059',
    image: 'img/059.png',
    type: ['Fire'],
    weakness: ['Ground', 'Rock', 'Water']
  },
  {
    name: 'Poliwag',
    number: '#060',
    image: 'img/060.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Poliwhirl',
    number: '#061',
    image: 'img/061.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Poliwrath',
    number: '#062',
    image: 'img/062.png',
    type: ['Water', 'Fighting'],
    weakness: ['Electric', 'Flying', 'Grass', 'Psychic', 'Fairy']
  },
  {
    name: 'Abra',
    number: '#063',
    image: 'img/063.png',
    type: ['Psychic'],
    weakness: ['Bug', 'Dark', 'Ghost']
  },
  {
    name: 'Kadabra',
    number: '#064',
    image: 'img/064.png',
    type: ['Psychic'],
    weakness: ['Bug', 'Dark', 'Ghost']
  },
  {
    name: 'Alakazam',
    number: '#065',
    image: 'img/065.png',
    type: ['Psychic'],
    weakness: ['Bug', 'Dark', 'Ghost']
  },
  {
    name: 'Machop',
    number: '#066',
    image: 'img/066.png',
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy']
  },
  {
    name: 'Machoke',
    number: '#067',
    image: 'img/067.png',
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy']
  },
  {
    name: 'Machamp',
    number: '#068',
    image: 'img/068.png',
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy']
  },
  {
    name: 'Bellsprout',
    number: '#069',
    image: 'img/069.png',
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Flying', 'Ice', 'Psychic']
  },
  {
    name: 'Weepinbell',
    number: '#070',
    image: 'img/070.png',
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Flying', 'Ice', 'Psychic']
  },
  {
    name: 'Victreebel',
    number: '#071',
    image: 'img/071.png',
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Flying', 'Ice', 'Psychic']
  },
  {
    name: 'Tentacool',
    number: '#072',
    image: 'img/072.png',
    type: ['Water', 'Poison'],
    weakness: ['Electric', 'Ground', 'Psychic']
  },
  {
    name: 'Tentacruel',
    number: '#073',
    image: 'img/073.png',
    type: ['Water', 'Poison'],
    weakness: ['Electric', 'Ground', 'Psychic']
  },
  {
    name: 'Geodude',
    number: '#074',
    image: 'img/074.png',
    type: ['Rock', 'Ground'],
    weakness: ['Grass', 'Water', 'Fighting', 'Ground', 'Ice', 'Steel']
  },
  {
    name: 'Graveler',
    number: '#075',
    image: 'img/075.png',
    type: ['Rock', 'Ground'],
    weakness: ['Grass', 'Water', 'Fighting', 'Ground', 'Ice', 'Steel']
  },
  {
    name: 'Golem',
    number: '#076',
    image: 'img/076.png',
    type: ['Rock', 'Ground'],
    weakness: ['Grass', 'Water', 'Fighting', 'Ground', 'Ice', 'Steel']
  },
  {
    name: 'Ponyta',
    number: '#077',
    image: 'img/077.png',
    type: ['Fire'],
    weakness: ['Ground', 'Rock', 'Water']
  },
  {
    name: 'Rapidash',
    number: '#078',
    image: 'img/078.png',
    type: ['Fire'],
    weakness: ['Ground', 'Rock', 'Water']
  },
  {
    name: 'Slowpoke',
    number: '#079',
    image: 'img/079.png',
    type: ['Water', 'Psychic'],
    weakness: ['Bug', 'Dark', 'Electric', 'Ghost', 'Grass']
  },
  {
    name: 'Slowbro',
    number: '#080',
    image: 'img/080.png',
    type: ['Water', 'Psychic'],
    weakness: ['Bug', 'Dark', 'Electric', 'Ghost', 'Grass']
  },
  {
    name: 'Magnemite',
    number: '#081',
    image: 'img/081.png',
    type: ['Electric', 'Steel'],
    weakness: ['Ground', 'Fire', 'Fighting']
  },
  {
    name: 'Magneton',
    number: '#082',
    image: 'img/082.png',
    type: ['Electric', 'Steel'],
    weakness: ['Ground', 'Fire', 'Fighting']
  },
  {
    name: "Farfetch’d",
    number: '#083',
    image: 'img/083.png',
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Ice', 'Rock']
  },
  {
    name: 'Doduo',
    number: '#084',
    image: 'img/084.png',
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Ice', 'Rock']
  },
  {
    name: 'Dodrio',
    number: '#085',
    image: 'img/085.png',
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Ice', 'Rock']
  },
  {
    name: 'Seel',
    number: '#086',
    image: 'img/086.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Dewgong',
    number: '#087',
    image: 'img/087.png',
    type: ['Water', 'Ice'],
    weakness: ['Electric', 'Fighting', 'Grass', 'Rock']
  },
  {
    name: 'Grimer',
    number: '#088',
    image: 'img/088.png',
    type: ['Poison'],
    weakness: ['Ground', 'Psychic']
  },
  {
    name: 'Muk',
    number: '#089',
    image: 'img/089.png',
    type: ['Poison'],
    weakness: ['Ground', 'Psychic']
  },
  {
    name: 'Shellder',
    number: '#090',
    image: 'img/090.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Cloyster',
    number: '#091',
    image: 'img/091.png',
    type: ['Water', 'Ice'],
    weakness: ['Electric', 'Fighting', 'Grass', 'Rock']
  },
  {
    name: 'Gastly',
    number: '#092',
    image: 'img/092.png',
    type: ['Ghost', 'Poison'],
    weakness: ['Dark', 'Ghost', 'Psychic']
  },
  {
    name: 'Haunter',
    number: '#093',
    image: 'img/093.png',
    type: ['Ghost', 'Poison'],
    weakness: ['Dark', 'Ghost', 'Psychic']
  },
  {
    name: 'Gengar',
    number: '#094',
    image: 'img/094.png',
    type: ['Ghost', 'Poison'],
    weakness: ['Dark', 'Ghost', 'Psychic']
  },
  {
    name: 'Onix',
    number: '#095',
    image: 'img/095.png',
    type: ['Rock', 'Ground'],
    weakness: ['Grass', 'Water', 'Fighting', 'Ground', 'Ice', 'Steel']
  },
  {
    name: 'Drowzee',
    number: '#096',
    image: 'img/096.png',
    type: ['Psychic'],
    weakness: ['Bug', 'Dark', 'Ghost']
  },
  {
    name: 'Hypno',
    number: '#097',
    image: 'img/097.png',
    type: ['Psychic'],
    weakness: ['Bug', 'Dark', 'Ghost']
  },
  {
    name: 'Krabby',
    number: '#098',
    image: 'img/098.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Kingler',
    number: '#099',
    image: 'img/099.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Voltorb',
    number: '#100',
    image: 'img/100.png',
    type: ['Electric'],
    weakness: ['Ground']
  },
  {
    name: 'Electrode',
    number: '#101',
    image: 'img/101.png',
    type: ['Electric'],
    weakness: ['Ground']
  },
  {
    name: 'Exeggcute',
    number: '#102',
    image: 'img/102.png',
    type: ['Grass', 'Psychic'],
    weakness: ['Bug', 'Dark', 'Fire', 'Flying', 'Ghost', 'Ice', 'Poison']
  },
  {
    name: 'Exeggutor',
    number: '#103',
    image: 'img/103.png',
    type: ['Grass', 'Psychic'],
    weakness: ['Bug', 'Dark', 'Fire', 'Flying', 'Ghost', 'Ice', 'Poison']
  },
  {
    name: 'Cubone',
    number: '#104',
    image: 'img/104.png',
    type: ['Ground'],
    weakness: ['Grass', 'Ice', 'Water']
  },
  {
    name: 'Marowak',
    number: '#105',
    image: 'img/105.png',
    type: ['Ground'],
    weakness: ['Grass', 'Ice', 'Water']
  },
  {
    name: 'Hitmonlee',
    number: '#106',
    image: 'img/106.png',
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy']
  },
  {
    name: 'Hitmonchan',
    number: '#107',
    image: 'img/107.png',
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy']
  },
  {
    name: 'Lickitung',
    number: '#108',
    image: 'img/108.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Koffing',
    number: '#109',
    image: 'img/109.png',
    type: ['Poison'],
    weakness: ['Psychic']
  },
  {
    name: 'Weezing',
    number: '#110',
    image: 'img/110.png',
    type: ['Poison'],
    weakness: ['Psychic']
  },
  {
    name: 'Rhyhorn',
    number: '#111',
    image: 'img/111.png',
    type: ['Ground', 'Rock'],
    weakness: ['Grass', 'Water', 'Fighting', 'Ground', 'Ice', 'Steel']
  },
  {
    name: 'Rhydon',
    number: '#112',
    image: 'img/112.png',
    type: ['Ground', 'Rock'],
    weakness: ['Grass', 'Water', 'Fighting', 'Ground', 'Ice', 'Steel']
  },
  {
    name: 'Chansey',
    number: '#113',
    image: 'img/113.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Tangela',
    number: '#114',
    image: 'img/114.png',
    type: ['Grass'],
    weakness: ['Bug', 'Fire', 'Flying', 'Ice', 'Poison']
  },
  {
    name: 'Kangaskhan',
    number: '#115',
    image: 'img/115.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Horsea',
    number: '#116',
    image: 'img/116.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Seadra',
    number: '#117',
    image: 'img/117.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Goldeen',
    number: '#118',
    image: 'img/118.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Seaking',
    number: '#119',
    image: 'img/119.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Staryu',
    number: '#120',
    image: 'img/120.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Starmie',
    number: '#121',
    image: 'img/121.png',
    type: ['Water', 'Psychic'],
    weakness: ['Bug', 'Dark', 'Electric', 'Ghost', 'Grass']
  },
  {
    name: 'Mr. Mime',
    number: '#122',
    image: 'img/122.png',
    type: ['Psychic', 'Fairy'],
    weakness: ['Ghost', 'Steel', 'Poison']
  },
  {
    name: 'Scyther',
    number: '#123',
    image: 'img/123.png',
    type: ['Bug', 'Flying'],
    weakness: ['Rock', 'Electric', 'Fire', 'Flying', 'Ice']
  },
  {
    name: 'Jynx',
    number: '#124',
    image: 'img/124.png',
    type: ['Ice', 'Psychic'],
    weakness: ['Bug', 'Dark', 'Fire', 'Ghost', 'Rock', 'Steel']
  },
  {
    name: 'Electabuzz',
    number: '#125',
    image: 'img/125.png',
    type: ['Electric'],
    weakness: ['Ground']
  },
  {
    name: 'Magmar',
    number: '#126',
    image: 'img/126.png',
    type: ['Fire'],
    weakness: ['Ground', 'Rock', 'Water']
  },
  {
    name: 'Pinsir',
    number: '#127',
    image: 'img/127.png',
    type: ['Bug'],
    weakness: ['Fire', 'Flying', 'Rock']
  },
  {
    name: 'Tauros',
    number: '#128',
    image: 'img/128.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Magikarp',
    number: '#129',
    image: 'img/129.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Gyarados',
    number: '#130',
    image: 'img/130.png',
    type: ['Water', 'Flying'],
    weakness: ['Electric', 'Rock']
  },
  {
    name: 'Cloyster',
    number: '#131',
    image: 'img/131.png',
    type: ['Water', 'Ice'],
    weakness: ['Electric', 'Fighting', 'Grass', 'Rock']
  },
  {
    name: 'Ditto',
    number: '#132',
    image: 'img/132.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Eevee',
    number: '#133',
    image: 'img/133.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Vaporeon',
    number: '#134',
    image: 'img/134.png',
    type: ['Water'],
    weakness: ['Electric', 'Grass']
  },
  {
    name: 'Jolteon',
    number: '#135',
    image: 'img/135.png',
    type: ['Electric'],
    weakness: ['Ground']
  },
  {
    name: 'Flareon',
    number: '#136',
    image: 'img/136.png',
    type: ['Fire'],
    weakness: ['Ground', 'Rock', 'Water']
  },
  {
    name: 'Porygon',
    number: '#137',
    image: 'img/137.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Omanyte',
    number: '#138',
    image: 'img/138.png',
    type: ['Rock', 'Water'],
    weakness: ['Grass', 'Electric', 'Fighting', 'Ground']
  },
  {
    name: 'Omastar',
    number: '#139',
    image: 'img/139.png',
    type: ['Rock', 'Water'],
    weakness: ['Grass', 'Electric', 'Fighting', 'Ground']
  },
  {
    name: 'Kabuto',
    number: '#140',
    image: 'img/140.png',
    type: ['Rock', 'Water'],
    weakness: ['Grass', 'Electric', 'Fighting', 'Ground']
  },
  {
    name: 'Kabutops',
    number: '#141',
    image: 'img/141.png',
    type: ['Rock', 'Water'],
    weakness: ['Grass', 'Electric', 'Fighting', 'Ground']
  },
  {
    name: 'Aerodactyl',
    number: '#142',
    image: 'img/142.png',
    type: ['Rock', 'Flying'],
    weakness: ['Electric', 'Ice', 'Rock', 'Steel', 'Water']
  },
  {
    name: 'Snorlax',
    number: '#143',
    image: 'img/143.png',
    type: ['Normal'],
    weakness: ['Fighting']
  },
  {
    name: 'Articuno',
    number: '#144',
    image: 'img/144.png',
    type: ['Ice', 'Flying'],
    weakness: ['Grass', 'Electric', 'Fire', 'Steel']
  },
  {
    name: 'Zapdos',
    number: '#145',
    image: 'img/145.png',
    type: ['Electric', 'Flying'],
    weakness: ['Ice', 'Rock']
  },
  {
    name: 'Moltres',
    number: '#146',
    image: 'img/146.png',
    type: ['Fire', 'Flying'],
    weakness: ['Rock', 'Electric', 'Water']
  },
  {
    name: 'Dratini',
    number: '#147',
    image: 'img/147.png',
    type: ['Dragon'],
    weakness: ['Dragon', 'Ice', 'Fairy']
  },
  {
    name: 'Dragonair',
    number: '#148',
    image: 'img/148.png',
    type: ['Dragon'],
    weakness: ['Dragon', 'Ice', 'Fairy']
  },
  {
    name: 'Dragonite',
    number: '#149',
    image: 'img/149.png',
    type: ['Dragon', 'Flying'],
    weakness: ['Ice', 'Dragon', 'Rock', 'Fairy']
  },
  {
    name: 'Mewtwo',
    number: '#150',
    image: 'img/150.png',
    type: ['Psychic'],
    weakness: ['Bug', 'Dark', 'Ghost']
  }
];