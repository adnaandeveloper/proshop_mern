
import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('12345678', 10),
        isAdmin: true
    },
    {
        name: 'Jogn Doe',
        email: 'Jogn@Jogn.com',
        password: bcrypt.hashSync('12345678', 10)
    },
    {
        name: 'Macallin User',
        email: 'macallin@macallin.com',
        password: bcrypt.hashSync('12345678', 10)
    }
]


export default users