## About Node Application Skeleton

Node Application Skeleton is a basic structure that builds on MVC based (Model, View, Controller) for starter purpose where people can just clone this repository and start to development without waisting their time for installation, configuration and building structure.  

## Features
- Fully customized MVC `(model,view,controller,routes,config)`
- Templating `(partial header,footer,content)`
- Global helper `(define functions and use anywhere in project)`
- Database (mongodb,mysql) `config/database.js`
- View engine ejs [read documentation](https://ejs.co/#install)
- Bootstrap 4 [read documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

## Git not installed  
Windows: [download git](https://git-scm.com/download/win)  
Linux: open cmd and type  `sudo apt-get install git` [complete guid](https://www.liquidweb.com/kb/install-git-ubuntu-16-04-lts/)

## Download and Setup Project  
Zip file [Download nodeappskeleton](https://github.com/iamdeveloper120/nodeappskeleton/archive/master.zip) `OR`  
Open cmd and paste, `git clone https://github.com/iamdeveloper120/nodeappskeleton.git`    
`cd nodeappskeleton`  
`npm install`  
`npm start`  
`localhost:3000` **OR** `http://127.0.0.1:3000`  

## Database configuration
By default database `mongodb` selected but changeable to `mysql` as well  
jump to file `config/database.js`  
`cloud` : if you are connecting cloud database, set true `cloud:true`
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
