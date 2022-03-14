//индикатор загрузки большого файла, отправленного через AJAX
const progress = document.getElementById('progress');
const sendButton = document.querySelector('#send');
const requestUrl = 'https://netology-slow-rest.herokuapp.com/upload.php'
sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    // console.log(formData)
    xhr.open('POST', requestUrl);
    xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
            progress.value = event.loaded / event.total;
            // console.log(event.loaded, event.total)
        };
    };
    xhr.send(formData);
});