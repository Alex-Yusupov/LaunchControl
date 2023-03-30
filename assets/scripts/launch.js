function tryLaunch() {
       let launchControl = 1; 
       let errorMsg = '';
     
       if (parked) {
         launchControl = 0;
         errorMsg = 'Disengage parking brake';
       } else if (trac) {
         launchControl = 0;
         errorMsg = 'Turn off traction control';
       } else if (gasLevel === 0) {
         launchControl = 0;
         errorMsg = 'Fill up gas tank';
       } else if (charge === 0) {
         launchControl = 0;
         errorMsg = 'Charge the battery';
       } else if (intMode !== 3) {
         launchControl = 0;
         errorMsg = 'Shift to Sport mode';
       }
     
       if (launchControl === 0) {
         document.getElementById('launch').src = './assets/images/lca0.PNG';
         document.getElementById('msg').innerHTML = errorMsg;
         new Audio('./assets/media/sputter.mp3').play();
       } else {
         document.getElementById('launch').src = './assets/images/lca1.PNG';
         document.getElementById('msg').innerHTML = '';
         new Audio('./assets/media/launch.mp3').play();
       }
     }
     