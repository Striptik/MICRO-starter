# MICRO-starter
A simple starter for micro (by Zeit) which is a small and lightweight node api. Add needed packages for proper and reusable code.

Eslint is installed and configured with airbnb config and flow. There's few modifications in the eslintrc config. 

Flow is installed and configured with the .flowconfig. The code is transpilled by  Babel and the Javascript use is in lib/ directory

There's also Jest installed, but no config yet.

-------

### Setup



First, clone the repository : 

``` git clone https://github.com/Striptik/MICRO-starter.git ```



Then, install the dependencies : 

``` yarn | npm install ```


Finnaly, you can launch it with

``` yarn run start | npm run start  ``` 
OR
```  yarn run dev | npm run dev ``` (local developpement using micro-dev)



### Usage


You can add your own routes in the server.js file. You just have to use the same format and don't forget flow typing

``` 
     const route: Function = (req: Object, res: Object): void => {
       //... Your code

       return send (res, 200, {body});
     };
```



You also have to declare your route


```
  module.exports = router(
    get('/', hateoas),
    post('/user', newUser),
    get('/user/{id}', getUser),
    //... register your routes here
  );
```


### Next ?


Write Test :
https://facebook.github.io/jest/docs/en/api.html


Lot of features and documentation : 
https://github.com/amio/awesome-micro


More documentation about Micro : 
https://github.com/zeit/micro

