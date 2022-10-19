<template>
    <div class="location">
        <div class="img">
            <img src="@/assets/img/purchase/location_light.svg" alt="地点">
        </div>
        <div class="text">
            <div class="text_location">
                <b>街道向北约200米</b>
            </div>
            <div class="text_information">
                刘红晨 17316196526
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Location_er"
  }
</script>

<style scoped>
    .location {
        display: flex;
        padding: 10px 0;
        background-color: #f2f5f8;
        border-radius: 20px;
    }
    .img img{
        padding-top: 3px;
        width: 45px;
    }
    .text_location{
        color: black;
    }
    .text_information {
        padding-top: 15px;
    }
</style>