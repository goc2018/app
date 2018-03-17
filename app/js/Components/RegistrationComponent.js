const RegistrationComponent = {
	data: function(){
		return {
			email: '',
			file: ''
		};
	},
	methods: {
		submitFile(){
        	/*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('image', this.file);
            formData.append('email', this.email);

	        /*
	          Make the request to the POST /single-file URL
	        */
            this.$http.post(
            	APIRoot + '/registration',
				formData
				).then(function(res){
					
					if (res.body.success == true)
					{
						router.push({ name: 'login' });
						return;
					}

					navigator.notification.alert(res.body.message, function(){}, 'Ooops');
					
				})
				.catch(function(){
					console.log('FAILURE!!');
				}
			);
      },

		handleFileUpload: function()
		{
	        this.file = this.$refs.file.files[0];

	        console.log(this.file);
	     }
	},
	template: `
	<div>
		<h1>Registration</h1>
		<div class="container" v-on:submit.prevent="submitFile">
			<form>
				<div class="form-group">
					<label>Email address</label>
					<input type="email" class="form-control" v-model="email" placeholder="Enter email">
				</div>

				<div class="form-group">
					<label>Confirmation image</label>
					<input type="file" id="file" ref="file" class="form-control" v-on:change="handleFileUpload()" placeholder="Choose a file">
				</div>

				<div class="form-group">
					<button type="submit" class="btn btn-block btn-success btn-lg">
						Sign up
					</button>
				</div>

				<div class="form-group text-center">
					<p>
						<small>Do you already have an account?</small>
					</p>
					<router-link to="/login">Sign in!</router-link>
				</div>
			</form>
		</div>
	</div>
	`
};