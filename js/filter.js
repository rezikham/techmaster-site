$(document).ready(function () {
  filterArray = localStorage.getItem("filter").split(",");
  function clearFilterDisable() {
    if (localStorage.getItem("filter") == "") {
      $("#clear-filter").prop("disabled", true);
    } else {
      $("#clear-filter").prop("disabled", false);
    }
  }
  function clearFilter() {
    $(".filter-option").prop("checked", false);
    $(".filter-option").removeClass("checked");
    localStorage.setItem("filter", "");
  }
  function checkboxCss(e) {
    if (e.is(":checked")) {
      e.prop("checked", true);
      e.addClass("checked");
    } else {
      e.prop("checked", false);
      e.removeClass("checked");
    }
  }

  function filterProductHidden(filterArray) {
    $(".product").each(function () {
      var isHidden = false;
      if (filterArray.includes("demo") && $(this).attr("demo") !== "true") {
        isHidden = true;
      }
      if (filterArray.includes("dlc") && $(this).attr("dlc") !== "true") {
        isHidden = true;
      }
      let tempFilterArray = filterArray.filter(
        item => item != "demo" && item != "dlc"
      );
      tempFilterArray.forEach(filter => {
        if (!$(this).attr("filter").toLowerCase().split(",").includes(filter)) {
          console.log($(this).attr("filter").toLowerCase().split(","));
          isHidden = true;
        }
      });
      if (isHidden) {
        $(this).addClass("hidden");
      } else {
        $(this).removeClass("hidden");
      }
    });
  }

  function filterProduct(element) {
    var filter = element.attr("id");
    var filterArray = localStorage.getItem("filter")
      ? localStorage.getItem("filter").split(",")
      : [];
    if (element.prop("checked")) {
      filterArray.push(filter);
    } else {
      filterArray = filterArray.filter(item => item != filter);
    }
    filterProductHidden(filterArray);
    localStorage.setItem("filter", filterArray.join(","));
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
      filterProduct($(this));
      clearFilterDisable();
      updateFilterNumber();
    });
    if (filterArray.includes($(this).attr("id"))) {
      $(this).prop("checked", true);
      $(this).addClass("checked");
    }
  });

  $(".collapsable").click(function () {
    $(this).parent().toggleClass("pb-5");
    $(this).siblings(".overflow-hidden").toggleClass("visible collapsed");
    $(this).siblings(".overflow-hidden").find("div").toggleClass("visible");
    $(this).find("i").toggleClass("rotate-180");
  });

  filterProductHidden(filterArray);

  updateFilterNumber();
  clearFilterDisable();
});
