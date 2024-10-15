<script>
import ButtonSh from "./ButtonSh.vue";

export default {
    components: {
        ButtonSh,
    },
    data() {
        return {
            textButton: "Попасть в команду",
        };
    },
};

</script>

<template>
    <div class="home-page">
        <div class="hero">
            <!-- <img src="~/assets/images/hand.svg" alt="hand_pic" class="hand" /> -->
            <div class="rigth_part">
                <div class="rigth_header">
                    <h2 class="hero_title">Получить важный</h2>
                    <h1 class="hero_title_exp">Experience?</h1>
                </div>
                <p class="description">
                    Команда предлагает пройти практику, рассказать о
                    своих методах работы и дать реальное задание, проводя
                    всевозможные ивенты для лучшего обучения студентов.
                </p>
                <div class="button_sending">
                    <ButtonSh
                        :textButton="textButton"
                        href="#my_target_block"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    color: #000000;
    margin: 0;
    padding: 0;
    font-family: Ruda;
}

.rigth_part {
    position: relative;
}

.container {
    margin: 0 auto;
}

.rigth_part {
    font-size: 16px;
    width: 550px;
}

.rigth_part h2 {
    max-height: 69px;
    font-weight: 900;
    font-size: 2.5em;
    white-space: nowrap;
    color: #002bcf;
}

.rigth_part h1 {
    font-family: Rigtheous;
    max-height: 122px;
    font-size: 4.4em;
    margin-top: -10px;
}

@media (max-width: 410px) {
    .rigth_part h2 {
        font-size: 1.7em;
    }

    .rigth_part h1 {
        font-size: 2.9em;
    }
}

.description {
    margin-top: 27px;
    max-width: 420px;
    line-height: 130%;
    display: inline;
    text-align: start;
}

.button_sending {
    margin-top: 49px;
}

@media screen and (max-width: 465px) {
    .hero_title {
        font-size: 14px;
    }

    .hero_title_exp {
        font-size: 16px;
    }
}

@media (max-width: 950px) {
    .hand {
        display: none;
    }
    .rigth_part {
        text-align: center;
        justify-content: center;
        padding: 5px;
    }
    .description {
        text-align: start;
    }

    .button_sending {
        display: flex;
    }

}

.button_sending {
    justify-content: center;
    height: 70px;
}

.button_sending ButtonSh {
    display: none;
}

.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    margin: 0 auto;
    margin-top: 50px;
}

.hand {
    width: 38%;
}

.hero_title,
.hero_title_exp {
    width: 99%;
}
</style>
