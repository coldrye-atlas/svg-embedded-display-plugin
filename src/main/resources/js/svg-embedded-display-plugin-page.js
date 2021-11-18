AJS.$(document).ready(function() {
   AJS.$(".confluence-embedded-file[data-mime-type='image/svg+xml'").each(function () {
       const elem = $(this);
       const url = elem.data('file-src');
       const children = elem.children();
       children[0].src = url;
   });
});
