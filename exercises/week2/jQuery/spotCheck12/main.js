
$('button').click(function() {
    $('#blogs').append("<div class='blog'>My blog is better than yours</div>")
})

$("#blogs").on("click", ".blog", function(){
    $(this).text("blargh") 
  })