import { differenceBy, differenceWith, conforms, filter } from 'lodash';
import { ADD_GOOD } from "../../constants";

const defaultState = {
  goods: [],
  totalCount: 0,
};



export const basketReducer = (state = defaultState, action) => {

  const addGood = (payload) => {
    //  let tempGoodsArr = [];
    //   tempGoodsArr.push(payload);
    const stateArr = state.goods;
    if (state.goods.length >= 1) {
      //const lastItemName = stateArr[stateArr.length - 1].name;
      // let localCounter = stateArr[stateArr.length - 1].counter;
      const checkSimple = filter(stateArr, { 'name': payload.name });
      //let localCounter = 
      if (checkSimple.length > 1) {
        console.log('Dub', state);

        // return {
        //   ...state,
        //   //goods: [...state.goods, payload],
        //   goods: [
        //     ...state.goods.map(i => {
              
        //        if (i.name === payload.name) {
        //         return Object.assign({}, i, { counter: i.counter += payload.counter });
        //       //   i.counter += payload.counter;
        //        }
        //     })
        //   ],

        //   totalCount: state.totalCount + payload.counter,
        // };



      } else {
        console.log('orig', state);
        return {
          ...state,
          goods: [...state.goods, payload],
          totalCount: state.totalCount + payload.counter,
        };
      }
    } else {
      console.log('orig', state);
      return {
        ...state,
        goods: [...state.goods, payload],
        totalCount: state.totalCount + payload.counter,
      };
    }
    


  }

  switch (action.type) {
    case ADD_GOOD:
      return addGood(action.payload);

    case "REMOVE_GOOD":
      return { ...state, totalCount: state.totalCount - action.payload };

    default:
      return state;
  }
};
