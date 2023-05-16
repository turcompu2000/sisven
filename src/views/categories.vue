<template>
    <div class="conteiner">
        <h1>listado
            <button @click="newCategories()"
            class="btn btn-success mx-2">
            <font-awesome-icon icon="plus" />  
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(categories,index) in categories" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{categories.id}}</td>
                <td>{{categories.name}}</td>
                <td>{{categories.description}}</td>
                <td>
                    <button @click="deleteCategories(categories.id)"
                      class="btn btn-success mx-2">
                      <font-awesome-icon icon="trash" />  
                    </button>
                    <button @click="editCategories(categories.id)"
                      class="btn btn-success mx-2">
                      <font-awesome-icon icon="pencil" />  
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default{
    name:'Categories',
    data(){
        return{
            categories:[]
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/categories')
        .then(response=>(this.categories=response.data.categories))
    },
}
</script>