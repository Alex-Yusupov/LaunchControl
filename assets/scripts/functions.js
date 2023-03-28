showTime()

var gasLevel = 0, parked = 1, charge = 0, trac = 1, intMode = 0;

        function getGas() {
            if(gasLevel == 0){
                gasLevel = 1; 
                document.getElementById('bttn_gas') .src='./assets/images/bttn_gas_1.PNG';
                document.getElementById('gas') .src='./assets/images/gas1.png';
            } else{
                gasLevel = 0; 
                document.getElementById('bttn_gas') .src='./assets/images/bttn_gas_0.PNG';
                document.getElementById('gas') .src='./assets/images/gas0.png';
            }
        }  
        function park() {
            if(parked == 0){
                parked = 1; 
                document.getElementById('bttn_park') .src='./assets/images/bttn_park_1.PNG';
                document.getElementById('brake') .src='./assets/images/p1.PNG';
            } else{
                parked = 0; 
                document.getElementById('bttn_park') .src='./assets/images/bttn_park_0.PNG';
                document.getElementById('brake') .src='./assets/images/p0.PNG';
            }
        }  
        function crgbatt() {
            if(charge == 0){
                charge = 1; 
                document.getElementById('bttn_batt') .src='./assets/images/bttn_batt_0.PNG';
                document.getElementById('batt') .src='./assets/images/batt0.PNG';
            } else{
                charge = 0; 
                document.getElementById('bttn_batt') .src='./assets/images/bttn_batt_1.PNG';
                document.getElementById('batt') .src='./assets/images/batt1.PNG';
            }
        }  
        function traccont() {
            if(trac == 0){
                trac = 1; 
                document.getElementById('bttn_trac') .src='./assets/images/bttn_trac_1.PNG';
                document.getElementById('trac') .src='./assets/images/trac0.PNG';
            } else{
                trac = 0; 
                document.getElementById('bttn_trac') .src='./assets/images/bttn_trac_0.PNG';
                document.getElementById('trac') .src='./assets/images/trac1.PNG';
            }
            
        }  

        function setMode(){
                var status = document.getElementById('mode');
                var shifter = document.getElementById('bttn_shifter');
                switch (intMode) {
                case 0:
                    intMode = 1;
                    shifter.style.top = '725px';
                    status.innerText = 'ECO PRO';
                    break
                case 1:
                    intMode = 2;
                    shifter.style.top = '750px';
                    status.innerText = 'COMFORT';
                    break
                case 2: 
                    intMode = 3;
                    shifter.style.top = '775px';
                    status.innerText = 'SPORT'; 
                    break         
                default:
                    intMode = 0;
                    shifter.style.top = '700px';
                    status.innerText = 'PARK'; 
                    break    
            }
        }

        var lcOK = 1
        if(parked == 1){
        lcOK = 0
        status.innerText = 'NO BRAKE';
        }
        document.getElementById('msg')
       