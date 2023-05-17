<template>
    <div class="container">
        <h1>listado
            <button @click="newCustomers()"
            class="btn btn-success mx-2">
            <font-awesome-icon icon="plus" />  
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">id</th>
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
                    <td>{{ customers.id}}</td>
                    <td>{{ customers.document_number}}</td>
                    <td>{{ customers.first_name}}</td>
                    <td>{{ customers.last_name}}</td>
                    <td>{{ customers.address}}</td>
                    <td>{{ customers.birthday}}</td>
                    <td>{{ customers.phone_number}}</td>
                    <td>{{ customers.email}}</td>
                    <td>
                    <button @click="deleteCustomers(customers.id)"
                      class="btn btn-danger mx-2">
                      <font-awesome-icon icon="trash" />  
                    </button>
                    <button @click="editCustomers(customers.id)"
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
    name:'Customers',
    data(){
        return{
            customers:[]
        }
    },
    methods:{
        deleteCustomers(codigo){
            Swal.fire({
                title:`Do you want to delete the comuna with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                    if(result.isConfirmed){
                        axios.delete(`http://127.0.0.1:8000/api/customers/${codigo}`)
                        .then(response => {
                            if (response.data.success){
                                Swal.fire('Deleted!! ', '','success')
                                this.customers=response.data.customers
                            }
                        })
                    }
                })
        },
        editCustomers(id){
            this.$router.push({name: 'EditarCustomers', params:{ id: `${id}`}})
        },
        newCustomers(){
            this.$router.push({name: 'NewCustomers'});
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/customers')
        .then(response=>(this.customers=response.data.customers))
    }
}
</script>