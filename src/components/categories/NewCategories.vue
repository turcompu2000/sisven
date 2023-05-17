<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New</h1>
        <div class="card">
           <div class="card-header fw-bold">
            categories
           </div>
           <div class="card-body">
            <form @submit.prevent="saveCategories">
             <div class="row mb-3">
                <label for="id" class="form-label">Codigo</label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                    <input type="text" class="form-control" id="id" placeholder="codigo categories" disabled 
                    v-model="categories.id">
                </div> 
             </div>    

            <div class="row mb-3">
                <label for="id" class="form-label">Nombre : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                    <input type="text" class="form-control" id="name" placeholder="nombre categories" 
                    v-model='categories.name'>
                </div>           
             </div>
             <div class="row mb-3">
                <label for="description" class="form-label">descripcion : </label>
                <div class="input-group">
                    <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                    <input type="text" class="form-control" id="description" placeholder="descripcion categories" 
                     v-model='categories.description'>
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

        async saveCategories(){
            const res =await axios.post('http://127.0.0.1:8000/api/categories/',this.categories)
            console.log(res);
            if(res.status==200){
                this.$router.push({name:'Categories'})
                Swal.fire({
                    icon: 'success',
                    title: 'Categories has been saved',
                    showConfirmButton:false,
                    timer:2000
                })
            }
        }
    },
}
</script>