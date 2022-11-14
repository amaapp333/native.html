(function ($) {
    $('body').append('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>');
    var resizeTimer = false;
    var insertAdsenseAd = function () {
        $('.adsense-in').each(function () {
            var $container = $(this),
            // get container size
            adHeight = $container.attr('data-ad-height') ? parseInt($container.attr('data-ad-height')) : $container.height();
            oldSize = $container.attr('data-old-size');
            // escape if width did not change
            if (oldSize == $container.width()) return false;
            $container.attr('data-old-size', $container.width());
            // set ad-format
            adFormat = $container.attr('data-ad-height') ? "" : //"auto";
                $container.attr('data-ad-format') ? $container.attr('data-ad-format') : "auto";
            // adsense identifiers
            adClient = $container.attr('data-ad-client')
            adSlot = $container.attr('data-ad-slot');
            // style options
            adStyle = "display:block;";
            if (adHeight > 0) adStyle += "height:" + adHeight + "px;";
            // inject adsense placeholder
            $container.html('<ins class="adsbygoogle" style="' + adStyle + '" data-ad-client="' + adClient + '" data-ad-slot="' + adSlot + '" data-ad-format="' + adFormat + '"></ins>');
            (adsbygoogle = window.adsbygoogle || []).push({});
        });
    };
    insertAdsenseAd();
    $(window).on('resize', function () {
        if (resizeTimer) {
            clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(insertAdsenseAd, 2500);
    });
})(jQuery);
