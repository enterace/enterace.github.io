var params = new URLSearchParams(window.location.search);

async function read_metadata() {
    const response = await fetch('/metadata/solutions/meta.json')

    const json_data = await response.json()

    return json_data
}

async function read_markdown(name) {
    const response = await fetch('/metadata/solutions/md/' + name + '.md')

    const text_data = await response.text()

    const html_data = marked.parse(text_data, { mangle: false, headerIds: false})

    return html_data
}

async function load_solution(){
    var solution_name = document.getElementById("solution-name")
    var source_opener = document.getElementById("source-opener")
    var windows_downloader = document.getElementById("windows-downloader")
    solution_name.textContent = "Not found"
    if(
        params.has('id')
    ){
        var id = params.get('id');
        const data = await read_metadata()
        data.list.forEach(item => {
            if(item.link == id){
                solution_name.textContent = item.name;
                source_opener.addEventListener("click", function() {
                    window.location.href = item.source
                });

                windows_downloader.addEventListener("click", function() {
                    window.location.href = item.latest
                });
            }
        })

        load_document(id)
    }
}

async function load_document(document_name){
    var document_container = document.getElementById("document")
    html_data = await read_markdown(document_name)
    document_container.innerHTML = html_data
}

load_solution()