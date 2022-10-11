<!-- Please remove this file from your project -->
<template>
  <div class="bg-cyan-600">
 
   <client-only>
     <button v-if="$auth.loggedIn" @click="logout">Abmelden</button>
     <button v-else @click="login">Anmelden</button><br>
     
     <br/>
     <NuxtLink v-if="$auth.loggedIn" to="/">Startseite</NuxtLink><br>
     <NuxtLink v-if="$auth.loggedIn" to="Events">Liste der Events</NuxtLink><br>
     <NuxtLink v-if="$auth.loggedIn" to="Create">->Neues Event erstellen</NuxtLink><br>
     <a v-if="$auth.loggedIn" class="no-underline hover:underline ..." href="/usermanagement">Benutzerverwaltung</a><br/>
     <a v-if="$auth.loggedIn" class="no-underline hover:underline ..." href="/usermanagement/Export">->Exportieren</a><br/>
   </client-only>
  </div>
 </template>
 
 <script>
 export default {
   name: "rose-navbar",
   data() {
     return {
       showMenu: false
     }
   },
   methods: {
         login() {
             this.$auth.loginWith("custom");
         },
         logout() {
           this.$auth.logout();
           //  this.$auth.strategy.token.reset();
           //  this.$auth.strategy.refreshToken.reset();
           // this.$axios.setHeader('Authorization', null);
         }
     },
 }
 </script>