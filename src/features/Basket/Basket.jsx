import { useSelector } from "react-redux";

const Basket = () => {
  const getGoods = useSelector((state) => state.basketHandler.goods);


  // const getCurrentGoodCost = (id) => {
  //   if(id){
  //     const cost = getGoods.reduce(prev, current) => {
  //       if(current.id === id){
  //         return prev.price + current.price;
  //       }
  //     }
  //   }
  // }

  const getCurrentGoodCount = (id) => {
    if(id){
      let itemcount = 0;
      const count = getGoods.reduce((acc,curr) => {
        if(curr.id === id){
          return  itemcount + 1
        }
        
      });
      //const count = getGoods.filter(good => good.id === id);
    //  console.log('count',itemcount);
  //    return count.length;
    }
  }

  const getBasket = (goods) => {
    if(goods){
      let goodsArr = [{
        count:0,
        name:'',
        price:'',
        img:'',
        cost:'',
      }]
    //  console.log('goods',goods);
      //const result = goods.reduce((x, y) => x.includes(y) ? x : [...x, y], []);
     // console.log('result2',[...new Set(result.map(a => a.name))]);
     let calculatedGoods = [];
    //  const ress = goods.reduce(function(previousValue, currentValue, index, array) {
    //   let checkOtherItemsArr = array.filter(i => i.name === currentValue.name);
    //   calculatedGoods[index] = currentValue;
    // });

    let repeatArr = [];
    let checkRepeat = goods.map((item, index) => {
      let checkOtherItemsArr = goods.filter(i => i.name === item.name);
  //    checkOtherItemsArr
     //console.log('checkOtherItemsArr',checkOtherItemsArr);
    })
//console.log('calculatedGoods',calculatedGoods);

    }
  }

  return (
    <div className={"basket"}>
      {getGoods.length > 0 ? (
        <div>
          <table>
          <tbody>
            <tr>
              <td></td>
              <td>Изображение</td>
              <td>Наименование</td>
              <td>Цена за один товар</td>
              <td>Количество</td>
              <td>Цена</td>
            </tr>
          {getBasket(getGoods)}
            {/* {getGoods.map((good, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{good.img}</td>
                <td>{good.name}</td>
                <td>{good.price}</td>
                <td>{good.cost}</td>
                <td>999</td>
              </tr>
            ))} */}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Товаров нет!</div>
      )}
    </div>
  );
};

export default Basket;
