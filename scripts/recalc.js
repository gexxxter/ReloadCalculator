function Calculator(id) {
    this.target = document.getElementById(id);
    this.pricePerPack;
    this.packageSize;
    this.pricePerRound;
    var self = this;

    var button = $('<button>').text();
    $('<label>').text("Geschosspreis pro Packung:").appendTo(this.target);
    this.pricePerPack = $('<input type=text>').css({
        width: 40
    }).val(0).appendTo(this.target);

    $('<label>').text("Packungsgroesse:").appendTo(this.target);
    this.packageSize = $('<input type=text>').css({
        width: 40
    }).val(1).appendTo(this.target);


    $('<label>').text("Preis pro Geschoss:").appendTo(this.target);
    this.pricePerRound = $('<input type=text>').css({
        width: 40
    }).val(0).appendTo(this.target);


    //Bind Event listener
    $(this.packageSize).on('change keyup paste', function(e) {
        self.calculatePrice();
    });
    $(this.pricePerPack).on('change keyup paste', function(e) {
        self.calculatePrice();
    });


}

Calculator.prototype.calculatePrice = function() {
    var pricePerRound = $(this.pricePerPack).val() / $(this.packageSize).val();
    $(this.pricePerRound).val(pricePerRound);
};
