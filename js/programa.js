$(document).ready(inicio);

var informe     =   $("#informe")       ;
var largo_pale  =   $("#largo_pale")    ;
var ancho_pale  =   $("#ancho_pale")    ;
var alto_pale   =   $("#alto_pale")    ;

var largo_caja  =   $("#largo_caja")    ;
var ancho_caja  =   $("#ancho_caja")    ;
var alto_caja   =   $("#alto_caja")    ;





function get_numero(control){
    return parseInt(control.val())
}

function calcular_cajas(){
    //Cargamos el canvas y lo borramos
    var canvas = document.getElementById("lienzo");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath()

    var superficie_caja, superficie_pale    ;
    var posibles_cajas                      ;
    var int_ancho_pale  =   get_numero ( ancho_pale )    ;
    var int_largo_pale  =   get_numero ( largo_pale )    ;
    var int_ancho_caja  =   get_numero ( ancho_caja )    ;
    var int_largo_caja  =   get_numero ( largo_caja )    ;
    
    superficie_pale=int_ancho_pale * int_largo_pale ;
    superficie_caja=int_ancho_caja * int_largo_caja ;
    var posibles_cajas = superficie_pale / superficie_caja      ;
    var num_cajas_teoricas=Math.trunc(posibles_cajas)           ;
    var dimensiones_cajas=[];
    for (var i=0; i<num_cajas_teoricas; i++){               
        var caja={w:int_ancho_caja,
                    h:int_largo_caja }   ;
        dimensiones_cajas.push(caja)                        ;
    }
    var empaquetador = new Packer(ancho_pale.val(), largo_pale.val());
    dimensiones_cajas.sort(function(a,b) { return (b.h < a.h); });
    empaquetador.fit(dimensiones_cajas);

    for (var n=0; n<dimensiones_cajas.length; n++){
        var c=dimensiones_cajas[n];
        if (c.fit) {
            ctx.rect(c.fit.x, c.fit.y, c.w, c.h);
            ctx.stroke()
        }
    }
}

function actualizar(){
    calcular_cajas();
    var mm_ancho_pale=ancho_pale.val();
    var mm_largo_pale=largo_pale.val();
    
    var mm_ancho_caja=ancho_caja.val();
    var mm_largo_caja=largo_caja.val();
    
    html_informe  = "Dimensiones pale:"+mm_ancho_pale+"mm x "+mm_largo_pale+"mm <br/>";
    html_informe += "Dimensiones caja:"+mm_ancho_caja+"mm x "+mm_largo_caja+"mm <br/>";
    html_informe += "Superficie pale:"+superficie_pale+"mm2, superficie caja: "+superficie_caja+"mm2<br/>";
    html_informe += "Número teórico de cajas:" + posibles_cajas;
    html_informe += " (redondeado a   "+ Math.trunc(posibles_cajas) +")<br/>"
    informe.html(html_informe)
}
function inicio(){
    informe     =   $("#informe")
    largo_pale  =   $("#largo_pale")
    ancho_pale  =   $("#ancho_pale")
    alto_pale  =   $("#alto_pale")
    
    largo_caja  =   $("#largo_caja")
    ancho_caja  =   $("#ancho_caja")
    alto_caja  =   $("#alto_caja")
    
    $("#largo_pale").change(actualizar)
    $("#ancho_pale").change(actualizar)
    $("#alto_pale").change(actualizar)
    
    $("#largo_caja").change(actualizar)
    $("#ancho_caja").change(actualizar)
    $("#alto_caja").change(actualizar)
    
    actualizar()
    
}
