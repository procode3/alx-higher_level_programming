// Adds a <li> element to a list when the user clicks on the tag
$(document).ready($('#add_item').click(() => {
  $('UL.my_list').append('<li>Item</li>');
}));
