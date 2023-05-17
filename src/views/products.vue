<template>
    <div class="container">
        <h1>listado
            <button @click="newProducts()"
            class="btn btn-success mx-2">
            <font-awesome-icon icon="plus" />  
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                    <th scope="col">stock</th>
                    <th scope="col">categoria_id</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product,index) in product" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{product.id}}</td>
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.stock}}</td>
                <td>{{product.categoria_id}}</td>
                <td>
                    <button @click="deleteProducts(product.id)"
                      class="btn btn-danger mx-2">
                      <font-awesome-icon icon="trash" />  
                    </button>
                    <button @click="editProducts(product.id)"
                      class="btn btn-warning mx-2">
                      <font-awesome-icon icon="pencil" />  
                    </button>
                </td>
              </tr>            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default{
    name:'Products',
    data(){
        return{
            products:[]
        }
    },
    methods:{
        deleteProducts(codigo){
            Swal.fire({
                title:`Do you want to delete the comuna with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                    if(result.isConfirmed){
                        axios.delete(`http://127.0.0.1:8000/api/products/${codigo}`)
                        .then(response => {
                            if (response.data.success){
                                Swal.fire('Deleted!! ', '','success')
                                this.products=response.data.products
                            }
                        })
                    }
                })
        },
        editProducts(id){
            this.$router.push({name: 'EditarProducts', params:{ id: `${id}`}})
        },
        newProducts(){
            this.$router.push({name: 'NewProducts'});
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/products')
        .then(response=>(this.products=response.data.products))
    }
}

</script>

