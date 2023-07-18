var datalist

fetch('/api/meta/docs.json')
  .then(response => response.json())
  .then(data => {
    datalist = data.list
    show_full_search_list(datalist)
  })
  .catch(error => console.error(error));



function search_for_document(){
    const search_input = document.getElementById('searchInput');
    const search_query = search_input.value.toLowerCase()
    var filtered_document_list
    var filtered_document_list = datalist.filter(function(item) {
        var lowerCaseTitle = item.Title.toLowerCase();
        return lowerCaseTitle.includes(search_query);
    })

    const search_items_container = document.getElementById('searchContainer');

    search_items_container.replaceChildren()

    filtered_document_list.forEach(document_item => {
        const { Title, Description , Location} = document_item;
        create_search_item_for_search_container(search_items_container, Title, Description, Location)
    });
}

function show_full_search_list(datalist){
    const search_items_container = document.getElementById('searchContainer');
    datalist.forEach(document_item => {
        const { Title, Description , Location} = document_item;
        create_search_item_for_search_container(search_items_container, Title, Description, Location)
    });
}

function create_search_item_for_search_container(search_items_container, document_title, document_description, document_location){
    const document_html_item = document.createElement('div');
    document_html_item.classList.add('search-item');

    const document_html_title = document.createElement('h2');
    document_html_title.textContent = document_title;

    const document_html_description = document.createElement('p');
    document_html_description.textContent = document_description;

    const document_html_button = document.createElement('button');
    document_html_button.classList.add('open-document');
    document_html_button.textContent = 'مطالب بیشتر';
    document_html_button.addEventListener('click', function() {
        window.location.href = document_location
    });

    document_html_item.appendChild(document_html_title);
    document_html_item.appendChild(document_html_description);
    document_html_item.appendChild(document_html_button);

    search_items_container.appendChild(document_html_item);
}