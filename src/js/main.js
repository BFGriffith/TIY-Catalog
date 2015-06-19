(function(window) {

  function product(data) {

    return {

      shop_name: data.shop_name,



    };
  }

  new Vue({
    el: 'shop_name',
    data: {

      shop_name: product.shop_name

    }


  });



})(window);