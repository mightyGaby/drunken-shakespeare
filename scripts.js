//load poem
$(document).ready(function(){

  $('#poem').on('click', function(){
    $.ajax({
      url:'http://ShakeItSpeare.com/api/poem',
      success: function(poemData){
        console.log(poemData.poem);
        $('#poem').text(poemData.poem);
      }
    })
  })
});
