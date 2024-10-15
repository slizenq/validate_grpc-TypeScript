<template>
    <div class="dialog" v-if="show">
        <div class="dialog__content">
            <div v-if="errorModalVisible" class="dialog__component">
                <h1 class="dialog_title refusal_title_color element_padding">Произошла ошибка :(</h1>
                <p class="dialog_description element_padding">Попробуй заполнить резюме снова и проверить<br> свое соединение к интернету</p>
                <img src="./../../assets/images/error.svg" class="element_padding select" style="margin: 0 auto;" alt="error">
                <button @click="$emit('someEvent')" class="modal_close refusal">Вернуться</button>
            </div>
    
            <div v-else class="dialog__component">
                <h1 class="dialog_title acces_title_color element_padding">Успешная отправка резюме</h1>
                <p class="dialog_description element_padding">В течение 10 дней мы вам напишем или позвоним</p>
                <img src="./../../assets/images/succes.svg" class="element_padding select" style="margin: 0 auto;" alt="succes">
                <button @click="$emit('someEvent')" class="modal_close acces">Окей</button>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        
        name: 'pop-up',
        methods: {
        
        closeModal() {
            if (this.errorModalVisible) {
                this.errorModalVisible = false;
                }
            if (this.accessModalVisible) {
                this.accessModalVisible = false;
            }
        }
        },
        props: {
            show: {
                type: Boolean,
                default: false
            },
            errorModalVisible: {
                type: Boolean,
                default: false
    
            },
            accessModalVisible: {
                type: Boolean,
                default: false
    
            }
    
        },
    }
    </script>
    
    <style>
    
    .modal_close {
        margin-top: 20px;
        width: 150px;
        height: 40px;
        color: #fff;
        border-radius: 20px;
        user-select: none;
        transform: scale(1);
        transition: all 0.2s ease, border 1s ease; 
        box-sizing: border-box;
    }
    
    .modal_close:hover {
        transform: scale(1.2);
    }
    
    .modal_close:active {
        transform: scale(0.8);
    }
    
    .acces {
        background-color: #FF2D00;
    }
    .refusal {
        background-color: #002BCF;
    }
    .element_padding {
        margin-bottom: 10px
    }
    .refusal_title_color {
        color: #FF2D00;
    }
    .acces_title_color {
        color: #002BCF;
    }
    .dialog_description {
        color: #8C8C8C;
    }
    .dialog_title,
    .dialog_description {
        text-align: left;
        font-size: 16px;
        font-weight: 600;
    }
    .modal_close {
        position: absolute;
        right: 20px;
        bottom: 10px;
    }
    .dialog {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      transition: all 4s ease-out;
    }
    [data-v-a46d7196] {
        margin: 0 auto;
    }
    .dialog__content {
      background: #fff;
      border-radius: 12px;
      min-height: 50px;
      min-width: 550px;
      padding: 20px 20px 50px 20px;
      text-align: center;
      flex-direction: column;
      position: relative;
      box-shadow: 0px 0px 125px rgba(0, 94, 255, 0.5);
      display: flex;
      justify-content: center;
    }
    </style>
    