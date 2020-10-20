<template>
  <span class="iconbox">
    <svg viewBox="0 0 24 24">
      <path :d="iconArrowRight" />
    </svg>
  </span>
</template>

<script>
import { mdiArrowRightBoldCircle } from '@mdi/js'

export default {
  data() {
    return {
      iconArrowRight: mdiArrowRightBoldCircle
    }
  }
}
</script>

<style>
    .iconbox{
        color: #236c79;
    }

    svg{
        width: 50px;
        height: 50px;
        fill: currentColor;
        padding: 0;
        margin: 0;
    }

</style>