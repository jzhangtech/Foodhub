Meteor.startup(function(){
   Restaurants.remove({});
  var names = [
    'China King',
    'Pizza Pizza',
    'BAGEL',
    'SUSHI',
    'PALACE',
    'Apples'];
    var address = [
    '280 connecticut ave',
    '167 west cedar st.',
    '351 broome st.',
    '125 broadway',
    '125 main ave',
    '300 king ave'];
     var crusine = [
    'chinese',
    'pizza',
    'sushi',
    'italian',
    'burger',
    'steak'];
    /*lon-rating*/
     var rating = [
    '5',
    '2',
    '3',
    '4',
    '5',
    '6'];
     var zipcode = [
    '06901',
    '06901',
    '06901',
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


