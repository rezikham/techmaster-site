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

  function filterProduct(element) {
    var filter = element.attr("id");
    if (element.prop("checked")) {
      filter += localStorage.getItem("filter") + "" + filter;
      $(".product").each(function () {
        if (filter == "demo") {
          if ($(this).attr("demo") !== "true") {
            $(this).addClass("hidden");
          }
        } else if (filter == "dlc") {
          if ($(this).attr("dlc") !== "true") {
            $(this).addClass("hidden");
          }
        } else {
          if ($(this).attr("filter").toLowerCase().indexOf(filter) == -1) {
            $(this).addClass("hidden");
          }
        }
      });
    } else {
      $(".product").each(function () {
        if (filter == "demo") {
          if ($(this).attr("demo") !== "true") {
            $(this).removeClass("hidden");
          }
        } else if (filter == "dlc") {
          if ($(this).attr("dlc") !== "true") {
            $(this).removeClass("hidden");
          }
        } else {
          if ($(this).attr("filter").toLowerCase().indexOf(filter) == -1) {
            $(this).removeClass("hidden");
          }
        }
      });
    }
    localStorage.setItem("filter", filter);
  }
  function updateFilterNumber() {
    var filterNumber = {
      action: 0,
      adventure: 0,
      education: 0,
      fighting: 0,
      multiplayer: 0,
      music: 0,
      demo: 0,
      dlc: 0,
    };
    $(".product:not(.hidden)").each(function () {
      const genresArray = $(this).attr("filter").split(",");
      const demo = $(this).attr("demo") === "true" ? true : false;
      const dlc = $(this).attr("dlc") === "true" ? true : false;
      genresArray.forEach(genre => {
        if (genre.toLowerCase() in filterNumber) {
          filterNumber[genre.toLowerCase()]++;
        }
      });
      if (demo) {
        filterNumber.demo++;
      }
      if (dlc) {
        filterNumber.dlc++;
      }
    });

    for (const key in filterNumber) {
      $("#" + key + "+label span").text(filterNumber[key]);
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
      filterProduct($(this));
      updateFilterNumber();
    });
  });

  $(".collapsable").click(function () {
    $(this).parent().toggleClass("pb-5");
    $(this).siblings(".overflow-hidden").toggleClass("visible collapsed");
    $(this).siblings(".overflow-hidden").find("div").toggleClass("visible");
    $(this).find("i").toggleClass("rotate-180");
  });

  updateFilterNumber();
  clearFilterDisable();
});
