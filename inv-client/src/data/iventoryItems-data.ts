import { iInventoryItem } from "../models/inventoryItem";

//FIRST ITEM IS THE CATEGORY NAME IE STATUS/TYPING for the two enteries 
const PokemonSubMap = new Map<string, string[][]>();
PokemonSubMap.set("Pokemon", [
    ["Status", "Holo", "Legendary", "Deck"],
    ["Typings", "Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"]
])

const SportsSubMap = new Map<string, string[][]>();
SportsSubMap.set("Sports", [
    ["Major Sports", "Football", "Basketball", "Baseball", "Hockey"],
])


const VideoGamesSubMap = new Map<string, string[][]>();
VideoGamesSubMap.set("Video Game", [
    ["System", "PS2", "PS3", "PS4", "PS5", "Nintendo 64", "Gamecube", "Wii", "Wii U", "Switch", "Gameboy", "Gameboy Color", "Gameboy Advance", "DS"],
    ["Genre", "Sports", "Shooter", "Simulation"],
    ["Media Tpye", "Phyical", "Download"]
])

const HouseItemsSubMap = new Map<string, string[][]>();
HouseItemsSubMap.set("Home", [
    ["Furniture", "Misc"],
])



export const allSubTypeMaps: Map<string, string[][]>[] = [
    PokemonSubMap,
    SportsSubMap,
    VideoGamesSubMap,
    HouseItemsSubMap
];

