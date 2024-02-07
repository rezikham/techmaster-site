$(document).ready(function () {
  // if none of .filter-option are checked, disable clear all button, and if one or more is checked, when click on clear all button will clear all checked

  $("#clear-filter").click(function () {
    $(".filter-option").prop("checked", false);
    $(".filter-option").removeClass("checked");
  });

  function checkboxCss(e) {
    if (!e.is(":checked")) {
      e.prop("checked", false);
      e.removeClass("checked");
    } else {
      e.prop("checked", true);
      e.addClass("checked");
    }
  }

  $(".filter-option").each(function () {
    $($(this)).click(function () {
      checkboxCss($(this));
    });
  });

  $(".collapsable").click(function () {
    $(this).parent().toggleClass("pb-5");
    $(this).siblings(".overflow-hidden").toggleClass("visible collapsed");
    $(this).siblings(".overflow-hidden").find("div").toggleClass("visible");
    $(this).find("i").toggleClass("rotate-180");
  });
});
