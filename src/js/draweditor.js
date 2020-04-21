$(function () {
  // loader
  $(".loader").fadeOut(500, function () {
    $(".page_wrapper").show();
  });

  // create a canvas
  var canvas = new fabric.Canvas("c", {
    isDrawingMode: false,
  });



  // drag&drop area settings
  $('[name="image"]').ezdz({
    text: "<p>Click To Select Bingo Card<p>",
    previewImage: false,
    validators: {
      maxSize: 4000000,
    },
    reject: function (file, errors) {
      if (errors.mimeType) {
        alert(file.name + " must be jpg or png.");
      }
      if (errors.maxSize) {
        alert(file.name + " must be size:4mb max.");
      }
    },
    accept: function (file) {
      var x = file.data; //$(".ezdz-dropzone img").attr("src");
      console.log(x);
      canvas.setBackgroundImage(x, canvas.renderAll.bind(canvas), {
        width: 500,
        height: 400,
        backgroundImageStretch: false,
      });

      $("#c").css("border", "none");
      return false;
    },
  });

  

  // make an image canvas background
  $("#image-background").click(function () {
    var x = $(".ezdz-dropzone img").attr("src");
    canvas.setBackgroundImage(x, canvas.renderAll.bind(canvas), {
      width: 500,
      height: 400,
      backgroundImageStretch: false,
    });

    $("#c").css("border", "none");
    return false;
  });


  // add an image to canvas
  $("#image-on").click(function () {
    var x2 = $(".ezdz-dropzone img").attr("src");

    fabric.Image.fromURL(
      x2,
      function (oImg) {
        canvas.add(oImg);
      },
      {
        scaleX: 0.4,
        scaleY: 0.4,
      }
    );

    $("#c").css("border", "none");
    return false;
  });

  // default text color
  $(".text-color").minicolors({
    defaultValue: "#333",
  });

  // hit enter and add text
  $("#text").bind("change keyup input", function (e) {
    var key = e.which;
    if (key == 13) {
      var myText = $("#text").val();
      $("#text").val("");

      var mycolor = $(".text-color").val();
      var myfont = $("#text-font option:selected").val();

      var text = new fabric.Text(myText, {
        fontFamily: myfont,
        fontSize: 40,
        fill: mycolor,
        left: 40,
        top: 50,
      });
      text.hasRotatingPoint = true;
      canvas.add(text);

      $("#selection").trigger("click");
    }
    return false;
  });

  // defaut draw color
  $(".draw-color").minicolors({
    defaultValue: "rgba(53, 21, 176, 0.5)",
    opacity: "0.5",
  });

  // click button and start to draw
  $("#draw").click(function () {
    canvas.isDrawingMode = true;

    $(".draw-color").on("change", function () {
      var mycolor = $(".draw-color").val();
      canvas.freeDrawingBrush.color = mycolor;
      return false;
    });

    canvas.renderAll();
    $(this).addClass("active");
    $("#selection").removeClass("active");
    return false;
  });

  // click button to activate selection mode
  $("#draw").addClass("active");
  canvas.isDrawingMode = true;

  canvas.freeDrawingBrush.width = 50;
  canvas.freeDrawingBrush.color = "rgba(53, 21, 176, 0.5)";

  $("#selection").click(function () {
    canvas.isDrawingMode = false;
    $(this).addClass("active");
    $("#draw").removeClass("active");
    return false;
  });

  // delete selected object
  function deleteObjects() {
    var activeObject = canvas.getActiveObject(),
      activeGroup = canvas.getActiveGroup();
    if (activeObject) {
      if (confirm("Are you sure?")) {
        canvas.remove(activeObject);
      }
    }
  }
  $("#delete").click(function () {
    deleteObjects();
    return false;
  });

  // clear canvas
  $("#delete-all").click(function () {
    if (confirm("Are you sure?")) {
      canvas.backgroundImage = false;
      canvas.clear();
    }
    return false;
  });

  // save canvas as image
  $("#save").click(function () {
    $("#save").attr("href", canvas.toDataURL());
    $("#save").attr("download", "draweditor");
  });
});

// confirmation before closing the tab
window.onbeforeunload = function (e) {
  e = e || window.event;
  if (e) {
    e.returnValue = "Sure?";
  }
  return "Sure?";
};
