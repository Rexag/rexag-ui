<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@rexag/utils'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'

defineOptions({ name: 'reg-icon' })

const ns = useNamespace('icon')
const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}
  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {})
  }
})
</script>

<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>
