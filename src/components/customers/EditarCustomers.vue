<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
           <div class="card-header fw-bold">
            categories
           </div>
           <div class="card-body">
            <form @submit.prevent="updateCustomers">
                <div class="row mb-3">
                    <label for="id" class="form-label">Codigo</label>
                    <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                    <input type="text" class="form-control" id="id" placeholder="codigo customers" disabled 
                    v-model="customers.id">
                   </div> 
                  </div>    

            <div class="row mb-3">
                <label for="document_number" class="form-label">Nombre : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                    <input type="text" class="form-control" id="document_number" placeholder="document_number" 
                    v-model="customers.document_number">
                </div>           
             </div>



             <div class="row mb-3">
                <label for="first_name" class="form-label">descripcion : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                    <input type="text" class="form-control" id="first_name" placeholder="first_name" 
                    v-model="customers.first_name">
                </div>
             </div>

            <div class="row mb-3">
                <label for="address" class="form-label">descripcion : </label>
                <div class="input-group">
                    <div class="input-group-text"></div>
                    <input type="text" class="form-control" id="address" placeholder="address" 
                    v-model="customers.address">
                </div>   
            </div>
        

            <div class="row mb-3">
                <label for="birthday" class="form-label">descripcion : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                    <input type="date" class="form-control" id="birthday" placeholder="birthday" 
                    v-model="customers.birthday">
                </div>                      
              </div>

              <div class="row mb-3">
                <label for="phone_number" class="form-label">descripcion : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                    <input type="text" class="form-control" id="phone_number" placeholder="phone_number" 
                    v-model="customers.phone_number">
                </div>                      
              </div>

              <div class="row mb-3">
                <label for="email" class="form-label">descripcion : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                    <input type="text" class="form-control" id="email" placeholder="email" 
                    v-model="customers.email">
                </div>                      
              </div>
              <button class="btn btn-primary" type="submit">actualizar</button>
              <button class="btn btn-secondary mx2" @click="cancel">cancel</button>
            </form>
           </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default{
    name: 'EditarCustomers',
    data(){
        return{
            customers:{
                id:0,
                document_number:"",
                first_name:"",
                address:"",
                birthday:"",
                phone_number:"",
                email:""
            }
        }
    },
    methods:{
        cancel(){
            this.$router.push({name:'Customers'})
        },
        async updateCustomers(){
            const res =await axios.put(`http://127.0.0.1:8000/api/customers/${this.customers.id}`,this.customers)
            if(res.status==200){
                this.$router.push({name:'Customers'})
                Swal.fire({
                    icon: 'success',
                    title: 'Customers editado ',
                    showConfirmButton: false,
                    timer:2000
                })
            }
        }
    },
    mounted(){
        this.customers.id=this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/customers/${this.customers.id}`)
        .then(response=>(this.customers=response.data.customers))
    },
}
</script>