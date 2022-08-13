const inputs = document.querySelectorAll('.controls input');


function hundleUpdate() {
   const suffix = this.dataset.sizing || '';
   // console.log(this.name);
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener('change', hundleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', hundleUpdate))