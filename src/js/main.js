(function(window) {
  $.getJSON('../../api/product-detail/listings/210529014.json')
            .then(function(placeholderList) {

                $storeTitle = $('#storename');
                $storeTitle.text(placeholderList.results[0].Shop.shop_name);

                $storePic = $('a', 'img#shopLogo');
                $storePic.attr('src', placeholderList.results[0].Images.url_75x75);

                $productTitle = $('#productinfo');
                $productTitle.text(placeholderList.results[0].title)

                $productCost = $('#cost');
                $productCost.text(placeholderList.results[0].price)

            });
/*
  $.getJSON("../api/product-detail/shop/undulatingcontours.json")
    .then(function(results) {
    });
*/
})(window);
