(function(window){

  $.getJSON('../api/product-detail/img/images_main_img.json')
    .then(function(allImages) {

      function allImages(result) {
        return {

          main_image_url: result.MainImage.url_170x135,
        }
      }




      // var $images_col_1 = $('img','.img1');
      //     $img1.attr('src', allImages.url_170x135_url );

        // $image = $('img.image_col_1_descr');
        // $image.attr('src', 'images_main_img.image_url');
        // $image.attr('href', 'https:\/\/img0.etsystatic.com\/062\/0\/7321706\/il_170x135.786749714_hlug.jpg')


  });//end of main image fn.




})(window);
