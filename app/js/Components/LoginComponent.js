const LoginComponent = {
	data: function(){
		return {
			email: null
		}
	},
	template: `
		<div>
			<h1>Login</h1>
			<div class="container">
				<form v-on:submit.prevent="attempt">
					<div class="form-group">
						<label>Email address</label>
						<input type="email" v-model="email" class="form-control" placeholder="Enter email">
					</div>

					<div class="form-group">
						<button type="submit" class="btn btn-block btn-success btn-lg">
							Sign in
						</button>
					</div>

					<div class="form-group text-center">
						<p>
							<small>Do you need an account?</small>
						</p>
						<router-link to="/registration">Sign up!</router-link>
					</div>
				</form>
			</div>
		</div>
	`,
	methods: {
		attempt: function(){
			this.$http.post(APIRoot + '/auth/login', {email: this.email}).then(response => {
				if (response.body.success === true)
				{
					Auth.user = response.body.user;
					window.localStorage.setItem('token', response.body.token);
					router.push({ name: 'resources' });
				}
			}, response => {
				// error callback
	  		});
		}
	}
};