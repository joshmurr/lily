jQuery(function() {
  jQuery('.rte img').not('a > img').each(function() {
    // Matching images that aren't already shown in their original size.
    var re = /(_small)|(_compact)|(_medium)|(_large)|(_grande)/;
    var src = jQuery(this).attr('src');
    if (re.test(src)) {
      // Determining the URL to the original image.
      var href = src.replace(re, '');
      // Activating lightbox.
      jQuery(this).wrap('<a></a>')
        .parent()
        .attr('href', href)
        .addClass('lightbox')
        .colorbox( {
            maxWidth:"95%",
            maxHeight:"95%",
            scalePhotos:true} );
    }
  });
});
