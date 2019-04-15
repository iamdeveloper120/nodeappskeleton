## About Node Application Skeleton

Node Application Skeleton is a basic sekelton applocation that build on MVC based (Model, View, Controller) for starter purpose where people can just clone this repository and start to development without waisting time for installation, configuration and building structure for their app. This repository contain the followings:

- bin
    + www
- models
    + homeModel.js
- views
    + error.ejs
    + index.ejs
- controllers
    + homeController.js
- helpers
    + globalHelper.js
- gitignore
    + node_modules
    + *.txt
    + .env
    + .sass-cache
    + package-lock.json
- app.js
- package.json

## Download 
Two ways to download this repository  
- Zip file (move to top, click on most right green where is says `Clone or download`)
- Open cmd and paste, `git clone https://github.com/iamdeveloper120/nodeappskeleton.git`

## How to install Packages

after you have cloned `nodeappskeleton` repository, move to this folder, open in current working directory do followings
`npm install && npm install --save-dev nodemon && npm install nodemon -g`

**Start Your Application >** `npm start`  

## Nodemon

This package is build specially to restart your server automatically when a file is changed or saved otherwise after each file changes we have to restart server manually. you can start your application by just typing `nodemon` in cmd. hit `ctrl+c` to exit 

## Security Vulnerabilities

If you discover a security vulnerability within Node App Skeleton, please send an e-mail to [Muhammad Farhan](https://www.linkedin.com/in/iamdeveloper120/) via [itianz@outlook.com](mailto:itianz@outlook.com). All security vulnerabilities will be promptly addressed.

## License

The Node App Skeleton is open-sourced and licensed under the [MIT license](https://opensource.org/licenses/MIT).
