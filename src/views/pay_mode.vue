<template>
    <div class="container">
        <h1>listado</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">observation</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pay_mode,index) in pay_mode" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{pay_mode.name}}</td>
                <td>{{pay_mode.observation}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'

export default{
    name:'Pay_mode',
    data(){
        return{
            pay_mode:[]
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/pay_mode')
        .then(response=>(this.pay_mode=response.data.pay_mode))
    }
}

</script>
