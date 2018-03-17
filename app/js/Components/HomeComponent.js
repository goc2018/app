const HomeComponent = {
	template: '<h1>Loading...</h1>',
	created: function() {
		console.log('Checking auth status...', storage.getItem('token'));

		var token = window.localStorage.getItem('token');

		if (token === null)
		{
			router.push({ name: 'login' })
			return;
		}

		this.$http.get(
			APIRoot + '/auth/check',
			{
				params: {
					'token': window.localStorage.getItem('token')
				}
			}
			).then(response => {
				if (response.body.success === false)
				{
					router.push({ name: 'login' })
				}
				else
				{
					Auth.user = response.body.user;
					router.push({ name: 'resources' })
				}
			}, response => {
				// error callback
  		}
  		);
	}
};