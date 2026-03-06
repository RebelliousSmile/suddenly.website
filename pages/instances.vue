<template>
  <div>

    <!-- ─── HEADER ────────────────────────────────────────── -->
    <section class="instances-header">
      <div class="container text-center">
        <p class="label mb-4">{{ $t('instances.header.label') }}</p>
        <h1 class="font-serif text-[3rem] font-normal text-primary mb-5 leading-[1.2]">
          {{ $t('instances.header.title_1') }}<br><span class="text-crimson">{{ $t('instances.header.title_accent') }}</span>
        </h1>
        <p class="text-secondary text-[1.05rem] leading-[1.75] max-w-[560px] mx-auto">
          {{ $t('instances.header.subtitle') }}
        </p>
      </div>
    </section>

    <!-- ─── QU'EST-CE QU'UNE INSTANCE ────────────────────── -->
    <section class="py-[90px] bg-card border-y border-border">
      <div class="container flex gap-[70px] items-center flex-wrap">
        <div class="flex-1 min-w-[280px]">
          <p class="label mb-4">{{ $t('instances.what.label') }}</p>
          <h2 class="font-serif text-[2.4rem] font-normal text-primary mb-5 leading-[1.2]">
            {{ $t('instances.what.title') }}
          </h2>
          <p class="text-secondary text-[1rem] leading-[1.8] mb-4">{{ $t('instances.what.p1') }}</p>
          <p class="text-secondary text-[1rem] leading-[1.8]">{{ $t('instances.what.p2') }}</p>
        </div>
        <div class="flex-1 min-w-[260px] flex flex-col gap-4">
          <div
            v-for="item in whatItems"
            :key="item.title"
            class="bg-surface border border-border rounded-[16px] p-5 flex gap-4 items-start"
          >
            <div>
              <div class="text-primary text-[14px] font-semibold mb-1">{{ item.title }}</div>
              <div class="text-secondary text-[13px] leading-[1.5]">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── LISTE DES INSTANCES ───────────────────────────── -->
    <section class="py-[90px] bg-surface">
      <div class="container">
        <p class="label text-center mb-4">{{ $t('instances.list.label') }}</p>
        <h2 class="font-serif text-[2.4rem] font-normal text-primary text-center mb-[50px] leading-[1.2]">
          {{ $t('instances.list.title') }}
        </h2>
        <div class="coming-soon-box">
          <div class="coming-soon-title">{{ $t('instances.list.coming_soon') }}</div>
          <div class="coming-soon-desc">{{ $t('instances.list.coming_desc') }}</div>
        </div>
      </div>
    </section>

    <!-- ─── AUTO-HÉBERGEMENT ──────────────────────────────── -->
    <section class="py-[90px] bg-card border-t border-border">
      <div class="container">
        <div class="flex gap-[70px] items-start flex-wrap">
          <div class="flex-1 min-w-[280px]">
            <p class="label mb-4">{{ $t('instances.self_host.label') }}</p>
            <h2 class="font-serif text-[2.4rem] font-normal text-primary mb-5 leading-[1.2]">
              {{ $t('instances.self_host.title') }}
            </h2>
            <p class="text-secondary text-[1rem] leading-[1.8] mb-8">
              {{ $t('instances.self_host.desc') }}
            </p>
            <a
              href="https://github.com/RebelliousSmile/suddenly/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >{{ $t('instances.self_host.btn') }}</a>
          </div>
          <div class="flex-1 min-w-[280px] flex flex-col gap-4">
            <div
              v-for="step in selfHostSteps"
              :key="step.num"
              class="self-host-step"
            >
              <div class="step-num">{{ step.num }}</div>
              <div class="step-content">
                <div class="step-title">{{ step.title }}</div>
                <pre class="step-code">{{ step.code }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { tm, rt } = useI18n()
const localePath = useLocalePath()

const whatItems = computed(() =>
  tm('instances.what.items').map(i => ({ title: rt(i.title), desc: rt(i.desc) }))
)
const selfHostSteps = computed(() =>
  tm('instances.self_host.steps').map(s => ({ num: rt(s.num), title: rt(s.title), code: rt(s.code) }))
)
</script>

<style scoped>
/* ── Header ─────────────────────────────────────────────── */
.instances-header {
  padding: 80px 0;
  background: linear-gradient(to bottom, rgba(224,53,88,0.06), transparent);
  border-bottom: 1px solid #2D2845;
}

/* ── Coming soon ────────────────────────────────────────── */
.coming-soon-box {
  background: #18162A;
  border: 1px dashed rgba(224,53,88,0.3);
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
}
.coming-soon-title {
  font-family: 'Crimson Text', Georgia, serif;
  font-size: 1.6rem;
  color: #EDE8F5;
  margin-bottom: 10px;
}
.coming-soon-desc { font-size: 14px; color: #7A7290; line-height: 1.6; }

/* ── Self-host steps ────────────────────────────────────── */
.self-host-step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.step-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(224,53,88,0.15);
  border: 1px solid rgba(224,53,88,0.3);
  color: #E03558;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 4px;
}
.step-content { flex: 1; }
.step-title {
  font-size: 14px;
  font-weight: 600;
  color: #EDE8F5;
  margin-bottom: 8px;
}
.step-code {
  background: #100E20;
  border: 1px solid #2D2845;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 12px;
  color: #B0A8CC;
  font-family: 'Courier New', monospace;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
