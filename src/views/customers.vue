<template>
    <div class="container">
        <h1>listado</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">document_number</th>
                    <th scope="col">first_name</th>
                    <th scope="col">last_name</th>
                    <th scope="col">address</th>
                    <th scope="col">birthday</th>
                    <th scope="col">phone_number</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(customers,index) in customers" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{ customers.document_number}}</td>
                    <td>{{ customers.first_name}}</td>
                    <td>{{ customers.last_name}}</td>
                    <td>{{ customers.address}}</td>
                    <td>{{ customers.birthday}}</td>
                    <td>{{ customers.phone_number}}</td>
                    <td>{{ customers.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'

export default{
    name:'Customers',
    data(){
        return{
            customers:[]
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/customers')
        .then(response=>(this.customers=response.data.customers))
    }
}
</script>