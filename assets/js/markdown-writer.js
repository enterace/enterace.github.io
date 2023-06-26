function get_write_document(document_url, document_element_id){
    
    fetch(document_url)
        .then(document_data => document_data.text())
            .then(document => {
                html_formatted_document = markdown_to_html(document)
                write_document(html_formatted_document, document_element_id)
            })
    
}
  
function markdown_to_html(markdown) {
    var html = marked.parse(markdown, { mangle: false, headerIds: false});
    return html;
}
  
function write_document(html_formatted_document, document_element_id){
    document.getElementById(document_element_id).innerHTML = html_formatted_document;
}