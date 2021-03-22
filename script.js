var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

function checkStringer(data){
  var that = this;
  this.ele = document.createElement("div");
  this.eleText = document.createElement("div");
  this.eleText.style.color = "black";
  
  if(data === 15){
    this.eleText.innerHTML = "The value is " + data + " and is equal to 15";
  }
  else if(data < 10){
    this.eleText.innerHTML = "The value is " + data + " and is below 10";
  }
  else if(data.length > 5){
    this.eleText.innerHTML = "The value is " + data + " and has a character length more than 5";
  }
  else{
    this.eleText.innerHTML = "The value is " + data + " and is normal";
  }
  
  this.ele.addEventListener("click", function(){
    that.clickLine();
  });
  this.ele.appendChild(this.eleText);
  document.body.appendChild(this.ele)
}

checkStringer.prototype.clickLine = function(){
  if(this.eleText.style.color === "black"){
    this.eleText.style.color = "blue";
  }
  else if(this.eleText.style.color === "blue"){
    this.eleText.style.color = "black";
  }
}

function newCheck(){
for(var i = 0; i < stringers.length; i++){
  new checkStringer(stringers[i])
  }
}

newCheck();