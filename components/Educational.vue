<script>
import educational from "../assets/json/educational.json";

export default {
    props: {
        status: {
            type: String,
            default: "default",
        },
    },
    data() {
        return {
            value: null,
            options: [], // Инициализируем options для учебных заведений
            label: null,
            eduValue: "",
            eduLabel: "",
        };
    },
    mounted() {
        this.loadOptions();
    },
    methods: {
        loadOptions() {
            console.log("Loaded educational:", educational); // Выводим данные для проверки
            this.options = educational.map((item) => ({
                label: `${item.abbreviation} ${item.name}`, // Объединяем аббревиатуру и полное название
                value: item.id,
            }));
            // console.log("Options:", this.options); // Проверяем опции
        },
        updateEduValue(value) {
            this.$emit("update:eduLabel", value); // Вызов события для передачи значения в родительский компонент
        },
        filterOption(input, option) {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        handleChange(value) {
            const selectedOption = this.options.find(
                (option) => option.value === value
            );
            this.value = value;
            this.eduLabel = selectedOption ? selectedOption.label : ""; // Корректно извлекаем label
            this.$emit("update:eduLabel", this.eduLabel); // Emit the updated eduLabel
            // console.log(this.eduLabel);
        },
    },
};

</script>

<template>
    <a-config-provider
        :theme="{
            components: {
                Select: {
                    controlHeight: 43,
                    borderRadius: 10,
                    colorBorder: '#4e66ff'
                },
                Upload: {
                    colorBorder: '#F54925',
                    lineWidth: 4,
                    controlHeightLG: 62.8,
                },
            },
        }"
    >
    </a-config-provider>

    <a-select
        v-model:value="value"
        show-search
        placeholder="Учебное заведение"
        :options="options"
        :filter-option="filterOption"
        @change="handleChange"
        class="select_direct"
    ></a-select>
</template>

<style scoped>
/* * {
    margin: 0;
} */
.select_direct {
    /* border: 1px solid #4e66ff; */
    border-radius: 10px;
    width: 310px;
    height: 45px;
}

.ant-select-dropdown {
    background-color: white;
}

.ant-select-item-option-content {
    color: black;
    font-weight: 400;
    text-align: left !important;
}

/* НЕ РАБОТАЮТ */
/* .ant-select-item:hover {
    background-color: #4e66ff60 !important;
    transition: ease-in 0.1s;
}

.ant-select-item:active {
    font-weight: 400;
} */

/* .blue_border {
    border: 1px solid #4e66ff;
} */
</style>
