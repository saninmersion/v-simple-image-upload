<template>
    <div class="simple_image_input">
        <div v-show="image.url" class="simple_image_input__preview">
            <img :src="image.url" alt="" class="img-responsive">
        </div>
        <div class="simple_image_input__controls">
            <div class="file__input">
                <button v-if="isFileInputNew" class="btn btn__upload">
                    <i class="fa fa-upload margin-right-10"></i> Upload an image
                </button>
                <button v-if="!isFileInputNew" class="btn btn__change">
                    Change
                </button>
                <input ref="fileInput" @input="handleUpload" :name="inputName" accept="image/*" type="file">
            </div>
            <button @click.prevent="handleDelete" class="btn btn__remove" v-if="removable && !isFileInputNew"> Remove</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SimpleImageInput",
        props: {
            inputName: { type: String, required: false, default: "image" },
            value: { required: false },
            removable: { required: false, type: Boolean, default: true },
        },
        data: () => {
            return {
                image: {
                    url: null,
                },
            }
        },
        watch: {
            value: {
                handler(value) {
                    this.image.url = value

                    if (value instanceof File) {
                        this.image.url = URL.createObjectURL(value)
                    }
                },
                immediate: true,
            },
        },
        computed: {
            isFileInputNew: function() {
                return !this.image.url
            },
        },
        methods: {
            handleUpload(event) {
                const vm = this
                const files = event.currentTarget.files
                let reader = new FileReader()

                reader.readAsDataURL(files[0])
                reader.onload = e => {
                    vm.image = { "url": e.target.result, "file": files[0] }
                    vm.$emit("change", vm.image.file)
                }
            },
            handleDelete() {
                this.image = {
                    url: null,
                }
                this.$refs.fileInput.value = null
                this.$emit("change", null)
            },
        },
    }
</script>


<style lang="css">

    .simple_image_input {
        display: inline-block;
        margin-bottom: 0;
    }
    .simple_image_input .simple_image_input__preview {
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
    }
    .simple_image_input .simple_image_input__preview img {
        width: 300px;
        height: 250px;
        object-fit: cover;
    }
    .simple_image_input .simple_image_input__controls {
        display: flex;
    }
    .simple_image_input .simple_image_input__controls > .btn {
        margin-right: 10px;
    }
    .simple_image_input .simple_image_input__controls .btn {
        color: #fff;
        border: 1px solid transparent;
        border-radius: 0.25rem;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
    }
    .simple_image_input .simple_image_input__controls .btn.btn__upload {
        background: gray;
    }
    .simple_image_input .simple_image_input__controls .btn.btn__change {
        background: blue;
        margin-right: 10px;
    }
    .simple_image_input .simple_image_input__controls .btn.btn__remove {
        background: red;
    }
    .simple_image_input .simple_image_input__controls .file__input {
        position: relative;
    }
    .simple_image_input .simple_image_input__controls .file__input input {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        font-size: 24px;
        opacity: 0;
    }
</style>
