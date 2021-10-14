import {differenceBy,differenceWith } from 'lodash';
import { ADD_GOOD } from "../../constants";

const defaultState = {
  goods: [],
  totalCount: 0,
};

let tempGoodsArr = [];

export const basketReducer = (state = defaultState, action) => {

  const addGood = (payload) => {
  //  console.log('tempGoodsArr',tempGoodsArr);
  let newArr = [];

//  newArr = differenceWith(tempGoodsArr,[{name: payload.name}], 'isEqual');

  //    if(tempGoodsArr.length > 1){
  //       for(let i = 0; i <= tempGoodsArr.length; i++){
  //         if(tempGoodsArr[i] != ''){
  //         let check = tempGoodsArr.filter(i => i.name === tempGoodsArr[i].name);
  //         console.log('check.length',check.length);
  //           if(check.length > 1 ){
  //             console.log('дубликат');
  //           }
  //         }else{
  //           console.log('no name');
  //         }
  //       }
  //  }


// tempGoodsArr.map((item) => {
//   let check = tempGoodsArr.filter(i => i.name === item.name);
//  console.log('check.length',check.length);
//   if(check.length > 1 ){
//     console.log('дубликат');
//     return;
//   }
// })

// let godinf = tempGoodsArr.find(i => i.name === 'Go');
// godinf.counter = 10;
// console.log('godinf',godinf);

  // let simpleArr = [];
  // if(tempGoodsArr.length > 1){
  //   for(let i= 0; i <= tempGoodsArr.length; i++){
  //     for(let j= 0; j <= tempGoodsArr.length; j++){
  //       if(tempGoodsArr[i].name === tempGoodsArr[j].name){
  //         simpleArr.push(tempGoodsArr[i].count=21)
  //       }
  //     }
  //   }
  // }
 // console.log('newArr',simpleArr);
//  console.log('tempGoodsArr',tempGoodsArr);
 //   console.log('difference',newArr);

   // _.isEqual(one, two);

  //  let newArr = tempGoodsArr.reduce(function(previousValue, currentValue, index, array) {
  //     return differenceBy(tempGoodsArr,[{name: currentValue.name}], 'name')
  //     //return previousValue + currentValue;
  //   });
   
   
   // console.log('unique',unique);
   // if(!itemArr.length > 0){
      return {
      ...state,
        goods: [
          ...state.goods,
          
          {
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.img,
            count: 1
          },
        ],
    
        totalCount: state.totalCount + action.payload.counter,
      };
   // }
    
  }

  switch (action.type) {
    case ADD_GOOD:
      tempGoodsArr.push(action.payload); 
      return addGood(action.payload);

    case "REMOVE_GOOD":
      return { ...state, totalCount: state.totalCount - action.payload };

    default:
      return state;
  }
};
