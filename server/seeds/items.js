Meteor.startup(function(){
   Restaurants.remove({});
  var names = [
    'China King',
    'Pizza Pizza',
    'BAGEL Shop',
    'SUSHI Palace',
    'PALACE Cake',
    'Apples Cupcake'];
    var address = [
    '280 Connecticut Ave',
    '167 West Cedar St.',
    '351 Broome St.',
    '125 Broadway',
    '125 Main Ave',
    '300 King Ave'];
     var crusine = [
    'Chinese',
    'Pizza',
    'Sushi',
    'Italian',
    'Burger',
    'Steak'];
    /*lon-rating*/
     var rating = [
    '5',
    '2',
    '3',
    '4',
    '5',
    '6'];
     var zipcode = [
    '06854',
    '06854',
    '06854',
    '06902',
    '06856',
    '10001'];
  for (var i = 0; i < names.length; i += 1) {
    Restaurants.insert({
      name: names[i], 
      address:address[i],
      zipcode:zipcode[i],
      rating:rating[i],
      crusine:crusine[i]});
  }
});




