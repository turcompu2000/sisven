<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New products</h1>
        <div class="card">
           <div class="card-header fw-bold">
            products
           </div>
           <div class="card-body">
            <form @submit.prevent="saveProducts">
             <div class="row mb-3">
                <label for="id" class="form-label">Codigo</label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                    <input type="text" class="form-control" id="id" placeholder="" disabled 
                    v-model="products.id">
                </div> 
             </div>    

              <div class="row mb-3">
                <label for="name" class="form-label">Nombre : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                    <input type="text" class="form-control" id="name" placeholder="" 
                    v-model='products.name'>
                </div>           
               </div>
               <div class="row mb-3">
                <label for="price" class="form-label">descripcion : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                    <input type="text" class="form-control" id="price" placeholder="" 
                     v-model='products.price'>
                </div>           
              </div>
              
              <div class="row mb-3">
                <label for="stock" class="form-label">Nombre : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                    <input type="text" class="form-control" id="stock" placeholder="" 
                    v-model='products.stock'>
                </div>           
               </div>
               
              <div class="row mb-3">
                <label for="categoria_id" class="form-label">Nombre : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                    <input type="text" class="form-control" id="categoria_id" placeholder="" 
                    v-model='pay_mode.categoria_id'>
                </div>           
               </div>

              <button class="btn btn-primary" type="submit">Save</button>
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

    name: 'EditarProducts',
    data(){
        return{
            pay_mode:{
                id:0,
                name:"",
                price:"",
                stock:"",
                categoria_id:""
            }
        }
    },
    methods:{
        cancel(){
            this.$router.push({name:'Products'})
        },

        async saveProducts(){
            const res =await axios.post('http://127.0.0.1:8000/api/products/',this.products)
            console.log(res);
            if(res.status==200){
                this.$router.push({name:'Products'})
                Swal.fire({
                    icon: 'success',
                    title: 'Products has been saved',
                    showConfirmButton:false,
                    timer:2000
                })
            }
        }
    },
}
</script>