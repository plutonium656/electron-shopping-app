<template>
    <div class="container">
        <a href="#" class="btn-primary" @click="onClickToggleForm">Show Form</a>
        <a href="#" class="btn-primary">Toggle Form</a>
        <app-new-article-form v-if="isFormActive" />
    </div>
</template>

<script>
import AppNewArticleForm from "../NewArticleForm.vue"
    export default {
        data() {
            return {
                isFormActive:false
            }
        },
        methods: {
            onClickToggleForm(event){
                event.target.classList.toggle("btn-active")
                this.isFormActive = !this.isFormActive
            }
        },
        components:{
            appNewArticleForm: AppNewArticleForm
        }
    }
</script>

<style scoped>

    .container{
        width:100%;
    }

    .btn-primary {
        background-color: #1abc9c;
        color: white;
        text-decoration: none;
        display: inline-block;
        padding: 10px;
        border: 1px solid #1abc9c;
        font-weight: bold;
        transition: background-color .5s, color .5s;
        width: 50%;
        text-align: center;
        margin-right: -4px;
    }

    .btn-primary:hover {
        background-color: white;
        color: #1abc9c;
    }

    .btn-active {
        background-color: #46e5c6;
        border-color:#46e5c6;
    }
</style>