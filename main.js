const sections = [
  { name: "Spring", className: "spring-bg" },
  { name: "Summer", className: "summer-bg" },
  { name: "Fall", className: "fall-bg" },
  { name: "Winter", className: "winter-bg" },
  { name: "Any", className: "any-bg" },
];

const items = [
  {
    id: "wild-horseradish",
    season: "Spring",
    title: "Wild Horseradish",
    room: "Crafts Room",
    bundle: "Spring Foraging Bundle",
    how: "Forage during Spring.",
    deadline: "Spring only. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "daffodil",
    season: "Spring",
    title: "Daffodil",
    room: "Crafts Room",
    bundle: "Spring Foraging Bundle",
    how: "Forage during Spring or buy at the Flower Dance.",
    deadline: "Spring only. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "leek",
    season: "Spring",
    title: "Leek",
    room: "Crafts Room",
    bundle: "Spring Foraging Bundle",
    how: "Forage during Spring.",
    deadline: "Spring only. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "dandelion",
    season: "Spring",
    title: "Dandelion",
    room: "Crafts Room",
    bundle: "Spring Foraging Bundle",
    how: "Forage during Spring or buy at the Flower Dance.",
    deadline: "Spring only. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "parsnip",
    season: "Spring",
    title: "Parsnip",
    room: "Pantry",
    bundle: "Spring Crops Bundle",
    how: "Grow from Parsnip Seeds in Spring.",
    deadline:
      "Plant by Spring 24. Parsnips take 4 days to grow without Speed-Gro.",
    note: "Required item.",
  },
  {
    id: "green-bean",
    season: "Spring",
    title: "Green Bean",
    room: "Pantry",
    bundle: "Spring Crops Bundle",
    how: "Grow from Bean Starter in Spring.",
    deadline:
      "Plant by Spring 18. Green Beans take 10 days for the first harvest, then regrow.",
    note: "Required item. Trellis crop, so do not block your walking paths.",
  },
  {
    id: "cauliflower",
    season: "Spring",
    title: "Cauliflower",
    room: "Pantry",
    bundle: "Spring Crops Bundle",
    how: "Grow from Cauliflower Seeds in Spring.",
    deadline: "Plant by Spring 16. Cauliflower takes 12 days to grow.",
    note: "Required item.",
  },
  {
    id: "potato",
    season: "Spring",
    title: "Potato",
    room: "Pantry",
    bundle: "Spring Crops Bundle",
    how: "Grow from Potato Seeds in Spring.",
    deadline: "Plant by Spring 22. Potato takes 6 days to grow.",
    note: "Required item.",
  },
  {
    id: "gold-parsnip",
    season: "Spring",
    title: "5x Gold Parsnip",
    room: "Pantry",
    bundle: "Quality Crops Bundle",
    how: "Grow Parsnips in Spring and donate 5 gold-quality Parsnips.",
    deadline:
      "Plant by Spring 24 for one harvest, but plant earlier and use fertilizer because you need 5 gold-quality Parsnips.",
    note: "Choice bundle: choose 3 of the 4 gold crop stacks.",
  },
  {
    id: "apricot",
    season: "Spring",
    title: "Apricot",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Harvest from Apricot Tree in Spring or get from fruit bat cave/Traveling Cart.",
    deadline:
      "For a tree source, plant Apricot Sapling by Winter 28 for one Spring fruit. Earlier is safer.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "cherry",
    season: "Spring",
    title: "Cherry",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Harvest from Cherry Tree in Spring or get from fruit bat cave/Traveling Cart.",
    deadline:
      "For a tree source, plant Cherry Sapling by Winter 28 for one Spring fruit. Earlier is safer.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "sunfish",
    season: "Spring",
    title: "Sunfish",
    room: "Fish Tank",
    bundle: "River Fish Bundle",
    how: "River, 6 AM to 7 PM, Spring/Summer, sunny weather.",
    deadline: "Catch during Spring or Summer.",
    note: "Required item.",
  },
  {
    id: "catfish",
    season: "Spring",
    title: "Catfish",
    room: "Fish Tank",
    bundle: "River Fish Bundle",
    how: "River or Secret Woods, 6 AM to midnight, Spring/Fall, rainy weather.",
    deadline: "Catch during rainy Spring or rainy Fall.",
    note: "Required item. Easy to miss because it needs rain.",
  },
  {
    id: "shad",
    season: "Spring",
    title: "Shad",
    room: "Fish Tank",
    bundle: "River Fish Bundle",
    how: "River, 9 AM to 2 AM, Spring/Summer/Fall, rainy weather.",
    deadline: "Catch during rainy Spring, Summer, or Fall.",
    note: "Required item.",
  },
  {
    id: "eel",
    season: "Spring",
    title: "Eel",
    room: "Fish Tank",
    bundle: "Night Fishing Bundle",
    how: "Ocean, 4 PM to 2 AM, Spring/Fall, rainy weather.",
    deadline: "Catch during rainy Spring or rainy Fall after 4 PM.",
    note: "Required item.",
  },
  {
    id: "sardine",
    season: "Spring",
    title: "Sardine",
    room: "Fish Tank",
    bundle: "Ocean Fish Bundle",
    how: "Ocean, 6 AM to 7 PM, Spring/Fall/Winter.",
    deadline: "Catch during Spring, Fall, or Winter.",
    note: "Required item.",
  },

  {
    id: "grape",
    season: "Summer",
    title: "Grape",
    room: "Crafts Room",
    bundle: "Summer Foraging Bundle",
    how: "Forage in Summer or grow as a Fall crop.",
    deadline:
      "No deadline if foraging in Summer. If growing in Fall, plant by Fall 18 because Grape Starter takes 10 days.",
    note: "Required item.",
  },
  {
    id: "spice-berry",
    season: "Summer",
    title: "Spice Berry",
    room: "Crafts Room",
    bundle: "Summer Foraging Bundle",
    how: "Forage in Summer or get from fruit bat cave.",
    deadline: "Summer only if foraging. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "sweet-pea",
    season: "Summer",
    title: "Sweet Pea",
    room: "Crafts Room",
    bundle: "Summer Foraging Bundle",
    how: "Forage in Summer.",
    deadline: "Summer only. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "tomato",
    season: "Summer",
    title: "Tomato",
    room: "Pantry",
    bundle: "Summer Crops Bundle",
    how: "Grow from Tomato Seeds in Summer.",
    deadline:
      "Plant by Summer 17. Tomato takes 11 days for the first harvest, then regrows.",
    note: "Required item.",
  },
  {
    id: "hot-pepper",
    season: "Summer",
    title: "Hot Pepper",
    room: "Pantry",
    bundle: "Summer Crops Bundle",
    how: "Grow from Pepper Seeds in Summer.",
    deadline:
      "Plant by Summer 23. Hot Pepper takes 5 days for the first harvest, then regrows.",
    note: "Required item.",
  },
  {
    id: "blueberry",
    season: "Summer",
    title: "Blueberry",
    room: "Pantry",
    bundle: "Summer Crops Bundle",
    how: "Grow from Blueberry Seeds in Summer.",
    deadline:
      "Plant by Summer 15. Blueberry takes 13 days for the first harvest, then regrows.",
    note: "Required item.",
  },
  {
    id: "melon",
    season: "Summer",
    title: "Melon",
    room: "Pantry",
    bundle: "Summer Crops Bundle",
    how: "Grow from Melon Seeds in Summer.",
    deadline: "Plant by Summer 16. Melon takes 12 days to grow.",
    note: "Required item.",
  },
  {
    id: "gold-melon",
    season: "Summer",
    title: "5x Gold Melon",
    room: "Pantry",
    bundle: "Quality Crops Bundle",
    how: "Grow Melons in Summer and donate 5 gold-quality Melons.",
    deadline:
      "Plant by Summer 16 for one harvest, but plant earlier and use fertilizer because you need 5 gold-quality Melons.",
    note: "Choice bundle: choose 3 of the 4 gold crop stacks.",
  },
  {
    id: "corn",
    season: "Summer",
    title: "Corn",
    room: "Pantry",
    bundle: "Fall Crops Bundle",
    how: "Grow from Corn Seeds in Summer or Fall.",
    deadline:
      "Plant by Fall 14 for the last possible Fall harvest. Plant by Summer 14/15 if you want a Summer harvest and more regrowth.",
    note: "Required item for Fall Crops Bundle.",
  },
  {
    id: "gold-corn",
    season: "Summer",
    title: "5x Gold Corn",
    room: "Pantry",
    bundle: "Quality Crops Bundle",
    how: "Grow Corn in Summer/Fall and donate 5 gold-quality Corn.",
    deadline:
      "Plant early in Summer if possible. Last possible single harvest is Fall 14, but that is risky for getting 5 gold-quality Corn.",
    note: "Choice bundle: choose 3 of the 4 gold crop stacks.",
  },
  {
    id: "orange",
    season: "Summer",
    title: "Orange",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Harvest from Orange Tree in Summer or get from fruit bat cave/Traveling Cart.",
    deadline:
      "For a tree source, plant Orange Sapling by Spring 28 for one Summer fruit. Earlier is safer.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "peach",
    season: "Summer",
    title: "Peach",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Harvest from Peach Tree in Summer or get from fruit bat cave/Traveling Cart.",
    deadline:
      "For a tree source, plant Peach Sapling by Spring 28 for one Summer fruit. Earlier is safer.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "tuna",
    season: "Summer",
    title: "Tuna",
    room: "Fish Tank",
    bundle: "Ocean Fish Bundle",
    how: "Ocean, 6 AM to 7 PM, Summer/Winter.",
    deadline: "Catch during Summer or Winter.",
    note: "Required item.",
  },
  {
    id: "red-snapper",
    season: "Summer",
    title: "Red Snapper",
    room: "Fish Tank",
    bundle: "Ocean Fish Bundle",
    how: "Ocean, 6 AM to 7 PM, Summer/Fall, rainy weather.",
    deadline: "Catch during rainy Summer or rainy Fall.",
    note: "Required item.",
  },
  {
    id: "tilapia",
    season: "Summer",
    title: "Tilapia",
    room: "Fish Tank",
    bundle: "Ocean Fish Bundle",
    how: "Ocean, 6 AM to 2 PM, Summer/Fall.",
    deadline: "Catch during Summer or Fall before 2 PM.",
    note: "Required item.",
  },
  {
    id: "sturgeon",
    season: "Summer",
    title: "Sturgeon",
    room: "Fish Tank",
    bundle: "Lake Fish Bundle",
    how: "Mountain Lake, 6 AM to 7 PM, Summer/Winter.",
    deadline: "Catch during Summer or Winter.",
    note: "Required item.",
  },
  {
    id: "pufferfish",
    season: "Summer",
    title: "Pufferfish",
    room: "Fish Tank",
    bundle: "Specialty Fish Bundle",
    how: "Ocean, 12 PM to 4 PM, Summer, sunny weather.",
    deadline: "Catch on sunny Summer days between noon and 4 PM.",
    note: "Required item. Tight time window.",
  },
  {
    id: "fiddlehead-fern",
    season: "Summer",
    title: "Fiddlehead Fern",
    room: "Bulletin Board",
    bundle: "Chef's Bundle",
    how: "Secret Woods in Summer, Prehistoric Floors, or Green Rain Trees.",
    deadline: "Summer is the normal early source. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "poppy",
    season: "Summer",
    title: "Poppy",
    room: "Bulletin Board",
    bundle: "Chef's Bundle",
    how: "Grow from Poppy Seeds in Summer.",
    deadline: "Plant by Summer 21. Poppy takes 7 days to grow.",
    note: "Required item.",
  },
  {
    id: "sunflower",
    season: "Summer",
    title: "Sunflower",
    room: "Bulletin Board",
    bundle: "Dye Bundle",
    how: "Grow in Summer or Fall.",
    deadline: "Plant by Summer 20 or Fall 20. Sunflower takes 8 days to grow.",
    note: "Required item.",
  },
  {
    id: "red-cabbage",
    season: "Summer",
    title: "Red Cabbage",
    room: "Bulletin Board",
    bundle: "Dye Bundle",
    how: "Grow in Summer. Seeds are normally available at Pierre's in Year 2+, or through Traveling Cart/monster drops.",
    deadline: "Plant by Summer 19. Red Cabbage takes 9 days to grow.",
    note: "Required item. This is the big Year 1 problem item unless your save/cart helps you.",
  },
  {
    id: "wheat",
    season: "Summer",
    title: "10x Wheat",
    room: "Bulletin Board",
    bundle: "Fodder Bundle",
    how: "Grow from Wheat Seeds in Summer or Fall.",
    deadline: "Plant by Summer 24 or Fall 24. Wheat takes 4 days to grow.",
    note: "Required item.",
  },

  {
    id: "common-mushroom",
    season: "Fall",
    title: "Common Mushroom",
    room: "Crafts Room",
    bundle: "Fall Foraging Bundle",
    how: "Forage in Fall, Secret Woods, mushroom cave, or Mushroom Tree.",
    deadline: "Fall is the normal forage season. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "wild-plum",
    season: "Fall",
    title: "Wild Plum",
    room: "Crafts Room",
    bundle: "Fall Foraging Bundle",
    how: "Forage in Fall or get from fruit bat cave.",
    deadline: "Fall only if foraging. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "hazelnut",
    season: "Fall",
    title: "Hazelnut",
    room: "Crafts Room",
    bundle: "Fall Foraging Bundle",
    how: "Forage in Fall.",
    deadline: "Fall only. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "blackberry",
    season: "Fall",
    title: "Blackberry",
    room: "Crafts Room",
    bundle: "Fall Foraging Bundle",
    how: "Forage in Fall or get from fruit bat cave.",
    deadline: "Fall only if foraging. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "eggplant",
    season: "Fall",
    title: "Eggplant",
    room: "Pantry",
    bundle: "Fall Crops Bundle",
    how: "Grow from Eggplant Seeds in Fall.",
    deadline:
      "Plant by Fall 23. Eggplant takes 5 days for the first harvest, then regrows.",
    note: "Required item.",
  },
  {
    id: "pumpkin",
    season: "Fall",
    title: "Pumpkin",
    room: "Pantry",
    bundle: "Fall Crops Bundle",
    how: "Grow from Pumpkin Seeds in Fall.",
    deadline: "Plant by Fall 15. Pumpkin takes 13 days to grow.",
    note: "Required item.",
  },
  {
    id: "yam",
    season: "Fall",
    title: "Yam",
    room: "Pantry",
    bundle: "Fall Crops Bundle",
    how: "Grow from Yam Seeds in Fall or get rarely from Duggies.",
    deadline: "Plant by Fall 18. Yam takes 10 days to grow.",
    note: "Required item.",
  },
  {
    id: "gold-pumpkin",
    season: "Fall",
    title: "5x Gold Pumpkin",
    room: "Pantry",
    bundle: "Quality Crops Bundle",
    how: "Grow Pumpkins in Fall and donate 5 gold-quality Pumpkins.",
    deadline:
      "Plant by Fall 15 for one harvest, but plant earlier and use fertilizer because you need 5 gold-quality Pumpkins.",
    note: "Choice bundle: choose 3 of the 4 gold crop stacks.",
  },
  {
    id: "apple-artisan",
    season: "Fall",
    title: "Apple",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Harvest from Apple Tree in Fall or get from fruit bat cave/Traveling Cart.",
    deadline:
      "For a tree source, plant Apple Sapling by Summer 28 for one Fall fruit. Earlier is safer.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "apple-fodder",
    season: "Fall",
    title: "3x Apple",
    room: "Bulletin Board",
    bundle: "Fodder Bundle",
    how: "Harvest from Apple Tree in Fall or get from fruit bat cave/Traveling Cart.",
    deadline:
      "For a tree source, plant Apple Sapling by Summer 26 to get 3 apples by Fall 28. Earlier is safer.",
    note: "Required item. This is separate from the optional Artisan Apple.",
  },
  {
    id: "pomegranate-artisan",
    season: "Fall",
    title: "Pomegranate",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Harvest from Pomegranate Tree in Fall or get from fruit bat cave/Traveling Cart.",
    deadline:
      "For a tree source, plant Pomegranate Sapling by Summer 28 for one Fall fruit. Earlier is safer.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "pomegranate-enchanter",
    season: "Fall",
    title: "Pomegranate",
    room: "Bulletin Board",
    bundle: "Enchanter's Bundle",
    how: "Harvest from Pomegranate Tree in Fall or get from fruit bat cave/Traveling Cart.",
    deadline:
      "For a tree source, plant Pomegranate Sapling by Summer 28 for one Fall fruit. Earlier is safer.",
    note: "Required item. This is separate from the optional Artisan Pomegranate.",
  },
  {
    id: "tiger-trout",
    season: "Fall",
    title: "Tiger Trout",
    room: "Fish Tank",
    bundle: "River Fish Bundle",
    how: "River, 6 AM to 7 PM, Fall/Winter, any weather.",
    deadline: "Catch during Fall or Winter.",
    note: "Required item.",
  },
  {
    id: "walleye",
    season: "Fall",
    title: "Walleye",
    room: "Fish Tank",
    bundle: "Night Fishing Bundle",
    how: "River, Mountain Lake, or Cindersap Forest Pond, 12 PM to 2 AM, Fall, rainy weather.",
    deadline:
      "Catch during rainy Fall from noon to 2 AM. Winter requires a Rain Totem.",
    note: "Required item.",
  },
  {
    id: "red-mushroom-dye",
    season: "Fall",
    title: "Red Mushroom",
    room: "Bulletin Board",
    bundle: "Dye Bundle",
    how: "Mines, Secret Woods in Summer/Fall, mushroom cave, Mushroom Tree, or Forest Farm in Fall.",
    deadline: "Fall/Any depending on source. No planting deadline.",
    note: "Required item. Separate from optional Exotic Foraging Red Mushroom.",
  },
  {
    id: "purple-mushroom-field",
    season: "Fall",
    title: "Purple Mushroom",
    room: "Bulletin Board",
    bundle: "Field Research Bundle",
    how: "Mines, mushroom cave, or Forest Farm in Fall.",
    deadline: "Fall/Any depending on source. No planting deadline.",
    note: "Required item. Separate from optional Exotic Foraging Purple Mushroom.",
  },

  {
    id: "winter-root",
    season: "Winter",
    title: "Winter Root",
    room: "Crafts Room",
    bundle: "Winter Foraging Bundle",
    how: "Till soil or dig Artifact Spots in Winter; can also drop from Blue Slimes on Mines floors 41-79.",
    deadline: "Winter only if foraging/digging. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "crystal-fruit",
    season: "Winter",
    title: "Crystal Fruit",
    room: "Crafts Room",
    bundle: "Winter Foraging Bundle",
    how: "Forage in Winter or get from Dust Sprites on Mines floors 41-79.",
    deadline: "Winter only if foraging. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "snow-yam",
    season: "Winter",
    title: "Snow Yam",
    room: "Crafts Room",
    bundle: "Winter Foraging Bundle",
    how: "Till soil or dig Artifact Spots in Winter.",
    deadline: "Winter only. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "crocus",
    season: "Winter",
    title: "Crocus",
    room: "Crafts Room",
    bundle: "Winter Foraging Bundle",
    how: "Forage in Winter.",
    deadline: "Winter only. No planting deadline.",
    note: "Required item.",
  },
  {
    id: "nautilus-shell",
    season: "Winter",
    title: "Nautilus Shell",
    room: "Bulletin Board",
    bundle: "Field Research Bundle",
    how: "Beach forage in Winter, Beach Farm any season, or random Demetrius gift.",
    deadline: "Winter is the normal beach forage season. No planting deadline.",
    note: "Required item. Not the Nautilus Fossil artifact.",
  },

  {
    id: "largemouth-bass",
    season: "Any",
    title: "Largemouth Bass",
    room: "Fish Tank",
    bundle: "Lake Fish Bundle",
    how: "Mountain Lake, 6 AM to 7 PM, all seasons.",
    deadline: "Any season.",
    note: "Required item.",
  },
  {
    id: "carp",
    season: "Any",
    title: "Carp",
    room: "Fish Tank",
    bundle: "Lake Fish Bundle",
    how: "Mountain Lake in Spring/Summer/Fall, or Secret Woods/Sewer all seasons.",
    deadline: "Any season depending on location.",
    note: "Required item.",
  },
  {
    id: "bullhead",
    season: "Any",
    title: "Bullhead",
    room: "Fish Tank",
    bundle: "Lake Fish Bundle",
    how: "Mountain Lake, any time, all seasons.",
    deadline: "Any season.",
    note: "Required item.",
  },
  {
    id: "bream",
    season: "Any",
    title: "Bream",
    room: "Fish Tank",
    bundle: "Night Fishing Bundle",
    how: "River, 6 PM to 2 AM, all seasons.",
    deadline: "Any season after 6 PM.",
    note: "Required item.",
  },
  {
    id: "ghostfish",
    season: "Any",
    title: "Ghostfish",
    room: "Fish Tank",
    bundle: "Specialty Fish Bundle",
    how: "Mines floors 20 or 60, any time, all seasons. Can also drop from Ghosts.",
    deadline: "Any season.",
    note: "Required item.",
  },
  {
    id: "sandfish",
    season: "Any",
    title: "Sandfish",
    room: "Fish Tank",
    bundle: "Specialty Fish Bundle",
    how: "Desert pond, 6 AM to 8 PM, all seasons.",
    deadline: "Any season after Desert access.",
    note: "Required item. Traveling Cart can save you before the Bus is fixed.",
  },
  {
    id: "woodskip",
    season: "Any",
    title: "Woodskip",
    room: "Fish Tank",
    bundle: "Specialty Fish Bundle",
    how: "Secret Woods or Forest Farm, any time, all seasons.",
    deadline: "Any season after Secret Woods access, or Forest Farm.",
    note: "Required item.",
  },
  {
    id: "wood-1",
    season: "Any",
    title: "99x Wood",
    room: "Crafts Room",
    bundle: "Construction Bundle",
    how: "Chop trees/branches or buy from Robin.",
    deadline: "Any season.",
    note: "Required stack #1.",
  },
  {
    id: "wood-2",
    season: "Any",
    title: "99x Wood",
    room: "Crafts Room",
    bundle: "Construction Bundle",
    how: "Chop trees/branches or buy from Robin.",
    deadline: "Any season.",
    note: "Required stack #2. The bundle has two separate 99 Wood slots.",
  },
  {
    id: "stone",
    season: "Any",
    title: "99x Stone",
    room: "Crafts Room",
    bundle: "Construction Bundle",
    how: "Break stones with a Pickaxe or buy from Robin.",
    deadline: "Any season.",
    note: "Required item.",
  },
  {
    id: "hardwood",
    season: "Any",
    title: "10x Hardwood",
    room: "Crafts Room",
    bundle: "Construction Bundle",
    how: "Chop large stumps/logs with an upgraded axe or chop Mahogany Trees.",
    deadline: "Any season after tool/source access.",
    note: "Required item.",
  },
  {
    id: "coconut",
    season: "Any",
    title: "Coconut",
    room: "Crafts Room",
    bundle: "Exotic Foraging Bundle",
    how: "Desert forage/Oasis/Palm Trees, or other later-game sources.",
    deadline: "Any season after Desert access.",
    note: "Choice bundle: choose 5 of 9 Exotic Foraging items.",
  },
  {
    id: "cactus-fruit",
    season: "Any",
    title: "Cactus Fruit",
    room: "Crafts Room",
    bundle: "Exotic Foraging Bundle",
    how: "Desert forage or Oasis.",
    deadline: "Any season after Desert access.",
    note: "Choice bundle: choose 5 of 9 Exotic Foraging items.",
  },
  {
    id: "cave-carrot",
    season: "Any",
    title: "Cave Carrot",
    room: "Crafts Room",
    bundle: "Exotic Foraging Bundle",
    how: "Mines boxes or tilling soil in the Mines.",
    deadline: "Any season after Mines access.",
    note: "Choice bundle: choose 5 of 9 Exotic Foraging items.",
  },
  {
    id: "red-mushroom-exotic",
    season: "Any",
    title: "Red Mushroom",
    room: "Crafts Room",
    bundle: "Exotic Foraging Bundle",
    how: "Mines, mushroom cave, Secret Woods in Summer/Fall, or Mushroom Tree.",
    deadline: "Any/Fall depending on source.",
    note: "Choice bundle: choose 5 of 9 Exotic Foraging items.",
  },
  {
    id: "purple-mushroom-exotic",
    season: "Any",
    title: "Purple Mushroom",
    room: "Crafts Room",
    bundle: "Exotic Foraging Bundle",
    how: "Mines, mushroom cave, or Forest Farm in Fall.",
    deadline: "Any/Fall depending on source.",
    note: "Choice bundle: choose 5 of 9 Exotic Foraging items.",
  },
  {
    id: "maple-syrup-exotic",
    season: "Any",
    title: "Maple Syrup",
    room: "Crafts Room",
    bundle: "Exotic Foraging Bundle",
    how: "Tap a Maple Tree.",
    deadline: "Any season after you craft a Tapper.",
    note: "Choice bundle: choose 5 of 9 Exotic Foraging items.",
  },
  {
    id: "oak-resin-exotic",
    season: "Any",
    title: "Oak Resin",
    room: "Crafts Room",
    bundle: "Exotic Foraging Bundle",
    how: "Tap an Oak Tree.",
    deadline: "Any season after you craft a Tapper.",
    note: "Choice bundle: choose 5 of 9 Exotic Foraging items.",
  },
  {
    id: "pine-tar",
    season: "Any",
    title: "Pine Tar",
    room: "Crafts Room",
    bundle: "Exotic Foraging Bundle",
    how: "Tap a Pine Tree.",
    deadline: "Any season after you craft a Tapper.",
    note: "Choice bundle: choose 5 of 9 Exotic Foraging items.",
  },
  {
    id: "morel",
    season: "Any",
    title: "Morel",
    room: "Crafts Room",
    bundle: "Exotic Foraging Bundle",
    how: "Secret Woods or Forest Farm in Spring; also mushroom cave.",
    deadline: "Spring if foraging, any season if mushroom cave provides it.",
    note: "Choice bundle: choose 5 of 9 Exotic Foraging items.",
  },
  {
    id: "large-milk",
    season: "Any",
    title: "Large Milk",
    room: "Pantry",
    bundle: "Animal Bundle",
    how: "Cow product with enough friendship/mood.",
    deadline: "Any season after you own cows.",
    note: "Choice bundle: choose 5 of 6 Animal items.",
  },
  {
    id: "large-brown-egg",
    season: "Any",
    title: "Large Brown Egg",
    room: "Pantry",
    bundle: "Animal Bundle",
    how: "Brown Chicken product with enough friendship/mood.",
    deadline: "Any season after you own brown chickens.",
    note: "Choice bundle: choose 5 of 6 Animal items.",
  },
  {
    id: "large-white-egg",
    season: "Any",
    title: "Large White Egg",
    room: "Pantry",
    bundle: "Animal Bundle",
    how: "White Chicken product with enough friendship/mood.",
    deadline: "Any season after you own white chickens.",
    note: "Choice bundle: choose 5 of 6 Animal items.",
  },
  {
    id: "large-goat-milk",
    season: "Any",
    title: "Large Goat Milk",
    room: "Pantry",
    bundle: "Animal Bundle",
    how: "Goat product with enough friendship/mood.",
    deadline: "Any season after you own goats.",
    note: "Choice bundle: choose 5 of 6 Animal items.",
  },
  {
    id: "wool",
    season: "Any",
    title: "Wool",
    room: "Pantry",
    bundle: "Animal Bundle",
    how: "Sheep or Rabbit product.",
    deadline: "Any season after animal access.",
    note: "Choice bundle: choose 5 of 6 Animal items.",
  },
  {
    id: "duck-egg",
    season: "Any",
    title: "Duck Egg",
    room: "Pantry",
    bundle: "Animal Bundle",
    how: "Duck product.",
    deadline: "Any season after you own ducks.",
    note: "Choice bundle: choose 5 of 6 Animal items.",
  },
  {
    id: "truffle-oil",
    season: "Any",
    title: "Truffle Oil",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Put a Truffle in an Oil Maker.",
    deadline:
      "Any non-Winter season for outdoor pig truffles. Oil Maker can process anytime.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "cloth",
    season: "Any",
    title: "Cloth",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Use a Loom, recycle Soggy Newspaper, Desert Trader, or Mummy drop.",
    deadline: "Any season after source access.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "goat-cheese",
    season: "Any",
    title: "Goat Cheese",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Put Goat Milk in a Cheese Press.",
    deadline: "Any season after you own goats and have a Cheese Press.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "cheese",
    season: "Any",
    title: "Cheese",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Put Milk in a Cheese Press.",
    deadline: "Any season after you own cows and have a Cheese Press.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "honey",
    season: "Any",
    title: "Honey",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Use a Bee House or buy from Oasis.",
    deadline:
      "Bee Houses do not produce in Winter, but Honey can be stored/donated anytime.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "jelly",
    season: "Any",
    title: "Jelly",
    room: "Pantry",
    bundle: "Artisan Bundle",
    how: "Put fruit in a Preserves Jar.",
    deadline: "Any season after you have fruit and a Preserves Jar.",
    note: "Choice bundle: choose 6 of 12 Artisan items.",
  },
  {
    id: "lobster",
    season: "Any",
    title: "Lobster",
    room: "Fish Tank",
    bundle: "Crab Pot Bundle",
    how: "Ocean Crab Pot.",
    deadline: "Any season after Crab Pot access.",
    note: "Choice bundle: choose 5 of 10 Crab Pot items.",
  },
  {
    id: "crayfish",
    season: "Any",
    title: "Crayfish",
    room: "Fish Tank",
    bundle: "Crab Pot Bundle",
    how: "Freshwater Crab Pot.",
    deadline: "Any season after Crab Pot access.",
    note: "Choice bundle: choose 5 of 10 Crab Pot items.",
  },
  {
    id: "crab",
    season: "Any",
    title: "Crab",
    room: "Fish Tank",
    bundle: "Crab Pot Bundle",
    how: "Ocean Crab Pot or Rock Crab/Lava Crab drop in the Mines.",
    deadline: "Any season after Crab Pot or Mines access.",
    note: "Choice bundle: choose 5 of 10 Crab Pot items.",
  },
  {
    id: "cockle",
    season: "Any",
    title: "Cockle",
    room: "Fish Tank",
    bundle: "Crab Pot Bundle",
    how: "Ocean Crab Pot or Beach forage.",
    deadline: "Any season.",
    note: "Choice bundle: choose 5 of 10 Crab Pot items.",
  },
  {
    id: "mussel",
    season: "Any",
    title: "Mussel",
    room: "Fish Tank",
    bundle: "Crab Pot Bundle",
    how: "Ocean Crab Pot or Beach forage.",
    deadline: "Any season.",
    note: "Choice bundle: choose 5 of 10 Crab Pot items.",
  },
  {
    id: "shrimp",
    season: "Any",
    title: "Shrimp",
    room: "Fish Tank",
    bundle: "Crab Pot Bundle",
    how: "Ocean Crab Pot.",
    deadline: "Any season after Crab Pot access.",
    note: "Choice bundle: choose 5 of 10 Crab Pot items.",
  },
  {
    id: "snail",
    season: "Any",
    title: "Snail",
    room: "Fish Tank",
    bundle: "Crab Pot Bundle",
    how: "Freshwater Crab Pot.",
    deadline: "Any season after Crab Pot access.",
    note: "Choice bundle: choose 5 of 10 Crab Pot items.",
  },
  {
    id: "periwinkle",
    season: "Any",
    title: "Periwinkle",
    room: "Fish Tank",
    bundle: "Crab Pot Bundle",
    how: "Freshwater Crab Pot.",
    deadline: "Any season after Crab Pot access.",
    note: "Choice bundle: choose 5 of 10 Crab Pot items.",
  },
  {
    id: "oyster",
    season: "Any",
    title: "Oyster",
    room: "Fish Tank",
    bundle: "Crab Pot Bundle",
    how: "Ocean Crab Pot or Beach forage.",
    deadline: "Any season.",
    note: "Choice bundle: choose 5 of 10 Crab Pot items.",
  },
  {
    id: "clam",
    season: "Any",
    title: "Clam",
    room: "Fish Tank",
    bundle: "Crab Pot Bundle",
    how: "Ocean Crab Pot or Beach forage.",
    deadline: "Any season.",
    note: "Choice bundle: choose 5 of 10 Crab Pot items.",
  },
  {
    id: "copper-bar",
    season: "Any",
    title: "Copper Bar",
    room: "Boiler Room",
    bundle: "Blacksmith's Bundle",
    how: "Smelt Copper Ore in a Furnace.",
    deadline: "Any season after Mines/Furnace access.",
    note: "Required item.",
  },
  {
    id: "iron-bar",
    season: "Any",
    title: "Iron Bar",
    room: "Boiler Room",
    bundle: "Blacksmith's Bundle",
    how: "Smelt Iron Ore in a Furnace or transmute.",
    deadline: "Any season after source access.",
    note: "Required item.",
  },
  {
    id: "gold-bar",
    season: "Any",
    title: "Gold Bar",
    room: "Boiler Room",
    bundle: "Blacksmith's Bundle",
    how: "Smelt Gold Ore in a Furnace or transmute.",
    deadline: "Any season after source access.",
    note: "Required item.",
  },
  {
    id: "quartz",
    season: "Any",
    title: "Quartz",
    room: "Boiler Room",
    bundle: "Geologist's Bundle",
    how: "Forage in the Mines.",
    deadline: "Any season after Mines access.",
    note: "Required item.",
  },
  {
    id: "earth-crystal",
    season: "Any",
    title: "Earth Crystal",
    room: "Boiler Room",
    bundle: "Geologist's Bundle",
    how: "Mines floors 1-39, Geodes, Omni Geodes, or Duggy drops.",
    deadline: "Any season after source access.",
    note: "Required item.",
  },
  {
    id: "frozen-tear",
    season: "Any",
    title: "Frozen Tear",
    room: "Boiler Room",
    bundle: "Geologist's Bundle",
    how: "Mines floors 41-79, Frozen Geodes, Omni Geodes, or Dust Sprite drops.",
    deadline: "Any season after source access.",
    note: "Required item.",
  },
  {
    id: "fire-quartz",
    season: "Any",
    title: "Fire Quartz",
    room: "Boiler Room",
    bundle: "Geologist's Bundle",
    how: "Mines floors 81-119, Magma Geodes, or Omni Geodes.",
    deadline: "Any season after source access.",
    note: "Required item.",
  },
  {
    id: "slime",
    season: "Any",
    title: "99x Slime",
    room: "Boiler Room",
    bundle: "Adventurer's Bundle",
    how: "Dropped by Slimes.",
    deadline: "Any season.",
    note: "Choice bundle: choose 2 of 4 Adventurer items.",
  },
  {
    id: "bat-wing",
    season: "Any",
    title: "10x Bat Wing",
    room: "Boiler Room",
    bundle: "Adventurer's Bundle",
    how: "Dropped by Bats in the Mines or Skull Cavern.",
    deadline: "Any season after source access.",
    note: "Choice bundle: choose 2 of 4 Adventurer items.",
  },
  {
    id: "solar-essence",
    season: "Any",
    title: "Solar Essence",
    room: "Boiler Room",
    bundle: "Adventurer's Bundle",
    how: "Ghosts, Squid Kids, Metal Heads, Mummies, Iridium Bats, Fish Ponds, or Krobus.",
    deadline: "Any season after source access.",
    note: "Choice bundle: choose 2 of 4 Adventurer items.",
  },
  {
    id: "void-essence",
    season: "Any",
    title: "Void Essence",
    room: "Boiler Room",
    bundle: "Adventurer's Bundle",
    how: "Shadow Brutes, Shadow Shamans, Serpents, Fish Ponds, or Krobus.",
    deadline: "Any season after source access.",
    note: "Choice bundle: choose 2 of 4 Adventurer items.",
  },
  {
    id: "maple-syrup-chef",
    season: "Any",
    title: "Maple Syrup",
    room: "Bulletin Board",
    bundle: "Chef's Bundle",
    how: "Tap a Maple Tree.",
    deadline: "Any season after you craft a Tapper.",
    note: "Required item. Separate from optional Exotic Foraging Maple Syrup if you donate both.",
  },
  {
    id: "truffle",
    season: "Any",
    title: "Truffle",
    room: "Bulletin Board",
    bundle: "Chef's Bundle",
    how: "Pig product.",
    deadline:
      "Pigs find truffles outside in non-Winter seasons. Donate anytime once you have one.",
    note: "Required item.",
  },
  {
    id: "maki-roll",
    season: "Any",
    title: "Maki Roll",
    room: "Bulletin Board",
    bundle: "Chef's Bundle",
    how: "Cook with Fish, Seaweed, and Rice, or buy from the Stardrop Saloon/Traveling Cart when available.",
    deadline: "Any season after source access.",
    note: "Required item.",
  },
  {
    id: "fried-egg",
    season: "Any",
    title: "Fried Egg",
    room: "Bulletin Board",
    bundle: "Chef's Bundle",
    how: "Cook using an Egg.",
    deadline: "Any season after you have a kitchen/source.",
    note: "Required item.",
  },
  {
    id: "sea-urchin",
    season: "Any",
    title: "Sea Urchin",
    room: "Bulletin Board",
    bundle: "Dye Bundle",
    how: "Forage on the right side of the Beach after repairing the bridge with 300 Wood, or Beach Farm.",
    deadline: "Any season after beach bridge/source access.",
    note: "Required item.",
  },
  {
    id: "duck-feather",
    season: "Any",
    title: "Duck Feather",
    room: "Bulletin Board",
    bundle: "Dye Bundle",
    how: "Duck product with enough friendship/mood.",
    deadline: "Any season after you own ducks.",
    note: "Required item.",
  },
  {
    id: "aquamarine",
    season: "Any",
    title: "Aquamarine",
    room: "Bulletin Board",
    bundle: "Dye Bundle",
    how: "Aquamarine Nodes, Mines boxes, or fishing treasure chests.",
    deadline: "Any season after source access.",
    note: "Required item.",
  },
  {
    id: "chub",
    season: "Any",
    title: "Chub",
    room: "Bulletin Board",
    bundle: "Field Research Bundle",
    how: "Mountain Lake or river, any season, any time.",
    deadline: "Any season.",
    note: "Required item.",
  },
  {
    id: "frozen-geode",
    season: "Any",
    title: "Frozen Geode",
    room: "Bulletin Board",
    bundle: "Field Research Bundle",
    how: "Mines floors 41-79.",
    deadline: "Any season after source access.",
    note: "Required item.",
  },
  {
    id: "hay",
    season: "Any",
    title: "10x Hay",
    room: "Bulletin Board",
    bundle: "Fodder Bundle",
    how: "Buy from Marnie/Desert Trader or harvest from Grass/Wheat.",
    deadline: "Any season. Store before Winter if relying on grass.",
    note: "Required item.",
  },
  {
    id: "oak-resin-enchanter",
    season: "Any",
    title: "Oak Resin",
    room: "Bulletin Board",
    bundle: "Enchanter's Bundle",
    how: "Tap an Oak Tree.",
    deadline: "Any season after you craft a Tapper.",
    note: "Required item. Separate from optional Exotic Foraging Oak Resin if you donate both.",
  },
  {
    id: "wine",
    season: "Any",
    title: "Wine",
    room: "Bulletin Board",
    bundle: "Enchanter's Bundle",
    how: "Put fruit in a Keg.",
    deadline: "Any season after you have fruit and a Keg.",
    note: "Required item.",
  },
  {
    id: "rabbits-foot",
    season: "Any",
    title: "Rabbit's Foot",
    room: "Bulletin Board",
    bundle: "Enchanter's Bundle",
    how: "Rabbit product or rare Serpent drop in Skull Cavern.",
    deadline: "Any season after source access.",
    note: "Required item.",
  },
  {
    id: "vault-2500",
    season: "Any",
    title: "2,500g",
    room: "Vault",
    bundle: "2,500 Bundle",
    how: "Pay gold directly in the Vault.",
    deadline: "Any season after Vault access.",
    note: "Required payment.",
  },
  {
    id: "vault-5000",
    season: "Any",
    title: "5,000g",
    room: "Vault",
    bundle: "5,000 Bundle",
    how: "Pay gold directly in the Vault.",
    deadline: "Any season after Vault access.",
    note: "Required payment.",
  },
  {
    id: "vault-10000",
    season: "Any",
    title: "10,000g",
    room: "Vault",
    bundle: "10,000 Bundle",
    how: "Pay gold directly in the Vault.",
    deadline: "Any season after Vault access.",
    note: "Required payment.",
  },
  {
    id: "vault-25000",
    season: "Any",
    title: "25,000g",
    room: "Vault",
    bundle: "25,000 Bundle",
    how: "Pay gold directly in the Vault.",
    deadline: "Any season after Vault access.",
    note: "Required payment. Total Vault cost is 42,500g.",
  },
];

