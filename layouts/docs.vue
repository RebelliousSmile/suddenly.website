<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header (same as default) -->
    <header class="header">
      <div class="container">
        <nav class="nav">
          <NuxtLink :to="localePath('/')" class="logo-link">
            <Logo />
          </NuxtLink>

          <div class="nav-links">
            <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
            <NuxtLink :to="localePath('/fonctionnalites')">{{ $t('nav.features') }}</NuxtLink>
            <NuxtLink :to="localePath('/instances')">{{ $t('nav.instances') }}</NuxtLink>
            <NuxtLink :to="localePath('/contribuer')">{{ $t('nav.contribute') }}</NuxtLink>
            <NuxtLink :to="localePath('/docs')" class="nav-docs-link">{{ $t('nav.docs') }}</NuxtLink>
            <a
              href="https://github.com/RebelliousSmile/suddenly"
              target="_blank"
              rel="noopener noreferrer"
              class="github-link"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <LangSwitcher />
          </div>
        </nav>
      </div>
    </header>

    <!-- Docs body: sidebar + content -->
    <div class="docs-body flex-1 flex">
      <!-- Mobile sidebar toggle -->
      <button class="sidebar-toggle" @click="sidebarOpen = !sidebarOpen" :aria-expanded="sidebarOpen">
        <svg v-if="!sidebarOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
        {{ $t('nav.docs') }}
      </button>

      <!-- Sidebar -->
      <aside class="docs-sidebar" :class="{ 'sidebar-open': sidebarOpen }">
        <div class="sidebar-inner">
          <template v-if="navigation">
            <div
              v-for="section in navigation"
              :key="section.path"
              class="nav-section"
            >
              <span class="nav-section-title">{{ section.title }}</span>
              <ul class="nav-items">
                <li v-for="item in section.children" :key="item.path">
                  <NuxtLink
                    :to="localePath(item.path)"
                    class="nav-item"
                    active-class="nav-item-active"
                    @click="sidebarOpen = false"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </aside>

      <!-- Overlay for mobile -->
      <div v-if="sidebarOpen" class="sidebar-overlay" @click="sidebarOpen = false" />

      <!-- Main content -->
      <main class="docs-main">
        <div class="docs-content">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
const sidebarOpen = ref(false)

const { data: navigation } = await useAsyncData('docs-nav', () =>
  queryCollectionNavigation('docs')
)
</script>

<style scoped>
/* ── Header (same as default) ─────────────────────────────── */
.header {
  background: #100E20;
  border-bottom: 1px solid #2D2845;
  position: sticky;
  top: 0;
  z-index: 100;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
.logo-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: transform 0.2s;
}
.logo-link:hover { transform: scale(1.05); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav-links a {
  color: #B0A8CC;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  transition: color 0.2s;
  position: relative;
}
.nav-links a:hover { color: #E03558; }
.nav-links a.router-link-exact-active { color: #E03558; }
.nav-links a.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0; right: 0;
  height: 2px;
  background: #E03558;
  border-radius: 1px;
}
.nav-docs-link { color: #E03558 !important; }
.nav-docs-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0; right: 0;
  height: 2px;
  background: #E03558;
  border-radius: 1px;
}
.github-link {
  display: flex;
  align-items: center;
  color: #7A7290 !important;
  transition: color 0.2s !important;
}
.github-link:hover { color: #E03558 !important; }
.github-link::after { display: none !important; }

/* ── Docs layout ──────────────────────────────────────────── */
.docs-body {
  display: flex;
  min-height: calc(100vh - 70px);
}

/* Sidebar */
.docs-sidebar {
  width: 260px;
  flex-shrink: 0;
  background: #100E20;
  border-right: 1px solid #2D2845;
  overflow-y: auto;
  position: sticky;
  top: 70px;
  max-height: calc(100vh - 70px);
}
.sidebar-inner {
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.nav-section-title {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #7A7290;
  padding: 0 12px;
  margin-bottom: 6px;
}
.nav-items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.nav-item {
  display: block;
  padding: 7px 12px;
  border-radius: 8px;
  font-size: 14px;
  color: #B0A8CC;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}
.nav-item:hover {
  background: rgba(224, 53, 88, 0.08);
  color: #E03558;
}
.nav-item-active {
  background: rgba(224, 53, 88, 0.12);
  color: #E03558;
  font-weight: 600;
}

/* Main content */
.docs-main {
  flex: 1;
  min-width: 0;
  background: #0D0B1A;
}
.docs-content {
  max-width: 780px;
  margin: 0 auto;
  padding: 48px 40px;
}

/* Mobile sidebar toggle */
.sidebar-toggle {
  display: none;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #100E20;
  border-bottom: 1px solid #2D2845;
  border-right: none;
  color: #B0A8CC;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  text-align: left;
}

.sidebar-overlay {
  display: none;
}

@media (max-width: 768px) {
  .nav { flex-direction: column; height: auto; padding: 15px 0; gap: 15px; }
  .nav-links { gap: 14px; flex-wrap: wrap; justify-content: center; }

  .docs-body { flex-direction: column; }

  .sidebar-toggle { display: flex; }

  .docs-sidebar {
    position: fixed;
    top: 0;
    left: -280px;
    width: 260px;
    height: 100vh;
    max-height: 100vh;
    z-index: 200;
    transition: left 0.25s ease;
    border-right: 1px solid #2D2845;
  }
  .docs-sidebar.sidebar-open {
    left: 0;
  }

  .sidebar-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 150;
  }

  .docs-content {
    padding: 32px 20px;
  }
}
</style>
