export const schema = {
  "type": "object",
  "properties": {
    "recipes": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "title": {
            "type": "string",
            "pattern": "Fish Tacos|Ham Sandwhich|Banana Smoothie|Scrambled Eggs|Curry"
          },
          "ingredients": {
            "type": "array",
            "minItems": 3,
            "maxItems": 5,
            "items": {
              "type": "string",
              "pattern": "Fish|Tacos|Ham|Bread|Mustard|Banana|Almond Milk|Eggs|Spinach|Cheese|Cauliflower|Capsicum|Coconut Cream|Curry Powder|Onion|Garlic|Coriander"
            }
          },
          "steps": {
            "type": "array",
            "minItems": 3,
            "maxItems": 5,
            "items": {
              "type": "string",
              "pattern": "Do this|Do that|Spread that|Slice this|Fry that|Scramble this|Add that"
            }
          }
        },
        "required": [ "id", "title", "ingredients", "steps" ]
      }
    }
  },
  "required": [ "recipes" ]
};
