function Phone(brand, price, color, size, camera){
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
	this.camera = camera;
	}

Phone.prototype.printInfo = function(){
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " zlotych, the size is " + this.size + " inches and camera has " + this.camera + "-megapixel.");
	}

var samsungGalaxyS6 = new Phone("Samsung", 2700, "black", 5.8, 12);
var iPhone6S = new Phone("Apple", 3700, "grey", 4.7, 12);
var iPhone6SPluse = new Phone("Apple", 4700, "rose", 5.5, 12);
var motorolaG5S = new Phone("Motorola", 1555, "white", 5.2, 16);
var nokia8 = new Phone("Nokia", 999, "red", 5.3, 16);
var htcU11 = new Phone("HTC", 2699, "silver", 5.5, 16);


samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
iPhone6SPluse.printInfo();
motorolaG5S.printInfo();
nokia8.printInfo();
htcU11.printInfo();