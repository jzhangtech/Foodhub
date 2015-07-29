Template.admin.events({
	'click .complete': function(){
		
		event.preventDefault();
		var lon1=document.getElementById('lon1').value;
		var lat1=document.getElementById('lat1').value;
		var lon2=document.getElementById('lon2').value;
		var lat2=document.getElementById('lat2').value;
		console.log(lon1);
		console.log(lat1);
		console.log(parseFloat(lon1));

		var a1= parseFloat(lon1) + parseFloat(lat1);
		console.log(a1);
		var a2= parseFloat(lon2) + parseFloat(lat2);
		console.log(a2);

		var d= parseFloat(a1) - parseFloat(a2);
		console.log(d);
		var d2=1/parseFloat(d);
		console.log(d2)

		var d3= 111/d2;
		console.log(d3);
		var d4=d3*.6371;
		console.log(d4);

	

	
		
		



	}
});




