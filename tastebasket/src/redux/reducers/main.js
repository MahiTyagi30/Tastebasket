import {combineReducers} from 'redux'
import { cartreducer } from './reducer'

import wishlistReducer from './WishListReducer';

const rootred = combineReducers({
    cartreducer,
    wishlist: wishlistReducer,
});

export default rootred
