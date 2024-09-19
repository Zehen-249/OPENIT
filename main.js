const box = document.querySelector(".box");
const text = document.querySelector(".main-container h1");
const gift_boxes = document.querySelector(".gift_boxes");
const typingArea = document.querySelector(".typing-area");
const typingText = document.getElementById("typing-text");
const textToType = "Hey, Good morning. But wait a sec there is something different about this morning.";

const paragraphs = [
    "Hey,",
    " Good morning.",
    "But wait a sec there is something different about this morning.",
    "Hmm…. I wander how we actually became friends. I mean we are sooo opposites.",
    "But still our paths crossed and I feel, I genuinely feel lucky to be your friend.",
    "I have learnt a lot from you and still leaning today.",
    "<b>You are amazing</b>, and I want you to know that.",
    "I was thinking to get a nice book, or mug, or maybe that cute soft toys you love at DIY, gift wrapped but would they really make you feel special?",
    "I doubt that. Just how immaterialistic you are, your gift has to be like that only and where in this world I can get that.",
    "Something that can be with you always and forever without demanding anything in return just like the cactus plant you had in your room ( do you remember that conversation?).",
    "And I also know that how much you like to be known,",
    "so today this is my gift to you.",
    "Today the whole internet knows and says that this is your day.",
    "This is your…"
];

let currentParagraphIndex = 0;
let charIndex = 0;
let typingSpeed = 180; 
let deleteSpeed = 50;  
let isDeleting = false;

function typeWriter() {
    const currentParagraph = paragraphs[currentParagraphIndex];

    
    if (charIndex <= currentParagraph.length) {
        typingArea.innerHTML = currentParagraph.substring(0, charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        
        setTimeout(() => {
            if (currentParagraphIndex < paragraphs.length - 1) {
                fadeOutAndSwitchParagraph(); 
            } else {
                
                prepareFinalMessage();
            }
        }, 1500); 
    }
}

function fadeOutAndSwitchParagraph() {
    isFadingOut = true;
    typingArea.classList.add("fade-out");

    
    setTimeout(() => {
        typingArea.classList.remove("fade-out");  
        charIndex = 0; 
        currentParagraphIndex++;  
        isFadingOut = false;
        typeWriter();
    }, 1000);  
}

function prepareFinalMessage() {
    typingArea.classList.add("fade-out");

   
    setTimeout(() => {
        typingArea.classList.remove("fade-out");  
        charIndex = 0;  
        typingArea.innerHTML = `
            <img src="./media/Screenshot_2024-09-20-00-28-13-390_com.instagram.android-edit.jpg" alt="Happy Birthday" class="birthday-image lg:w-[300px]">
            <h1 class="birthday-heading text-[1rem] lg:text-[2rem] sm:mt-[10px] lg:mt-[12px]" ">Happy Birthday!</h1>
        `;
        
       
        typingArea.style.display = 'flex';  
        typingArea.style.flexDirection = 'column';  
        typingArea.style.alignItems = 'center';  
        typingArea.style.justifyContent = 'center';  
        

        const image = document.querySelector('.birthday-image');
        const heading = document.querySelector('.birthday-heading');
        
        setTimeout(() => {
            image.classList.add('show'); 
        }, 100);

        setTimeout(() => {
            heading.classList.add('show-heading'); 
        }, 600); 
    }, 1000);  
}


box.addEventListener("click", () => {
    setTimeout(() => {
        gift_boxes.classList.remove('hidden');
        setTimeout(() => {
            gift_boxes.classList.add('move-corners');
            setTimeout(() => {
                box.style.opacity = '0.0';
                box.remove();
                text.remove();
                setTimeout(() => {
                    typingArea.style.display = 'block'; 
                    typeWriter(); 
                }, 3000); 
            }, 0);
        }, 10); 
    }, 1000); 
});
