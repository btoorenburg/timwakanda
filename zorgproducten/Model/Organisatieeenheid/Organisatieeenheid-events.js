
model.Organisatieeenheid.events.onInit = function() {
	this.userID = currentUser().ID;
	this.gebruiker = currentUser().fullName;
	this.datum_invoer = new Date();
	this.datum_mutatie = new Date();
};

model.Organisatieeenheid.events.onSave = function() {
	this.userID = currentUser().ID;
	this.gebruiker = currentUser().fullName;
	this.datum_mutatie = new Date();
};