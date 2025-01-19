$(document).ready(() => {
    $.getJSON("assets/json/MOCK_DATA.json",
        function (data) {
             person = '';
            $.each(data, function (key, value) {
                person += '<tr>';
                person += '<td><img src="' + value.profile + '"></td>'
                person += '<td>' + value.first_name + "&nbsp" + value.last_name + '</td>';
                person += '<td>' + value.gender+ '</td>';
                person += '<td>' + value.email + '</td>';
                person += '</tr>';
            });
            $("table").append(person);
        });

        $("#excel").click(()=>{
            $.getJSON('assets/json/MOCK_DATA.json', function(jsonData) {
                const worksheet = XLSX.utils.json_to_sheet(jsonData);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
                XLSX.writeFile(workbook, "data.xlsx");
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error fetching or processing the JSON data: ", textStatus, errorThrown);
            });
        
        })
        

});

