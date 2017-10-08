$("#convert").on("click", function() {

  if (!!window.EventSource) {
    var arabic = $("#arabic_numerals").val();
    var es = new EventSource("/converter/" + arabic);
    
    es.onmessage = function (event) {
      var data = JSON.parse(event.data);

      if(data.errors){

        let list = document.createElement('ul'); 

        for(error of data.errors){
          $(list).append("<li>" + error.msg + "</li>");
        }

        $("#errors").html(list);

      }else if(data.success){
        $("#errors").html("");
        $('#roman_numerals').val(data.success);
      }else{
        console.log("meuh");
      }
    };
  }

})

