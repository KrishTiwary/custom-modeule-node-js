const register = function(username){
    console.log(`User ${username} has been registered`);
}

const login = function(username,password){
    console.log(`User ${username} has been loged in`);
}
/*If you have single function in module then use below code */
//module.exports = register
/*If yiu have multi function then use below code */

module.exports = {
    register,
    login
}