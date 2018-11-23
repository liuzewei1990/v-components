<template>
    <div class="v-check-icon">
        <a href="javascript:void(0);" :style="`flex-direction:${flexDirection};`">
            <a v-show="value" href="javascript:void(0);" @click="updateValue"> 
                <slot name="checked">
                    <svg t="1542959081974" class="icon" :width="width*scale" :height="height*scale" :style="`fill:${color};`" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2522" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs></defs>
                            <path d="M512.223 31.569c-270.47 0-489.739 219.27-489.739 489.739s219.27 489.739 489.739 489.739 489.739-219.27 489.739-489.739-219.27-489.739-489.739-489.739zM814.592 350.857l-342.995 364.433c-6.545 6.945-15.405 10.507-24.331 10.507-7.457 0-14.937-2.471-21.126-7.546l-235.809-192.935c-14.269-11.687-16.384-32.723-4.697-46.993 11.687-14.291 32.701-16.384 46.993-4.697l211.701 173.212 321.625-341.749c12.689-13.468 33.792-14.047 47.215-1.425 13.401 12.644 14.047 33.77 1.425 47.193z" p-id="2523">
                        </path>
                    </svg>
                </slot>
            </a>
            <a v-show="!value" href="javascript:void(0);" @click="updateValue">
                <slot name="unchecked">
                    <svg t="1542960001496" class="icon" :width="width*scale" :height="height*scale" style="fill:#d5d5d5;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4080" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs></defs>
                        <path d="M511.401522 921.71986c225.935232 0 409.120562-183.18533 409.120561-409.120562S737.336754 103.478736 511.401522 103.478736 102.28096 286.664066 102.28096 512.599298s183.18533 409.120562 409.120562 409.120562z m0 102.28014c-282.468982 0-511.400702-228.931721-511.400703-511.400702s228.931721-511.400702 511.400703-511.400703 511.400702 228.931721 511.400702 511.400703-228.931721 511.400702-511.400702 511.400702z" p-id="6360"></path>
                    </svg>
                </slot>
            </a>
            <slot></slot>
        </a>
    </div>
</template>

<script>
export default {
    name: 'check-icon',
    methods: {
        updateValue() {
            this.$emit('update:value', !this.value)
        }
    },
    data(){
        return{
            width:20,
            height:20,
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        flexDirection: {
            type: String,
            default: 'inherit'
        },
        color:{
            type:String,
            default:"#11a602"
        },
        scale:{
            type:Number,
            default:1
        },
    }
}
</script>

<style lang="less" scoped>

.v-check-icon {
    display: inline-block;
    a{
        display: flex;
        align-items: center;
        svg{
            margin:5px;
        }
    }
}
</style>
