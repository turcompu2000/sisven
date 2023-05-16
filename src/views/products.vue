<template>
    <div class="container">
        <h1>listado</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                    <th scope="col">stock</th>
                    <th scope="col">categoria_id</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(products,index) in products" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{products.name}}</td>
                <td>{{products.price}}</td>
                <td>{{products.stock}}</td>
                <td>{{products.categoria_id}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name:'Products',
    data(){
        return{
            products:[]
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/products')
        .then(response=>(this.products=response.data.products))
    }
}

</script>

