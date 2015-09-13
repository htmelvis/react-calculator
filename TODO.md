<!--TODO: Work to be done including psuedo code for the calculator itself-->
# Calculator Functionality
* This functionality is mainly molded behind foxy cart

- Calculator takes in json to build out the form structure of the JSON is like this (single product):
```JavaScript
{
  "calcdata": {
    "calcTitle": "Title that overrides the calculator title",
    "titleBgColor": "set the background for a filled title",
    "buttonText": "calculator add to cart override"
  },
  "fcdata": [
    {
      "FCProd": "hidden input name attr for the foxycart service",
      "FCVal": "name of the product to be transferred to the cart"
    }
  ],
  "inputdata": [
    {
      "inputType": "select/input",
      "label": "form label for input",
      "name": "the inputs name attr",
      "defaultOption": "optional if input type select initial selected option element",
      "options": [
        {"optionVal": "element option", price: "optional price which is used as a modifier works with select input type"},
      ]
    }
  ]
}
```

- Calculator loads data and loops through each subset of data and composes our Calculator Component
- Base price is placed in from the fcdata object given to the calculator
  - Prices can be modified by ```inputType: select``` as well as the ```options.price``` property
- A Live Price is shown at the bottom of the calculator (default: 0). Live price is manipulated by point 1 and 2
- Interactions with the inputdata will change the LivePrice resulting in base values to be calculated
  - Example: A Select with a price of $8 will change the default ``` {FCProd: price, FCVal: 5} ``` to be $8
  - If other input exists (One Linear Length Input) It will calculate the set price (8) by the entry in the Length Field (Linear Foor Pricing)
  - If two other inputs exist (Square Footage Length, Width) It will calculate by ``` (L * W) * 8 ``` in order to get the total value
  - If no other inputs exist then the FCdata price will be set before the ability to submit the form to the FC obj
  - The FCProd ```PRICE``` will be affected in this case always in order to be placed into the cart
- Calculator Property ```fcdata.fcprod == price and fcdata.fcval == new calculation ``` and the form can be submit to the FC Obj.
- *Ability at any moment to reset the base price is necessary
