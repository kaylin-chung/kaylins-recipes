import toasts from "../images/toasts.jpeg"
import loxbagel from "../images/loxbagel.jpeg"
import yogurtparfait from "../images/yogurtparfait.jpeg"
import spammusubi from "../images/spammusubi.jpeg"
import cowboycaviar from "../images/cowboycaviar.jpeg"
import brekkytaco from "../images/brekkytaco.jpeg"

export const SnackCards = [
    {
        title: "Toasts!",
        preptime: "10 min",
        ingredients: [
            "your favorite bread",
            "avocado",
            "s&p + garlic powder",
            "fresh lemon juice",
            "tomato",
            "everything but the bagel seasoning",
            "mayo",
            "(optional) sunny side up egg or balsamic glaze",
        ],
        instructions: [
            "mash avocado, lemon juice, and seasonings. thinly slice tomato and place on the side",
            "atop toasted bread, spread avocado mix and place tomatoes",
            "place sunny side up egg and/or balsamic glaze and sprinkle e.b.t.b. seasoning",
            "for sweet version: assemble toast with sliced bananas, peanut butter, and a drizzle of honey"
        ],
        image: toasts,
    }, 
    {
        title: "Lox Bagel",
        preptime: "10 min",
        ingredients: [
            "your favorite bagel",
            "thinly sliced smoked salmon",
            "tomato",
            "capers",
            "pickled red onions",
            "cream cheese",
            "everything but the bagel seasoning"
        ],
        instructions: [
            "for pickled onions: combine 1/4 cup of white vinegar, 1 cup water, 1 tbsp honey or white sugar in a jar, 1 tsp salt in a small saucepan over medium heat and bring to gentle simmer. combine thinly sliced onion and the hot vinegar mixture in a mason jar and let sit in fridge for at least 30 min",
            "assemble atop toasted bagel by spreading cream cheese, placing sliced tomatos, lox, pickled onions, and capers, and sprinkling e.b.t.b. seasoning",
        ],
        image: loxbagel,
    }, 
    {
        title: "Yogurt Parfait",
        preptime: "5 min",
        ingredients: [
            "greek yogurt",
            "berries",
            "granola",
        ],
        instructions: [
            "assemble with washed/cut fruit and granola. for extra sweetness, drizzle some honey",
        ],
        image: yogurtparfait,
    }, 
    {
        title: "Spam Musubi",
        preptime: "10-15 min",
        ingredients: [
            "spam",
            "seaweed",
            "rice",
            "brown sugar",
        ],
        instructions: [
            "pan/air fry spam until crispy",
            "braise the spam with sugar and soy sauce until the surface is caramelized",
            "place a strip of seaweed on your working surface and then place the spam at the very end",
            "form a ball of rice and then shape it into an oval shape that is similar to the sliced spam",
            "roll up the spam and rice using the seaweed strip"
        ],
        image: spammusubi,
    }, 
    {
        title: "Cowboy Caviar",
        preptime: "15 min",
        ingredients: [
            "canned corn",
            "tomato",
            "bell peppers (red, orange, yellow)",
            "red onion",
            "nectarine",
            "black beans",
            "white beans",
            "fresh lemon juice",
            "olive oil",
            "chips of your choice",
            "note: this recipe is highly customizable so choose ingredients to your liking!",
        ],
        instructions: [
            "thoroughly wash and cut vegetables/fruits/beans and toss in a large bowl",
            "pour olive oil, squeeze lemon juice, and season with s&p to liking",
            "enjoy with your favorite chips or on top of a salad",
        ],
        image: cowboycaviar,
    }, 
    {
        title: "Breakfast Taco",
        preptime: "10 min",
        ingredients: [
            "tortilla",
            "eggs",
            "meat of your choice (sausage, bacon, spam, etc.)",
            "shredded cheese",
            "avocado",
        ],
        instructions: [
            "scramble eggs (i like to mix eggs with a splash of milk and salt and then scramble on low heat) and cook meat",
            "assemble taco with warmed tortilla",
        ],
        image: brekkytaco,
    },
]