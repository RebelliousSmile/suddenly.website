<template>
  <div>

    <!-- ─── HEADER ────────────────────────────────────────── -->
    <section class="contribute-header">
      <div class="container text-center">
        <p class="label mb-4">{{ $t('contribute.header.label') }}</p>
        <h1 class="font-serif text-[3rem] font-normal text-primary mb-5 leading-[1.2]">
          {{ $t('contribute.header.title_1') }}<br><span class="text-crimson">{{ $t('contribute.header.title_accent') }}</span>
        </h1>
        <p class="text-secondary text-[1.05rem] leading-[1.75] max-w-[560px] mx-auto">
          {{ $t('contribute.header.subtitle') }}
        </p>
        <div class="flex gap-4 justify-center flex-wrap mt-8">
          <a
            href="https://github.com/RebelliousSmile/suddenly"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 8px;">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://github.com/RebelliousSmile/suddenly/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
          >CONTRIBUTING.md</a>
        </div>
      </div>
    </section>

    <!-- ─── COMMENT CONTRIBUER ────────────────────────────── -->
    <section class="py-[90px] bg-card border-y border-border">
      <div class="container">
        <p class="label text-center mb-4">{{ $t('contribute.ways.label') }}</p>
        <h2 class="font-serif text-[2.4rem] font-normal text-primary text-center mb-[50px] leading-[1.2]">
          {{ $t('contribute.ways.title') }}
        </h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          <div
            v-for="way in contributeWays"
            :key="way.title"
            class="contribute-card"
          >
            <div class="text-[2.2rem] mb-4">{{ way.icon }}</div>
            <div class="text-primary font-semibold text-[16px] mb-2">{{ way.title }}</div>
            <div class="text-secondary text-[13px] leading-[1.6] mb-5 flex-1">{{ way.desc }}</div>
            <a
              :href="way.link"
              target="_blank"
              rel="noopener noreferrer"
              class="contribute-btn"
            >{{ way.btn }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── STACK TECHNIQUE ───────────────────────────────── -->
    <section class="py-[90px] bg-surface">
      <div class="container">
        <p class="label text-center mb-4">{{ $t('contribute.stack.label') }}</p>
        <h2 class="font-serif text-[2.4rem] font-normal text-primary text-center mb-[50px] leading-[1.2]">
          {{ $t('contribute.stack.title') }}
        </h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
          <div
            v-for="tech in stackItems"
            :key="tech.name"
            class="tech-card"
          >
            <div class="text-[1.8rem] mb-3">{{ tech.icon }}</div>
            <div class="text-primary font-semibold text-[14px] mb-1">{{ tech.name }}</div>
            <div class="text-muted text-[12px]">{{ tech.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── DÉVELOPPEMENT LOCAL ───────────────────────────── -->
    <section class="py-[90px] bg-card border-t border-border">
      <div class="container">
        <p class="label text-center mb-4">{{ $t('contribute.dev.label') }}</p>
        <h2 class="font-serif text-[2.4rem] font-normal text-primary text-center mb-[50px] leading-[1.2]">
          {{ $t('contribute.dev.title') }}
        </h2>
        <div class="flex flex-col gap-6 max-w-[700px] mx-auto">
          <div
            v-for="step in devSteps"
            :key="step.num"
            class="dev-step"
          >
            <div class="dev-step-header">
              <div class="dev-step-num">{{ step.num }}</div>
              <div class="dev-step-title">{{ step.title }}</div>
            </div>
            <pre class="dev-step-code">{{ step.code }}</pre>
          </div>
        </div>
        <div class="flex gap-4 justify-center flex-wrap mt-10">
          <a
            href="https://github.com/RebelliousSmile/suddenly/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >{{ $t('contribute.dev.btn_guide') }}</a>
          <a
            href="https://github.com/RebelliousSmile/suddenly"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
          >{{ $t('contribute.dev.btn_github') }}</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { tm, rt } = useI18n()

const contributeWays = computed(() =>
  tm('contribute.ways.items').map(i => ({
    icon: rt(i.icon),
    title: rt(i.title),
    desc: rt(i.desc),
    btn: rt(i.btn),
    link: rt(i.link),
  }))
)
const stackItems = computed(() =>
  tm('contribute.stack.items').map(i => ({ icon: rt(i.icon), name: rt(i.name), desc: rt(i.desc) }))
)
const devSteps = computed(() =>
  tm('contribute.dev.steps').map(s => ({ num: rt(s.num), title: rt(s.title), code: rt(s.code) }))
)
</script>

<style scoped>
/* ── Header ─────────────────────────────────────────────── */
.contribute-header {
  padding: 80px 0;
  background: linear-gradient(to bottom, rgba(224,53,88,0.06), transparent);
  border-bottom: 1px solid #2D2845;
}

/* ── Contribute cards ───────────────────────────────────── */
.contribute-card {
  background: #18162A;
  border: 1px solid #2D2845;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s, transform 0.2s;
}
.contribute-card:hover {
  border-color: rgba(224,53,88,0.4);
  transform: translateY(-2px);
}
.contribute-btn {
  display: inline-block;
  padding: 9px 20px;
  border: 1px solid rgba(224,53,88,0.3);
  border-radius: 10px;
  color: #E03558;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: background 0.2s;
}
.contribute-btn:hover { background: rgba(224,53,88,0.1); }

/* ── Tech cards ─────────────────────────────────────────── */
.tech-card {
  background: #18162A;
  border: 1px solid #2D2845;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  transition: border-color 0.2s;
}
.tech-card:hover { border-color: rgba(224,53,88,0.3); }

/* ── Dev steps ──────────────────────────────────────────── */
.dev-step {
  background: #18162A;
  border: 1px solid #2D2845;
  border-radius: 16px;
  overflow: hidden;
}
.dev-step-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-bottom: 1px solid #2D2845;
}
.dev-step-num {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(224,53,88,0.15);
  border: 1px solid rgba(224,53,88,0.3);
  color: #E03558;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.dev-step-title { font-size: 14px; font-weight: 600; color: #EDE8F5; }
.dev-step-code {
  padding: 16px 20px;
  font-size: 13px;
  color: #B0A8CC;
  font-family: 'Courier New', monospace;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-all;
  line-height: 1.6;
  background: #100E20;
}
</style>
