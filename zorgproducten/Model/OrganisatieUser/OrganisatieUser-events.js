
model.OrganisatieUser.events.onInit = function() {
	this.userID = currentUser().ID;
	this.gebruiker = currentUser().fullname;
	this.datum_invoer = new Date();
	this.datum_mutatie = new Date();
};


model.OrganisatieUser.events.onSave = function() {
	this.userID = currentUser().ID;
	this.gebruiker = currentUser().fullname;
	this.datum_mutatie = new Date();
};

model.OrganisatieUser.events.onInit = function() {
	// Add your code here;
};
