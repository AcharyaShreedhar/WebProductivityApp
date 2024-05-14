/*  Author:Shree Dhar Acharya
    Date:2023/03/26
    Student ID:8899288
    Application:Carousel Application
*/

$(document).ready(function () {
  // Add task to the bucket list
  $("#bucketlist-form").submit(function (event) {
    event.preventDefault();
    var todoText = $("#bucketlist-input").val();
    $("#bucket-list").append(
      '<li><span class="bucketlist-text">' +
        todoText +
        '</span><span class="complete">Complete</span><span class="delete">Delete</span></li>'
    );
    $("#bucketlist-input").val("");
  });

  // Mark task as completed
  $(document).on("click", ".complete", function () {
    $(this).prev().toggleClass("completed");
  });

  // Delete task from the bucket list
  $(document).on("click", ".delete", function () {
    $(this).parent().remove();
  });
});
