db.createUser({
    user: 'lemuel',
    pwd: 'docker',
    roles: [
        {
            role: 'readWrite',
            db: 'w4'
        }
    ]
});

db = new Mongo().getDB('w4');

db.createCollection('users');

db.users.insert([
    { "name": "Lemuel Coelho Zara", "email": "lemuel@mail.com" },
    { "name": "João da Silva", "email": "joao@mail.com" },
    { "name": "Maria Stefanin", "email": "maria@mail.com" },
    { "name": "Pedro Bonifácio", "email": "pedro@mail.com" }
]);