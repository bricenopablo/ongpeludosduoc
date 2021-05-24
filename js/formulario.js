$(document).ready(() => {
  const form = $("#formulario");
  const comuna = $("#comuna");
  $("#reset").click(() => comuna.prop("disabled", true));
  const regiones_comunas = [];
  $.getJSON("../js/regiones_comunas.json", (data) => {
    $.each(data, (i) => {
      $("#region").append(
        `<option value="${data[i].region}">${data[i].region}</option>`
      );
    });
    regiones_comunas.push(...data);
  });
  $("#region").on("change", function () {
    const self = $(this);
    const comunas = [];
    if (self.val() === "none") {
      comuna.prop("disabled", true);
    } else {
      comuna.prop("disabled", false);
    }
    $.each(regiones_comunas, (i) => {
      $.each(regiones_comunas[i].comunas, (j) => {
        if (regiones_comunas[i].region === self.val()) {
          comunas.push(
            `<option class="comuna" value="${regiones_comunas[i].comunas[j]}">${regiones_comunas[i].comunas[j]}`
          );
        }
      });
    });
    comuna
      .html(comunas.join("</option>"))
      .prepend(`<option value="none" selected>Seleccione una comuna</option>`);
  });
  $.validator.addMethod(
    "valueNotEquals",
    (value, element, arg) => arg !== value,
    "Value must not equal arg."
  );

  const validador = form.validate({
    rules: {
      rut: {
        required: true,
        minlength: 10,
      },
      nombres: {
        required: true,
        minlength: 6,
      },
      apellido: {
        required: true,
        minlength: 6,
      },
      rut: {
        required: true,
        minlength: 10,
      },
      email: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: false,
        minlength: 9,
      },
      region: {
        valueNotEquals: "none",
      },
      comuna: {
        valueNotEquals: "none",
      },
      comentario: {
        required: true,
      },
    },
    messages: {
      rut: {
        required: "Por favor ingrese su rut",
        minlength: "El rut debe tener minimo 10 caracteres",
      },
      nombres: {
        required: "Por favor indique sus nombres",
        minlength: "Ingrese mas de 6 caracteres",
      },
      apellido: {
        required: "Por favor indique sus apellidos",
        minlength: "Ingrese mas de 6 caracteres",
      },
      email: {
        required: "Por favor ingrese su correo electronico",
        email: "Por favor ingrese un correo electronico valido",
        minlength: jQuery.validator.format("At least {0} characters required!"),
      },
      phone: {
        minlength: "El numero de telefono debe tener un minimo de 9 digitos",
        number: "Ingrese numeros validos",
      },
      region: {
        valueNotEquals: "Por favor seleccione una región",
      },
      comuna: {
        valueNotEquals: "Por favor seleccione una comuna",
      },
      comentario: {
        required: "Por favor responda la pregunta",
      },
    },
    errorPlacement: function (error, element) {
      const msgError = $(`<span class="text-danger"></span>`);
      error.appendTo(msgError);
      msgError.appendTo(element.parent());
      console.log(element);
    },
    submitHandler: function () {},
  });
});
