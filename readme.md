## About Node Application Skeleton

Node Application Skeleton is a basic structure that builds on MVC based (Model, View, Controller) for starter purpose where people can just clone this repository and start to development without waisting their time for installation, configuration and building structure.  

## Features
- Fully customized MVC `(model,view,controller,routes,config)`
- Templating `(partial header,footer,content)`
- Global helper `(define functions and use anywhere in project)`
- Database (mongodb,mysql) `config/database.js`
- View engine ejs [read documentation](https://ejs.co/#install)
- Bootstrap 4 [read documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

## Download  
Zip file [Download nodeappskeleton](https://github.com/iamdeveloper120/nodeappskeleton/archive/master.zip) `OR`  
Open cmd and paste, `git clone https://github.com/iamdeveloper120/nodeappskeleton.git`  

## Git not installed  
For windows: [download git](https://git-scm.com/download/win)  
For linux: open cmd and type  `sudo apt-get install git` [complete guid](https://www.liquidweb.com/kb/install-git-ubuntu-16-04-lts/)

## How to install Packages  
- Step1: move to `nodeappskeleton` using cmd
- Step2: `npm install`
- Step3: `npm start`
- Step4: open browser `localhost:3000` **OR** `http://127.0.0.1:3000`  

## Database configuration
default database is `mongodb` can also change it to `mysql`  
jump to file `config/database.js`
```javascript
var defaultdb ='mongodb';
module.exports = {
    defaultDbClient: function(){
        return defaultdb;
    },
    getDbConfigruation: function(){
        return {
            'username':'',
            'password':'',
            'host':'',
            'port':'',
            'database':'',
            'cloud':false
        }
    },

}
```
## Security Vulnerabilities  
If you discover a security vulnerability within Node App Skeleton, please send an e-mail to [Muhammad Farhan](https://www.linkedin.com/in/iamdeveloper120/) via [itianz@outlook.com](mailto:itianz@outlook.com). All security vulnerabilities will be promptly addressed.

## License  
The Node App Skeleton is open-sourced and licensed under the [MIT license](https://opensource.org/licenses/MIT).
