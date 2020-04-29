const express= require('express')
const mongoose=require('mongoose')
const bodyParser= require('body-parser')
const cors=require('cors');



const keys= require('./config/keys')

require('./models/Issue_Tracker')

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })

const Issue= mongoose.model('issues')
const app=express()

app.use(cors())
app.use(bodyParser.json())



app.post('/api/issues',(req,res)=>{
    
        const {title, text, created,assigned, status}=req.body

        const issue= new Issue({
            title,
            text,
            created,
            assigned,
            status
        })

        issue.save().then(()=>{
            res.json(issue)
                }).catch((e)=>{
                    res.status(400).send(e)
                })
        })

app.get('/api/issues',(req,res)=>{
    Issue.find({}).then(issues=>{
        res.send(issues)
    })
    
})

app.get ('/api/issues/:id',(req,res)=>{
    console.log('get single issue',req.params.id)
    const _id= req.params.id
    Issue.findById(_id).then((issue=>{
        res.send(issue)
    }))
    
})

app.patch('/api/issues/:id',(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    const _id=req.params.id
    const {title, text, created,assigned, status}=req.body
    Issue.findByIdAndUpdate(_id, req.body).then(issue=>{
        console.log('put issue',issue)
        issue.save().then(()=>{
            res.json(issue)
        }).catch((e)=>{
            res.status(400).send(e)
        })
    })
    
})

app.delete('/api/issues/:id',(req,res)=>{
    const _id=req.params.id
    Issue.findByIdAndDelete(_id).then(issue=>{
        res.send(issue)
    })
})
        

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!

    const path = require('path');

    app.use(express.static(path.resolve(__dirname, '../client/build')));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
}


const PORT= process.env.PORT || 5000

app.listen(PORT)

// Mongo Atlas Dev
// User: cortazar11
// Pwd: uTLSmcjbrDLg9aM0
// Connection String: mongodb+srv://cortazar11:<password>@cluster0-188fz.mongodb.net/test?retryWrites=true&w=majority

// Mongo Altas Prod
// User. cortazar11
// Pwd: 7pKHfpvbNXxCfofx
// mongodb+srv://cortazar11:7pKHfpvbNXxCfofx@cluster0-uzmnf.mongodb.net/test?retryWrites=true&w=majority