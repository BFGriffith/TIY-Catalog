(function(window) {


  $.getJSON('../../api/product-detail/shop/undulatingcontours.json')
    .then(function(response) {



      // function product(result) {
      //   return {
      //
      //     title: result.shop_name
      //   };
      // }
      //
      //
      // new Vue({
      //   el: '.shopTitle',
      //   data: {
      //     shop_name: product(response.result[0].shop_name)
      //   }
      //
      // })
    });

})(window);