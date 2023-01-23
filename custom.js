//--------------Global_FLIDE_CLIPS--------------
var guideline = false
var set_up = true
var filter_once = false

const filter = document.createElement('textarea')
const prev = document.createElement('button')
const next = document.createElement('button')

const commentBoxHTML = '<div class="css-1vft9uj" style="border-top: thin solid red;">' +
    '<div class="css-vujjmw" style="margin-left: 10px;">' +
    '<div class="css-1xi4blx"><label cursor="pointer" class="css-gb89ao">' +
    '<div class="css-14njx65">Needs Work (Mistake):</div>' +
    '<div class="css-14njx65">0</div>' +
    '</label></div>' +
    '<div class="css-1xi4blx"><label cursor="pointer" class="css-gb89ao">' +
    '<div class="css-14njx65">Needs Work (Minor Mistake):</div>' +
    '<div class="css-14njx65">0</div>' +
    '</label></div>' +
    '<div class="css-1xi4blx"><label cursor="pointer" class="css-gb89ao">' +
    '<div class="css-14njx65">Needs Work (Guideline Change):</div>' +
    '<div class="css-14njx65">0</div>' +
    '</label></div>' +
    '</div>' +
    '</div>'

let noteArea = document.createElement('div');
noteArea.innerHTML = commentBoxHTML;
var mistake_count_once = false;

//--------------FLIDE_CLIPS--------------

//qa_question
// function Resolve() {
//     let holder = document.querySelector("#root > main > div > div:nth-child(3) > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-yulmdl > div.css-603q35 > div > div > div")
//     if (holder != null) {
//         let resolved = holder.childNodes[2]
//         if (resolved.ariaSelected != 'true') {

//             let commentBoxes = document.querySelector("#root > main > div > div:nth-child(3) > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-yulmdl > div.css-t32mmx > div.css-hl05sq");

//             let list = commentBoxes.childNodes;

//             list.forEach(
//                 function (item) {
//                     if (item.textContent.includes("qa_question"))
//                         item.childNodes[1].firstChild.click();
//                 });
//         }
//     }
// };

//Major/Minor Selection
function Mistake() {
    let holder = document.querySelector("#root > main > div > div:nth-child(3) > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-yulmdl > div.css-603q35 > div > div > div")
    if (holder != null) {

        document.querySelector("#root > main > div > div.css-q2jbf2 > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-1g5ypn2 > div.css-vujjmw > div:nth-child(3) > label:nth-child(3) > input").onclick = function() {
            guideline = true
        }

        document.querySelector("#root > main > div > div.css-q2jbf2 > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-1g5ypn2 > div.css-vujjmw > div:nth-child(1) > label > input").onclick = function() {
            guideline = true
        }

        document.querySelector("#root > main > div > div.css-q2jbf2 > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-1g5ypn2 > div.css-vujjmw > div:nth-child(3) > label:nth-child(1) > input").onclick = function() {
            guideline = false
        }

        document.querySelector("#root > main > div > div.css-q2jbf2 > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-1g5ypn2 > div.css-vujjmw > div:nth-child(3) > label:nth-child(2) > input").onclick = function() {
            guideline = false
        }

        if (!guideline) {
            let textBox = document.querySelector("#root > main > div > div.css-q2jbf2 > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-1g5ypn2 > div.file-drop-container.css-1vry8gg > textarea")

            if (textBox.textContent.includes("(Major") || textBox.textContent.includes("(Automatic")) {
                document.querySelector("#root > main > div > div.css-q2jbf2 > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-1g5ypn2 > div.css-vujjmw > div:nth-child(3) > label:nth-child(1) > input").click()
            } else if (textBox.textContent.includes("(Minor")) {
                document.querySelector("#root > main > div > div.css-q2jbf2 > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-1g5ypn2 > div.css-vujjmw > div:nth-child(3) > label:nth-child(2) > input").click()
            }
        }
    }
};

//Comment Filter
function Filter() {
    let comments = document.querySelector("#root > main > div > div:nth-child(3) > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-1g5ypn2 > div.css-181veuo > select")
    if (comments != null) {

        if (!filter_once) {
            comments.parentElement.insertBefore(filter, comments)
            filter_once = true
        }

        comments.childNodes.forEach(
            function(comment) {
                if (filter.value == '')
                    comment.style.display = ''
                else {
                    if (!comment.value.toLowerCase().includes(filter.value.toLowerCase().trim()))
                        comment.style.display = 'none'
                    else
                        comment.style.display = ''
                }
            })

    } else {
        filter_once = false
        filter.value = ''
    }
};

//skip_far_ver
// function Verify() {
//     var type = document.querySelector("#root > main > div > div.css-q2fgle > div.css-zabvfl > div.css-1u1sbic > div:nth-child(4) > div > div.label-attr-select.css-16bay3 > div.css-1bfjj17")
//     var type_name = []
//     type.childNodes.forEach(
//         function (opt) {
//             type_name.push(opt.title)
//         })

//     if (document.querySelector("#root > main > div > div.css-q2fgle > div.css-1nice15 > div.css-4j27d4 > div > div").textContent.includes("main")) {
//         if (!(type_name.includes("skip_far"))) {
//             alert("No skip_far in Main")
//         }
//     } else {
//         if ((type_name.includes("skip_far"))) {
//             alert("Skip_far not in Main")
//         }
//     }
// }

