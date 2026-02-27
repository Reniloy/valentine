document.addEventListener('DOMContentLoaded', () => {
    
 
    const noBtn = document.getElementById('btnNo');
    const yesBtn = document.getElementById('btnYes');
    const btnNextPage = document.getElementById('btnNextPage');
    const envelope = document.getElementById('envelope');
    
 
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');

   
    
    let yesScale = 1; 

 
    noBtn.addEventListener("mouseover", () => {
        
       
        const min = 80; 
        const max = 250;
        
        const distance = Math.random() * (max - min) + min;
        const angle = Math.random() * Math.PI * 2;

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        noBtn.style.transition = "transform 0.3s ease";
        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

        
        yesScale += 0.5; 

        yesBtn.style.position = "relative";
        yesBtn.style.transition = "transform 0.3s ease";

      
        if (yesScale > 1.5 && yesBtn.style.position !== "fixed") {
             yesBtn.style.position = "fixed";
             yesBtn.style.top = "50%";
             yesBtn.style.left = "50%";
             yesBtn.style.zIndex = "100"; 
             yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
        } else {
             
             if (yesBtn.style.position === "fixed") {
                yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
             } else {
                yesBtn.style.transform = `scale(${yesScale})`;
             }
        }
    });

   
    noBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
       
        const min = 50; const max = 150;
        const distance = Math.random() * (max - min) + min;
        const angle = Math.random() * Math.PI * 2;
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    

   
    yesBtn.addEventListener('click', () => {
        fadeOut(page1, () => {
            fadeIn(page2);
        });
    });

 
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
        
        
        const instruction = document.querySelector('.instruction-text');
        if(instruction) instruction.style.opacity = '0';
    });

 
    btnNextPage.addEventListener('click', (e) => {
        e.stopPropagation(); 
        fadeOut(page2, () => {
            fadeIn(page3);
        });
    });

   
    function fadeOut(element, callback) {
        element.style.opacity = '0';
        setTimeout(() => {
            element.classList.remove('active');
            element.classList.add('hidden');
            if (callback) callback();
        }, 1000); 
    }

    function fadeIn(element) {
        element.classList.remove('hidden');
      
        setTimeout(() => {
            element.classList.add('active');
            element.style.opacity = '1';
        }, 50);
    }


    const mosaicContainer = document.getElementById('mosaicText');
    const secretMessage = "ILOVEYOU "; 
    const repeatedText = secretMessage.repeat(4000);
    
    if (mosaicContainer) {
        mosaicContainer.innerText = repeatedText;
    }
});
