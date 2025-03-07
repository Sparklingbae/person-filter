interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
  }
  
  interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
  }
  
  export type Person = User | Admin;
  
  export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' },
  ];
  
  export function filterPersons<T extends 'user' | 'admin'>(
    personType: T,
    criteria: T extends 'user' ? Partial<Omit<User, 'type'>> : Partial<Omit<Admin, 'type'>>
  ): T extends 'user' ? User[] : Admin[] {
    return persons.filter((person) => {
      if (person.type !== personType) return false;
  
      for (const key in criteria) {
        // @ts-ignore: I'm sure the key exists on person and criteria
        if (person[key] !== criteria[key]) return false;
      }
      return true;
    }) as T extends 'user' ? User[] : Admin[];
  }  