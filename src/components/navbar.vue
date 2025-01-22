<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <nav>
    <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
  </nav>
</template>
