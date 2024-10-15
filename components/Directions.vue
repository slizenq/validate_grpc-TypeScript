<script>
import directions from "../assets/json/directions.json";

export default {
    props: {
        status: {
            type: String,
            default: "default",
        },
    },
    data() {
        return {
            value1: null,
            options: [], // Инициализируем пустой массив для направлений
            label: null,
            directLabel: "",
            directValue: "",
        };
    },
    mounted() {
        this.loadOptions();
    },
    methods: {
        loadOptions() {
            // Загрузка направлений из JSON
            console.log("Loaded directions:", directions); // Выводим данные для проверки
            this.options = directions.map((item) => ({
                label: item.name,
                value: item.id,
            }));
            console.log("Options:", this.options); // Проверяем опции
        },
        updateDirectValue(value) {
            this.$emit("update:directLabel", value); // Вызов события для передачи значения в родительский компонент
        },
        filterOption(input, option) {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        handleChange(value) {
            const selectedOption = this.options.find(
                (option) => option.value === value
            );
            this.value1 = value;
            this.directLabel = selectedOption ? selectedOption.label : ""; // Корректно извлекаем label
            this.$emit("update:directLabel", this.directLabel); // Emit the updated directLabel
            // console.log(this.directLabel);
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
                    colorBorder: '#4e66ff',
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
        :showArrow="true"
        ref="select"
        v-model:value="value1"
        :options="options"
        :filter-option="filterOption"
        @change="handleChange"
        placeholder="Выберите направление"
        size="medium"
        class="select_direct_right blue_border"
    ></a-select>
</template>

<style scoped>
/* 
a-select {
    margin: 0 !important;
} */
.select_direct_right {
    /* border: 1px solid #4e66ff; */
    margin: 0px 0px 4px 0px;
    border-radius: 10px;
    width: 310px;
    /* margin: 0 !important; */
}
/* .blue_border {
    border: 1px solid #4e66ff;
} */
</style>
