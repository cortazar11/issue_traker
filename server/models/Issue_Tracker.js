const mongoose=require('mongoose')
const {Schema}=mongoose

const issuesSchema= new Schema({
    title: String,
    text: String,
    created: String,
    assigned: String,
    status: String

})

mongoose.model('issues', issuesSchema)