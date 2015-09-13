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
