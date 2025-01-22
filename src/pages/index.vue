<script setup lang="ts">
import { onMounted } from 'vue'
import { useExpensesStore } from '~/presentation/stores/expenseStore'

defineOptions({
  name: 'IndexPage',
})

const expenseStore = useExpensesStore()

onMounted(async () => {
  await expenseStore.fetchExpenses()
})
</script>

<template>
  <div>
    {{ expenseStore.loading }}
    {{ expenseStore.error }}

    <div v-if="expenseStore.loading">
      Loading...
    </div>
    <div v-else-if="expenseStore.error">
      {{ expenseStore.error }}
    </div>
    <ul v-else>
      <li v-for="expense in expenseStore.expenses" :key="expense.label">
        {{ expense.label }} ({{ expense.value }})
      </li>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
