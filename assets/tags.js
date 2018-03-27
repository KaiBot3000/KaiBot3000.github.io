document.addEventListener('DOMContentLoaded', tagCloud)

function tagCloud() {
    // get list of tags from posts on page
    let tags = {};
    let tagFilter = [];
    const tagCloudDiv = document.getElementById('tagCloudDiv');
    console.log(tagCloudDiv);

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
        tagSpan.className = 'round-full inline-block px6 pb3 mx3 my6 bg-gray-faint bg-gray-light-on-hover';
        tagSpan.innerHTML = tag;
        tagCloudDiv.appendChild(tagSpan);
    };

    // when one is clicked, toggle status

    // clicked tags added to filter list

    // filter posts by filter list


}
