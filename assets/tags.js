document.addEventListener('DOMContentLoaded', tagCloud)

let tagFilter = [];

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

    // add tag cloud html to tagcloud div
    for (tag in tags) {
        let tagSpan = document.createElement('span');
        tagSpan.className = 'round-full inline-block px6 pb3 mx3 my6 bg-gray-faint';
        tagSpan.innerHTML = tag;
        tagSpan.addEventListener('click', toggleTag);
        tagCloudDiv.appendChild(tagSpan);
    };

}

function toggleTag(event) {
    event.target.classList.toggle('bg-gray-faint');
    event.target.classList.toggle('bg-gray-light');
    let index = tagFilter.indexOf(event.target.innerHTML)
    if (index > -1) {
        tagFilter.splice(index, 1);
    } else {
        tagFilter.push(event.target.innerHTML);
    }

    updatePosts();
}

function updatePosts() {
    Array.from(document.getElementsByClassName('post')).forEach(function(post) {
        if (tagFilter.length === 0) {
            post.style.display = null;
        } else {
            post.style.display = 'none';
            Array.from(post.getElementsByClassName('tag')).forEach(function(tag) {
                let tagText = tag.innerText.trim();
                if (tagFilter.indexOf(tagText) > -1) {
                    post.style.display = null;
                }
            });
        }
    });
}
