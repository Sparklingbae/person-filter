import { filterPersons } from './filterPersons';

const usersByOccupation = filterPersons('user', { occupation: 'Chimney sweep' });
console.log(usersByOccupation);

const adminsByRole = filterPersons('admin', { role: 'Administrator' });
console.log(adminsByRole);