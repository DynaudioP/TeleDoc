export function loggeduser(aksi){
    return{
        type: 'LOGIN',
        payload: aksi
    }
}