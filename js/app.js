export const $evTitle = document.querySelector("input.title");
export const $evDate = document.querySelector("input.date");
export const $startBtn = document.querySelector("button.start-btn");
const $stopBtn = document.querySelector("button.stop-btn");
const $result = document.querySelector("label.result");
$stopBtn.classList.add("disabled");

export function startCount() {
    var x = setInterval(function() {
        let evTitle = $evTitle.value;
        let evDate = new Date($evDate.value).getTime();
        let nowDate = new Date().getTime();
        let toDate = evDate - nowDate;
        if (toDate >= 0) {
            var d = Math.floor(toDate / (1000 * 60 * 60 * 24));
            var h = Math.floor((toDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var m = Math.floor((toDate % (1000 * 60 * 60)) / (1000 * 60));
            var s = Math.floor((toDate % (1000 * 60)) / 1000);

            $result.innerHTML = "The Remaining Time to ' " + evTitle + " ' is : <br>" + d + " Days, " + h + " Hours, " + m + " Minutes, " + s + " Seconds";
        } else {
            alert("Already Passed");
            clearInterval(x);
            $evTitle.classList.remove("disabled");
            $evDate.classList.remove("disabled");
            $startBtn.classList.remove("disabled");
            $stopBtn.classList.add("disabled");
        }
    }, 1000);
    $evTitle.classList.add("disabled");
    $evDate.classList.add("disabled");
    $startBtn.classList.add("disabled");
    $stopBtn.classList.remove("disabled");
    $stopBtn.addEventListener('click', function() {
        clearInterval(x);
        $evTitle.classList.remove("disabled");
        $evDate.classList.remove("disabled");
        $startBtn.classList.remove("disabled");
        $stopBtn.classList.add("disabled");
    });
}