function MistakeCount() {
    let holder = document.querySelector("#root > main > div > div:nth-child(3) > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-yulmdl > div.css-603q35 > div > div > div")
    if (holder != null) {

        if (!mistake_count_once) {
            let child = document.querySelector("#root > main > div > div:nth-child(3) > div > div > div.css-t32mmx");
            let parent = child.parentNode;
            parent.append(noteArea);

            mistake_count_once = true;
        }

        if (mistake_count_once) {
            let Major = document.querySelector("#root > main > div > div:nth-child(3) > div > div > div:nth-child(4) > div > div > div:nth-child(1) > label > div:nth-child(2)");
            let Minor = document.querySelector("#root > main > div > div:nth-child(3) > div > div > div:nth-child(4) > div > div > div:nth-child(2) > label > div:nth-child(2)");
            let Guideline = document.querySelector("#root > main > div > div:nth-child(3) > div > div > div:nth-child(4) > div > div > div:nth-child(3) > label > div:nth-child(2)");

            Major.innerHTML = 0;
            Minor.innerHTML = 0;
            Guideline.innerHTML = 0;

            let commentBoxes = document.querySelector("#root > main > div > div:nth-child(3) > div > div > div.css-t32mmx > div.css-1gsvi7y > div.css-yulmdl > div.css-t32mmx > div.css-hl05sq");

            let list = commentBoxes.childNodes;

            list.forEach(
                function(item) {
                    if (item.textContent.includes("Needs Work (Mistake)"))
                        Major.innerHTML = parseInt(Major.innerHTML) + 1;
                    else if (item.textContent.includes("Needs Work (Minor Mistake)"))
                        Minor.innerHTML = parseInt(Minor.innerHTML) + 1;
                    else if (item.textContent.includes("Needs Work (Guideline Change)"))
                        Guideline.innerHTML = parseInt(Guideline.innerHTML) + 1;
                }
            );
        }
        // else if (unresolved.ariaSelected == 'false' && mistake_count_once) {
        //     noteArea.remove();
        //     mistake_count_once = false;
        // }
    } else
        mistake_count_once = false;
}

//FQA Comment Box Size
function FQA() {
    let text = document.querySelector("#root > main > div > div.css-q2jbf2 > div > div.css-1g3a9gs > div.file-drop-container.css-1vry8gg > textarea")
    if (text != null)
        text.style.height = "300px"
};

function Hotkeys() {

    let svg_prev = document.querySelector("#root > main > div > div.css-q2fgle > div.css-zabvfl > div.css-1u1sbic > div:nth-child(1) > div.css-1npc354 > svg:nth-child(1)")
    let svg_next = document.querySelector("#root > main > div > div.css-q2fgle > div.css-zabvfl > div.css-1u1sbic > div:nth-child(1) > div.css-1npc354 > svg:nth-child(2)")

    if (svg_prev.childElementCount < 2)
        svg_prev.appendChild(prev)
    if (svg_next.childElementCount < 2)
        svg_next.appendChild(next)

}

if (window.location.href.includes("TCLP"))
    requestAnimationFrame(clip_loop);

function clip_loop() {
    //----set_up-----
    if (set_up) {

        document.addEventListener("keydown", (e) => {
            if (e.repeat) { return }
            if (e.altKey && e.shiftKey && e.key == "C") {
                e.preventDefault()
                document.querySelector("#root > main > div > div.css-q2fgle > div.css-zabvfl > div.css-1u1sbic > div.css-1x48guh > button:nth-child(2)").click()
            }
            if (e.altKey && e.key == ",") {
                e.preventDefault()
                prev.click()
            }
            if (e.altKey && e.key == ".") {
                e.preventDefault()
                next.click()
            }
            if (e.ctrlKey && e.shiftKey && e.key == "C") {
                e.preventDefault()
                if (!document.querySelector("#contrastSettings").className.includes("Secondary")) {
                    document.querySelector("#contrastSettings").click()
                    document.querySelector("body > div:nth-child(7) > div > div > div > div:nth-child(7) > label > input").click()
                    document.querySelector("#contrastSettings").click()
                } else {
                    document.querySelector("body > div:nth-child(7) > div > div > div > div:nth-child(7) > label > input").click()
                }
            }
            if (e.ctrlKey && e.shiftKey && e.key == "E") {
                e.preventDefault()
                if (!document.querySelector("#contrastSettings").className.includes("Secondary")) {
                    document.querySelector("#contrastSettings").click()
                    document.querySelector("body > div:nth-child(7) > div > div > div > div:nth-child(8) > label > input").click()
                    document.querySelector("#contrastSettings").click()
                } else {
                    document.querySelector("body > div:nth-child(7) > div > div > div > div:nth-child(8) > label > input").click()
                }
            }
        });
        set_up = false
    }

    Mistake()
    Filter()
    MistakeCount()

    FQA()

    setTimeout(() => {
        Hotkeys()
    }, 1000)

    requestAnimationFrame(clip_loop)
}


//--------------Global_FLIDE--------------

//requestAnimationFrame(responces_loop);
