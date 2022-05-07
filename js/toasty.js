btn.addEventListener('click', () => {
   
    Toastify({
        text: "Cellphone: 12345678899",
        duration: 3000,
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
        
    }).showToast();
})

btn_1.addEventListener('click', () => {
   
    Toastify({
        text: "Glasses@googles.com",
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        classname: 'tostada'
    }).showToast();
})

btn_2.addEventListener('click', () => {
   
    Toastify({
        text: "Always alive 742. Springfield",
        duration: 3000,
        onClick: () => {
           
            Toastify({
                text: 'Thank you for your visit!',
                duration: 1500,
                position: 'left'
            }).showToast()
        }
    }).showToast();
})

