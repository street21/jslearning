
    document.querySelectorAll('button')[0].addEventListener('click', function(){
        var b=document.querySelector('img').getAttribute('alt');
        itsTime(b,1);
    
    })
    
    document.querySelectorAll('button')[0].addEventListener('keydown', function(event){
        itsTime(event.key,2);
    })




function itsTime(key, num){
    switch (key) {
        case 'r':
            var ricked=new Audio('Never_Gonna_Give_You_Up_Original.mp3');
            ricked.play();
            $('h1').text('You got rick rolled!')
            $('p').text('Get good!')
            $('p')[1].remove();
            $('.top').css('padding','70px')
            $('.top').css('background-color','#112D4E')
            $('.middle').css('background-color','#DBE2EF')
            $('.bottom').css('background-color','#3F72AF')
            break;
    
        default:
            if(num==2){
                alert("not really pressing 'r' are ya!");
            }
            
            break;
    }
}
