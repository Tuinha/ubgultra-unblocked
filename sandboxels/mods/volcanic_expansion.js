elements.obsidian = {
	color: ["#343434", "#313639"],
	behavior: behaviors.SOLID,
	category: "land",
	state: "solid",
    density: 2380,
    tempHigh: 900,
    stateHigh: "magma",
    breakInto: "obsidian_shard",
    reactions: {
        "sand": { elem1: "obsidian_shard" },
        "dirt": { elem1: "obsidian_shard" },
        "rock": { elem1: "obsidian_shard" },
        "mudstone": { elem1: "obsidian_shard" },
        "packed_snow": { elem1: "obsidian_shard" },
        "gravel": { elem1: "obsidian_shard" },
        "clay": { elem1: "obsidian_shard" },
        "clay_soil": { elem1: "obsidian_shard" },
        "permafrost": { elem1: "obsidian_shard" },
        "mulch": { elem1: "obsidian_shard" },
        "basalt": { elem1: "obsidian_shard" },
        "tuff": { elem1: "mud" },
        "limestone": { elem1: "obsidian_shard" },
        "quicklime": { elem1: "obsidian_shard" },
        "slaked_lime": { elem1: "obsidian_shard" },
        }
    },
    elements.obsidian_shard = {
	color: ["#343434", "#313639"],
	behavior: behaviors.POWDER,
	category: "powders",
	state: "solid",
    density: 2380,
    tempHigh: 900,
    stateHigh: "magma",
    reactions: {
            "glue": { elem1: "obsidian" },
            }
    },
elements.pumice = {
    color: "#bac0b4",
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    density: 550,
    tempHigh: 900,
    stateHigh: "magma",
    hardness: 0.5,
    },
elements.magma.stateLow = ["basalt","basalt","basalt","pumice","basalt","rock","obsidian_shard","diorite","andesite","basalt","basalt","basalt","pumice","basalt","rock","obsidian_shard","diorite","andesite","doritoite"],
    elements.eruption = {
    color:  ["#ff6f00","#ff8c00","#ff4d00"],
    behavior: [
        "XX|M1|XX",
        "XX|DL%1|XX",
        "CR:magma|CR:magma|CR:magma",
    ],
    category: "weapons",
    state: "solid",
    temp:1200,
    density: 2725,
},
elements.andesite = {
    color: "#777C7C",
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    density: 2771,
    tempHigh: 900,
    stateHigh: "magma",
    },
    elements.diorite = {
    color: ["#d4d4d4","#2b2b2b"],
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    density: 2900,
    tempHigh: 900,
    stateHigh: "magma",
    },
    elements.doritoite = {
    color: ["#ff5349","#f2ba49"],
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 157.8,
    tempHigh: 900,
    stateHigh: "magma",
    reactions: {
            "head": { elem1: "null" },
            },
    isFood: true,
    hidden: true
    };