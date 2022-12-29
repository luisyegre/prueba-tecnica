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
        bd[id]=data
        localStorage.setItem('data',JSON.stringify(bd))
    },
    getAll(){
        const bd=JSON.parse(localStorage.getItem('data'))
        return bd       
    },
    getOne(id){
        const bd=JSON.parse(localStorage.getItem('data'))
        return bd[id]=data
    }
}
export default DATA