import 'normalize.css'
import './styles/main.scss';
import 'bootstrap';

const input = document.getElementById('inputPassword');
const signup = document.getElementById('signupPassword')
const showHideBtn = document.getElementById('showHide');
const signUpshowHide = document.getElementById('signUpshowHide');

function show_hide_password(target, btn) {
	if (target.value) {
		console.log(this);
		if (target.getAttribute('type') == 'password') {
			btn.innerHTML = "Hide";
			target.setAttribute('type', 'text');
		} else {
			btn.innerHTML = "Show";
			target.setAttribute('type', 'password');
		}
		return false;
	}
}
function on_off_btn(target, btn) {
	if (target.value) {
		btn.classList.remove("disabled");
	} else {
		btn.classList.add("disabled");
	}
}
showHideBtn.addEventListener("click", () => show_hide_password(input, showHideBtn));
input.addEventListener("input", () => on_off_btn(input, showHideBtn))

signUpshowHide.addEventListener("click", () => show_hide_password(signup, signUpshowHide));
signup.addEventListener("input", () => on_off_btn(signup, signUpshowHide))