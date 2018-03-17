const LogoutComponent = {
	mounted: function(){
		window.localStorage.removeItem('token');
		Auth.user = null;

		router.push({ name: 'login' });
	},
	template: 'Loading...'
}