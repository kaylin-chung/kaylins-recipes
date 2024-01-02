import grilledcheese from "../images/grilledcheese.jpeg" 
import salmonrice from "../images/salmonrice.jpeg" 
import pestopasta from "../images/pestopasta.jpeg"
import springrolls from "../images/springrolls.jpeg"
import quesadilla from "../images/quesadilla.jpeg"
import kimbap from "../images/kimbap.jpeg"
import chickenwrap from "../images/chickenwrap.jpeg"
import pepperlunch from "../images/pepperlunch.jpeg"
import eggsandy from "../images/eggsandy.jpeg"

export const MealCards = [
    {
        title: "grilled cheese & tomato soup",
        ingredients: [
            "good bread (i like sourdough!)",
            "butter",
            "garlic powder",
            "black pepper",
            "cheese (i used tj’s 3 cheese blend and mild cheddar)",
            "cream cheese",
            "mayo",
            "tomato soup (i like the one from tj’s!)",
        ],
        instructions: [
            "for garlic butter spread: mix 1/4 cup softened butter, garlic powder, black pepper, and shredded cheese into a paste and spread on outer side of both slices of bread",
            "for cream cheese spread: mix 1/4 cup softened cream cheese, 1 tbsp mayo, garlic powder, black pepper. assemble sandwich by spreading about a tbsp in between slices of mild cheddar",
            "in a skillet over medium/low heat, cook sandwich and flip once both sides are golden and crisp and cheese is thoroughly melted",
            "warm soup in a pot until a light boil and enjoy!",
            "(simple version: butter your sliced bread and place cheese on bread. pan fry until golden brown and cheese is melted)"
        ],
        image: grilledcheese,
    }, 
    {
        title: "emily mariko salmon bowl",
        ingredients: [
            "salmon",
            "rice (day-old (drier) is preferred)",
            "cucumber",
            "soy sauce",
            "mayo",
            "seaweed",
        ],
        instructions: [
            "in a bowl mash cooked salmon, rice, mayo, and soy sauce with a fork until thoroughly combined. feel free to add sriracha for spice.",
            "enjoy with washed and thinly sliced cucumbers (or any veggie of your choice) and seaweed"
        ],
        image: salmonrice,
    },
    {
        title: "pesto pasta salad",
        ingredients: [
            "pasta of your choice",
            "grape tomatoes (chopped)",
            "red onion",
            "pesto",
            "zucchini",
            "mozzarella",
            "olive oil",
            "fresh lemon juice",
        ],
        instructions: [
            "roast zucchini in a pan with olive oil and s&p",
            "add all ingredients (washed and chopped) to a bowl and mix",
            "squeeze lemon juice over and enjoy!"
        ],
        image: pestopasta,
    },
    {
        title: "spring rolls",
        ingredients: [
            "rice paper",
            "meat of your choice (shrimp, teriyaki meatballs, tofu, etc.)",
            "cilantro",
            "carrots",
            "canned pineapple",
            "bean sprouts",
            "sesame dressing",
            "peanut butter",
            "soy sauce",
            "note: this recipe is highly customizable so choose ingredients to your liking!"
        ],
        instructions: [
            "cook meat of choice and boil bean sprouts until slightly soft",
            "wash/shred carrots, wash/dry cilantro, slice pineapple rings into quarters",
            "prepare sauce by mixing sesame dressing, peanut butter, and soy sauce to taste",
            "enjoy by dipping rice paper in warm water and assembling with ingredients",
        ],
        image: springrolls,
    },
    {
        title: "chicken quesadilla",
        ingredients: [
            "tortilla",
            "shredded chicken breast",
            "mexican cheese blend",
            "(optional) pico de gallo and guac",
        ],
        instructions: [
            "place shredded cheese and cooked chicken breast in tortilla",
            "on medium heat, cook and flip until tortilla is golden brown and cheese is melted",
        ],
        image: quesadilla,
    },
    {
        title: "BYO kimbap",
        ingredients: [
            "seaweed",
            "rice",
            "meat of your choice (spam (my personal fav!), salmon, beef, etc.)",
            "carrots",
            "egg",
            "avocado",
            "cucumber",
            "soy sauce",
            "note: this recipe is highly customizable so choose ingredients to your liking!",
        ],
        instructions: [
            "for egg pancake: mix egg with a splash of milk and salt. pour egg mixture into pan and cook on low heat until you can lift the edges and flip. cut into strips",
            "for carrots: shred carrots and cook in a pan with soy sauce until softened",
            "air/pan fry meat and wash/cut veggies into thin strips",
            "once all the ingredient prep is done, have fun assembling your kimbap!"
        ],
        image: kimbap,
    },
    {
        title: "chicken wrap",
        ingredients: [
            "frozen chicken tenders",
            "tortilla",
            "romaine lettuce",
            "tomato",
            "canned corn",
            "ranch",
            "note: this recipe is highly customizable so choose ingredients to your liking!",
        ],
        instructions: [
            "heat chicken tenders",
            "place washed/cut romaine, diced tomato, corn, chicken tender, and ranch on tortilla and roll into burrito",
            "on low/medium heat, warm burrito until tortilla is a light golden brown",
        ],
        image: chickenwrap,
    },
    {
        title: "DIY pepper lunch",
        ingredients: [
            "rice",
            "teriyaki meatballs",
            "onion (yellow & green)",
            "canned corn",
            "s&p",
        ],
        instructions: [
            "cook finely cubed onion with oil until translucent and golden brown on low/medium heat. also cook meat",
            "in the same pan and preferably with day old (drier) rice, mix all ingredients and enjoy out of the pan",
        ],
        image: pepperlunch,
    },
    {
        title: "egg salad sandwich",
        ingredients: [
            "eggs (two for single serving)",
            "mayo",
            "milk bread",
            "tomato",
            "cucumber",
            "s&p",
        ],
        instructions: [
            "hard boil eggs and place in ice bath to cool",
            "egg salad: mash eggs, mayo, and s&p into a boil (season to your liking)",
            "wash and thinly slice tomatoes and cucumbers",
            "assemble with sliced milk bread and enjoy!",
        ],
        image: eggsandy,
    }
]