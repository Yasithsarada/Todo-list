const router = require('express').Router();
let Task = require('../model/Task')


router.route("/add").post( (req,res)=> {

    const { Tname, date, done } = req.body;
    // console.log(req.body);
    const newTask = new Task({
        Tname,
        date
    })

    newTask.save().then(() => {
        res.status(200).send(newTask);
    }).catch((err) => {
        res.status(500).send(err);
    })


})

router.route("/").get( (req,res) => {

    Task.find().then( (tasks) => {
        res.status(200).send(tasks)
    }).catch( (err) => {
        res.status(500).send(err)
})
})

router.route("/update/:id").post(async(req , res) => {
    let userId = req.params.id;

    const {Tname , date}  = req.body;

    const updateTask= {
        Tname,
        date
    }

    const update = await Task.findByIdAndUpdate(userId , updateTask);
    res.status(201).send(update);

// .then(() => {
//     res.status(201).send(update);
// }).catch((err) => {
//     res.status(500).send(err);
//  })
})

router.route("/delete/:id").delete(async (req ,res) =>  {
    let userId = req.params.id;

    await Task.findByIdAndDelete(userId);
    res.status(204).send('deleted')
    // .then( () => {
    //     res.status(204).send(Task);
    // }).catch ( (err) => {
    //     console.log(err.message);
    //     res.status(500).send(err);
    // })    

})

router.route("/get/:id").get( async (req,res) => {
    let userId = req.params.id;

     await Task.findById(userId)
.then( (Task) => {
    res.status(200).send(Task);
    }).catch ( (err) => {
    console.log(err.message)
    res.status(500).send(err)
})
})
module.exports = router;