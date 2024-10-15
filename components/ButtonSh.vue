<script>
export default {
    methods: {
        toggleScale(event) {
            // hero button
            if (event.target.textContent == "Попасть в команду") {
                event.preventDefault();
                const targetId = this.href;
                setTimeout(() => {
                    window.location.href = targetId;
                }, 400);
            }
        }
    },
    props: {
        textButton: {
            type: String,
            required: true,
        }
    },
}
</script>
<template>
    <img src="~/assets/images/morkovki.svg" alt="sticks_pic" class="sticks" />
    <button
        type="sumbit"
        class="join relative bg-[#f54925] text-2xl rounded-[36px] px-[45px] border-0 w-[308px] h-[65px] text-text_2 transition hover:!bg-secondary02 hover:-translate-y-1 active:translate-y-1"
        >{{ textButton }}
    </button>
</template>
<style>
* {
    font-family: Ruda;
}
@media (max-width: 950px) {
    .sticks {
        margin-left: 335px !important;
    }
}
.sticks {
    margin-left: 295px;
    margin-top: -35px;
    position: absolute;
    z-index: -1;
    transition: transform 0.5s;
}
.black_button_background {
    border-radius: 36px;
    border: 0;
    background-color: #000000;
    width: 308px;
    height: 72px;
    position: absolute;
    z-index: -1;
}
.join {
    position: absolute;
    background-color: #f54925;
    font-size: 24px;
    border-radius: 36px;
    border: 0;
    color: #ffffff;
    width: 308px;
    height: 65px;
    display: flex;
    align-items: center;
    text-decoration: none;
    box-shadow: 0px 7px 0px rgba(0, 0, 0, 1);
}
.join:hover {
    box-shadow: 0px 7px 0px rgba(140, 140, 140, 1);
}
.join:active {
    box-shadow: 0px 7px 0px rgba(0, 0, 0, 1);
}
</style>
