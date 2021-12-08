// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


let users = [
    new User(3, 'Ryan', 'Giggs', 'giggsy@gmail.com', '380633212121'),
    new User(8, 'Wayne', 'Rooney', 'wazza@gmail.com', '380633212454'),
    new User(4, 'Cristiano', 'Ronaldo', 'cr7@gmail.com', '380633212424'),
    new User(6, 'Paul', 'Scholes', 'ginger@gmail.com', '380633212323'),
    new User(10, 'Michael', 'Carrick', 'carrick@gmail.com', '380633212663'),
    new User(7, 'Dimitar', 'Berbatov', 'berba@gmail.com', '380633212333'),
    new User(2, 'Bruno', 'Fernandes', 'bruno@gmail.com', '380633212332'),
    new User(9, 'Marcus', 'Rashford', 'rash@gmail.com', '380633212105'),
    new User(1, 'Mason', 'Greenwood', 'mason@gmail.com', '380633212301'),
    new User(5, 'David', 'De Gea', 'wall@gmail.com', '380633212114')
]

    // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = users.filter(value => value.id % 2 === 0);

console.log(filterUsers);

let sortUsers = users.sort((a,b) => a.id - b.id);
console.log(sortUsers);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let Clients = [
    new Client(1, 'Bruce', 'Dickinson', 'siren@gmail.com', '380963332211', ['guitar, mediator', 'phone', 'ticket']),
    new Client(2, 'James', 'Hetfield', 'siren@gmail.com', '380963332211', ['guitar, mediator', 'phone']),
    new Client(3, 'Jannick', 'Gers', 'siren@gmail.com', '380963332211', ['guitar, mediator', 'phone', 'ticket', 'sticks']),
    new Client(4, 'Nico', 'McBrain', 'siren@gmail.com', '380963332211', ['guitar, mediator', 'phone', 'ticket', 'piano', 'drums']),
    new Client(5, 'Kirk', 'Hammet', 'siren@gmail.com', '380963332211', ['guitar, mediator']),
    new Client(6, 'Lars', 'Ulrich', 'siren@gmail.com', '380963332211', ['guitar, strings', 'beer', 'burbon', 'car', 'motorcycle', 'bread', 'butter']),
    new Client(7, 'Steve', 'Harris', 'siren@gmail.com', '380963332211', ['guitar, mediator', 'phone', 'ticket', 'house', 'island', 'laptop']),
    new Client(8, 'Rob', 'Trujillo', 'siren@gmail.com', '380963332211', ['guitar, mediator', 'phone', 'ticket', 'phone']),
    new Client(9, 'Dave', 'Murray', 'siren@gmail.com', '380963332211', ['guitar, mediator']),
    new Client(10, 'Adrian', 'Smith', 'siren@gmail.com', '380963332211', ['guitar, mediator', 'phone', 'ticket', 'book', 'hotel', 'beer']),
]

        let sortByOrder = Clients.sort((a, b) => b.order.length - a.order.length);
console.log(sortByOrder);
