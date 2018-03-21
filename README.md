# Catalogue API

A React component for viewing catalogue items.  

A live version can be seen at http://api.chrisrooney.co.uk

## Build

`webpack` and `npm` are required to build the api (ideally, webpack should be globally installed).  To build the project, run the following..

`npm install`

`npm run build`

## Run

To test the catalogue in development mode, run...

`npm run start`


## Usage

To use the component, import `dist/catalogue.js`, and pass the item array as a data attribute:

 ```
 const data = [
   {
     id: 1,
     name: "Branch Details",
     icon: "img.png",
     content: [
       "Bullet Point 1",
    ],
     button: {label: "View", enabled: true}
   }
 ];

 ReactDOM.render(
     <Catalogue data={data} />,  document.getElementById('container')
 );
 ```
