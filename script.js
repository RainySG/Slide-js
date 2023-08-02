
let currentCardId = 1;

function ChangeTab(id) {
    if (id == currentCardId) {
        return;
    }
    if (currentCardId > id) {
        currentCardId = currentCardId - 7;
    }

    let tempId = id - currentCardId;

    let lists = document.querySelectorAll('.item');
    if (tempId <= 1) {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
    }
    else {
        for (let index = 0; index < tempId; index++) {
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').appendChild(lists[0]);
        }

    }
    currentCardId = id;
}

document.getElementById('next').onclick = function () {
    currentCardId = currentCardId + 1
    if(currentCardId >= 7) currentCardId = 0;
    
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);

}
document.getElementById('prev').onclick = function () {
    currentCardId = currentCardId - 1
    if(currentCardId <= 0) currentCardId = 7;

    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);


}


ChangeTab(1);