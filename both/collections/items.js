Items = new Mongo.Collection('items');
Restaurants = new Mongo.Collection('restaurants');
Items.helpers({

});

Items.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
