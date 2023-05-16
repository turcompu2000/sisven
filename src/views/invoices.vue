<template>
    <div class="container">
        <h1>listado</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">number</th>
                    <th scope="col">customer_id</th>
                    <th scope="col">date</th>
                    <th scope="col">pay_mode_id</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(invoices,index) in invoices" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{invoices.number}}</td>
                <td>{{invoices.customer_id}}</td>
                <td>{{invoices.date}}</td>
                <td>{{invoices.pay_mode_id}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'

export default{
    name:'Invoices',
    data(){
        return{
            invoices:[]
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/invoices')
        .then(response=>(this.invoices=response.data.invoices))
    }
}

</script>


