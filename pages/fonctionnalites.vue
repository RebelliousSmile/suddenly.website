<template>
  <div>

    <!-- ─── HEADER ────────────────────────────────────────── -->
    <section class="features-header">
      <div class="container text-center">
        <p class="label mb-4">{{ $t('features.header.label') }}</p>
        <h1 class="font-serif text-[3rem] font-normal text-primary mb-5 leading-[1.2]">
          {{ $t('features.header.title_1') }}<br><span class="text-crimson">{{ $t('features.header.title_accent') }}</span>
        </h1>
        <p class="text-secondary text-[1.05rem] leading-[1.75] max-w-[560px] mx-auto">
          {{ $t('features.header.subtitle') }}
        </p>
      </div>
    </section>

    <!-- ─── TABS ──────────────────────────────────────────── -->
    <section class="bg-surface border-b border-border sticky top-[70px] z-10">
      <div class="container flex gap-0 overflow-x-auto">
        <button
          v-for="(tab, i) in tabs"
          :key="i"
          class="tab-btn"
          :class="{ active: activeTab === i }"
          @click="activeTab = i"
        >
          {{ tab }}
        </button>
      </div>
    </section>

    <!-- ─── PUBLIER ───────────────────────────────────────── -->
    <section v-show="activeTab === 0" class="py-[90px] bg-surface">
      <div class="container flex gap-[70px] items-center flex-wrap">
        <div class="flex-1 min-w-[280px]">
          <p class="text-crimson text-[12px] tracking-[3px] uppercase font-medium mb-4">01 — {{ $t('features.publishing.tab') }}</p>
          <h2 class="font-serif text-[2.4rem] font-normal text-primary mb-5 leading-[1.2]">
            {{ $t('features.publishing.title') }}<br><span class="text-crimson">{{ $t('features.publishing.title_accent') }}</span>
          </h2>
          <p class="text-secondary text-[1rem] leading-[1.75] mb-7">{{ $t('features.publishing.desc') }}</p>
          <ul class="feature-list">
            <li v-for="feat in publishingFeatures" :key="feat" class="feature-li">
              <span class="feature-check">✓</span> {{ feat }}
            </li>
          </ul>
        </div>
        <div class="flex-1 min-w-[280px]">
          <div class="feature-visual">
            <div class="visual-editor">
              <div class="editor-toolbar">
                <span class="editor-tool">B</span>
                <span class="editor-tool"><em>I</em></span>
                <span class="editor-tool">@</span>
                <span class="editor-tool">#</span>
              </div>
              <div class="editor-content">
                <div class="editor-title">Session #7 — La Tour de Brume</div>
                <div class="editor-text">
                  Ce soir, le groupe a enfin rencontré <span class="editor-mention">@Elara</span>, la gardienne de la tour. Elle portait le médaillon que nous cherchions depuis trois sessions...
                </div>
                <div class="editor-tags">
                  <span class="editor-tag">#fantasy</span>
                  <span class="editor-tag">#solo</span>
                  <span class="editor-tag">#mystère</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PERSONNAGES ───────────────────────────────────── -->
    <section v-show="activeTab === 1" class="py-[90px] bg-card border-y border-border">
      <div class="container flex gap-[70px] items-center flex-wrap">
        <div class="flex-1 min-w-[280px]">
          <p class="text-crimson text-[12px] tracking-[3px] uppercase font-medium mb-4">02 — {{ $t('features.characters.tab') }}</p>
          <h2 class="font-serif text-[2.4rem] font-normal text-primary mb-5 leading-[1.2]">
            {{ $t('features.characters.title') }}<br><span class="text-crimson">{{ $t('features.characters.title_accent') }}</span>
          </h2>
          <p class="text-secondary text-[1rem] leading-[1.75] mb-7">{{ $t('features.characters.desc') }}</p>
          <ul class="feature-list">
            <li v-for="feat in characterFeatures" :key="feat" class="feature-li">
              <span class="feature-check">✓</span> {{ feat }}
            </li>
          </ul>
        </div>
        <div class="flex-1 min-w-[280px]">
          <div class="character-profile">
            <div class="char-avatar">🧙‍♀️</div>
            <div class="char-name">@Elara</div>
            <div class="char-info">Gardienne de la Tour de Brume</div>
            <div class="char-stats">
              <div class="char-stat">
                <div class="stat-value">3</div>
                <div class="stat-label">apparitions</div>
              </div>
              <div class="char-stat">
                <div class="stat-value">2</div>
                <div class="stat-label">liens</div>
              </div>
              <div class="char-stat">
                <div class="stat-value">1</div>
                <div class="stat-label">adoption</div>
              </div>
            </div>
            <div class="char-actions">
              <button class="char-btn">⚔️ Claim</button>
              <button class="char-btn char-btn-primary">🎭 Adopt</button>
              <button class="char-btn">🌿 Fork</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── FÉDÉRATION ────────────────────────────────────── -->
    <section v-show="activeTab === 2" class="py-[90px] bg-surface">
      <div class="container flex gap-[70px] items-center flex-wrap">
        <div class="flex-1 min-w-[280px]">
          <p class="text-crimson text-[12px] tracking-[3px] uppercase font-medium mb-4">03 — {{ $t('features.federation.tab') }}</p>
          <h2 class="font-serif text-[2.4rem] font-normal text-primary mb-5 leading-[1.2]">
            {{ $t('features.federation.title') }}<br><span class="text-crimson">{{ $t('features.federation.title_accent') }}</span>
          </h2>
          <p class="text-secondary text-[1rem] leading-[1.75] mb-7">{{ $t('features.federation.desc') }}</p>
          <p class="text-muted text-[12px] uppercase tracking-[2px] mb-4 font-medium">{{ $t('features.federation.compatible') }}</p>
          <div class="flex flex-col gap-3">
            <div
              v-for="item in federationItems"
              :key="item.name"
              class="bg-card border border-border rounded-[14px] p-4 flex gap-3 items-center"
            >
              <span class="text-[20px]">{{ item.icon }}</span>
              <div>
                <div class="text-primary text-[14px] font-semibold">{{ item.name }}</div>
                <div class="text-muted text-[12px]">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 min-w-[280px] flex justify-center">
          <div class="federation-diagram">
            <div class="fed-node fed-center">
              <span class="text-[2rem]">🎭</span>
              <div class="fed-label">Suddenly</div>
            </div>
            <div class="fed-connections">
              <div class="fed-node">
                <span class="text-[1.5rem]">🐘</span>
                <div class="fed-label-sm">Mastodon</div>
              </div>
              <div class="fed-node">
                <span class="text-[1.5rem]">📚</span>
                <div class="fed-label-sm">BookWyrm</div>
              </div>
              <div class="fed-node">
                <span class="text-[1.5rem]">🎭</span>
                <div class="fed-label-sm">Suddenly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA FINAL ─────────────────────────────────────── -->
    <section class="cta-section">
      <div class="container text-center">
        <p class="label mb-4">{{ $t('features.cta.label') }}</p>
        <h2 class="font-serif text-[2.4rem] font-normal text-primary mb-4 leading-[1.2]">
          {{ $t('features.cta.title') }}
        </h2>
        <p class="text-secondary text-[1rem] leading-[1.75] mb-8 max-w-[440px] mx-auto">
          {{ $t('features.cta.subtitle') }}
        </p>
        <NuxtLink :to="localePath('/instances')" class="cta-pill">{{ $t('features.cta.btn') }}</NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

