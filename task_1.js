const express=require("express");
const app=express();
const axios=require("axios");
const { response, urlencoded } = require("express");
const PORT=3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get("/post",async(req,res)=>{
const resPost= await axios.get("https://jsonplaceholder.typicode.com/posts");
const resComment=await axios.get("https://jsonplaceholder.typicode.com/comments");
const result=resPost.data.map((x)=>
{
     let comments=resComment.data.filter((y)=>y.postId==x.id);
     console.log(comments)
     x.comments=comments;
     console.log(x);
     return x;
});

res.send(result);
});


app.get("/",(req,res)=>{
    res.send("hello test");
})

// // userId: 10,
// id: 100,
// title: 'at nam consequatur ea labore ea harum',
// body: 'cupiditate quo est a modi nesciunt soluta\n' +
//   'ipsa voluptas error itaque dicta in\n' +
//   'autem qui minus magnam et distinctio eum\n' +
//   'accusamus ratione error aut'



//comment();

// {
//     postId: 20,
//     id: 100,
//     name: 'et sint quia dolor et est ea nulla cum',
//     email: 'Leone_Fay@orrin.com',
//     body: 'architecto dolorem ab explicabo et provident et\n' +
//       'et eos illo omnis mollitia ex aliquam\n' +
//       'atque ut ipsum nulla nihil\n' +
//       'quis voluptas aut debitis facilis'
//   }

// Posts [{
// 	id;
// 	userId;
// 	title;
// 	body;
// 	comments [];
// },


app.listen(PORT,()=>{
    console.log("server listening to port 3000");
})
