const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
    users: [
      email=String   
    ],
    groupName: String
}) 

const Group = module.exports = mongoose.model('Group',GroupSchema);

module.exports.getGroupById = function(id,callback){
    Group.findById(id,callback);
}