export const inventoryItems: iInventoryItem[] = [
    {
        name: "Machamp",
        price: 38.99,
        quantity: 2,
        description: "The first edition machamp came standard in every starter set for base set for all print runs.",
        image: "/img/cards/pokemon/machamp.jpg",
        tags: ["Pokemon"],
        subTags: ["Fighting", "Holo", "First-Edition"]
    },
    {
        name: "Hitmonchan",
        price: 89,
        quantity: 1,
        description: "First Ed Hitmonchan",
        image: "/img/cards/pokemon/hitmonchan.jpg",
        tags: ["Pokemon"],
        subTags: ["Fighting", "Holo", "First-Edition"]
    },
    {
        name: "Tyranitar",
        price: 29,
        quantity: 1,
        description: "Tyranitar",
        image: "/img/cards/pokemon/tyranitar.jpg",
        tags: ["Pokemon"],
        subTags: ["Dark", "Holo"]
    },
    {
        name: "Ho-oh",
        price: 29,
        quantity: 1,
        description: "Ho-Oh",
        image: "/img/cards/pokemon/hooh.jpg",
        tags: ["Pokemon"],
        subTags: ["Flying", "Legendary"]
    },
    {
        name: "Entei",
        price: 35,
        quantity: 1,
        description: "Entei",
        image: "/img/cards/pokemon/entei.jpg",
        tags: ["Pokemon"],
        subTags: ["Fire", "First-Edition", "Legendary"]
    },
    {
        name: "Feraligartr",
        price: 25,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/feraligartr.jpg",
        tags: ["Pokemon"],
        subTags: ["Water", "Fighting", "Holo", "First-Edition"]
    },
    {
        name: "Raichu",
        price: 25,
        quantity: 1,
        description: "Raichu",
        image: "/img/cards/pokemon/raichu.jpg",
        tags: ["Pokemon"],
        subTags: ["Electric", "Holo", "First-Edition"]
    },
    {
        name: "Pichu",
        price: 15,
        quantity: 1,
        description: "Pichu",
        image: "/img/cards/pokemon/pichu.jpg",
        tags: ["Pokemon"],
        subTags: ["Electric", "Holo", "First-Edition"]
    },
    {
        name: "Zapdos",
        price: 20,
        quantity: 1,
        description: "Zapdos",
        image: "/img/cards/pokemon/zapdos.jpg",
        tags: ["Pokemon"],
        subTags: ["Electric", "Flying", "Holo", "First-Edition", "Legendary"]
    },
    {
        name: "Articuno",
        price: 5,
        quantity: 1,
        description: "Articuno",
        image: "/img/cards/pokemon/articuno.jpg",
        tags: ["Pokemon"],
        subTags: ["Ice", "Flying", "Holo", "Legendary"]
    },
    {
        name: "Dark Raichu",
        price: 5,
        quantity: 1,
        description: "Dark Raichu",
        image: "/img/cards/pokemon/dark-raichu.jpg",
        tags: ["Pokemon"],
        subTags: ["Electric", "Dark", "Holo", "First-Edition"]
    },
    {
        name: "Politoed",
        price: 5,
        quantity: 1,
        description: "Politoed",
        image: "/img/cards/pokemon/politoed.jpg",
        tags: ["Pokemon"],
        subTags: ["Water", "Dark", "Holo", "First-Edition"]
    },
    {
        name: "Suicune",
        price: 5,
        quantity: 1,
        description: "Suicune",
        image: "/img/cards/pokemon/suicune.jpg",
        tags: ["Pokemon"],
        subTags: ["Water", "First-Edition", "Holo", "First-Edition"]
    },
    {
        name: "Muk",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/muk.jpg",
        tags: ["Pokemon"],
        subTags: ["Grass", "Poison"]
    },
    {
        name: "Raikou",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/raikou.jpg",
        tags: ["Pokemon"],
        subTags: ["Electric", "Legendary"]
    },
    {
        name: "Gyarados",
        price: 20,
        quantity: 1,
        description: "Japan version gyarados",
        image: "/img/cards/pokemon/gyarados.jpg",
        tags: ["Pokemon"],
        subTags: ["Water", "Holo"]
    },
    {
        name: "Hitmontop",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/hitmontop.jpg",
        tags: ["Pokemon"],
        subTags: ["Fighting", "Holo"]
    },
    {
        name: "Electabuzz",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/electabuzz.jpg",
        tags: ["Pokemon"],
        subTags: ["Electric"]
    },
    {
        name: "Dark Hypno",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/dark-hypno.jpg",
        tags: ["Pokemon"],
        subTags: ["Psychic"]
    },
    {
        name: "Jirachi",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/jirachi.jpg",
        tags: ["Pokemon"],
        subTags: ["Psychic", "Legendary"]
    },
    {
        name: "Dark Slowbro",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/dark-slowbro.jpg",
        tags: ["Pokemon"],
        subTags: ["Dark", "Psychic"]
    },
    {
        name: "Aggron",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/aggron.jpg",
        tags: ["Pokemon"],
        subTags: ["Steel"]
    },
    {
        name: "Team Magas Aggron",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/team-magas-aggron.jpg",
        tags: ["Pokemon"],
        subTags: ["Steel"]
    },
    {
        name: "Sneasel",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/sneasel.jpg",
        tags: ["Pokemon"],
        subTags: ["Dark", "Holo"]
    },
    {
        name: "Dark Dugtrio",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/dark-dugtrio.jpg",
        tags: ["Pokemon"],
        subTags: ["Dark", "Ground"]
    },
    {
        name: "Hitmonlee",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/hitmonlee.jpg",
        tags: ["Pokemon"],
        subTags: ["Fighting"]
    },
    {
        name: "Heracross",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/heracross.jpg",
        tags: ["Pokemon"],
        subTags: ["Grass", "Bug", "Holo"]
    },
    {
        name: "Butterfree",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/butterfree.jpg",
        tags: ["Pokemon"],
        subTags: ["Grass", "Bug"]
    },
    {
        name: "Scyther",
        price: 20,
        quantity: 1,
        description: "Scyther",
        image: "/img/cards/pokemon/scyther.jpg",
        tags: ["Pokemon"],
        subTags: ["Grass", "Bug", "Holo"]
    },
    {
        name: "Vileplume",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/vileplume.jpg",
        tags: ["Pokemon"],
        subTags: ["Grass", "Poison"]
    },
    {
        name: "Vileplume",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/vileplume-e.jpg",
        tags: ["Pokemon"],
        subTags: ["Grass", "Poison"]
    },
    {
        name: "Jumpfluff",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/jumpfluff.jpg",
        tags: ["Pokemon"],
        subTags: ["Grass", "Holo"]
    },
    {
        name: "Dark Arbok",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/dark-arbok.jpg",
        tags: ["Pokemon"],
        subTags: ["Dark", "Poison"]
    },
    {
        name: "Mr Mime",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/mrmime.jpg",
        tags: ["Pokemon"],
        subTags: ["Psychic"]
    },
    {
        name: "Unown",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/unown.jpg",
        tags: ["Pokemon"],
        subTags: ["Psychic"]
    },
    {
        name: "Mewtwo",
        price: 20,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/mewtwo.jpg",
        tags: ["Pokemon"],
        subTags: ["Psychic"]
    },
    {
        name: "Wallop Deck",
        price: 100,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/wallop-deck.jpg",
        tags: ["Pokemon"],
        subTags: ["Deck"]
    },
    {
        name: "Lockdown Deck",
        price: 140,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/lockdown-deck.jpg",
        tags: ["Pokemon"],
        subTags: ["Deck"]
    },
    {
        name: "Devastation Deck",
        price: 140,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/devastation-deck.jpg",
        tags: ["Pokemon"],
        subTags: ["Deck"]
    },
    {
        name: "OG deck",
        price: 250,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/twoperson-deck.jpg",
        tags: ["Pokemon"],
        subTags: ["Deck"]
    },
    {
        name: "Water-Blast Deck",
        price: 225,
        quantity: 1,
        description: "",
        image: "/img/cards/pokemon/water-blast-deck.jpg",
        tags: ["Pokemon"],
        subTags: ["Deck"]
    },
    {
        name: "Autographed Basball Brooks Robinson",
        price: 99,
        quantity: 1,
        description: "Baseball signed by Brooks Robinson",
        image: "https://fanatics.frgimages.com/brooks-robinson-baltimore-orioles-autographed-mlb-baseball-with-hof-83-inscription_ss5_p-1791240+pv-1+u-9ui59qomlv2haejuy0ep+v-ve9ri5uykevc0jqak7zs.jpg?_hv=2&w=900",
        tags: ["Sports"],
        subTags: ["Baseball"]
    },
    {
        name: "Modern Warfare 2",
        price: 99,
        quantity: 1,
        description: "",
        image: "https://upload.wikimedia.org/wikipedia/en/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png",
        tags: ["Video Game"],
        subTags: ["Shooter", "PS3", "Phyical"]
    },
    {
        name: "Display Case",
        price: 180,
        quantity: 1,
        description: "Tidy way to showoff items",
        image: "https://storefixturesandsupplies.com/wp-content/uploads/2017/05/Aluminum-extra-full-vision-display-case-showcases.png",
        tags: ["Home"],
        subTags: ["Misc"]
    }
];
