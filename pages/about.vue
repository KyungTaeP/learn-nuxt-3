<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">About</div>
      <p class="q-mt-sm text-grey-8">
        Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다.
      </p>
    </div>
    <div class="column">
      <!-- RouterLink 는 내부 링크만 가능 -->
      <RouterLink to="/">RouterLink Home</RouterLink>
      <RouterLink to="https://youtube.com">RouterLink Youtube</RouterLink>
      <br />
      <!-- NuxtLink는 내부, 외부 링크 둘 다 가능 -->
      <NuxtLink to="/">NuxtLink Home</NuxtLink>
      <NuxtLink to="https://youtube.com">NuxtLink Youtube</NuxtLink>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
