const INIT_STATE = {
    carts: [],
    searchQuery: '',
  filteredCarts: [],

};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      // case "ADD_MILK_PRODUCT":
        case "ADD_CART":
  const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
  if (itemIndex >= 0) {
    return {
      ...state,
      carts: state.carts.map((item, index) =>
        index === itemIndex ? { ...item, qnty: item.qnty + 1 } : item
      ),
    };
  } else {
    return {
      ...state,
      carts: [...state.carts, { ...action.payload, qnty: 1 }],
    };
  }


        case "RMV_CART":
            const newData = state.carts.filter((el) => el.id !== action.payload);
            return {
                ...state,
                carts: newData
            };
            case "CLEAR_CART":
      // Handle the clear cart action here
      return {
        ...state,
        carts: [], // This clears the cart array
      };


            
            case "RMV_ONE":
    const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

    if (itemIndex_dec >= 0 && state.carts[itemIndex_dec].qnty > 1) {
        const updatedCarts = state.carts.map((item, index) =>
            index === itemIndex_dec ? { ...item, qnty: item.qnty - 1 } : item
        );
        return {
            ...state,
            carts: updatedCarts
        };
    } else if (itemIndex_dec >= 0 && state.carts[itemIndex_dec].qnty === 1) {
        const newData = state.carts.filter((el) => el.id !== action.payload.id);
        return {
            ...state,
            carts: newData
        };
    }
    return state; // Return the unchanged state if item not found


    case 'SET_SEARCH_QUERY':
        const searchQuery = action.payload;
        const filteredCarts = state.carts.filter(item =>
          item.rname.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return {
          ...state,
          searchQuery,
          filteredCarts,
        };

        default:
            return state;
    }
};
