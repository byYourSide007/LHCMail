<template>
    <div class="cao">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CouShu"
  }
</script>

<style scoped>
    .cao {
        display: flex;
        flex-flow: row wrap;
        margin-top: 10px;
    }
    .left {
        margin-left: 15px;
    }
    .right {
        flex: 1;
        margin-left: 30px;
        padding: 5px;
        font-size: 15px;
    }
</style>