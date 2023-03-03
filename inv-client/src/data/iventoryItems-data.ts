import { iInventoryItem } from "../models/inventoryItem";


const PokemonSubMap = new Map<string, string[]>();
PokemonSubMap.set("Pokemon", ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"])

const SportsSubMap = new Map<string, string[]>();
PokemonSubMap.set("Sports", ["Football", "Basketball", "Baseball", "Hockey"])



export const allSubTypeMaps: Map<string, string[]>[] = [
    PokemonSubMap,
    SportsSubMap
];

export const inventoryItems: iInventoryItem[] = [
    {
        name: "Machamp",
        price: 38.99,
        quantity: 2,
        description: "The first edition machamp came standard in every starter set for base set for all print runs.",
        image: "/img/machamp.jpg",
        tags: ["Pokemon"],
        subTags: ["Fighting", "Holo", "First-Edition"]
    },
    {
        name: "Hitmonchan",
        price: 89,
        quantity: 1,
        description: "First Ed Hitmonchan",
        image: "/img/hitmonchan.jpg",
        tags: ["Pokemon"],
        subTags: ["Fighting", "Holo", "First-Edition"]
    },
    {
        name: "Tyranitar",
        price: 29,
        quantity: 1,
        description: "Tyranitar",
        image: "/img/tyranitar.jpg",
        tags: ["Pokemon"],
        subTags: ["Dark", "Holo"]
    },
    {
        name: "Ho-oh",
        price: 29,
        quantity: 1,
        description: "Ho-Oh",
        image: "/img/hooh.jpg",
        tags: ["Pokemon"],
        subTags: ["Flying"]
    },
    {
        name: "Entei",
        price: 35,
        quantity: 1,
        description: "Entei",
        image: "/img/entei.jpg",
        tags: ["Pokemon"],
        subTags: ["Fire", "First-Edition"]
    },
    {
        name: "Feraligartr",
        price: 25,
        quantity: 1,
        description: "",
        image: "/img/feraligartr.jpg",
        tags: ["Pokemon"],
        subTags: ["Water", "Fighting", "Holo", "First-Edition"]
    },
    {
        name: "Raichu",
        price: 25,
        quantity: 1,
        description: "Raichu",
        image: "/img/raichu.jpg",
        tags: ["Pokemon"],
        subTags: ["Electric", "Holo", "First-Edition"]
    },
    {
        name: "Pichu",
        price: 15,
        quantity: 1,
        description: "Pichu",
        image: "/img/pichu.jpg",
        tags: ["Pokemon"],
        subTags: ["Electric", "Holo", "First-Edition"]
    },
    {
        name: "Zapdos",
        price: 20,
        quantity: 1,
        description: "Zapdos",
        image: "/img/zapdos.jpg",
        tags: ["Pokemon"],
        subTags: ["Electric", "Flying", "Holo", "First-Edition"]
    },
    {
        name: "Articuno",
        price: 5,
        quantity: 1,
        description: "Articuno",
        image: "/img/articuno.jpg",
        tags: ["Pokemon"],
        subTags: ["Ice", "Flying", "Holo"]
    },
    {
        name: "Dark Raichu",
        price: 5,
        quantity: 1,
        description: "Dark Raichu",
        image: "/img/dark-raichu.jpg",
        tags: ["Pokemon"],
        subTags: ["Electric", "Dark", "Holo", "First-Edition"]
    },
    {
        name: "Politoed",
        price: 5,
        quantity: 1,
        description: "Politoed",
        image: "/img/politoed.jpg",
        tags: ["Pokemon"],
        subTags: ["Water", "Dark", "Holo", "First-Edition"]
    },
    {
        name: "Suicune",
        price: 5,
        quantity: 1,
        description: "Suicune",
        image: "/img/suicune.jpg",
        tags: ["Pokemon"],
        subTags: ["Water", "First-Edition", "Holo", "First-Edition"]
    },
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
