var uuid = require('uuid'); //only need name of package instead of path since from npm

var PenModule = {
  collection: [],
  findPen: function(id,cb){
    for(var i = 0; i <this.collection.length; i++){
      if(this.collection[i].id === id){
        return cb(null, this.collection[i]);
      }
    } //end of for loop over the pen collection
    cb({err:"couldnt be found"});
  },
  create: function(penObj, cb){
    if(!penObj.img || !penObj.name || !penObj.color){
      return cb({err: "Please include all required fields!"});
    }
    var pen = new Pen(penObj.img, penObj.name, penObj.color)
    this.collection.push(pen);
    cb(null, pen);
  },
  update: function(pen, cb){
    for(var i = 0; i <this.collection.length; i++){
      if(this.collection[i].id === pen.id){
        this.collection[i] = pen;
        return cb(null, pen);
      }
    } //end of for loop across array
    cb({err:"Couldnt find a pen with that id"});
  },
  remove: function(id, cb){
    for(var i = 0; i<this.collection.length;i++){
      if(this.collection[i].id === id){
        this.collection.splice(i,1);
        return cb (null, {message: 'success!'});
      }
    }//end of for loop over the array
    //if nothing is found from the for loop that matched the id
    cb({err: "Could not find a pen with that id!"});
  },

};

function Pen (img, name, color){
  this.id = uuid.v4();
  this.img = img;
  this.name = name;
  this.color = color;
}

var bic = new Pen("http://www.concordsupplies.com/_webcache/bicgsm11be_1_2.jpg", "Bic", "Blue");
var ballpoint = new Pen ("http://static2.jetpens.com/images/a/000/036/36803.jpg?s=bad5680d1be0eb4b64867393e84925f7", "Ballpoint", "Green");
var crayon = new Pen ("http://www.minimus.biz/Images/G05-0551401-8120bg.jpg", "Crayon", "Red");

PenModule.collection.push(bic,ballpoint,crayon);
module.exports = PenModule;
