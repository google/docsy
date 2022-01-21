function copyCodeblock(text, iconId) {
    navigator.clipboard.writeText(text);
    flickerIcon(iconId);
    window.setTimeout(() => flickerIcon(iconId), 500);
}

function flickerIcon(id) {
    let el = document.getElementById(id);
    el.classList.toggle('fa-copy');
    el.classList.toggle('fa-check');
}

function toggleBlock(target) {
    console.log('run', target);

    if (!target.nextElementSibling.classList.contains('toggleblock-open')) {
        document.querySelectorAll('.toggleblock').forEach((el) => {
            el.lastElementChild.classList.remove('toggleblock-open');
            el.firstElementChild.firstElementChild.classList.remove('fa-chevron-down');
            el.firstElementChild.firstElementChild.classList.add('fa-chevron-right');
        });
    }
    target.nextElementSibling.classList.toggle('toggleblock-open');
    target.firstElementChild.classList.toggle('fa-chevron-down');
    target.firstElementChild.classList.toggle('fa-chevron-right');
}
