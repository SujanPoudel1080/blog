const bcrypt = require('bcryptjs')

const hashPassword = (password) => bcrypt.hash(password, 10);

const comparePassword = (password, exiPassword) => {
    return bcrypt.compare(password, exiPassword);
}

module.exports={
    hashPassword,
    comparePassword
}

