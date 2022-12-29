<script>
import DataTable from '@/components/DataTable.vue'
import DataForm from '@/components/DataForm.vue'
import BD from '@/utils/index.js'
import { ref, onBeforeMount } from 'vue'

export default{
  components:{
    DataTable,
    DataForm
  },
  setup(){
    const data=ref([])
    function getAll(){
      data.value= BD.getAll()
    }
    function create(data){
      BD.create(data)
      getAll()
    }
    function deleteData(id){
      BD.delete(id)
      getAll()
    }
    onBeforeMount(()=>{
      getAll()
    })
    return {
      getAll,
      deleteData,
      create,
      data
    }
  }
} 

</script>
<template>
  <DataForm @save="create"/>
  <DataTable :dataList="data" @delete="deleteData"/>
</template>

<style>
body{
  background: #eee;
}
*{
  font-family: Arial, Helvetica, sans-serif;
}
</style>