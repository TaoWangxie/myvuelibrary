const state = {
    token : window.localStorage.getItem('token') || '未登录',
};

const actions = {
    
};

const mutations = {
    TOKEN(state, payload){
        state.token = payload;
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}