<template>
  <div id="app" class="w-full">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script src="./app.view.ts"></script>
<style src="./app.view.scss" lang="scss"/>



