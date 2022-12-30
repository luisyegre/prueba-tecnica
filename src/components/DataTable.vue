<template>
    <table>
        <thead>
            <tr>
                <td>#</td>
                <td>CONSECUTIVO</td>
                <td>NOMBRE ACTIVIDAD</td>
                <td>DERECHOS CULTURALES</td>
                <td>NAC</td>
                <td>FECHA</td>
                <td>HORA INICIO</td>
                <td>EXPERTICIA</td>
                <td>HORA FINAL</td>
            </tr>
        </thead>
        <tbody v-if="dataList&&dataList.length>0">
            <tr v-for="(data,i) in dataList">
                <td>{{i}}</td>
                <td>{{i}}</td>
                <td>{{data.activity_name}}</td>
                <td>{{data.cultural_right}}</td>
                <td>{{data.nac}}</td>
                <td>{{data.activity_date}}</td>
                <td>{{data.start_time}}</td>
                <td>{{data.expertise}}</td>
                <td>{{data.final_time}}</td>
                <td>
                    <button @click="$emit('delete',i)">❌</button>
                    <button @click="$emit('update',i)">🖊</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default{
    props:['dataList'],
}
</script>
<style>
table{
    background: #fff;
    margin:auto;
    box-shadow: 10px 10px 30px #00000033;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 30px;
    margin-top: 30px;
    width: fit-content;
}
table thead tr td{
    background: blueviolet;
    color: white;
    padding: 5px;
    font-weight: bold;
}
table tbody td{
    border-bottom: 1px solid gray;
}
button{
    background: blueviolet;
    border: none;
    padding: 5px;
    border-radius: 9999px;
}
</style>