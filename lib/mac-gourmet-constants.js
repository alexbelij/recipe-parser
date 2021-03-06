var define = function (object, name, value) {
  var key;

  // if an object, loop the properties for the definitions
  if (typeof name === "object") {
    for (key in name) {
      if (name.hasOwnProperty(key)) {
        define(object, key, name[key]);
      }
    }
    // otherwise, just operate on a single property
  } else {
    Object.defineProperty(object, name, {
      value:        value,
      enumerable:   true,
      writable:     false,
      configurable: false
    });
  }

  return object;
};

var constants = exports.constants = {};
define(constants, {
  CATEGORIES: {
    'Basic': 1,
    'Simple': 2,
    'Baked Goods': 3,
    'Beverages': 4,
    'Chocolate': 5,
    'Copy Cat': 6,
    '30 Minute': 7,
    'Crockpot': 8,
    'Healthy': 9,
    'Holiday': 10,
    'Christmas': 11,
    'Easter': 12,
    'St. Patrick\'s Day': 13,
    'Thanksgiving': 14,
    'Halloween': 15,
    'Yom Kippur': 16,
    'Hanukkah': 17,
    'Rosh Hashanah': 18,
    'Kids': 19,
    'Pasta': 20,
    'Side Dishes': 21,
    'Soups': 22,
    'Salads': 23,
    'Condiments': 24,
    'Jams and Jellies': 25,
    'Misc.': 26,
    'Dressings': 27,
    'Vinaigrettes': 28,
    'Sauces': 29,
    'Seasonings': 30,
    'Marinades': 31,
    'Spice Rubs': 32,
    'Breads': 33,
    'Muffins': 34,
    'Rolls': 35,
    'Pizza Doughs': 36,
    'Misc. Doughs': 37,
    'Fritters': 38,
    'Danishes': 39,
    'Cakes': 40,
    'Pies': 41,
    'Truffles': 42,
    'Dessert Bars': 43,
    'Desserts': 44,
    'Brownies': 45,
    'Candy': 46,
    'Cheesecakes': 47,
    'Cookies': 48,
    'Frostings and Icings': 49,
    'Fruit': 50,
    'Fudge': 51,
    'Ice Cream': 52,
    'Misc. Dessert': 53,
    'Puddings': 54,
    'Pastries': 55,
    'Tarts': 56,
    'Beef': 57,
    'Fish': 58,
    'Chicken': 59,
    'Pork': 60,
    'Poultry': 61,
    'Seafood': 62,
    'Vegetarian': 63,
    'Ham': 64,
    'Macaroni': 65,
    'Lasagna': 66,
    'Linguine': 67,
    'Fettuccine': 68,
    'Ravioli': 69,
    'Stews': 70,
    'Vegetable': 71,
    'Rices': 72,
    'Grains': 73,
    'Stuffings': 74,
    'Burgers': 75,
    'Chili': 76,
    'Pizza': 77,
    'Sandwiches': 78,
    'Low Calorie': 79,
    'Low Cholesterol': 80,
    'Low Fat': 81,
    'High Fiber': 82,
    'Low Saturated Fat': 83,
    'Ethnic: Cajun': 84,
    'Mixed Drinks': 88,
    'Mixed Drinks, Non-Alcoholic': 89,
    'Ethnic: Italian': 91,
    'Ethnic: French': 93,
    'Season: Spring': 97,
    'Season: Fall': 99,
    'Season: Summer': 101,
    'Ethnic: American': 102,
    'Ethnic: European': 110,
    'Ethnic: Asian': 117,
    'Ethnic: Mediterranean': 119,
    'Ethnic: Indian': 121,
    'Ethnic': 135,
    'Eggs': 138,
    'Potatoes': 139,
    'Beans': 141,
    'Casseroles': 146,
    'Ethnic: Mexican': 153,
    'Lamb': 155,
    'Meats': 181,
    'Duck': 192,
    'Tofu': 193,
    'Brines': 195,
    'Snacks': 196,
    'Ethnic: Korean': 197,
    'Dips': 198,
    'Pickling': 199,
    'Ethnic: Caribbean': 200,
    'Cheese': 201,
    'Breakfast': 202,
    'Brunch': 203,
    'Main Dish': 204,
    'Appetizer': 205,
    'Smoothies': 206,
    'Gravies': 207,
    'Broths': 208,
    'Leftovers': 209,
    'Oats': 210,
    'Squashes': 211,
    'Spreads': 212,
    'Nuts': 213
  },
  COURSES: {
    'Appetizer': 1,
    'Main': 2,
    'Dessert': 3,
    'Vegetable': 4,
    'Salad': 5,
    'Fruit': 6,
    'Cheese': 7,
    'Snack': 8
  }
});

