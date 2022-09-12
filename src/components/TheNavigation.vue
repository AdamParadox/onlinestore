<template>
<div class="navigation">
<header class="site-header">
  <div class="site-identity">
    <router-link class="logo_img" to="/"><i class="pi pi-star-fill" style="font-size: 2.3rem"></i></router-link> 
    <router-link class="logo_name" to="/">Tendo</router-link>
  </div>  
  <nav class="site-navigation" v-if="!mobile">
    <ul class="nav">
        <div class="sign_in"><router-link class="link" to="/login" v-if="!auth"><Avatar icon="pi pi-sign-in" class="mr-i"/>Войти</router-link></div>
        <router-link class="link" to="/basket" v-if="auth"><Avatar icon="pi pi-shopping-bag"  class="mr-i"/>Корзина</router-link>
        <router-link class="link" to="/orders" v-if="auth"><Avatar icon="pi pi-box" class="mr-i"/>Заказы</router-link>
        <router-link class="link" to="/profile" v-if="auth"><Avatar icon="pi pi-user" class="mr-i"/>Профиль</router-link>
    </ul>
  </nav>
  <img v-if="mobile" @click="toggleMobileNav" class="menu-icon" src="../assets/burger_ico.svg" alt="burger">
  <transition name="slide-fade">
        <ul class="mobile-nav" v-if="mobileNav">
          <router-link class="link" to="/">Dashboard</router-link>
          <router-link class="link" to="/profile"><Avatar icon="pi pi-user" class="mr-i"/>Профиль</router-link>
          <router-link class="link" to="/profile"><Avatar icon="pi pi-shopping-bag"  class="mr-i"/>Корзина</router-link>
          <router-link class="link" to="/profile"><Avatar icon="pi pi-box" class="mr-i"/>Заказы</router-link>
        </ul>
  </transition>
</header>
<!--breadcrump-->
</div>
</template>

<script>
import Avatar from 'primevue/avatar';

export default {
components: {Avatar},
 data() {
   return {
       mobile: null,
       mobileNav: null,
       windowWidth: null,
   }
},
created() {
   window.addEventListener("resize", this.checkScreen)
   this.checkScreen()
},
methods: {
  //  logout() {
  //    this.$store.dispatch('logout')
  //    this.$router.push('login')
  //  },
   checkScreen() {
       this.windowWidth = window.innerWidth;
       if (this.windowWidth <= 750 && this.auth) {
           this.mobile = true;
           return
       }
       this.mobile = false;
       this.mobileNav = false;
   },
   toggleMobileNav() {
       this.mobileNav = !this.mobileNav
   },
  },
  computed: {
      auth() {
        return this.$store.state.user.token
      }
  },
  watch: {
    '$route' () {
    this.mobileNav = false
    }
  }

}
</script>

<style>
.sign_in a{
  color: #495057 !important;
}
.mr-i{
  margin-right: 7px;
}
header{
  background-color: #fff;
  height: 80px;
}

.logo_name{
    font-size: 26px;
    font-weight: 600;
    text-decoration: none;
    color:#495057;
    margin-left: 10px;
}
.p-button:focus {
outline: 0 none;
outline-offset: 0;
box-shadow: none !important;
}
.p-button-icon{
margin-right: 10px;
}	

.site-header { 
  padding: .5em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.site-identity{
  display: flex;
  align-items: center;
}
.site-navigation .link {
  margin: 1.4em 1em 1em 1em;
}
.site-navigation ul{
  display: flex;
  align-items: center;
}
header .menu-icon {
cursor: pointer;
position: absolute;
top: 24px;
right: 25px;
height: 35px;
width: auto;
}
header .mobile-nav {
padding: 20px;
width: 70%;
max-width: 250px;
display: flex;
flex-direction: column;
position: fixed;
height: 100%;
background-color: #fff;
border-right: 10px solid #2196F3;
top: -16px;
left: 0;
}
header .mobile-nav .active {
color: #2196F3 !important;
}
header .mobile-nav .link {
padding: 15px 0;
color: #495057;
font-weight: bold;
}
header .slide-fade-enter-active {
transition: all 0.5s ease-out;
}
header .slide-fade-leave-active {
transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
header .slide-fade-enter-from, header .slide-fade-leave-to {
transform: translateX(-250px);
}
.link {
cursor: pointer;
text-decoration: none;
text-transform: uppercase;
}

</style>