<template>
    <div>
        <van-button :type="buttonType" @click="onSelect" width="200px">
            <div style="float: left">
                <slot name="default">
                </slot>
            </div>
            <div style="float: left" v-if="btnType">
                <Icon type="md-arrow-dropup" style="margin-left:0px;margin-top: -8px" size="15" :color="upColor"/>
                <Icon type="md-arrow-dropdown" style="margin-left:-15px;margin-top: 8px" size="15" :color="downColor"/>
            </div>
            <div style="float: left" v-else>
                <slot name="right-icon">
                    <Icon type="md-arrow-down"/>
                </slot>
            </div>
        </van-button>
    </div>
</template>

<script>
    export default {
        name: "wp_button_sort",
        props: {
            btnType: {type: String, default: null},
            label: {type: String, default: ''},
            value: {type: Boolean, default: false},
        },
        data() {
            return {
                buttonType: 'default',
                defaultSort: 'desc',
                upColor: 'lightgray',
                downColor: 'black',
                check: this.value,
                sortType: -1,
            }
        },
        watch: {
            value() {
                this.setSelect();
            }
        },
        created() {
            this.setSelect();
        },
        methods: {
            setSelect() {
                this.check = this.value;
                this.action();
            },
            action() {
                if (this.check) {
                    this.buttonType = 'danger';
                } else {
                    this.buttonType = 'text';
                    this.sortType = -1;
                }
                if (this.btnType) {
                    if (this.sortType === 0) {
                        this.buttonType = 'text';
                        this.defaultSort = 'asc';
                        this.upColor = 'black';
                        this.downColor = 'lightgray';
                    } else if (this.sortType === 1) {
                        this.buttonType = 'text';
                        this.defaultSort = 'desc';
                        this.upColor = 'lightgray';
                        this.downColor = 'black';
                    } else {
                        this.buttonType = 'text';
                        this.upColor = 'lightgray';
                        this.downColor = 'lightgray';
                    }
                }
            },
            onSelect() {
                if (this.btnType) {
                    if (this.sortType < 0) {
                        this.sortType = 0;
                    } else if (this.sortType === 0) {
                        this.sortType = 1;
                    } else if (this.sortType === 1) {
                        this.sortType = 0;
                    }
                    this.check = true;
                } else {
                    this.check = !this.check;
                }
                this.action();
                if (this.btnType) {
                    this.$emit('onSelect', this.label, this.check, this.defaultSort);
                } else {
                    this.$emit('onSelect', this.label, this.check, this.defaultSort);
                }
            }
        }
    }
</script>

<style scoped>
    .van-button {
        font-size: 12px;
        height: 32px !important;
        line-height: 32px !important;
        border-radius: 0px;
        border: 0px solid #ebedf0;
    }

    .van-button--default {
        color: #323233;
        background-color: #fff;
        border: 0px solid #ebedf0;
    }
</style>