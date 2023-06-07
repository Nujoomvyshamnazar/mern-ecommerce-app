import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

const users = [
    {
       name: 'nujoom',
       email: 'dev.nujoom@gmail.com',
       password: bcrypt.hashSync('123456',10),
       isAdmin : true
    },
    {
        name: 'ashina',
        email: 'ashina.nujoom@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin : true
     },
    
     {
        name: 'shabi',
        email: 'shabi@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin : true
     },
    
     {
        name: 'misba',
        email: 'misba@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin : true
     },
     

]

export default users;