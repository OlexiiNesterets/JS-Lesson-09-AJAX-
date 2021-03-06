'use strict';

(function ($) {

    $.ajax({
        url: '../data/employees.json'
    }).done(function (data) {
        var $ul = $('<ul></ul>');
        $ul.addClass('bulleted');
        data.forEach(function(element) {
            var $li = $('<li></li>').text(element.name);
            $li.addClass(element.inoffice ? 'in' : 'out');
            $ul.append($li);
        });
        $('#employeeList').append($ul);
    });

})(jQuery);

/* 

"VanillaJS"

(function() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', '../data/employees.json', true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            var employees = JSON.parse(this.responseText);
            var ul = document.createElement('ul');
            ul.className = 'bulleted';
            employees.forEach(function(element) {
                var li = document.createElement('li');
                li.textContent = element.name;
                li.className = element.inoffice ? 'in' : 'out';
                ul.appendChild(li);
            });
            document.getElementById('employeeList').appendChild(ul);
        }
    }
})();

 */