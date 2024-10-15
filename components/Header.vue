<script></script>

<template>
    <header>
        <div class="about_sebbia">
            <p class="logo">Seb<span class="logo red__text">Study</span></p>
            <p class="practice">Практика от Sebbia</p>
        </div>
        <!-- <a href="#" class="summary__button">Отправить резюме</a> -->
        <a-button type="primary" class="summary__button"
            >Отправить резюме</a-button
        >
    </header>
</template>

<style scoped>
@media (max-width: 523px) {
    .practice {
        display: none;
    }
}

* {
    margin: 0;
    padding: 0;
    font-family: Ruda;
}

header {
    height: 64px;
    background-color: #0032e9;
    position: relative;
    z-index: 10;
}

.summary__button {
    width: 144px;
    height: 24px;
    color: #f0f0f0;
    border: 1px solid #f0f0f060;
    background-color: #0032e9;
    font-size: 14px;
}

.logo {
    font-family: Rigtheous;
    margin: 0;
    font-size: 28px;
    font-weight: 500;
    color: #f0f0f0;
}

.red__text {
    color: #f54925;
}

.practice {
    font-size: 14px;
    font-weight: 500;
    color: #f0f0f0;
    border-left: 1px solid #f0f0f0;
}

.about_sebbia {
    display: flex;
    align-items: center;
}

.about_sebbia p {
    padding: 0 15px 0 15px;
}

header {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
