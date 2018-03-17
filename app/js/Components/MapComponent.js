const MapComponent = {
	mounted: function(){

		navigator.geolocation.getCurrentPosition(function(position){
			var pos   = {lat: position.coords.latitude, lng: position.coords.longitude};
			var map   = new google.maps.Map(document.getElementById('map'), {
				zoom: 16,
				center: pos
			});

			var marker = new google.maps.Marker({
					position: pos,
					map: map,
					icon: 'http://s4k.co/images/marker.png',
					animation: google.maps.Animation.DROP,
					title: 'My position',
					data: { id: null }
				});

			Vue.http.get(APIRoot + '/resources', {
				params: {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				}
			}).then(function(res){
				console.log(res);
				res.body.result.map(function(resource){
					var marker = new google.maps.Marker({
						position: {lat: resource.latitude, lng:resource.longitude},
						map: map,
						animation: google.maps.Animation.DROP,
						title: resource.name,
						data: { id: resource.id }
					});

					google.maps.event.addListener(marker, 'click', function () {
						if (marker.data.id === null)
						{
							return;
						}

					   // do something with this marker ...
					  console.log(marker.data.id);
					  Vue.http.post(
						APIRoot + '/resources', {
							resource_id: marker.data.id,
							token: window.localStorage.getItem('token')
						}).then(function(res){
							navigator.notification.alert(
							    'Reservation created!',  // message
							    function(){},         // callback
							    'Success',            // title
							    'Okay'                  // buttonName
							);
						});
					});
				});
			},function(){});

			/*var marker = new google.maps.Marker({
				position: pos,
				map: map
			});*/
		});
	},
	methods: {},
	template: `
		<div class="map-container">
			<div id="map" class="google-map"></div>
		</div>
	`
};