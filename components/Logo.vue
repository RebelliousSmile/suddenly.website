<template>
  <div class="flex items-center gap-2">
    <img
      src="/suddenly-logo.svg"
      alt=""
      :class="size === 'sm' ? 'logo-img-sm' : 'logo-img-md'"
    >
    <span class="logo-text" :class="size === 'sm' ? 'text-[18px]' : 'text-[22px]'">Suddenly</span>
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'md',
  },
})
</script>

<style scoped>
.logo-img-sm { width: 20px; height: auto; }
.logo-img-md { width: 24px; height: auto; }
</style>
