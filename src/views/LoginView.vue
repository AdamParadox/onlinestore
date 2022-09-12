<template>
    <form class="login" @submit="login">
    <div class="surface-card p-4 shadow-2 border-round w-full ">
      <div class="text-center mb-5">
          <i class="pi pi-prime mb-3" style="font-size: 3rem"></i>
          <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span class="text-600 font-medium line-height-3">Don't have an account?</span>
          <router-link to="/register" class="font-medium no-underline ml-2  cursor-pointer link_com">Create today!</router-link>
      </div>
  
      <div>
          <label for="email1" class="block text-900 font-medium mb-2">Email</label>
          <InputText id="email1" type="text" class="w-full mb-3" v-model="user.email"/>
  
          <label for="password1" class="block text-900 font-medium mb-2">Password</label>
          <InputText id="password1" type="password" class="w-full mb-3" v-model="user.password"/>
  
          <div class="mb-6">
              <a class="font-medium no-underline link_com text-right cursor-pointer">Forgot password?</a>
          </div>
  
          <PrimeButton label="Sign In" icon="pi pi-user" class="w-full" type="submit"></PrimeButton>
      </div>
  </div>
  </form>
  </template>
  
  <script>
  import InputText from 'primevue/inputtext';

  export default{
    components: {
        InputText
    },
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        // login(ev) {
        //     ev.preventDefault();
        //     store.dispatch('login', user)
        //     .then(() => {
        //     router.push("/");
        //     })
        // }   
    }
  }

  </script>
  
  <style>
  .login{
    max-width: 600px;
    margin: 0 auto;
    margin-top: 25px;
  }
  </style>