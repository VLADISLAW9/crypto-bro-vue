<script setup lang="ts">
import { Navbar } from '@/components';
</script>

<template>
  <main class="flex p-20 gap-20">
    <Navbar />
    <div class="p-5 w-full bg-surface-900 rounded-3xl">
      <router-view />
    </div>
  </main>
</template>
