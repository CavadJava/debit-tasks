import userinstances from './instance.user.api';

export const fetchUsers = async () => {
    const response = await userinstances.get('/users');
    if(response.status!=200){
        throw new Error(response.message);
    }
    return response.data; 
}
export const fetchUser = async (id) => {
    const response = await userinstances.get(`/user/${id}`)
    if(response.status!=200){
        throw new Error(response.message);
    }
    return response.data; 
}