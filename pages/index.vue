<template>
  <div>

    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="hero-section">
      <div class="container flex gap-[60px] items-center flex-wrap">
        <div class="flex-1 min-w-[300px] max-w-[580px]">
          <p class="label mb-5">{{ $t('index.hero.label') }}</p>
          <h1 class="font-serif text-[3.4rem] font-normal leading-[1.15] text-primary mb-6">
            {{ $t('index.hero.title_1') }}<br>{{ $t('index.hero.title_2') }}<br>
            <span class="text-crimson">{{ $t('index.hero.title_accent') }}</span>
          </h1>
          <p class="text-[1.05rem] leading-[1.75] text-secondary mb-9">
            {{ $t('index.hero.subtitle') }}
          </p>
          <div class="flex gap-[14px] flex-wrap">
            <NuxtLink :to="localePath('/instances')" class="btn-primary">{{ $t('index.hero.cta_primary') }}</NuxtLink>
            <NuxtLink :to="localePath('/fonctionnalites')" class="btn-secondary">{{ $t('index.hero.cta_secondary') }}</NuxtLink>
          </div>
        </div>

        <div class="flex-1 min-w-[280px] flex justify-center">
          <div class="hero-mockup">
            <div class="mockup-header">
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
            </div>
            <div class="mockup-content">
              <div class="mockup-post">
                <div class="post-avatar">🧙</div>
                <div class="post-body">
                  <div class="post-meta">Merlin_DM · Session #12</div>
                  <div class="post-text">Le marchand <span class="post-mention">@Theron</span> a révélé sa véritable identité ce soir. Les joueurs n'en revenaient pas...</div>
                  <div class="post-links">
                    <span class="post-link">⚔️ Claim</span>
                    <span class="post-link">🎭 Adopt</span>
                    <span class="post-link">🌿 Fork</span>
                  </div>
                </div>
              </div>
              <div class="mockup-divider"></div>
              <div class="mockup-post">
                <div class="post-avatar">🏴</div>
                <div class="post-body">
                  <div class="post-meta">Raven_Player · Adopte @Theron</div>
                  <div class="post-text"><span class="post-mention">@Theron</span> est maintenant mon PJ dans ma campagne Solo. Son passé reste mystérieux...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CONCEPT ───────────────────────────────────────── -->
    <section class="py-[90px] bg-card border-y border-border">
      <div class="container flex gap-[70px] items-center flex-wrap">
        <div class="flex-1 min-w-[280px] max-w-[480px]">
          <p class="label mb-4">{{ $t('index.concept.label') }}</p>
          <h2 class="font-serif text-[2.6rem] font-normal text-primary mb-6 leading-[1.2]">
            {{ $t('index.concept.title_1') }}<br><span class="text-crimson">{{ $t('index.concept.title_accent') }}</span>
          </h2>
          <p class="text-secondary text-[1rem] leading-[1.8] mb-4">
            {{ $t('index.concept.p1') }}
          </p>
          <p class="text-secondary text-[1rem] leading-[1.8]">
            {{ $t('index.concept.p2') }} <em class="text-primary not-italic">{{ $t('index.concept.p2_em') }}</em>
          </p>
        </div>
        <div class="flex-1 min-w-[260px] flex flex-col gap-4">
          <div
            v-for="link in conceptLinks"
            :key="link.title"
            class="bg-surface border border-border rounded-[16px] p-5 flex gap-4 items-start"
          >
            <div class="text-[24px] shrink-0 mt-0.5">{{ link.icon }}</div>
            <div>
              <div class="text-primary text-[14px] font-semibold mb-1">{{ link.title }}</div>
              <div class="text-secondary text-[13px] leading-[1.5] italic">{{ link.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── FONCTIONNALITÉS ───────────────────────────────── -->
    <section class="py-[90px] bg-surface">
      <div class="container">
        <p class="label text-center mb-3">{{ $t('index.features.label') }}</p>
        <h2 class="font-serif text-[2.6rem] font-normal text-primary text-center mb-[50px] leading-[1.2]">
          {{ $t('index.features.title_1') }}<br><span class="text-crimson">{{ $t('index.features.title_accent') }}</span>
        </h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          <div
            v-for="feat in featureItems"
            :key="feat.title"
            class="bg-card border border-border rounded-[20px] p-6"
          >
            <div class="text-[2rem] mb-4">{{ feat.icon }}</div>
            <div class="text-primary font-semibold text-[15px] mb-2">{{ feat.title }}</div>
            <div class="text-secondary text-[13px] leading-[1.6]">{{ feat.desc }}</div>
          </div>
        </div>
        <div class="text-center mt-10">
          <NuxtLink :to="localePath('/fonctionnalites')" class="btn-secondary">{{ $t('index.features.title_1') }} →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── INSTANCES ─────────────────────────────────────── -->
    <section class="py-[90px] bg-card border-y border-border">
      <div class="container text-center">
        <p class="label mb-4">{{ $t('index.instances.label') }}</p>
        <h2 class="font-serif text-[2.6rem] font-normal text-primary mb-4 leading-[1.2]">
          {{ $t('index.instances.title') }}
        </h2>
        <p class="text-secondary text-[1rem] leading-[1.8] mb-10 max-w-[520px] mx-auto">
          {{ $t('index.instances.subtitle') }}
        </p>
        <NuxtLink :to="localePath('/instances')" class="btn-primary">{{ $t('index.instances.cta_all') }}</NuxtLink>
        <p class="text-muted text-[14px] mt-6">
          {{ $t('index.instances.self_host') }}
          <NuxtLink :to="localePath('/instances')" class="text-crimson hover:underline">{{ $t('index.instances.self_host_link') }}</NuxtLink>
          {{ $t('index.instances.self_host_end') }}
        </p>
      </div>
    </section>

    <!-- ─── CONTRIBUER ────────────────────────────────────── -->
    <section class="py-[90px] bg-surface">
      <div class="container text-center">
        <p class="label mb-4">{{ $t('index.contribute.label') }}</p>
        <h2 class="font-serif text-[2.6rem] font-normal text-primary mb-4 leading-[1.2]">
          {{ $t('index.contribute.title_1') }}<br><span class="text-crimson">{{ $t('index.contribute.title_accent') }}</span>
        </h2>
        <p class="text-secondary text-[1rem] leading-[1.8] mb-10 max-w-[520px] mx-auto">
          {{ $t('index.contribute.p') }}
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/RebelliousSmile/suddenly"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >{{ $t('index.contribute.btn_code') }}</a>
          <NuxtLink :to="localePath('/contribuer')" class="btn-secondary">{{ $t('index.contribute.btn_contribute') }}</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { tm, rt } = useI18n()
const localePath = useLocalePath()

const conceptLinks = computed(() =>
  tm('index.concept.links').map(l => ({ icon: rt(l.icon), title: rt(l.title), desc: rt(l.desc) }))
)
const featureItems = computed(() =>
  tm('index.features.items').map(i => ({ icon: rt(i.icon), title: rt(i.title), desc: rt(i.desc) }))
)
</script>

<style scoped>
/* ── Hero ───────────────────────────────────────────────── */
.hero-section {
  background: linear-gradient(to bottom, rgba(224,53,88,0.06) 0%, transparent 100%);
  border-bottom: 1px solid #2D2845;
  padding: 100px 0 90px;
}

/* ── Mockup ─────────────────────────────────────────────── */
.hero-mockup {
  background: #18162A;
  border: 1px solid #2D2845;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 80px rgba(224,53,88,0.05);
}
.mockup-header {
  background: #211E36;
  padding: 12px 16px;
  display: flex;
  gap: 6px;
  align-items: center;
  border-bottom: 1px solid #2D2845;
}
.mockup-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2D2845;
}
.mockup-content {
  padding: 20px;
}
.mockup-post {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.mockup-divider {
  height: 1px;
  background: #2D2845;
  margin: 16px 0;
}
.post-avatar {
  font-size: 1.6rem;
  line-height: 1;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #211E36;
  border-radius: 50%;
  flex-shrink: 0;
}
.post-body { flex: 1; }
.post-meta {
  font-size: 11px;
  color: #7A7290;
  margin-bottom: 6px;
  font-weight: 500;
}
.post-text {
  font-size: 13px;
  color: #B0A8CC;
  line-height: 1.5;
  margin-bottom: 8px;
}
.post-mention {
  color: #E03558;
  font-weight: 600;
}
.post-links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.post-link {
  font-size: 11px;
  padding: 3px 10px;
  border: 1px solid rgba(224,53,88,0.3);
  border-radius: 100px;
  color: #E03558;
  cursor: pointer;
  transition: background 0.2s;
}
.post-link:hover {
  background: rgba(224,53,88,0.1);
}

@media (max-width: 768px) {
  .hero-section { padding: 70px 0 60px; }
  h1 { font-size: 2.6rem !important; }
}
</style>
