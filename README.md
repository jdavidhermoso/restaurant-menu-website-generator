# Website resturant menu generator

Due to the COVID-19 situation, it´s highly recommendable to avoid physical menus in bars and restaurants. 
This website restaurant menu wants to be a project for everyone to make and custom a restaurant menu easily.

## Setup & build
### Install dependencies 
`yarn`
### Start local server
`yarn start`
### Start local server with prod conf
`yarn start:prod`
### Build with dev configuration
`yarn build-dev`
### Build for production
`yarn build-prod`

## Setup restaurant data
To setup restaurant data, modify the file `restaurant.json` with your restaurant information.

## Setup Menu
To setup your restaurant menu data, modify the file `menu.json` with your restaurant information.
It's basically a list of categories. Every of them contains a list of dishes. And every dish can have a list of dish variants with different title, description and price.

<pre>
Example of menu configuration:
<code>{
  "menu": [
    {
      "categoryTitle": "Vegan burguers",
      "dishes": [
        {
          "dishTitle": "Plain vegan burguer",
          "dishDesc": "Homemade vegan burger",
          "dishVariants": [
            {
              "variantTitle": "",
              "variantDesc": "",
              "price": "3.20"
            }
          ]
        },
        {
          "dishTitle": "Egg burger",
          "dishDesc": "Homemade vegetables burguer with egg",
          "dishVariants": [
            {
              "variantTitle": "Small burguer piece",
              "variantDesc": "",
              "price": "9.20"
            },
            {
              "variantTitle": "Medium burguer piece",
              "variantDesc": "",
              "price": "11.00"
            },
            {
              "variantTitle": "Big burguer piece",
              "variantDesc": "",
              "price": "12.00"
            }
          ]
        }
      ]
    }
  ]
}</code>
</pre>

## Themes
In `src/styles/themes` you can find different themes variables files.
Setup the theme name at `restaurants.json` them key. Set it up to the name of one of the files under `src/styles/themes`.