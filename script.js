//1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// a.Get all the countries from Asia continent /region using Filter function:
// Answer:
               var request=new XMLHttpRequest()
               request.open("GET","https://restcountries.com/v3.1/all", true)
               request.send()
               request.onload=function()
               {
                var data=request.response;
                var result =JSON.parse(data);
                var result2 =result.filter((count)=>(count.region==="Asia" ))
            result2.map((count)=>console.log(count.name.common));
               }
               





//b.Get all the countries with a population of less than 2 lakhs using Filter function
//Answer:
   var request1=new XMLHttpRequest()
   request1.open("GET","https://restcountries.com/v3.1/all", true)
   request1.send()
   request1.onload=function()
   {
    var data=request1.response;
    var result =JSON.parse(data);
       var result3=result.filter((ele)=>ele.population<200000)
       result3.map((ele2)=>console.log(ele2.name.common))
   }


//c.Print the following details name, capital, flag, using forEach function
//Answer:
 var request2=new XMLHttpRequest()
   request2.open("GET","https://restcountries.com/v3.1/all", true)
   request2.send()
   request2.onload=function()
   {
    var data=request2.response;
    var result =JSON.parse(data);
     var name=result.forEach((ele4)=>console.log (`Name:${ele4.name.common}) Capital:${ele4.capital} flag:${ele4.flag}`))
   }


//d.Print the total population of countries using reduce function
// Answer:
 var request3=new XMLHttpRequest()
   request3.open("GET","https://restcountries.com/v3.1/all", true)
   request3.send()
   request3.onload=function()
   {
    var data=request3.response;
    var result =JSON.parse(data);
    var result4=result.reduce((x,z)=>x+z.population,0)
    console.log(result4);
   }


//e. Print the country that uses US dollars as currency.
//Answer:

var request4=new XMLHttpRequest()
   request4.open("GET","https://restcountries.com/v3.1/all", true)
   request4.send()
   request4.onload=function()
   {
    var data=request4.response;
    var result =JSON.parse(data);
    var currency = result.filter((value)=> value.currencies && value.currencies.USD)
        currency.forEach((value)=>console.log(value.name.common))

}