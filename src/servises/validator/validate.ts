export const regular = (()=>{

    const regular:Record<string, RegExp> = {
        name: /^[A-ZА-Я][a-zа-я]+$/ ,
        email: /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/,
        login: /^(?=.*[a-zA-Z])[\w-]{3,20}$/,
        password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,40}$/,
        phone: /^[+]?[0-9]{10,15}$/,
        message: /[^\s]/,
    }

    const fullName = function(value: string){
        return regular.name.test(value);
    }

    const email = function(value: string){
        return regular.email.test(value);
    }

    const login = function(value: string){
        return regular.login.test(value);
    }

    const password = function(firstValue: string){
        return regular.password.test(firstValue);
    }
    
    const complitePassword = function(password){

    }

    const phone = function(value: string){
        return regular.phone.test(value);
    }

    const message = function(value: string){
        return regular.message.test(value);
    }

    return{
        fullName,
        email,
        login,
        password,
        phone,
        message,
    }
})();
