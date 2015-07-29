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
    '-73.43563230000001',
    'pizza',
    'sushi',
    'italian',
    'burger',
    'steak'];
    /*lon-rating*/
     var rating = [
    '41.10309040000001',
    '2',
    '3',
    '4',
    '5',
    '6'];
     var zipcode = [
    '06854',
    '10002',
    '10003',
    '06855',
    '06856',
    '10004'];
  for (var i = 0; i < names.length; i += 1) {
    Restaurants.insert({
      name: names[i], 
      address:address[i],
      zipcode:zipcode[i],
      lon:rating[i],
      lat:crusine[i]});
  }
});


