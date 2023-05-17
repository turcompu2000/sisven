<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
           <div class="card-header fw-bold">
            categories
           </div>
           <div class="card-body">
            <form @submit.prevent="updateProducts">
             <div class="row mb-3">
                <label for="id" class="form-label">Codigo</label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                    <input type="text" class="form-control" id="id" placeholder="codigo categories" disabled 
                    v-model="pay_mode.id">
                </div> 
             </div>    

            <div class="row mb-3">
                <label for="name" class="form-label">Nombre : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                    <input type="text" class="form-control" id="name" placeholder="nombre categories" 
                    v-model="pay_mode.name">
                </div>           
             </div>
             
             <div class="row mb-3">
                <label for="observation" class="form-label">observation : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                    <input type="text" class="form-control" id="observation" placeholder="nombre categories"
                     v-model="pay_mode.observation">
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
    name: 'EditarProducts',
    data(){
        return{
            products:{
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
        async updateProducts(){
            const res =await axios.put(`http://127.0.0.1:8000/api/products/${this.products.id}`,this.products)
            if(res.status==200){
                this.$router.push({name:'Products'})
                Swal.fire({
                    icon: 'success',
                    title: 'Products editado ',
                    showConfirmButton: false,
                    timer:2000
                })
            }
        }
    },
    mounted(){
        this.products.id=this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/products/${this.products.id}`)
        .then(response=>(this.products=response.data.products))
    },
}
</script>