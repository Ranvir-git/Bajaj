const { match } = require("assert");
const express = require("express")
const app= express();

app.use(express.json());


app.post('/process_array',(req,res)=>{
  const {array}= req.body;
  const status = "Success";
  

  const evenNumbers = array.filter(num=> num%2 ==0 && typeof num==='number');
  const oddNumber = array.filter(num=>num%2!==0 && typeof num ==='number');
  const uppercase = array.filter(char => typeof char ===' string ' && char.match(/[a-zA-Z]/)).map(char=>char.toUpperCase());

  const reponse = {
    status , 
    user_id:"ranvir_kumar",
    email:"ranvir2143.be21@chitkara.edu.in",
    roll_numbers:"2110992143",
    odd_numbers:oddNumber,
    even_numbers:evenNumbers,
    alphabets:uppercase
  }
  return res.status(200).json(reponse);
})


app.listen(3000, ()=>{
  console.log("server is runnning at port :"+3000);
})
