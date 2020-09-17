import { User } from './User';
import { Company } from './Company';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

/* below global variable was available in browser after we added script
tag in index.html but to make it available in project we have installed
maps type definition file  */
new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
