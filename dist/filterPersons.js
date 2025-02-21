"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persons = void 0;
exports.filterPersons = filterPersons;
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' },
];
function filterPersons(personType, criteria) {
    return exports.persons.filter((person) => {
        if (person.type !== personType)
            return false;
        for (const key in criteria) {
            if (person[key] !== criteria[key])
                return false;
        }
        return true;
    });
}