const activeTab = ref(0)

const tabs = computed(() => [
  t('features.publishing.tab'),
  t('features.characters.tab'),
  t('features.federation.tab'),
])

const publishingFeatures = computed(() => tm('features.publishing.features').map(f => rt(f)))
const characterFeatures = computed(() => tm('features.characters.features').map(f => rt(f)))
const federationItems = computed(() =>
  tm('features.federation.items').map(i => ({ icon: rt(i.icon), name: rt(i.name), desc: rt(i.desc) }))
)
</script>

<style scoped>
/* ── Header ─────────────────────────────────────────────── */
.features-header {
  padding: 80px 0;
  background: linear-gradient(to bottom, rgba(224,53,88,0.06), transparent);
  border-bottom: 1px solid #2D2845;
}

/* ── Tabs ───────────────────────────────────────────────── */
.tab-btn {
  padding: 16px 28px;
  font-size: 14px;
  font-weight: 500;
  color: #7A7290;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.tab-btn:hover { color: #EDE8F5; }
.tab-btn.active { color: #E03558; border-bottom-color: #E03558; }

/* ── Feature list ───────────────────────────────────────── */
.feature-list { list-style: none; }
.feature-li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  font-size: 14px;
  color: #B0A8CC;
  border-bottom: 1px solid #2D2845;
}
.feature-li:last-child { border-bottom: none; }
.feature-check {
  color: #E03558;
  font-weight: 700;
  flex-shrink: 0;
}

/* ── Editor visual ──────────────────────────────────────── */
.feature-visual { width: 100%; max-width: 420px; }
.visual-editor {
  background: #18162A;
  border: 1px solid #2D2845;
  border-radius: 16px;
  overflow: hidden;
}
.editor-toolbar {
  background: #211E36;
  padding: 10px 16px;
  display: flex;
  gap: 16px;
  border-bottom: 1px solid #2D2845;
}
.editor-tool {
  font-size: 14px;
  font-weight: 600;
  color: #7A7290;
  cursor: pointer;
  transition: color 0.2s;
}
.editor-tool:hover { color: #E03558; }
.editor-content { padding: 20px; }
.editor-title {
  font-family: 'Crimson Text', Georgia, serif;
  font-size: 18px;
  color: #EDE8F5;
  margin-bottom: 10px;
}
.editor-text {
  font-size: 14px;
  color: #B0A8CC;
  line-height: 1.6;
  margin-bottom: 14px;
}
.editor-mention { color: #E03558; font-weight: 600; }
.editor-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.editor-tag {
  font-size: 12px;
  padding: 3px 10px;
  background: rgba(224,53,88,0.1);
  border: 1px solid rgba(224,53,88,0.2);
  border-radius: 100px;
  color: #E03558;
}

/* ── Character profile ──────────────────────────────────── */
.character-profile {
  background: #18162A;
  border: 1px solid #2D2845;
  border-radius: 20px;
  padding: 28px;
  max-width: 360px;
  text-align: center;
}
.char-avatar { font-size: 3rem; margin-bottom: 10px; }
.char-name { font-size: 20px; font-weight: 600; color: #EDE8F5; margin-bottom: 4px; }
.char-info { font-size: 13px; color: #7A7290; margin-bottom: 20px; }
.char-stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 16px 0;
  border-top: 1px solid #2D2845;
  border-bottom: 1px solid #2D2845;
  margin-bottom: 20px;
}
.char-stat { text-align: center; }
.stat-value { font-size: 20px; font-weight: 700; color: #EDE8F5; }
.stat-label { font-size: 11px; color: #7A7290; }
.char-actions { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.char-btn {
  font-size: 13px;
  padding: 8px 16px;
  border: 1px solid #2D2845;
  border-radius: 10px;
  color: #B0A8CC;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
}
.char-btn:hover { border-color: rgba(224,53,88,0.4); color: #E03558; }
.char-btn-primary {
  background: rgba(224,53,88,0.1);
  border-color: rgba(224,53,88,0.3);
  color: #E03558;
}

/* ── Federation diagram ─────────────────────────────────── */
.federation-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.fed-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: #18162A;
  border: 1px solid #2D2845;
  border-radius: 16px;
  padding: 16px 24px;
}
.fed-center {
  border-color: rgba(224,53,88,0.4);
  background: rgba(224,53,88,0.05);
}
.fed-label { font-size: 14px; font-weight: 600; color: #EDE8F5; }
.fed-label-sm { font-size: 12px; color: #7A7290; }
.fed-connections {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

/* ── CTA ────────────────────────────────────────────────── */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(to top, rgba(224,53,88,0.06), transparent);
  border-top: 1px solid #2D2845;
}
.cta-pill {
  display: inline-block;
  padding: 16px 48px;
  background: #E03558;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  border-radius: 100px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 0 40px rgba(224,53,88,0.25);
}
.cta-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 40px rgba(224,53,88,0.45);
}
</style>
