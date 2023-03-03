import { iInventoryItem } from "../models/inventoryItem";

//FIRST ITEM IS THE CATEGORY NAME IE STATUS/TYPING for the two enteries 
const PokemonSubMap = new Map<string, string[][]>();
PokemonSubMap.set("Pokemon", [
    ["Status", "Holo", "Legendary", "Deck"],
    ["Typings", "Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"]
])

const SportsSubMap = new Map<string, string[][]>();
PokemonSubMap.set("Sports", [
    ["Major Sports", "Football", "Basketball", "Baseball", "Hockey"]
])



export const allSubTypeMaps: Map<string, string[][]>[] = [
    PokemonSubMap,
    SportsSubMap
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
        subTags: ["Grass", "Posion"]
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
    // {
    //     name: "",
    //     price: 20,
    //     quantity: 1,
    //     description: "",
    //     image: "/img/cards/pokemon/",
    //     tags: ["Pokemon"],
    //     subTags: []
    // },
    {
        name: "Autographed Basball Brooks Robinson",
        price: 99,
        quantity: 1,
        description: "Baseball signed by Brooks Robinson",
        image: "https://fanatics.frgimages.com/brooks-robinson-baltimore-orioles-autographed-mlb-baseball-with-hof-83-inscription_ss5_p-1791240+pv-1+u-9ui59qomlv2haejuy0ep+v-ve9ri5uykevc0jqak7zs.jpg?_hv=2&w=900",
        tags: ["Sports"],
        subTags: ["Baseball"]
    }
];
