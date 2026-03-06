<template>
  <div class="lang-switcher">
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      class="lang-btn"
      :class="{ active: locale.code === currentLocale }"
      @click="switchLocale(locale.code)"
    >
      {{ locale.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)

function switchLocale(code) {
  setLocale(code)
}
</script>

<style scoped>
.lang-switcher {
  display: flex;
  gap: 4px;
}
.lang-btn {
  background: transparent;
  border: 1px solid transparent;
  color: #7A7290;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.05em;
}
.lang-btn:hover {
  color: #E03558;
  border-color: rgba(224,53,88,0.3);
}
.lang-btn.active {
  color: #E03558;
  border-color: rgba(224,53,88,0.4);
  background: rgba(224,53,88,0.08);
}
</style>
