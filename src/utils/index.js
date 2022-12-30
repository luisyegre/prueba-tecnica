const DATA={
    create(data){
        const bd=JSON.parse(localStorage.getItem('data'))||[]
        bd.push(data)
        localStorage.setItem('data',JSON.stringify(bd))
    },
    delete(id){
        const bd=JSON.parse(localStorage.getItem('data'))
        bd.splice(id,1)
        localStorage.setItem('data',JSON.stringify(bd))
    },
    update(id,data){
        const bd=JSON.parse(localStorage.getItem('data'))
        Object.keys(data).forEach(dataField =>{
            if(!!data[dataField]){
                bd[id][dataField]=data[dataField]
            }
        })
        localStorage.setItem('data',JSON.stringify(bd))
    },
    getAll(){
        const bd=JSON.parse(localStorage.getItem('data'))
        return bd       
    },
    getOne(id){
        const bd=JSON.parse(localStorage.getItem('data'))
        return bd[id]
    }
}
export default DATA