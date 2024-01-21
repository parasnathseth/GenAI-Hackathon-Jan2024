const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});


const input = document.getElementById('chatInput')
function SubmitForm() {



    const chat = document.getElementById('form'); //input
    var display = document.getElementById('tokenStream'); //output box

    display.innerHTMl = chat.value;



 

}

input.addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        //Post
        SubmitForm();

    }
});

