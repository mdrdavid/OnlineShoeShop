
import bcrypt from 'bcryptjs'
const users = [
    {
    name: "admin",
    email: "davidmatovu88@gmail.com",
    password: bcrypt.hashSync("admin",10),
    isAdmin: true
},
{
    name: "User",
    email: "user@gmail.com",
    password: bcrypt.hashSync("1234",10),
}
    
]

export default users;
