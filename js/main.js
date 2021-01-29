import { $evTitle, $evDate, $startBtn, startCount } from './app.js';


$startBtn.addEventListener('click', function() {
    if ($evTitle.value != "" && $evDate.value != "") {
        startCount();
    } else { alert("Please, Fill all the fields"); }
});