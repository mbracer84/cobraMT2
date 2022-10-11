<template>

<div>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">

    
<div class="items-top min-h-screen">
    
  <Navigation></Navigation>
   
   <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
  
  <Nuxt />
    </div>

  </div>
</div>
</template>




<script>
import Navigation from "~/components/Navigation.vue";
  export default {
  
    components: { Navigation }
}
</script>
