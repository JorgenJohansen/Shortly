const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');


// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str);
  }


formSubmit = (e) => {
    e.preventDefault();
    console.log(input.value)

    if(input.value === '') {
        errMsg.innerText = "Cant shorten nothing :(";
        input.classList.add('border-red');
    }else if(!validURL(input.value)) {
        errMsg.innerText = "Not a valid URL";
        input.classList.add('border-red');
    }else{
        errMsg.innerText = "";
        input.classList.remove('border-red');
    }
}

linkForm.addEventListener('submit', this.formSubmit);


