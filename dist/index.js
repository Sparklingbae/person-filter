"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterPersons_1 = require("./filterPersons");
const usersByOccupation = (0, filterPersons_1.filterPersons)('user', { occupation: 'Chimney sweep' });
console.log(usersByOccupation);
const adminsByRole = (0, filterPersons_1.filterPersons)('admin', { role: 'Administrator' });
console.log(adminsByRole);
