<script>
export default {

}
</script>

<template>
<div>
    <footer>
        <img src="~assets/images/maskot.svg" alr="maskot_pic" class="maskot">
        <div class="blue">
            <div class="center">
            <h2 class="logo">Seb<span class="logo red__text">Study</span></h2>
            <p class="polit">Политика конфиденциальности</p>
            <div class="decoration"></div>
            <p class="credit">@2025 Team Practice</p>
        </div>
        </div>
    </footer>
</div>

</template>

<style>



footer {
    font-family: Ruda;
    color: #ffffff;
    margin: 0 auto;


}


.maskot {
    margin: 0;
    margin-bottom: -23px;
}

.blue {
    margin: 0 auto;
    background-color: #002BCF;
    height: 248px;
}

.polit {
    font-size: 16px;
    margin-bottom: 16px;
}
.decoration {
    width: 100%;
    height: 2px;
    background-color: #ffffff53;
}
.credit {
    margin-top: 16px; 
    font-size: 14px;
}

.logo {
    font-family: Rigtheous;
    font-size: 28px;
    font-weight: 500;
    color: #F0F0F0;
    padding-top: 74px;
    margin-bottom: 16px;
}

.red__text {
    color: #F54925;
}


.center {
    text-align: center;
}


</style>