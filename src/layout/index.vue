<template>
  <section class="app-main">
    <router-view :key="key" v-slot="{ Component,route }">
      <transition name="fade-transform" mode="out-in">
          <keep-alive >
            <component :is="Component" :key="route.path" />
          </keep-alive>
      </transition>
    </router-view>

  <button type="button" @click="toggle('pageA')"  >pageA</button>
  <button type="button" @click="toggle('pageB')"  >pageB</button>

  </section>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    key() {
      return this.$route.path
    }
  },
  methods:{
      toggle(p){
          this.$router.push(p)
      }
  }
}
</script>


