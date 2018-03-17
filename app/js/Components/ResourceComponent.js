var ResourceComponent = {
	data: function(){
		return {
			resources: []
		};
	},
	mounted: function(){
		this.$http.get(APIRoot + '/resources').then(function(res){
			this.resources = res.body.result;
		});
	},
	methods: {
		reservate: function(id){
			this.$http.post(
				APIRoot + '/resources', {
					resource_id: id,
					token: window.localStorage.getItem('token')
				}).then(function(res){
					alert('Successfully reserved!');
				});
		}
	},
	template: `
		<div>
			<h1>Available cars</h1>
			<div class="container">
				<div class="list-group">
					<a href="#" v-for="resource in resources" v-on:click="reservate(resource.id)" class="list-group-item list-group-item-action">
						{{ resource.name }}
						<span class="badge badge-primary badge-pill">45m</span>
					</a>
				</div>
			</div>
		</div>
	`
};