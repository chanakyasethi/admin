const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
// const User = require('../models/user');
const config = require('../config/config');
const http = require('http');
const request = require('request');
const _ = require('lodash');
const mongoose = require('mongoose');

const Group = require('../models/group');

var userRoute = config.USER_SERVICE_PORT + '/user/';
const app = 'admin';

const winston = require('../logger').logger;
var logging = (config.logging == 'true');
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
  pid = process.pid;
}

router.post('/add',(req,res) => {
    console.log("==========================================")
    console.log("==========================================")
    console.log('asdldhwudwhdwudwhdwjdwdoqwiwdhnw',req.body);
    console.log("==========================================")
    console.log("==========================================")
            console.log('hehehehehehehehe',req.body.grpName.groupName)
            console.log('qwqwqwqwqwqqwqwqwqwq',req.body.grpMember)

          let newGrp = new Group({
              groupName:req.body.grpName.groupName,
              users: req.body.grpMember
          })
          console.log('///////////////////////=====',newGrp)
          Group.create(newGrp,function(err,savedGrp){
              if(err){
                winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
                res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
              } else {
                  res.json(savedGrp);
                  console.log("savedGrp");
              }
          })
})

router.get('/getGroups',(req,res)=>{
    console.log("=================================================")
    console.log("req.body",req.query);
    console.log("=================================================") 
    group = {};   
    if(req.query.groupName !=undefined && req.query.groupName != "")
        group.groupName={$regex:new RegExp(req.query.groupName,'i')};
    Group.find(group).exec(function(err,groups){
        if(err){
            winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
            res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
        } else {
            console.log(groups);
        res.json(groups);            
        }
    })
})

router.get('/getgroup/:id',(req,res)=>{
    console.log("getgroupby id",req.params.id);
    Group.find({groupName:req.params.id} , function(err,group){
        if(err){
            winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
            res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
        } else {
            console.log(group);
            res.json(group);            
        }
    })
})

router.put('/abc/edit',(req,res)=>{
    console.log("++++++++++++++++++++++++++++++++");
    console.log("getgroupby id",req.body);
    let grps = {
        groupName:req.body.grpName.groupName,
        users:req.body.grpMember
    }
    console.log("getgroupby id",grps);
    
    Group.findOneAndUpdate({groupName:req.body.gid},grps,{new:true}, function(err,group){
        if(err){
            winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
            res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
        }
        else{
            console.log(group)
            res.json(group);
        }
    })
})

router.delete('/deletegroup/:id',(req,res)=>{
    console.log("=====================================")
    console.log('delete Called')
    console.log("=====================================")    
    Group.findByIdAndRemove(req.params.id,function(err){
        if(err){
            console.log(err)
        } else {
            // Group.find().exec((err,groups)=>{
            //     res.json(groups)
            // })
        }
    })
})

module.exports = router;

