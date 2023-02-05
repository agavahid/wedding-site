const store = {
    blogs: [
        {name: 'blog1', id: 1},
        {name: 'blog2', id: 2},
    ],
    menu: [
        {name: 'menu1', id: 1},
        {name: 'menu2', id: 2},
    ],
    counter : {
        value: 0
    }
}

increment(store.counter)

function increment (state) {
    return state.value = state.value + 1;   
}

function decrement (state) {
    return state.value = state.value - 1;   
}

// action => payload, dispatch

function decrement (state, action) {
    return state.value = state.value - action.payload;   
}