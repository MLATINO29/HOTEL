// ROOM

function traerInformacionR() {
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type: "GET",
        datatype: "JSON",
        success: function (respuestaR) {
            console.log(respuestaR);
            pintarRespuestaR(respuestaR.items)
        }

    });
}

function pintarRespuestaR(items) {

    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].room + "</td>";
        myTable += "<td>" + items[i].stars + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "<td> <button onclick='borrarElementoR(" + items[i].id + ")'>Borrar Habitacion</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoR").append(myTable);
}
function guardarInformacionR() {
    let myData = {
        id: $("#id").val(),
        room: $("#room").val(),
        stars: $("#stars").val(),
        category_id: $("#category_id").val(),
        description: $("#description").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuestaR) {
            $("#resultadoR").empty();
            $("#id").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
            traerInformacionR();
            alert("Habitacion Creada Con Exito")
        }
    });
}

function editarInformacionR() {
    let myData = {
        id: $("#id").val(),
        room: $("#room").val(),
        stars: $("#stars").val(),
        category_id: $("#category_id").val(),
        description: $("#description").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuestaR) {
            $("#resultadoR").empty();
            $("#id").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
            traerInformacionR();
            alert("Habitacion Actualizada Con Exito")
        }
    });
}

function borrarElementoR(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuestRa) {
            $("#resultadoR").empty();
            traerInformacionR();
            alert("Habitacion Eliminada Con Exito")
        }
    });
}


//CLIENT

function traerInformacionC() {
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success: function (respuestaC) {
            console.log(respuestaC);
            pintarRespuestaC(respuestaC.items)
        }

    });
}

function pintarRespuestaC(items) {

    let myTableC = "<table>";
    for (i = 0; i < items.length; i++) {
        myTableC += "<tr>";
        myTableC += "<td>" + items[i].id + "</td>";
        myTableC += "<td>" + items[i].name + "</td>";
        myTableC += "<td>" + items[i].email + "</td>";
        myTableC += "<td>" + items[i].age + "</td>";

        myTableC += "<td> <button onclick='borrarElementoC(" + items[i].id + ")'>Borrar Cliente</button>";
        myTableC += "</tr>";
    }
    myTableC += "</table>";
    $("#resultadoC").append(myTableC);
}
function guardarInformacionC() {
    let myData = {
        id: $("#idC").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),

    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuestaC) {
            $("#resultadoC").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionC();
            alert("Cliente Creado Con Exito")
        }
    });
}

function editarInformacionC() {
    let myData = {
        id: $("#idC").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuestaC) {
            $("#resultadoC").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionC();
            alert("Cliente Actualizado Con Exito")
        }
    });
}

function borrarElementoC(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuestaC) {
            $("#resultadoC").empty();
            traerInformacionC();
            alert("Cliente Borrado Con Exito")
        }
    });
}


// MESSAGE


function traerInformacionM() {
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success: function (respuestaM) {
            console.log(respuestaM);
            pintarRespuestaM(respuestaM.items)
        }

    });
}

function pintarRespuestaM(items) {

    let myTableM = "<table>";
    for (i = 0; i < items.length; i++) {
        myTableM += "<tr>";
        myTableM += "<td>" + items[i].id + "</td>";
        myTableM += "<td>" + items[i].messagetext + "</td>";


        myTableM += "<td> <button onclick='borrarElementoM(" + items[i].id + ")'>Borrar Mensaje</button>";
        myTableM += "</tr>";
    }
    myTableM += "</table>";
    $("#resultadoM").append(myTableM);
}
function guardarInformacionM() {
    let myData = {
        id: $("#idM").val(),
        messagetext: $("#messagetext").val(),


    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuestaM) {
            $("#resultadoM").empty();
            $("#id").val("");
            $("#messagetext").val("");

            traerInformacionM();
            alert("Mensaje Creado Con Exito")
        }
    });
}

function editarInformacionM() {
    let myData = {
        id: $("#idM").val(),
        messagetext: $("#messagetext").val(),


    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuestaM) {
            $("#resultadoM").empty();
            $("#idM").val("");
            $("#messagetext").val("");

            traerInformacionM();
            alert("Mensaje Actualizado Con Exito")
        }
    });
}

function borrarElementoM(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g5e49f3fa7bc948-db202109262115.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuestaM) {
            $("#resultadoM").empty();
            traerInformacionM();
            alert("Mensaje Borrado Con Exito")
        }
    });

}
