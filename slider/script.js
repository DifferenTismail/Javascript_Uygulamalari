var models = [
    {
        name: 'Bmw 116d',
        image: 'img/bmw116d.jpg',
        link:'https://www.sahibinden.com/ilan/vasita-otomobil-bmw-sahibinden-2019-139-binde-temiz-bmw-1166345085/detay'
    },
    {
        name: 'F1 MERCEDES-AMG',
        image: 'img/f1amg.jpg',
        link:'https://www.mercedesamgf1.com/'
    },
    {
        name: 'Mercedes-Benz',
        image: 'img/mercedesamg.jpeg',
        link:'https://www.sahibinden.com/ilan/vasita-otomobil-mercedes-benz-bayi-cikisli-orjinal-2023-amg-gt-63-se-performance-fl-20-kdv-1154955263/detay'
    }
]
var index = 1;
var slaytCount = models.length;
var interval;
var settings = {
    duration : '2000',
    random : true
};
init(settings);

document.querySelector('.fa-chevron-left').addEventListener('click', function(){
    index--;
    showSlide(index);
    console.log(index);
});
document.querySelector('.fa-chevron-right').addEventListener('click', function(){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
       clearInterval(interval);  
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
       init(settings); 
    }) 
});

function init(settings){
    var prev;
   interval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
    },settings.duration)
}

function showSlide(i){
    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }
    
    if (i >= slaytCount) {
        index = 0;
    }
    


    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image)
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}
