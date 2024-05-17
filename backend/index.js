const express = require("express")
const app = express();
const { createTodo, updateTodo } = require ("./types");
const { todo } = require("./db") 


app.use(express.json())

app.post("/todo", async function(req,res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }

    await todo.create({
         title: createPayload.title,
         description: createPayload.description,
         completed: false
    })
    res.json({
        msg:"Todo created"
    })

})

app.get("/todo", async function(req, res) {
   
   const value = await todo.find({})
   res.json({
    msg:value
   })
})

app.put("/completed", async function(req,res) {
     
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    await todo.update({
        _id : req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Marked as completed"
    })
})

app.listen(3000)