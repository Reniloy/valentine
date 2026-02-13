document.addEventListener('DOMContentLoaded', () => {
    
    // --- VARIABLES ---
    const noBtn = document.getElementById('btnNo'); // Changed to match your snippet var name
    const yesBtn = document.getElementById('btnYes'); // Changed to match your snippet var name
    const btnNextPage = document.getElementById('btnNextPage');
    const envelope = document.getElementById('envelope');
    
    // Pages
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');

    // --- YOUR NEW BUTTON LOGIC ---
    
    let yesScale = 1; // Initial scale ng Yes button

    // Pinagsama ko na sa mouseover para sabay na iiwas at lalaki
    noBtn.addEventListener("mouseover", () => {
        
        // 1. RUNAWAY LOGIC (Yung code na binigay mo)
        const min = 80;  // Ginawa kong range para hindi laging 200px ang layo
        const max = 250; // Para mas unpredictable
        
        const distance = Math.random() * (max - min) + min;
        const angle = Math.random() * Math.PI * 2; // Random direction

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        noBtn.style.transition = "transform 0.3s ease";
        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

        // 2. GROW YES BUTTON LOGIC (Yung code na binigay mo)
        yesScale += 0.5; // Dagdag laki bawat hover

        yesBtn.style.position = "relative";
        yesBtn.style.transition = "transform 0.3s ease";

        // Logic para mapunta sa gitna kapag lumalaki na
        if (yesScale > 1.5 && yesBtn.style.position !== "fixed") {
             yesBtn.style.position = "fixed";
             yesBtn.style.top = "50%";
             yesBtn.style.left = "50%";
             yesBtn.style.zIndex = "100"; // Siguradong nasa ibabaw
             yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
        } else {
             // Kung naka-fixed na, scale na lang ang galawin
             if (yesBtn.style.position === "fixed") {
                yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
             } else {
                yesBtn.style.transform = `scale(${yesScale})`;
             }
        }
    });

    // Support for Mobile (Tap)
    noBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Wag pa-click
        // Same logic sa click para sa phone
        const min = 50; const max = 150;
        const distance = Math.random() * (max - min) + min;
        const angle = Math.random() * Math.PI * 2;
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // --- PAGE NAVIGATION ---

    // Pag-click ng YES
    yesBtn.addEventListener('click', () => {
        fadeOut(page1, () => {
            fadeIn(page2);
        });
    });

    // --- FUNCTION: ENVELOPE OPENING ---
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
        
        // Hide instruction text after opening
        const instruction = document.querySelector('.instruction-text');
        if(instruction) instruction.style.opacity = '0';
    });

    // --- FUNCTION: GO TO PAGE 3 ---
    btnNextPage.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing envelope
        fadeOut(page2, () => {
            fadeIn(page3);
        });
    });

    // --- HELPER: FADE TRANSITIONS ---
    function fadeOut(element, callback) {
        element.style.opacity = '0';
        setTimeout(() => {
            element.classList.remove('active');
            element.classList.add('hidden');
            if (callback) callback();
        }, 1000); // Matches CSS transition duration
    }

    function fadeIn(element) {
        element.classList.remove('hidden');
        // Small delay to allow browser to render display:block before opacity
        setTimeout(() => {
            element.classList.add('active');
            element.style.opacity = '1';
        }, 50);
    }

    // --- PAGE 3 LOGIC (Keep as provided) ---
    // NOTE: Kung nag-switch ka na sa HTML manual text, pwede mong burahin itong part na 'to.
    // Pero kung gusto mo pa rin yung automatic "ILOVEYOU", hayaan mo lang.
    const mosaicContainer = document.getElementById('mosaicText');
    const secretMessage = "ILOVEYOU "; 
    const repeatedText = secretMessage.repeat(4000);
    
    if (mosaicContainer) {
        mosaicContainer.innerText = repeatedText;
    }
});