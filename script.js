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
            if(e.target.width > 500 || e.target.height > 500){
                const  max_width = 400;
                const scaleSize = max_width / e.target.width;
                canvas.width = max_width;
                canvas.height = e.target.height * scaleSize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
                const srcinclded = ctx.canvas.toDataURL(e.target, "iamge/jpeg", );
                document.querySelector('#new').src =  srcinclded;
                console.log(srcinclded)
            };};};};