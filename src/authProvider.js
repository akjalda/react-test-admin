//Used a fake authentication provider 
// that accepts every login request, 
// and stores the username in localStorage. 
// Each page change will require that localStorage contains 
// a username item.

export default {

    // called when user attempts log in
    login: ({username}) => {
        localStorage.setItem('username', username);
        //accept all username/password combinations
        return Promise.resolve();
    },

    //called when user logsout
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },

    //called when the API returns an error
    checkError: ({status}) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },

    checkAuth: () => {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    },

    getPermissions: () => Promise.resolve(),
};