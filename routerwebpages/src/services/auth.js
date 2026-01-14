export const getProfile = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data : { username: 'user123', email: 'example@gmail.com'},
                statusText: 'Success',
                status: 200
            });
        }, 3000);
    });
}