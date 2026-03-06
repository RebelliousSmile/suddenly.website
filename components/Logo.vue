<template>
  <div class="flex items-center gap-2">
    <div class="logo-icon">🎭</div>
    <span class="logo-text" :class="size === 'sm' ? 'text-[18px]' : 'text-[22px]'">
      Suddenly
    </span>
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
.logo-icon {
  font-size: 1.5rem;
  line-height: 1;
}
.logo-text {
  font-family: 'Crimson Text', Georgia, serif;
  font-weight: 600;
  color: #EDE8F5;
  letter-spacing: -0.01em;
}
</style>
