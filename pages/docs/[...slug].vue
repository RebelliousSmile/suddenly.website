<template>
  <div>
    <ContentRenderer v-if="page" :value="page" class="doc-renderer" />
    <div v-else class="not-found">
      <p>Page introuvable.</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]
const path = '/docs/' + slug.join('/')

const { data: page } = await useAsyncData(path, () =>
  queryCollection('docs').path(path).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page introuvable' })
}

useSeoMeta({
  title: () => page.value ? `${page.value.title} — Documentation Suddenly` : 'Documentation Suddenly',
  description: () => page.value?.description ?? '',
})
</script>

<style>
/* Prose styles for rendered markdown */
.doc-renderer h1 {
  font-family: 'Crimson Text', Georgia, serif;
  font-size: 2.4rem;
  font-weight: 600;
  color: #E8E4F4;
  line-height: 1.2;
  margin: 0 0 1.5rem;
}
.doc-renderer h2 {
  font-family: 'Inter', sans-serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: #E8E4F4;
  margin: 2.5rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #2D2845;
}
.doc-renderer h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #D0C8E8;
  margin: 2rem 0 0.75rem;
}
.doc-renderer p {
  color: #B0A8CC;
  line-height: 1.8;
  margin: 0 0 1rem;
}
.doc-renderer strong {
  color: #E8E4F4;
  font-weight: 600;
}
.doc-renderer em {
  color: #C8C0E0;
}
.doc-renderer a {
  color: #E03558;
  text-decoration: none;
}
.doc-renderer a:hover {
  text-decoration: underline;
}
.doc-renderer ul, .doc-renderer ol {
  color: #B0A8CC;
  padding-left: 1.5rem;
  margin: 0 0 1rem;
  line-height: 1.8;
}
.doc-renderer li { margin-bottom: 0.25rem; }

/* Code blocks */
.doc-renderer code {
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.85em;
  background: #1A1730;
  color: #E03558;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid #2D2845;
}
.doc-renderer pre {
  background: #18162A;
  border: 1px solid #2D2845;
  border-radius: 12px;
  padding: 20px 24px;
  overflow-x: auto;
  margin: 1.25rem 0;
}
.doc-renderer pre code {
  background: none;
  border: none;
  padding: 0;
  color: #B0A8CC;
  font-size: 0.875rem;
  line-height: 1.7;
}

/* Tables */
.doc-renderer table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.25rem 0;
  font-size: 14px;
}
.doc-renderer th {
  background: #18162A;
  color: #E8E4F4;
  font-weight: 600;
  text-align: left;
  padding: 10px 16px;
  border: 1px solid #2D2845;
}
.doc-renderer td {
  color: #B0A8CC;
  padding: 9px 16px;
  border: 1px solid #2D2845;
  vertical-align: top;
}
.doc-renderer tr:nth-child(even) td {
  background: rgba(255, 255, 255, 0.02);
}

/* Horizontal rule */
.doc-renderer hr {
  border: none;
  border-top: 1px solid #2D2845;
  margin: 2rem 0;
}

.not-found {
  padding: 48px 40px;
  color: #7A7290;
}
</style>
