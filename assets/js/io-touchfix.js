/**
 * Created by Gavriil on 11/11/2016.
 */
import $ from 'jquery';

$(document).ready(function () {
    let $productLink = $('.io .products-grid .image-box a.product-image');
    $productLink.on('touchend', function (e) {
        let $link = $(this);
        let $productWrapper = $link.parents('li.item');
        if($productWrapper.hasClass('taphover')){
            return true;
        }
        else{
            e.preventDefault();
            let $tapHovered = $('.taphover');
            if($tapHovered.length>0){
                $tapHovered.removeClass('taphover');
            }
            $productWrapper.addClass("taphover");
            return false; //extra, and to make sure the function has consistent return points
        }
    });


});