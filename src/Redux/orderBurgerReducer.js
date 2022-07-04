const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'c heese',amount:1},{name:'beef',amount:1}] 

    menu: { salad: 10, cheese: 20, beef: 55 },

    total: 85
}

const BaiTapOrderBurgerReducer = (state = burgerState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'ADD_BURGER_ITEM':{
            let {burgerItem, amount} = action;
            let burgerUpdate = { ...state.burger };
            if(amount < 1 && state.burger[burgerItem] < 1){
                return { ...state}
            }
            burgerUpdate[burgerItem] += amount;
            state.burger = burgerUpdate;
            state.total += amount * state.menu[burgerItem];
            return {...state};
        }

    }
    return { ...state }
}

export default BaiTapOrderBurgerReducer;