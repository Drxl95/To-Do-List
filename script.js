let today = new Date();
let date = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

document.getElementById("date-time").innerHTML = date;

function newItem() {
  let li = $("<li></li>");
  $("#list").append(li);

  let inputValue = $("input").val();

  let text = $(document.createTextNode(inputValue));
  li.append(text);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let list = $("#list");
    list.append(li);
  }

  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut);

  let crossOutButton = $("<crossoutButton></crossoutButton>");
  li.append(crossOutButton);

  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  function deleteListItem() {
    li.addClass("delete");
  }

  crossOutButton.on("click", deleteListItem);

  $("#list").sortable();
}
