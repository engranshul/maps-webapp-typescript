import { User } from './User';
import { Company } from './Company';
import { CustomMap} from './CustomMap'

const customMap =new CustomMap();

const user = new User();
console.log(user);
const company = new Company();
console.log(company);

customMap.addCompanyMarker(company);
customMap.addUserMarker(user);