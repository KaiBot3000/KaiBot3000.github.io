document.addEventListener('DOMContentLoaded', tagCloud)

let tagFilter = ['all'];

// start out with all
// if you click on one, unclick all, show only that one
// if you click on all, unclick all others and have all

function tagCloud() {
    // get list of tags from posts on page
    let tags = {};
    const tagCloudDiv = document.getElementById('tagCloudDiv');

    Array.from(document.getElementsByClassName('tag')).forEach(function(tag) {
        let tagText = tag.innerText.trim();
        if (tags[tagText]) {
            tags[tagText].count++
        } else {
            tags[tagText] = {count: 1};
        }
    });

    // add 'all' tag
    // let allSpan = document.createElement('span');
    // allSpan.className = 'round-full inline-block px6 pb3 mx3 my6 bg-gray-light bg-gray-light-on-hover';
    // allSpan.innerHTML = 'all';
    // allSpan.addEventListener('click', toggleAll);
    // tagCloudDiv.appendChild(allSpan);

    // add tag cloud html to tagcloud div
    for (tag in tags) {
        let tagSpan = document.createElement('span');
        tagSpan.className = 'round-full inline-block px6 pb3 mx3 my6 bg-gray-faint bg-gray-light-on-hover';
        tagSpan.innerHTML = tag;
        tagSpan.addEventListener('click', toggleTag);
        tagCloudDiv.appendChild(tagSpan);
    };

    // filter posts by filter list

}

// function toggleAll(event) {
//     event.target.classList.toggle('bg-gray-faint');
//     event.target.classList.toggle('bg-gray-light');
//     if (tagFilter.indexOf('all') > -1) {
//         tagFilter = [];
//     } else {
//         tagFilter = ['all'];
//     }
//     console.log(tagFilter);
// }

function toggleTag(event) {
    event.target.classList.toggle('bg-gray-faint');
    event.target.classList.toggle('bg-gray-light');
    let index = tagFilter.indexOf(event.target.innerHTML)
    if (index > -1) {
        tagFilter.splice(index, 1);
    } else {
        tagFilter.push(event.target.innerHTML);
    }
    console.log(tagFilter);

    // call updatePosts
}

function updatePosts() {
    // updates posts shown based on most recent tagFilter

    // if the list is empty, show everything
    // if there's something in the list, show only posts with those tags.
}
