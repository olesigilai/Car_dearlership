var OrderNew = [];
function Car(carBrand,carTransmission,carColor,carFuel) {
    this.carBrand=carBrand;
    this.carTransmission= carTransmission;
    this.carColor=carColor;
    this.carFuel=carFuel;
    
}
var carPrice= [4000000,3000000]
Car.prototype.totalPrice = function(){
    return (this.carColor + this.carFuel + this.carTransmission)
};
Car.prototype.carS = function () {
    if (this.carTransmission== 4000000) {
        return "Manual"
        
    } else if (this.carTransmission == 3000000) {
        return "Automatic"
    } 
}
Car.prototype.carC = function () {
    if (this.carColor == 150000) {
        return "White"
        
    } else if (this.carColor == 200000) {
        return "Red"
    } else if (this.carColor == 250000) {
        return "Grey"
    }
}
Car.prototype.carT =function(){
    if (this.carFuel == 200000){
        return "Diesel"
    }
    else if (this.carFuel == 100000){
        return "Petrol"
    }
    
}

$("#checkout").click(function (event) {
    
    var carBrand = $("#brand").val();
    
    var carTransmission = parseInt( $("#transmission").val());
    
    var carColor = parseInt( $("#color").val());
    
    var carFuel =parseInt( $("#fuel").val());
    
    
    
    
    var newCar = new Car(carBrand, carTransmission, carColor, carFuel); 
    
    
    console.log(newCar)
    
    console.log(newCar.carBrand)
    OrderNew.push(newCar);
    console.log(OrderNew)
    
    $("#brand").val("");
    $("#transmission").val("");
    $("#color").val("");
    $("#fuel").val("");
   
     
    totalAmount = 0
    for (let i = 0; i < OrderNew.length; i++ ){
        totalAmount += OrderNew[i].totalPrice();
        console.log(totalAmount)
    }
    
    $("#ordersTaken").append(
        "<tr>" +
        '<td scope="orderCalculation">' +
       newCar.carBrand +
        "</td>" +
        "<td>" +
        newCar.carS () +
        " " +
        newCar.carTransmission+ 
        "</td>" +
        "<td>" +
        newCar.carC () +
        " " +
        newCar.carColor + 
        "</td>" +
        "<td>" +
        newCar.carT () +
        " " +
        newCar.carFuel+ 
        "</td>" +
        "<td>" +
        newCar.totalPrice() +
        "</td>" +
        "</tr>"

    );
    $("#ordersTaken").append("");
    if (OrderNew.length > 0) {
        $("#form-heading").empty();
        $("#form-heading").append("Make A New Order");
    }
    
    $("#totalAmount").append(totalAmount);

});
$(document).ready(function() {
    $("#h3").click(function() {
      $("#card").fadeIn();
      
    });
    $("#card").click(function() {
        $("#card").fadeOut();
  });
  $("button").click(function() {
    $("#ordersTaken").fadeIn();
});
});