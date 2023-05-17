<template>
    <div class="container">
        <h1>listado
            <button @click="newPay_mode()"
            class="btn btn-success mx-2">
            <font-awesome-icon icon="plus" />  
            </button>
        </h1>        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">observation</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pay_mode,index) in pay_mode" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{pay_mode.id}}</td>
                <td>{{pay_mode.name}}</td>
                <td>{{pay_mode.observation}}</td>
                <td>
                    <button @click="deletePay_mode(pay_mode.id)"
                      class="btn btn-danger mx-2">
                      <font-awesome-icon icon="trash" />  
                    </button>
                    <button @click="editPay_mode(pay_mode.id)"
                      class="btn btn-warning mx-2">
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
    name:'Pay_mode',
    data(){
        return{
            pay_mode:[]
        }
    },
    methods:{
        deletePay_mode(codigo){
            Swal.fire({
                title:`Do you want to delete the comuna with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                    if(result.isConfirmed){
                        axios.delete(`http://127.0.0.1:8000/api/pay_mode/${codigo}`)
                        .then(response => {
                            if (response.data.success){
                                Swal.fire('Deleted!! ', '','success')
                                this.pay_mode=response.data.pay_mode
                            }
                        })
                    }
                })
        },
        editPay_mode(id){
            this.$router.push({name: 'EditarPay_mode', params:{ id:`${id}`}})
        },
        newPay_mode(){
            this.$router.push({name: 'NewPay_mode'});
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/pay_mode')
        .then(response=>(this.pay_mode=response.data.pay_mode))
    }
}

</script>
