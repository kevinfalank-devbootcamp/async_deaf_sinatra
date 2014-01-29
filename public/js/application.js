$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  $( "#granny" ).submit(function( event ) {
    // alert( "Handler for .submit() called." );
    event.preventDefault();
    // var data = $(this).serialize();
    
    var posting = $.post( "/grandma", $( this ).serialize() );
    posting.done(function( data ) {
      // alert(data);
      var content = $( data ).find( "#grandma_says" );
      // console.log(content);
      // console.log(content.text());
      $( "span" ).empty().append( "Grandma says: ".concat(content.text()) );
    });
  });

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
