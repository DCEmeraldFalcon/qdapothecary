window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();
let numLeft = 0;
let numRight = 0;

let medicalCondition = object("6qvNL2Wjskk").state;
let medicationInStock = object("64kZVDv2MqS").state;
let dateOfBirth = object("5xRXZcj4Mhr").state;
let pickUpTime = object("63hciMRUjZJ").state;
let phoneNumber = object("68TxJWZrN9E").state;
let fullName = object("67LPgRyVVN3").state;
let password = object("6o89oUy3zFD").state;
let paymentMethod = object("5gYnXjTcivJ").state;
let address = object("6cplEvdtds8").state;
let driversLicense = object("6ersiZ2K8Pq").state;
let allergies = object("6UPOL9Y4Uv2").state;
let insuranceCard = object("6Uqm0v0lbXj").state;

console.log("Got this far.");
if (medicalCondition === "_default") {
	numRight++;
	}
if (password === "_default") {
	numRight++;
	}
if (paymentMethod === "_default") {
	numRight++;
	}
if (driversLicense === "_default") {
	numRight++;
	}
if (medicationInStock === "_default") {
	numLeft++;
	}
if (dateOfBirth === "_default") {
	numLeft++;
	}
if (pickUpTime === "_default") {
	numLeft++;
	}
if (phoneNumber === "_default") {
	numLeft++;
	}
if (fullName === "_default") {
	numLeft++;
	}
if (address === "_default") {
	numLeft++;
	}
if (allergies === "_default") {
	numLeft++;
	}
if (insuranceCard === "_default") {
	numLeft++;
	}
console.log(numLeft);
console.log(numRight);
player.SetVar("numLeft",numLeft);
player.SetVar("numRight",numRight);
}

};
