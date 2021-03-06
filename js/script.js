function resize(){
    const file = document.querySelector('#upload').files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(event){
        const imageElement = document.createElement('img');
        imageElement.src = event.target.result;
        document.querySelector('#olde').src = event.target.result;
        imageElement.onload = function(e){
            const canvas = document.createElement('canvas');
            const importWidth = document.getElementById('width').value;
            if(parseInt(importWidth) <= 5000 ){
                const  max_width = parseInt(importWidth);
                const scaleSize = max_width / e.target.width;
                canvas.width = max_width;
                canvas.height = e.target.height * scaleSize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
                const srcinclded = ctx.canvas.toDataURL(e.target, "iamge/jpeg", );
                if (importWidth.length == 0){
                    alert('You need to specify the width first!')
                    document.querySelector('#olde').src = '';
                }else{
                    document.querySelector('#new').src =  srcinclded;
                    const download = document.getElementById('download');
                    download.classList.remove('hidden');
                    const oldImage = document.querySelector('#main-image');
                    oldImage.classList.add('hidden');
                    download.href = srcinclded
                }
                
                

            }else{
                alert('your input value is not valid! Pleas enter your size first.')
            };
        };};};