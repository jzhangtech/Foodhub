Template.home.rendered = function() {
     
     var autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('autocomplete')),
        {types: ['geocode'] }
        );
     
     $("#geolocation").click(function (event) {
        event.preventDefault();
        $(this).html('');
            navigator.geolocation.getCurrentPosition(function (position) {
           
            var geocoder = new google.maps.Geocoder();
            var latLng   = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          
            geocoder.geocode({
                'latLng': latLng
            }, 
            function (results, status) {
               for (var i = 0; i < results[0].address_components.length; i++) {
                    var address = results[0].address_components[i];
                    if (address.types[0] == "postal_code") {
                        
                        $('#zipcode').html(address.long_name);
                        Session.set("zipcode",address.long_name);
                         $('.searchbar').val(results[0].formatted_address);
                          
                        
                    }
                }
            });
        });
        return false;
    }); 
    
    $('.carousel').carousel({
    interval: 2000
});

    $('.carousel2').carousel({
    interval: 2000
});

};

Template.home.events({
    'click #search': function(){
        event.preventDefault();
        
       }
    });


Template.home.events({
    'click #homebtn': function() {
        document.getElementById('geoorder').style.display = 'block';
        document.getElementById('restaurant').style.display = 'none';
      
    },
    'click #restaurantbtn': function() {
        document.getElementById('geoorder').style.display = 'none';
        document.getElementById('restaurant').style.display = 'block';
      
    }
});



Template.home.events({
    'click #search': function() {
        var ele =document.getElementById('autocomplete').value;
        Session.set("name","Pizza Pizza");
        Session.set("name2","China King");
        document.getElementById('geoorder').style.display = 'none';
        document.getElementById('restaurant').style.display = 'block';
        },
    'keyup .searchbar': function() {
        var ele =document.getElementById('autocomplete').value;
        Session.set("name","Pizza Pizza");
        Session.set("name2","China King");
        document.getElementById('geoorder').style.display = 'none';
        document.getElementById('restaurant').style.display = 'block';
        },
         'keyup .categorysearch': function() {
        var ele =document.getElementById('autocomplete').value;
        Session.set("name","Pizza Pizza");
        Session.set("name2","China King");
        document.getElementById('geoorder').style.display = 'none';
        document.getElementById('restaurant').style.display = 'block';
        }
    });




