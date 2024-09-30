 // how to access Specific proprty value from object?
 // Syntax:
 // var value = <object name>.<keyname>

 // create a object to store iphone product Information
 var Iphone = {
     ModelName: "15 pro",
     color: " Gold ",
     Ram: "16GB",
     Storage: "1TB"
 }

 console.log(Iphone);
 console.log("--------------------------------------------------")
     // Read the data

 var x = Iphone.ModelName

 console.log(x);

 var y = Iphone.Ram

 console.log(x, y);
 console.log("--------------------------------------------------")

 var z = Iphone["storage"];

 console.log(z);


 console.log("--------------------------------------------------")
     // How to Insert New property?
     // Syntax : objectName.key = value

 Iphone.website = "www.Iphone.com";

 console.log(Iphone);

 // Objectname[Object] = "Value";
 Iphone["Price"] = "1,80,000"
 console.log("--------------------------------------------------")

 // objectname["existing property key"] = "value"
 // objectname.existing property key = "value"
 Iphone["ModelName"] = "16 pro max";
 console.log(Iphone);
 console.log("--------------------------------------------------")
     // delete the data : 
     // delete is an Operator 
     // syntax 
     // delete object.name = "value "
     // delete object["key"] = "value"

 delete Iphone.Storage;
 console.log(Iphone);
 // Nested Object
 var Iphone = {
     ModelName: "15 pro",
     color: " Gold ",
     Ram: "16GB",
     Storage: "1TB",
     rating: {
         rate: 4.8,
         count: 23456
     }
 }
 var r = Iphone.rating;
 console.log(r);

 var s = Iphone.rating.rate;
 console.log(s);


 // Assignmet : Diff btw bracket([]) and dot (.) notation?