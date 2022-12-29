<template>
    <div class="main">
        <h1>Create Entry</h1>
        <form @submit.prevent="$emit('save',data)">
            <div class="row">
                <div>
                    <label for="">Nombre actividad</label>
                    <input type="text"  v-model="data.activity_name">
                </div>
                <div>
                    <label for="">Hora inicio</label>
                    <input type="text"  v-model="data.start_time">
                </div>
                <div>
                    <label for="">Derechos culturales</label>
                    <select v-model="data.cultural_right">
                        <option v-for="cultural_right in cultural_right_list">{{cultural_right}}</option>
                    </select>
                </div>
                <div>
                    <label for="">Expertise</label>
                    <select v-model="data.expertise">
                        <option v-for="expertise in expertise_list">{{expertise}}</option>
                    </select>           
                </div>
            </div>
            <div class="row">
                <div>
                    <label for="">Fecha</label>
                    <input type="date"  v-model="data.activity_date">
                </div>
                <div>
                    <label for="">Hora final</label>
                    <input type="text"  v-model="data.final_time">
                </div>
                <div>
                    <label for="">Nac</label>
                    <select v-model="data.nac">
                        <option v-for="nac in nac_list">{{nac}}</option>
                    </select>
                </div>
                <div>
                    <button class="form-btn" type="submit">Guardar</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { ref } from 'vue';
export default{
    props:['preload'],
    setup(props){
        const expertise_list = ref([
            "Artes plásticas",
            "Teatro",
            "Música",
            "Danza",
            "Cocina tradicional.",
            "Juegos tradicionales.",
            "Promoción de lectura"
        ])
        const cultural_right_list = ref([
            "Identidad y patrimonios culturales",
            "Referencias a comunidades culturales",
            "Acceso y participación en la vida cultural",
            "Educación y formación",
            "Información y comunicación",
            "Cooperación cultural"
        ])
        const nac_list = ref([
            "ALCALÁ",
            "ANDALUCÍA",
            "ANSERMANUEVO",
            "ARGELIA",
            "BOLÍVAR",
            "BUENAVENTURA",
            "BUGA"
        ])
        const data = ref({
            activity_name:'',
            activity_date:'',
            start_time:'',
            final_time:'',
            expertise:'',
            nac:'',
            cultural_right:'',
        })
        return {
            data,
            nac_list,
            expertise_list,
            cultural_right_list
        }
    }
}
</script>
<style>
.main{
    padding: 20px;
    background: #fff;
    margin:auto;
    border-radius: 20px;
    margin-bottom: 30px;
    margin-top: 30px;
    box-shadow: 10px 10px 30px #00000033;
    width: fit-content;
}
form{
    display: flex;
    gap: 2rem;
}
form input{
    border-radius: 9999px;
    border: 2px solid blueviolet;
    padding: 5px;
}
form select{
    border-radius: 9999px;
    border: 2px solid blueviolet;
    padding: 5px;
}
label{
    margin-top:5px;
}
.form-btn{
    margin-top:22px;
    color: white;
    padding: 7px;
    background: blueviolet;
    border: none;
    border-radius: 9999px;
}
form .row >div{
    display:flex;
    flex-direction: column;
}
</style>