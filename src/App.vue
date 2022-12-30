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
    const edit=ref(false)
    const preloadData=ref(null)
    let id = ref(null)
    function getAll(){
      data.value= BD.getAll()
    }
    function create(_data){
      BD.create(_data)
      getAll()
    }
    function editEntry(_data){
      BD.update(id.value,_data)
      getAll()
      edit.value=false
    }
    function deleteData(_id){
      BD.delete(_id)
      getAll()
    }
    function update(_id){
      id.value=_id
      edit.value=true
    }
    onBeforeMount(()=>{
      getAll()
    })
    return {
      getAll,
      deleteData,
      create,
      update,
      editEntry,
      preloadData,
      data,
      edit,
    }
  }
} 

</script>
<template>
  <DataForm :edit="edit" @save="create" @edit="editEntry" />
  <DataTable :dataList="data"  @delete="deleteData" @update="update"/>
</template>

<style>
body{
  background: #eee;
}
*{
  font-family: Arial, Helvetica, sans-serif;
}
</style>