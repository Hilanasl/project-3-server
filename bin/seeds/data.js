const trips = [
  {
    title: "Cultural weekend",
    location: "Paris, France",
    categories: ["romantic", "culture"],
    description:
      "Fun weekend for two people exploring museums and tourist spots",
    image: [
      "https://www.sortiraparis.com/images/80/83517/615140-visuel-paris-louvre.jpg",
      "https://www.sncf-connect.com/assets/styles/scale_max_width_961/public/media/2021-07/musee-picasso-paris-pns-susanne-kremer.jpg?itok=UOgJ2DPd",
      "http://pnt.immo/wp-content/uploads/2015/12/champs_elysees.jpg",
      "https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_230/le-louvre-pyramide-cour-napol%C3%A9on-nuit-%7C-630x405-%7C-%C2%A9-thinkstock/37520-1-fre-FR/Le-Louvre-pyramide-cour-Napol%C3%A9on-nuit-%7C-630x405-%7C-%C2%A9-Thinkstock.jpg",
      "https://www.parisselectbook.com/wp-content/uploads/2016/07/Fe%CC%82te-des-Tuileries-Grande-roue-UNE.jpg",
      "https://resize-lejdd.lanmedia.fr/r/620,310,forcex,center-middle/img/var/europe1/storage/images/lejdd/jdd-paris/festivals-rooftops-escape-game-16-idees-de-sortie-dimanche-a-paris-pour-prolonger-lete-4063782/57557063-1-fre-FR/Festivals-rooftops-escape-game-16-idees-de-sortie-dimanche-a-Paris-pour-prolonger-l-ete.jpg",
    ],
    days: [
      {
        number: 1,
        activities: [
          {
            title: "Tour Eiffel visit",
            address: "Tour Eiffel, Champ de Mars, Paris, 75016",
            description: "Very nice tower but lots of tourists",
          },
          {
            title: "Morning museum visit",
            address: "Musee Picasso, Marais, 75003",
            description: "Very nice museum for a morning jaunt",
          },
        ],
      },
      {
        number: 2,
        activities: [
          {
            title: "Champs Elysees",
            address: "Champs Elysees, Paris, 75001",
            description:
              "Too many big expensive shops, crowds and not enough trees",
          },
          {
            title: "Museum Louvre trip",
            address: "Musee Louvre, central Paris, 75002",
            description: "Super cool, saw the Mona Lisa",
          },
        ],
      },
    ],
  },
  {
    title: "Cultural weekend",
    location: "Paris, France",
    categories: ["romantic", "culture"],
    description:
      "Fun weekend for two people exploring museums and tourist spots",
    image: [
      "https://www.thetrainline.com/cms/media/1360/france-eiffel-tower-paris.jpg?mode=crop&width=1080&height=1080&quality=70",
      "https://www.museopicassomalaga.org/sites/default/files/styles/slider_home/public/slider-home/dialogos_1_679.jpg",
      "https://www.sortiraparis.com/images/80/83517/615140-visuel-paris-louvre.jpg",
      "https://www.metalocus.es/sites/default/files/styles/mopis_news_carousel_item_desktop/public/metalocus_christo_arco-del-triunfo_paris_04.jpg?itok=oentB9AW",
    ],
    days: [
      {
        number: 1,
        activities: [
          {
            title: "Tour Eiffel visit",
            address: "Tour Eiffel, Champ de Mars, Paris, 75016",
            description: "Very nice tower but lots of tourists",
          },
          {
            title: "Morning museum visit",
            address: "Musee Picasso, Marais, 75003",
            description: "Very nice museum for a morning jaunt",
          },
        ],
      },
      {
        number: 2,
        activities: [
          {
            title: "Champs Elysees",
            address: "Champs Elysees, Paris, 75001",
            description:
              "Too many big expensive shops, crowds and not enough trees",
          },
          {
            title: "Museum Louvre trip",
            address: "Musee Louvre, central Paris, 75002",
            description: "Super cool, saw the Mona Lisa",
          },
        ],
      },
    ],
  },
  {
    title: "Paris food trip",
    location: "Paris, France",
    categories: ["gastronomic", "culture"],
    description: "Long weekend of eating and not much else",
    image: [
      "https://lemenu.co/images/2573088ab447224380a398df41a7a637.jpg",
      "https://media.timeout.com/images/105504173/image.jpg",
      "https://d2mxp4084tp9n1.cloudfront.net/media/large/699PA2fwLm6IlWFR",
      "https://www.yonder.fr/sites/default/files/lestops/04-miznon-canal-quai-de-valmy-paris.jpg",
    ],
    days: [
      {
        number: 1,
        activities: [
          {
            title: "Clamato for dinner",
            address: "Clamato, 80 Rue de Charonne, 75011 Paris",
            description: "Delicious seafood, be prepared to spend €€€.",
          },
        ],
      },
      {
        number: 2,
        activities: [
          {
            title: "Traditional French breakfast",
            address: "Café Pola, 77 Bd Beaumarchais, 75003 Paris",
            description:
              "Relaxed bistro, fresh juices, good coffee and vibes. Get the breakfast menu!",
          },
          {
            title: "Long lunch in cool setting",
            address:
              "Les enfants du marché, Marché des Enfants Rouges, 39 Rue de Bretagne, 75003 Paris",
            description:
              "This is a must-visit - incredible food in a relaxed atmosphere (in the market). Great selection of wine. Doooo it.",
          },
          {
            title: "Late chilled dinner at Bouillon République",
            address: "Bouillon République, 39 Bd du Temple, 75003 Paris",
            description:
              "Perfect for good food at good prices. Lotsssss of cheap wine.",
          },
        ],
      },
      {
        number: 3,
        activities: [
          {
            title: "Sunday morning croissants",
            address: "Du Pain et Des Idées, 34 Rue Yves Toudic, 75010 Paris",
            description: "Amazing (expensive) croissants",
          },
          {
            title: "The best Israeli pita",
            address: "Miznon Canal, 37 Quai de Valmy, 75010 Paris",
            description:
              "Delicious Israeli pita in a lovely setting. Try the beef then walk up the canal for a perfect Sunday arvo.",
          },
        ],
      },
    ],
  },
  {
    title: "Long weekend in London",
    location: "London, UK",
    categories: ["culture", "shopping", "gastronomic", "party"],
    description: "Good food, parks and boutiques",
    image: [
      "https://i.guim.co.uk/img/media/4d6bd6aaa440c2926f58444b0f5d046f55a03eb7/0_317_4957_2975/master/4957.jpg?width=1200&quality=85&auto=format&fit=max&s=45386671e82b24b8a625a6a9a14e2f37",
      "https://www.thegoodegg.co/wp-content/uploads/2022/01/%C2%A9-Safia-Shakarchi-The-Good-Egg-Stokey-Brunch-Low-Res-14-683x1024.jpg",
      "https://thenudge.com/wp-content/uploads/2020/09/clissold-park-inset.jpg",
      "https://pbs.twimg.com/media/DokKOCAW0AEW3YW.jpg",
      "https://3rl6883b15pn3lu5qr1bbnzv14uh-wpengine.netdna-ssl.com/wp-content/uploads/2014/07/search-and-rescue-shop-exterior.jpg",
    ],
    days: [
      {
        number: 1,
        activities: [
          {
            title: "Bright for dinner",
            address: "1 Westgate St, London E8 3RL, United Kingdom",
            description: "Small plates, natural wine, good vibes.",
          },
        ],
      },
      {
        number: 2,
        activities: [
          {
            title: "Always a great breakfast at The Good Egg",
            address:
              "93 Stoke Newington Church St, London N16 0AS, United Kingdom",
            description: "The best jammy eggs in London",
          },
          {
            title: "Peaceful walk round Clissold Park",
            address: "Green Lanes, London N16 9HJ, United Kingdom",
            description: "The best park in London (in my opinion)",
          },
        ],
      },
      {
        number: 3,
        activities: [
          {
            title: "Lovely brunch at Jolene in Newington Green",
            address:
              "21 Newington Grn, Mayville Estate, London N16 9PU, United Kingdom",
            description:
              "Great food, freshly-baked pastries and a lovely view of the park",
          },
          {
            title: "Cute boutique for home and gifts",
            address:
              "Search & Rescue, 129 Stoke Newington Church St, London N16 0UH, United Kingdom",
            description:
              "Good for pressies and home bits - worth it just for the smell of the candles",
          },
        ],
      },
    ],
  },
  {
    title: "One day in St Ives, Cornwall",
    location: "Cornwall, UK",
    categories: ["culture", "gastronomic", "nature"],
    description: "Beautiful beaches, food and art by the sea",
    image: [
      "https://www.tate.org.uk/sites/default/files/styles/width-600/public/gallery_with_visitors_tate_st_ives.jpg",
      "https://www.carbisbayholidays.co.uk/blog/wp-content/uploads/sites/17/2019/09/Guide-to-best-fish-and-chips-in-cornwall-1-1024x678.jpg",
      "https://www.stives-cornwall.co.uk/wp/wp-content/uploads/Alex_May_Photography_St_Ives-14-768x488.jpg",
      "https://www.meorstudio.co.uk/wp-content/uploads/2019/11/porthminster-beach-lizzie-churchill-photo-shoot.jpg",
    ],
    days: [
      {
        number: 1,
        activities: [
          {
            title: "Tate St. Ives",
            address: "Porthmeor Beach, Saint Ives TR26 1TG, United Kingdom",
            description:
              "Start your day with some beautiful art in a breathtaking setting",
          },
          {
            title: "Traditional chippy lunch",
            address:
              "St Ives Fish And Chips, 13 Kings Hedges, Saint Ives PE27 3XS, United Kingdom",
            description: "What more could ya want",
          },
          {
            title: "Afternoon at Porthmeor Beach",
            address: "Porthmeor Beach, St Ives, Cornwall, TR26 1JZ, UK",
            description: "Blue skies and blue sea. Watch out for seagulls.",
          },
          {
            title: "Relaxed dinner at Porthminster Beach Cafe",
            address:
              "Porthminster Beach, Carbis Bay, Saint Ives TR26 2EB, United Kingdom",
            description: "Perfect way to end the day",
          },
        ],
      },
    ],
  },
  {
    title: "Good food and culture",
    location: "Lima, Peru",
    categories: ["gastronomic", "culture"],
    description: "Enjoy one of the best gastronomies in the world",
    image: [
      "https://www.coar-repositories.org/files/Lima.png",
      "https://www.peruhop.com/wp-content/uploads/Pucllana-Temple2.jpg",
      "https://c9f9s3b6.stackpathcdn.com/wp-content/uploads/2020/06/Shopping-Larcomar-Lima-Noite.jpg",
      "https://bestofperutravel.com/wp-content/uploads/2015/09/Astrid-y-Gaston-Restaurant-Lima-Lamb.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/dd/11.jpg",
    ],
    days: [
      {
        number: 1,
        activities: [
          {
            title: "Huaca Pucllana",
            address: "s/n, Ca. Gral. Borgoño cuadra 8, Miraflores 15074, Peru",
            description:
              "Wonderful to see pre-Inca ruins in the middle of the city",
          },
          {
            title: "Great regional food at El Mercado restaurant",
            address: "Hipólito Unanue avenue, 203, Miraflores",
            description: "Try the seafood Tacu Tacu",
          },
        ],
      },
      {
        number: 2,
        activities: [
          {
            title: "Looking at the Pacific at Parque del Amor",
            address: "Miraflores neighborhood",
            description: "One of the best spots to see the sunset in the city",
          },
          {
            title: "Shopping and eating at Larcomar",
            address: "Miraflores",
            description: "Try the Tanta restaurant, simply amazing!",
          },
        ],
      },
      {
        number: 3,
        activities: [
          {
            title: "Historical Center",
            address: "Lima 15001",
            description:
              "Be sure to visit Pasaje Santa Rosa, a little street with more sophisticated restaurants",
          },
          {
            title: "Astrid y Gastón",
            address: "290 Paz Soldan avenue, San Isidro 15073",
            description:
              "One of the best 50 restaurants of the world! Need to reserve in advance.",
          },
        ],
      },
    ],
  },
  {
    title: "Having fun in Rio",
    location: "Rio de Janeiro, Brazil",
    categories: ["party", "nature"],
    description: "Just had the best time ever!",
    image: [
      "https://st2.depositphotos.com/4909875/9280/i/600/depositphotos_92807662-stock-photo-rio-de-janeiro-skyline.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/bf/6f/fa/museu-do-amanha.jpg?w=1200&h=-1&s=1",
      "https://www.comandantenobre.com.br/wp-content/uploads/2020/04/arcos-da-lapa.jpg",
      "https://uploads.metropoles.com/wp-content/uploads/2020/02/11195516/Maracan%C3%A3-Fla-Flu-600x400.jpg",
      "https://curtarj.com.br/wp-content/uploads/curtarj-jardim-botanico-rio-de-janeiro.jpg",
    ],
    days: [
      {
        number: 1,
        activities: [
          {
            title: "Christ Statue",
            address: "s/n, Ca. Gral. Borgoño cuadra 8, Miraflores 15074, Peru",
            description:
              "Tip: if you are going by car or taxi, stop at Mirante Santa Marta and enjoy the view.",
          },
          {
            title: "Copacabana",
            address: "Hipólito Unanue avenue, 203, Miraflores",
            description: "Really beautiful, but look out for thieves",
          },
        ],
      },
      {
        number: 2,
        activities: [
          {
            title: "Amazed by Pão de Açúcar",
            address: "520 Pasteur avenue, Botafogo",
            description: "Amazing view of the city",
          },
          {
            title: "Museum of Tomorrow",
            address: "Mauá Place, Downtown",
            description: "Super interesting futuristic scenery",
          },
          {
            title: "Lots of fun at Archs of Lapa",
            address: "Lapa, 20031-040",
            description: "Super eclectic, but I loved the samba live",
          },
        ],
      },
      {
        number: 3,
        activities: [
          {
            title: "Maracanã",
            address: "Pres. Castelo Branco avenue, Door 3, Maracanã",
            description: "Not only for soccer experts!",
          },
          {
            title: "Botanical Garden",
            address: "1008 Jardim Botânico ",
            description: "So beautiful! Could spend the whole day there!",
          },
        ],
      },
    ],
  },
  {
    title: "Lot of sun and sea",
    location: "Fortaleza, Brazil",
    categories: ["nature", "family"],
    description: "A place where people know how to welcome you",
    image: [
      "https://media.istockphoto.com/photos/mucuripe-beach-at-sunset-fortaleza-ceara-state-brazil-picture-id970968140?k=20&m=970968140&s=612x612&w=0&h=KXSFDsRXh-V6QEMi8Ln2zXajXjTrG_3lDkyUXZ2bCCI=",
      "https://i.pinimg.com/originals/e7/59/ee/e759ee0ad85ef93649a71498aeef2dfa.png",
      "https://portalsabores.com.br/wp-content/uploads/2017/10/www.portalsabores.com.br-10-lugares-para-comer-caranguejo-em-fortaleza-caranguejo-da-barraca-terra-do-sol.jpg",
      "https://www.transportal.com.br/noticias/wp-content/uploads/2019/10/Barracas-na-Praia-do-Futuro.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/81/a3.jpg",
    ],
    days: [
      {
        number: 1,
        activities: [
          {
            title: "Long Boardwalk by the sea",
            address: "Beira-mar Avenue",
            description:
              "Try the Fish Market at Mucuripe region, they have all the best seafood",
          },
          {
            title:
              "Culture and party at Centro Dragão do Mar de Arte e Cultura",
            address: "81 Dragão do Mar Street, Iracema, Fortaleza - CE",
            description:
              "If you go by day, there's culture, by night, there's party",
          },
        ],
      },
      {
        number: 2,
        activities: [
          {
            title: "Future beach",
            address: "Praia do Futuro, Fortaleza - CE",
            description: "They have great structure for tourists",
          },
          {
            title: "Regional shopping  at Central Market",
            address: "199 Alberto Nepomuceno Avenue, Downtown",
            description:
              "The right place to buy gifts and local craft items at a super attractive price",
          },
        ],
      },
      {
        number: 3,
        activities: [
          {
            title: "A day trip at Beach Park",
            address:
              "2734 Porto das Dunas Street, Porto das Dunas, Aquiraz - CE, 61700-000",
            description: `If you're brave enough, try the 41m waterslide!`,
          },
        ],
      },
    ],
  },
  {
    title: "Romantic spring",
    location: "Paris",
    categories: ["romantic", "comfortable"],
    description: "Charming walks with delicious breaks",
    image: [
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Le_sacre_coeur.jpg",
      "https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/la-maison-rose-%7C-630x405-%7C-%C2%A9-studio-ttg/19371469-1-fre-FR/La-Maison-Rose-%7C-630x405-%7C-%C2%A9-Studio-TTG.jpg",
      "https://1.bp.blogspot.com/-SedVevuz3J4/XsA0UBBkVMI/AAAAAAABHFs/lQgQP1nRGrAbpgQzFE54aKgJrFOy9PsnACLcBGAsYHQ/s1600/decouvrir-montmartre-0-paris-18.JPG",
      "https://www.unjourdeplusaparis.com/wp-content/uploads/2016/11/jardin-des-tuileries-balade.jpg",
      "https://www.sortiraparis.com/images/80/83517/480695-visuel-centre-pompidou.jpg",
      "https://media.timeout.com/images/100023523/750/562/image.jpg",
      "https://a.mktgcdn.com/p/_4RRzYOfEITLhqetoAWRIppUP5o76Zlzj_pQlddQ2Ts/1080x1080.jpg",
    ],

    days: [
      {
        number: 1,
        activities: [
          {
            title: "Montmartre",
            address: "Montmartre",
            description:
              "The view of Paris, the little charming streets, the endless stairs : just Fantastic ",
          },
          {
            title: "Sacré Coeur",
            address: "35 Rue du Chevalier de la Barre, 75018 Paris",
            description:
              "Perfect to find some peace and very fresh for Summer days",
          },
        ],
      },
      {
        number: 2,
        activities: [
          {
            title: "Angelina",
            address: "226 Rue de Rivoli, 75001 Paris",
            description: "Best hot chocolate ever ! Such an elegant place",
          },
          {
            title: "Parc des Tuileries",
            address: "Place de la Concorde, 75001 Paris",
            description:
              "Being on a chair in front of one of huge fountain or have a walk under trees is lovely",
          },
        ],
      },
      {
        number: 3,
        activities: [
          {
            title: "Centre Pompidou",
            address: "Place Georges-Pompidou, 75004 Paris",
            description:
              "Permenant collections are cool, but do the exhibitons",
          },
          {
            title: "Yummy fallafel",
            address: "34 Rue des Rosiers, 75004 Paris",
            description: "Generous sandwich but to mue queue",
          },
        ],
      },
    ],
  },
  {
    title: "Shopping with friends",
    location: "Paris",
    categories: ["luxury", "shopping", "culture"],
    description: "Spend your monney and open your eyes for magnificience",
    image: [
      "https://vivreparis.fr/wp-content/uploads/2021/12/palais-garneir.jpg",
      "https://image.arrivalguides.com/x/14/bedc647ba767ce8cd31bd93f717d148e.jpg",
      "https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2021/11/17043816/COUV-ARTICLES-1920x1080-22-1-1024x576.jpg",
      "https://www.sortiraparis.com/images/80/86929/464410-creatures-le-restaurant-ephemere-sur-la-terrasse-des-galeries-lafayette-les-photos.jpg",
      "https://www.parisselectbook.com/wp-content/uploads/2018/07/thumbnail_Haussmann-toit-sous-les-fraises-c-Myr-Muratet-2.jpg",
      "https://laduree-laduree-fr-storage.omn.proximis.com/Imagestorage/images/0/0/61cc52580be6f_Store_loc_CE_369_900x710.png",
    ],
    days: [
      {
        number: 1,
        activities: [
          {
            title: "Galeries Lafayette",
            address: "Boulevard Haussman",
            description: "All you need to be chic and smell good",
          },
          {
            title: "Rooftop",
            address: "40 Bd Haussmann, 75009 Paris",
            description: "Perfect place for selfies",
          },
          {
            title: "Opéra Garnier",
            address: `Place de l'Opéra, 75009 Paris`,
            description:
              "Visit it ! Closer than Chateau de Versailles and gorgeous. You could see great balet",
          },
        ],
      },
    ],
  },
  {
    title: "This is Paris baby",
    location: "Paris",
    categories: ["romantic", "nature", "comfortable", "budget", "culture"],
    description: "Pique-nique at Paris  ",
    image: [
      "https://static1.s123-cdn-static-a.com/uploads/3086630/2000_crop_5e4d2b9337da2_5e4bcf9d56a56.jpg",
      "https://www.sortiraparis.com/images/80/83517/572222-visuel-paris-notre-dame.jpg",
      "https://www.chalifert.fr/wp-content/uploads/2019/04/Cathedrale-Notre-Dame-nuit.jpg",
      "https://www.transilien.com/sites/transilien/files/styles/manual_crop/public/2021-12/Mus%C3%A9e%20d%27Orsay.jpg?h=f87dcf60&itok=38D2pZhA",
      "https://www.parisinfo.com/var/otcp/sites/images/media/1.-photos/52.-paris-en-image/jardin-du-luxembourg-850x540-c-otcp-david-lefranc/12223-1-fre-FR/Jardin-du-Luxembourg-850x540-C-OTCP-David-Lefranc.jpg",
      "https://www.sortiraparis.com/images/80/1467/648826-l-aquarium-tropical-de-la-porte-doree-se-renouvelle.jpg",
    ],
    days: [
      {
        number: 1,
        activities: [
          {
            title: "Sainte Chapelle",
            address: "10 Boulevard du Palais, 75001 Paris",
            description:
              "Tresor of Paris, colors everywhere, your most beautiful pictures ",
          },
          {
            title: "Notre Dame de Paris",
            address: "Cathédrale Notre Dame de Paris",
            description:
              "Huge, too much poeple, but all the status, you have the feeling the could speak to you",
          },
        ],
      },
      {
        number: 2,
        activities: [
          {
            title: "Jardin du Luxembourg",
            address: "Jardin du Luxembourg",
            description: "Have a walk, run, or just enjoy, this is perfect",
          },
          {
            title: "Musée Orsay",
            address: "1 Rue de la Légion d Honneur, 75007 Paris",
            description:
              "I love their painting collections, and you should the big clock",
          },
        ],
      },
      {
        number: 3,
        activities: [
          {
            title: "Bois de Vincennes",
            address: "Bois de vincennes",
            description:
              "Permenant collections are cool, but do the exhibitons",
          },
          {
            title: "Tropical aquarium",
            address: "293 Av. Daumesnil, 75012 Paris",
            description: "Aligators everywhere and colorful fishes",
          },
        ],
      },
    ],
  },
];

module.exports = trips;
