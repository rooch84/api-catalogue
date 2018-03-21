require('./main.less');

import React from 'react';
import ReactDOM from 'react-dom';
import Catalogue from '../../src/index.js';

const data = [
  {
    id: 1,
    name: "Branch Details",
    icon: "https://developer.barclays.com/api/apis/d2464c5e-93ca-4dc5-924c-8fb18724ee51.bdn/avatar",
    content: [
      "Bullet Point 1",
      "Bullet Point 2",
      "Bullet Point 3"
    ],
    button: {label: "View", enabled: true}
  },
  {
    id: 2,
    name: "Product Details",
    icon: "https://developer.barclays.com/api/apis/a9e56a0b-c995-4091-bd54-c95557333538.bdn/avatar",
    content: "Promo content (maximum 1 paragraph)",
    button: {label: "View", enabled: true}
  },
  {
    id: 3,
    name: "ATM Locator",
    icon: "https://developer.barclays.com/api/apis/088f4ffc-6e25-404d-8b19-61bebb16bee4.bdn/avatar",
    content: [
      "Bullet Point 1",
      "Bullet Point 2",
      "Bullet Point 3"
    ],
    button: {label: "Coming soon...", enabled: false}
  }

];

ReactDOM.render(
    <Catalogue data={data} />,  document.getElementById('container')
);
