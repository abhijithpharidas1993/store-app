
// List of products
const ITEM_LIST = [
    {
        "picture_url": "https://images.unsplash.com/photo-1575548739631-5c203d43e21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Whole Milk",
        "description": "1 gallon of whole milk.",
        "suggested_price": 4.00,
        "actual_price": 3.50,
        "discount_percentage": 12.5
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1550575464-6282c6e36f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Whole Wheat Bread",
        "description": "1 loaf of whole wheat bread.",
        "suggested_price": 2.50,
        "actual_price": 2.00,
        "discount_percentage": 20.0
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1574169208507-843761748f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Organic Eggs",
        "description": "12-pack of organic large eggs.",
        "suggested_price": 3.50,
        "actual_price": 3.00,
        "discount_percentage": 14.3
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1600718371897-95b1d1da6897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Salted Butter",
        "description": "1 lb of salted butter.",
        "suggested_price": 5.00,
        "actual_price": 4.50,
        "discount_percentage": 10.0
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1568038521742-906333ce1536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Cheddar Cheese",
        "description": "8 oz of sharp cheddar cheese.",
        "suggested_price": 4.00,
        "actual_price": 3.60,
        "discount_percentage": 10.0
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Red Apples",
        "description": "3 lbs of fresh red apples.",
        "suggested_price": 6.00,
        "actual_price": 5.00,
        "discount_percentage": 16.7
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1599217728393-d95e4f23a7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Bananas",
        "description": "2 lbs of ripe bananas.",
        "suggested_price": 1.50,
        "actual_price": 1.20,
        "discount_percentage": 20.0
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1571689938407-35ffb7a616be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Navel Oranges",
        "description": "3 lbs of navel oranges.",
        "suggested_price": 5.00,
        "actual_price": 4.25,
        "discount_percentage": 15.0
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1571689938331-01ba71f1db82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Roma Tomatoes",
        "description": "2 lbs of Roma tomatoes.",
        "suggested_price": 3.00,
        "actual_price": 2.70,
        "discount_percentage": 10.0
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1564802170460-74e0aa9a57c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Yellow Onions",
        "description": "3 lbs of yellow onions.",
        "suggested_price": 2.50,
        "actual_price": 2.00,
        "discount_percentage": 20.0
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1601933723005-d5a25a78faed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Russet Potatoes",
        "description": "5 lbs of russet potatoes.",
        "suggested_price": 4.00,
        "actual_price": 3.50,
        "discount_percentage": 12.5
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Baby Carrots",
        "description": "1 lb of baby carrots.",
        "suggested_price": 2.00,
        "actual_price": 1.50,
        "discount_percentage": 25.0
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1586952518485-11b85f6e45aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Broccoli",
        "description": "1 lb of fresh broccoli.",
        "suggested_price": 3.00,
        "actual_price": 2.50,
        "discount_percentage": 16.7
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1600718371897-95b1d1da6897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Spinach",
        "description": "1 bunch of fresh spinach.",
        "suggested_price": 2.50,
        "actual_price": 2.00,
        "discount_percentage": 20.0
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1589882332016-53c9f18af23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Chicken Breasts",
        "description": "2 lbs of boneless chicken breasts.",
        "suggested_price": 8.00,
        "actual_price": 7.00,
        "discount_percentage": 12.5
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1598887142485-bbdb8af9c5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Ground Beef",
        "description": "1 lb of ground beef.",
        "suggested_price": 6.00,
        "actual_price": 5.50,
        "discount_percentage": 8.3
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1571689938407-35ffb7a616be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Pasta",
        "description": "1 lb of spaghetti pasta.",
        "suggested_price": 1.50,
        "actual_price": 1.20,
        "discount_percentage": 20.0
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1571689938331-01ba71f1db82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "White Rice",
        "description": "2 lbs of white rice.",
        "suggested_price": 3.00,
        "actual_price": 2.50,
        "discount_percentage": 16.7
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1600959907703-c52a596e2121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Olive Oil",
        "description": "16 oz of extra virgin olive oil.",
        "suggested_price": 10.00,
        "actual_price": 8.50,
        "discount_percentage": 15.0
    },
    {
        "picture_url": "https://images.unsplash.com/photo-1586099840658-0890277b0f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "name": "Breakfast Cereal",
        "description": "18 oz box of breakfast cereal.",
        "suggested_price": 4.00,
        "actual_price": 3.00,
        "discount_percentage": 25.0
    }
]


export default ITEM_LIST;