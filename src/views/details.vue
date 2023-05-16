<template>
    <div class="container">
        <h1>listado</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">invouce_id</th>
                    <th scope="col">product_id</th>
                    <th scope="col">quantily</th>
                    <th scope="col">price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(details,index) in details" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{details.invouce_id}}</td>
                <td>{{details.product_id}}</td>
                <td>{{details.quantily}}</td>
                <td>{{details.price}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'

export default{
    name:'Details',
    data(){
        return{
            details:[]
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/details')
        .then(response=>(this.details=response.data.details))
    }
}

</script>
