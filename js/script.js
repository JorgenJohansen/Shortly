const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');


const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const container = document.getElementById('global-container')

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

//Toggle Mobile Menu
navToggle = () => {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
  
  // if(btn.classList.contains('open')){
  //   container.remove()
  // },
  // container.classList.toggle('opacity-50');
  
  // container.classList.toggle('opacity-100');

  // menu.classList.add('opacity-100');
  // container.classList.toggle('opacity-100')

}

//Submit form
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
btn.addEventListener('click', this.navToggle)


