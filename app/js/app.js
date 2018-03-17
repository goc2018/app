var storage = window.localStorage;
var plugin
// AIzaSyBAegdnGTZBdd9VByhnbavYFqiQwKtwAWw
Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const APIRoot = 'http://s4k.co/api/phone';

const routes = [
  { path: '/', component: HomeComponent, name: 'init' },
  { path: '/registration', component: RegistrationComponent, name: 'registration' },
  { path: '/login', component: LoginComponent, name: 'login' },
  { path: '/resources', component: MapComponent, name: 'resources' },
  { path: '/logout', component: LogoutComponent, name: 'logout' }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

var Auth = {
  user: null
};

var app = new Vue({
	router,
  computed: {
    isLogged: function(){
      return this.auth.user !== null;
    }
  },
  data: function(){
    return {
      auth: Auth
    };
  },
	created: function(){
		console.log('vue created')
	},
	http: {
    	root: 'http://eriktoth.s4k.co/api/phone'
  	}
}).$mount('#app');