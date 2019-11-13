var mongoose = require('mongoose');
var moment = require('moment');
var momongo = require('mongodb-moment');
var Index = new mongoose.Schema({

    ImageId: String,
    Name1: String,
    Name2: String,
    Name3: String,
    ImagePath: String,
    UserInput1: String,
    InputTime1: '',
    UserInput2: String,
    InputTime2: '',
    UserInput3: String,
    InputTime3: '',

});

Index.methods.index = function (index) {
    if (InputTime1 === '') {
        this.InputTime1 = moment();
        this.UserInput1 = index;
    }
    else if (InputTime2 === '') 
    {
        this.InputTime2 = moment();
        this.UserInput2 = index;
    }
    else if (InputTime3 === '') 
    {
        this.InputTime3 = moment();
        this.UserInput3 = index;
    }
    else { //All of it was indexed already somehow
        return;
    }
    console.log(moment() + " time indexed, with " + index);
};




mongoose.model('IndexModel', Index); //This makes whatever model I created live!!!
