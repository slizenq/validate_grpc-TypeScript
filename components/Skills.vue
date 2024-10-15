<template>
  <form @submit.prevent>
    <div class="skills-container">
      <div class="skills-input-container">
        <a-tag @click="showInput" style="background: #fff; border-style: none" class="skill-tag input__tag">
          <PlusSquareFilled class="plus_square" />
        </a-tag>
        <div class="skills-list">
			<a-input 
			placeholder="Python..."
				v-if="inputVisible" 
				ref="inputRef" 
				:style="{ width: '78px' }" 
				v-model:value="inputValue"
				@blur="handleInputConfirm" 
				@keyup.enter.prevent="handleInputConfirm" 
				class="skill-tag addTag"
			/>

          <template v-for="(tag, index) in tags" :key="tag">
            <a-tooltip v-if="tag.length > 7" :title="tag">
              <a-tag :closable="true" @close="handleClose(tag)" class="skill-tag">
                {{ `${tag.slice(0, 7)}...` }}
              </a-tag>
            </a-tooltip>
            <a-tag v-else :closable="true" @close="handleClose(tag)" class="skill-tag">
              {{ tag }}
            </a-tag>
          </template>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, nextTick, watch } from "vue";
import { PlusSquareFilled } from "@ant-design/icons-vue";
import { SkillsVO } from "~/domain/models/values/SkillsVO";

interface FormState {
  skills: string[];
}

export default defineComponent({
  props: {
    initialSkills: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    PlusSquareFilled,
  },

  setup(props, { emit }) {
    const inputRef = ref<HTMLInputElement | null>(null);
    const state = reactive({
      tags: ['Python', 'Ruby', 'PHP'],
      inputVisible: false,
      inputValue: "пук",
    });

    watch(
      () => state.tags,
      (newTags) => {
        emit("update:skills", newTags);
      },
      { immediate: true }
    );

    const handleClose = (removedTag: string) => {
      state.tags = state.tags.filter((tag) => tag !== removedTag);
    };

    const showInput = () => {
      state.inputVisible = true;
      nextTick(() => {
        inputRef.value?.focus();
      });
    };

    const handleInputConfirm = () => {
		const inputValue = state.inputValue;
		if (inputValue && !state.tags.includes(inputValue)) {
			state.tags = [inputValue, ...state.tags];
		}
		state.inputVisible = false;
		state.inputValue = "";
	};
    return {
      ...toRefs(state),
      handleClose,
      showInput,
      handleInputConfirm,
      inputRef,
    };
  },
});
</script>

<style scoped>
.skills-input-container {
  max-width: 530px !important;
  display: flex;
  max-width: 550px;
  align-items: center;
  gap: 8px;
  overflow-y: auto;
}
.skills-container {
  margin-bottom: 50px;
}
.plus_square {
  color: #f54925;
  font-size: 32px;
}
.skills-input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 8px;
}
.skills-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: 0;
  max-height: 80px;
  overflow-y: auto;
}
.skill-tag {
  border-radius: 5px;
  padding: 6px 10px;
  font-size: 14px;
  color: black;
  border: 1px solid #1910ba;
}
</style>
