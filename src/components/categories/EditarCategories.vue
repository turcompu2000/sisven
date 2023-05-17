<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
           <div class="card-header fw-bold">
            categories
           </div>
           <div class="card-body">
            <form @submit.prevent="updateCategories">
             <div class="row mb-3">
                <label for="id" class="form-label">Codigo</label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                    <input type="text" class="form-control" id="id" placeholder="codigo categories" disabled 
                    v-model="categories.id">
                </div> 
             </div>    

            <div class="row mb-3">
                <label for="name" class="form-label">Nombre : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                    <input type="text" class="form-control" id="name" placeholder="nombre categories" 
                    v-model="categories.name">
                </div>           
             </div>
             
             <div class="row mb-3">
                <label for="description" class="form-label">description : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                    <input type="text" class="form-control" id="description" placeholder="nombre categories"
                     v-model="categories.description">
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
    name: 'EditarCategories',
    data(){
        return{
            categories:{
                id:0,
                name:"",
                description:""
            }
        }
    },
    methods:{
        cancel(){
            this.$router.push({name:'Categories'})
        },
        async updateCategories(){
            const res =await axios.put(`http://127.0.0.1:8000/api/categories/${this.categories.id}`,this.categories)
            if(res.status==200){
                this.$router.push({name:'Categories'})
                Swal.fire({
                    position:'top-end',
                    icon: 'success',
                    title: 'Categories editado ',
                    showConfirmButton: false,
                    timer:2000
                })
            }
        }
    },
    mounted(){
        this.categories.id=this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/categories/${this.categories.id}`)
        .then(response=>(this.categories=response.data.categories))
    },
}
</script>