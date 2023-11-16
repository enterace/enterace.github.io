async function read_metadata() {
    const response = await fetch('/metadata/solutions/meta.json')

    const json_data = await response.json()

    return json_data
}

async function list_solutions(query){
    const data = await read_metadata()
    var solution_list = document.getElementById("solutions-list")
    data.list.forEach(item => {
        if(item.name.includes(query)) {
            var item_div = document.createElement("div");

            var heading = document.createElement("h1");
            heading.textContent = item.name;

            var description = document.createElement("p");
            description.textContent = item.description;

            var tag_div = document.createElement("div");

            var open_button = document.createElement("button");
            open_button.textContent = "learn more";
            open_button.addEventListener("click", function() {
                window.location.href = "/solutions/solution?id=" + item.link
            });

            solution_list.appendChild(item_div);

            item_div.appendChild(heading)
            item_div.appendChild(description)
            item_div.appendChild(tag_div)

            item.tags.forEach(tag_name => {
                var tag = document.createElement("p");
                tag.textContent = tag_name;
                tag_div.appendChild(tag)
            })

            item_div.appendChild(open_button)
        }
    });
}



list_solutions("")