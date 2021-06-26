// import * as axios from 'axios';

// const instance = axios.create({
//     withCredentials: true,
//     baseURL: '',
//     headers: {
//     }
// })

const testData = {
    users:[
        {
            userId: 1,
            login: 'andriihladkyi96@gmail.com',
            password: '11111111'
        }
    ],
    products:[],
}

export const authAPI = {
    singUp(email,password) {
        testData.users.push( { userId: testData.users.length + 1 ,login:email,password:password } );
        // return instance.get('auth/me').then(response => response.data)
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('user added!');
            }, 100);
          });
        return promise;
    },
    login(email, password) {
        // return instance.post('auth/login', { email, password, rememberMe,captcha })
        const promise = new Promise((resolve, reject) => {
            if(testData.users.some((user)=>user.login === email && user.password === password)){
              resolve('Login successful!');
            }else{
              reject('Invalid login or password.');
            }
          });
        return promise
    },
    logout() {
        // return instance.delete('auth/login')
    }

}