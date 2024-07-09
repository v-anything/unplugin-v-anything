# unplugin-v-anything

Import v-anything on-demand automatically.

## Usage

```shell
pnpm add unplugin-vue-components/vite @v-anything/unplugin-v-anything
```

In `vite.config.ts` file, add these codes:

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import VAnyResolver from '@v-anything/unplugin-v-anything'

export default defineConfig({
  /* ... */
  plugins: [
    /* ... */
    vue(),
    Components({
      resolvers: [VAnyResolver()],
    }),
  ],
})
```

Now you can directly enjoy `v-anything` in your Vue SFC. Here's an example.

```vue
<script setup lang="ts">
// no need to manually import :)
</script>

<template>
  <div
    v-highlight="{
      keywords: ['love'],
      options: {
        defaultDecoration: {
          color: 'red',
        },
      },
    }"
  >
    I love KFC.
  </div>
</template>
```
