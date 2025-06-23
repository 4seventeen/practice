<template>
  <div class="register-container">
    <h1>Register</h1> 
    <form @submit.prevent="register">
      <input type="email" v-model="email" placeholder="Email" /><br>
      <input type="password" v-model="password" placeholder="Password" /><br>
      <button type="submit">Register</button><br>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/authenticationService';
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      }).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* full viewport height */
  text-align: center;
}

input {
  margin: 10px 0;
  padding: 8px;
  width: 200px;
}

button {
  padding: 8px 16px;
}
</style>
