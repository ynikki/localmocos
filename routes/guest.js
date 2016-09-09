module.exports = function(express,app,path,bodyParser,querystring) {
 var router = express.Router();

 var testJson={
  "name":"Admin",
  "response":"Ok"
};

  /**************** Home Page ***********************/




  


  /**************** Log In ***********************/
  
app.get('/Logout',function(req, res, next) {
    testJson.name="Logout";
    res.json(testJson);
});





  /**************** Log Out **********************/
app.get('/Login',function(req, res, next) {
      testJson.name="LogIn";
    res.json(testJson);
});
  
  /***************** Search Products **************/

app.get('/Search',function(req, res, next) {
    // Get Data on Search
      productList=[{"name":"Whatever",
              "description":"I don't know",
              "price":"2.81",
              "image":"./Images/Okuhara/6688909_orig.jpg"},
              {"name":"Yadiyadi",
              "description":"Hidiho",
              "price":"12.81",
              "image":"./Images/Okuhara/5595049_orig.jpg"} ]

    // Pass to Pug
    
    sellerList=[{"phone":"(808)848-0581",
              "email":"info@okuharafoods.com",
              "website":"www.okuharafoods.com",
              "address":"881 North King Street. Honolulu, HI, 96817",
              "image":"./Images/1442369634.png"} ]
    
  //  res.json(productList);
    res.render('searchResults',{productList:productList,sellerList:sellerList})
});


    return router;
}