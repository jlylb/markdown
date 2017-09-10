$(function(){

    var str = '';
    var liTemp='<li><a href="#{{id}}">{{text}}</a></li>';
    $(':header').each(function(i,v){
        var id='id_'+i;
        var index = i+1;
        var text = $(this).text();
        $(this).attr('id',id).text(index+'. '+text);
        str+=liTemp.replace('{{id}}',id).replace('{{text}}',text);
        console.log(this)

    });
    var ul=$('<ul id="myaffix"></ul>').addClass('nav nav-tabs nav-stacked').append(str).appendTo($('#myscrollspy'));
    //ul.find('li:first').addClass('active');


setTimeout(function(){
            //$("#myscrollspy").scrollspy();
           $('body').scrollspy({ target: '#myscrollspy',offset:0 })


    $('#myaffix').affix({
       offset: {
          top: 0          }
    });



},100);

$('table').addClass('table table-hover');

})
