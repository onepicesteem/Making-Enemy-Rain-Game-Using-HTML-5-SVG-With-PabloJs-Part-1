$(function(){

  var svg = Pablo('#ground').svg({ //create svg with height and width
          width: 485,
          height: 775
      });
  var enemy;
  var enemyArray=new Array();

  var enemySize=15;
  var enemyX=0;
  var enemyY=0;
  var enemyColor='red';


  var arrayCount;


  var flag=1;
  var enemyCount=5;
  var separation;
  var first;



  var enemyInterval=setInterval(function(){
    enemyCount=5;

    separation=Math.floor(Math.random() * 30)+15;
    first=Math.floor(Math.random() * 30)+15;

    for (var i = first; i <465 ; i=i+separation) {

      if(enemyCount>0){

            flag=Math.floor(Math.random() * 4);

            if(flag==1){
                enemy=enemyBuilder(i,0,enemyColor);
                enemyArray.push(enemy);
                enemyCount=enemyCount-1;
            }
      }
    }

   for (var i = 0; i < enemyArray.length; i++) {

      var x=enemyArray[i].attr('x');
      var y=enemyArray[i].attr('y');

      enemyArray[i].remove();

      y=parseInt(y)+20;
      enemy=enemyBuilder(x,y,enemyColor);

      enemyArray[i]=enemy;
    }


  }, 100);


function enemyBuilder(x,y,color){
      enemy=svg.rect({
        x:x, y:y,
        width:enemySize, height:enemySize,
        fill:  color,
        stroke:'#006',
        'stroke-width': 5,
        'stroke-linejoin': 'round'
    });

    return enemy;
}

});
