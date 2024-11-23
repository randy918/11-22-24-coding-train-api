//<  ████████████████████████████████████  LOADER

document.addEventListener("DOMContentLoaded", function () {
    // Your code here

    document.body.style.backgroundColor = 'green';

    //>  ████████████████████████████████████  CHILDREN








    //>  ████████████████████████████████████  GENERAL FUNCTIONS

    function getBrightRandomRGB() {
        const rrr = r(86, 255);
        const ggg = r(86, 255);
        const bbb = r(86, 255);
        const rgbColor = `rgb(${rrr}, ${ggg}, ${bbb})`;
        return rgbColor;
    }


    let pictures = ["/img/ashutterstock_2260187227.jpg", "/img/ashutterstock_2274444143.jpg", "/img/ashutterstock_2290464509.jpg", "/img/ashutterstock_2308412739.jpg", "/img/ashutterstock_2325872667.jpg", "/img/ashutterstock_2402783767.jpg", "/img/shutterstock_2260187227.jpg", "/img/shutterstock_2274444143.jpg", "/img/shutterstock_2290464509.jpg", "/img/shutterstock_2308412739.jpg", "/img/ashutterstock_497267167.jpg", "/img/shutterstock_2402783767.jpg", "/img/ashutterstock_497764618.jpg", "/img/shutterstock_2402783767.jpg",]

    function getRandomImg() {
        let randomPicture = pictures[r(pictures.length)];
        console.log(randomPicture);
        return randomPicture;
    }




    //_ ████████████████████████████████████  DATA STRUCTURES 

    //_ ████████████████████████████████████  DATA STRUCTURES 




    //>  ████████████████████████████████████  FUNCTIONS


    console.log('About to fetch a rainbow');

    async function catchRainbow() {
        const response = await fetch(getRandomImg());
        const blob = await response.blob();
        document.getElementById('manly').src = URL.createObjectURL(blob);


    }



    //>  ████████████████████████████████████  GENERAL PROGRAM

    document.body.style.backgroundColor = getBrightRandomRGB();

    catchRainbow().then(response => {
        console.log('yay');
    })
        .catch(error => {
            console.error(error);
        });


    async function getData() {
        const response = await fetch('/csv/ZonAnn.Ts+dSST.csv');
        const data = await response.text();
        
        const table = data.split('\n').slice(1);
        
        table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        const temp = columns[1];
        console.log(year, temp);
        
        });
        
        
    }
    
getData();




});











// console.log(document.documentElement);

//< ████████████████████████████████████  MISC