function getBadgeClass(room) {
  if (room === "Crafts Room") return "text-bg-success";
  if (room === "Pantry") return "text-bg-warning";
  if (room === "Fish Tank") return "text-bg-primary";
  if (room === "Boiler Room") return "text-bg-danger";
  if (room === "Bulletin Board") return "text-bg-secondary";
  if (room === "Vault") return "text-bg-dark";
  return "text-bg-info";
}

function isChoiceItem(item) {
  return item.note.toLowerCase().includes("choice bundle");
}

function isDeadlineItem(item) {
  return item.deadline.toLowerCase().includes("plant by");
}

function renderTracker() {
  const seasonGrid = document.querySelector("#seasonGrid");

  seasonGrid.innerHTML = sections
    .map(function (section) {
      const sectionItems = items.filter(function (item) {
        return item.season === section.name;
      });

      const accordionId = section.name.toLowerCase() + "Accordion";
      const sectionContentId = section.name.toLowerCase() + "SeasonContent";

      const itemHtml = sectionItems
        .map(function (item) {
          const collapseId = "collapse-" + item.id;
          const savedValue = localStorage.getItem("cc-" + item.id);
          const checked = savedValue === "true" ? "checked" : "";
          const completedClass = savedValue === "true" ? "completed-row" : "";
          const searchText = (
            item.title +
            " " +
            item.room +
            " " +
            item.bundle +
            " " +
            item.how +
            " " +
            item.deadline +
            " " +
            item.note
          ).toLowerCase();

          return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 tracker-col" data-search="${searchText}">
      <div class="accordion-item tracker-item ${completedClass}">
        <h3 class="accordion-header tracker-header">
          <div class="item-check-wrap">
            <input class="form-check-input item-check" type="checkbox" id="check-${item.id}" data-id="${item.id}" ${checked}>
          </div>

          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-controls="${collapseId}">
            <span>
              <span class="item-title">${item.title}</span>
              <span class="item-meta">
                <span class="badge ${getBadgeClass(item.room)} bundle-badge">${item.room}</span>
                <span class="badge text-bg-light bundle-badge">${item.bundle}</span>
                ${isChoiceItem(item) ? `<span class="badge text-bg-info choice-badge">Choice</span>` : ""}
                ${isDeadlineItem(item) ? `<span class="badge text-bg-danger deadline-badge">Plant Deadline</span>` : ""}
              </span>
            </span>
          </button>
        </h3>

        <div id="${collapseId}" class="accordion-collapse collapse">
          <div class="accordion-body">
            <p class="mb-1"><span class="item-detail-label">Bundle:</span> ${item.bundle}</p>
            <p class="mb-1"><span class="item-detail-label">How to get:</span> ${item.how}</p>
            <p class="mb-1"><span class="item-detail-label">Timing / deadline:</span> ${item.deadline}</p>
            <p class="mb-0"><span class="item-detail-label">Tip:</span> ${item.note}</p>
          </div>
        </div>
      </div>
    </div>
  `;
        })
        .join("");

      return `
  <section class="col-12 season-section">
    <div class="card season-card accordion">
      <div class="season-header ${section.className}">
        <button class="season-toggle ${section.className}" type="button" data-bs-toggle="collapse" data-bs-target="#${sectionContentId}" aria-expanded="true" aria-controls="${sectionContentId}">
          <h2 class="h4 fw-bold mb-0">${section.name}</h2>
        </button>
      </div>

      <div id="${sectionContentId}" class="collapse show">
        <div class="card-body">
          <div class="accordion" id="${accordionId}">
            <div class="row g-3">
              ${itemHtml}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
    })
    .join("");
}

function updateProgress() {
  const checkedItems = document.querySelectorAll(".item-check:checked").length;
  const totalItems = items.length;
  const progressText = document.querySelector("#progressText");

  progressText.textContent = `${checkedItems} / ${totalItems} tracker entries checked. Choice bundles show possible options, so you do not need every choice-marked item to finish the Community Center.`;
}

function setupCheckboxSaving() {
  document.querySelectorAll(".item-check").forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const itemId = checkbox.dataset.id;
      const row = checkbox.closest(".tracker-item");

      localStorage.setItem("cc-" + itemId, checkbox.checked);
      row.classList.toggle("completed-row", checkbox.checked);
      updateProgress();
    });
  });
}

function setupSearch() {
  const searchInput = document.querySelector("#searchInput");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim().toLowerCase();

    document.querySelectorAll(".tracker-col").forEach(function (col) {
      const rowText = col.dataset.search;
      col.style.display = rowText.includes(query) ? "" : "none";
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderTracker();
  setupCheckboxSaving();
  setupSearch();
  updateProgress();
});
