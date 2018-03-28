/*
 * Generates a tag cloud and handles filtering based on
 * user interaction with tags
 */

document.addEventListener('DOMContentLoaded', tagCloud)
let tagFilter = [];

/*
 * Generates a tag cloud from visible posts
 */
function tagCloud() {
    let tags = {};
    const tagCloudDiv = document.getElementById('tagCloudDiv');

    // get tags from posts on page
    Array.from(document.getElementsByClassName('tag')).forEach(function(tag) {
        let tagText = tag.innerText.trim();
        if (tags[tagText]) {
            tags[tagText].count++
        } else {
            tags[tagText] = {count: 1};
        }
    });

    // add tag cloud html to tagcloud div
    // TODO: show count for each tag
    for (tag in tags) {
        let tagSpan = document.createElement('span');
        tagSpan.className = 'round-full inline-block px6 pb3 mx3 my6 bg-gray-faint';
        // changing th einnerhtml directly makes it harder to match tags later
        // tagSpan.innerHTML = `${tag}  (${tags[tag].count})`;
        tagSpan.innerHTML = tag;
        tagSpan.addEventListener('click', toggleTag);
        tagCloudDiv.appendChild(tagSpan);
    };
}

/*
 * Handle interaction with tags
 * Changes color based on status and calls update
 */
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

/*
 * Changes posts visibility based on their tags
 */
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
