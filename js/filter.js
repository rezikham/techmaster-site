$(document).ready(function () {
  function clearFilterDisable() {
    if ($(".filter-option:checked").length == 0) {
      $("#clear-filter").prop("disabled", true);
    } else {
      $("#clear-filter").prop("disabled", false);
    }
  }
  function clearFilter() {
    $(".filter-option").prop("checked", false);
    $(".filter-option").removeClass("checked");
  }
  function checkboxCss(e) {
    if (!e.is(":checked")) {
      e.prop("checked", false);
      e.removeClass("checked");
    } else {
      e.prop("checked", true);
      e.addClass("checked");
    }
  }

  $("#clear-filter").click(function () {
    clearFilter();
    clearFilterDisable();
  });

  $(".filter-option").each(function () {
    $($(this)).click(function () {
      checkboxCss($(this));
      clearFilterDisable();
    });
  });

  $(".collapsable").click(function () {
    $(this).parent().toggleClass("pb-5");
    $(this).siblings(".overflow-hidden").toggleClass("visible collapsed");
    $(this).siblings(".overflow-hidden").find("div").toggleClass("visible");
    $(this).find("i").toggleClass("rotate-180");
  });

  clearFilterDisable();
});
