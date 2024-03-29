const person = {name: "jack Willium", age: 19, job: "Facebook", gfName: "Emma Watson", Address: "Kochukhet", phoneNumber: "017144444527", friends: ['Tom hanks', 'John Harris', 'Shakespere']}


// This is called deStructuring. Breaking the structure
const {phoneNumber, gfName, Address, Salary} = person;



// const gfName = person.gfName
// const phone = person.phoneNumber


// console.log(gfName);
console.log(phoneNumber);
console.log(gfName);
console.log(Address);
console.log(Salary);


const friends = ["Shakib Khan", "Arman Khan", "Amir Khan", "Salman Khan"]
const [firstFriend, ...restFriends] = friends
console.log(firstFriend);
console.log(restFriends);