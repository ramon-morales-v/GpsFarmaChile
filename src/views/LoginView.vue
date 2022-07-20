<template>
	<main class="login">
		<p>Si estas registrado</p><router-link to="/ingreso">Ingresa aqui</router-link>
		<router-view />
		<section class="forms">
			<form class="register" @submit.prevent="register">
<br><br>
				<h2>Registro Usuarios</h2>
				<input 
					type="email" 
					placeholder="Correo"
					v-model="register_form.email" />
				<input 
					type="password" 
					placeholder="Password" 
					v-model="register_form.password" />
				<input 
					type="submit" 
					value="Registrar" />
					<button @click="googleSignIn">Google </button>
			</form>

			
		</section>
	</main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import firebase from '../firebase/index'





export default {
	setup () {
		
		const register_form = ref({});
		const store = useStore();

		

		const register = () => {
			store.dispatch('register', register_form.value);
		}

		return {
		
			register_form,
		
			register
		}
	},
	methods: {
		googleSignIn (){
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithPopup(provider).then(() => {
				alert("Conectado!")
			}).catch(err => {
				console.log(err);
			});
			
		}
	} 
	
	
}
</script>

<style>
.forms {
	display: flex;
	min-height: 100vh;
}

form {
	flex: 1 1 0%;
	padding: 8rem 1rem 1rem;
}



h2 {
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
}

input {
	appearance: none;
	border: none;
	outline: none;
	background: none;

	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}

input:focus:not([type="submit"]) {
	opacity: 1;
}

input::placeholder {
	color: inherit;
}



form input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}

form input[type="submit"] {
	background-color: #42b983;
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
 

</style>