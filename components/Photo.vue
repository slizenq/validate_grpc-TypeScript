<template>
  <a-config-provider
    :theme="{
      components: {
        Upload: {
          colorBorder: '#F54925',
          lineWidth: 4,
          controlHeightLG: 62.8,
        },
        Select: {
          controlHeight: 43,
          borderRadius: 10,
          colorBorder: '#4e66ff',
        },
      },
    }"
  >
  </a-config-provider>

  <div class="clearfix">
    <a-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      @change="ChangeURL"
      :show-upload-list="{ showPreviewIcon: false }"
      :before-upload="beforeUpload"
    >
      <div v-if="fileList != undefined && fileList.length < 1">
        <CameraOutlined style="color: #f54925; font-size: 55px" />
      </div>
    </a-upload>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import type { UploadProps } from "ant-design-vue";

var fileUp: any;

export default defineComponent({
  data() {
    return {
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
      fileList: [] as UploadProps["fileList"],
      urlPush: "",
      isPng: false,
    };
  },
  methods: {
    beforeUpload(file: any) {
      this.isPng = file.type === "image/jpeg";
      console.log(file.type);
      if (!this.isPng) {
        message.error("You can only upload jpg file!");
      }
      return this.isPng;
    },
    // Функция для получения байтов из файла
    getBytes(file: File) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file); // Читаем файл как ArrayBuffer
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    async ChangeURL() {
      let file: any;
      let bytes8: any;
      let bytes8Array: any[] = [];
      let bytes: any;

      if (this.fileList != undefined) {
        // console.log(this.beforeUpload(this.fileList[0]));
        if (this.isPng) {
          file = this.fileList[0];
          bytes = await this.getBytes(file.originFileObj);
          bytes8 = new Uint8Array(bytes);
          for (let key of bytes8) {
            bytes8Array.push(key);
          }
        } else {
          this.fileList = [];
        }
      }
      // // console.log("Произошла загрузка фотографии");
      this.$emit("update:urlPush", bytes8Array);
    },
  },
});
</script>
<style scoped>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
