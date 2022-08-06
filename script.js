let button = document.getElementById("btn");

button.addEventListener('click', function() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let result = document.getElementById('output');
    let weight_status=false, height_status=false;
    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Masukan Tinggi yang Valid';
    }else{
        document.getElementById('weight_error').innerHTML = "";
        weight_status=true
    }

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Masukan Berat Badan yang Valid';
    }else{
        document.getElementById('height_error').innerHTML = "";
        height_status=true
    }

    if(weight_status && height_status){
        const bmi = weight / ((height/100)^2).toFixed(1)
        if(bmi < 18.5){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18.5 && bmi <= 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else if(bmi >= 25 && bmi <= 29.9){
            result.innerHTML = 'Over weight : ' + bmi
        }else{
            result.innerHTML = 'Obesity : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
})