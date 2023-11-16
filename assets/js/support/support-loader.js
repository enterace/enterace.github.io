async function read_markdown() {
    const response = await fetch('/metadata/support/support.md')

    const text_data = await response.text()

    const html_data = marked.parse(text_data, { mangle: false, headerIds: false})

    return html_data
}

async function load(){
    document_container = document.getElementById("contact-container")

    document_container.innerHTML = await read_markdown()
}

load()