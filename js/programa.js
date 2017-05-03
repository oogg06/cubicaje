$(document).ready(inicio);

var informe     =   $("#informe")       ;
var largo_pale  =   $("#largo_pale")    ;
var ancho_pale  =   $("#ancho_pale")    ;

var largo_caja  =   $("#largo_caja")    ;
var ancho_caja  =   $("#ancho_caja")    ;

var superficie_caja, superficie_pale    ;
var posibles_cajas                      ;

var dimensiones_cajas=new Array()       ;
var empaquetador                        ;


function calcular_cajas(){
    superficie_pale=ancho_pale.val() * largo_pale.val()     ;
    superficie_caja=ancho_caja.val() * largo_caja.val()     ;
    posibles_cajas = superficie_pale / superficie_caja      ;
    var cajas_teoricas=Math.trunc(posibles_cajas)           ;
    for (var i=0; i<cajas_teoricas; i++){               
        var caja={w:ancho_caja.val(), h:largo_caja.val()}   ;
        dimensiones_cajas.push(caja)                        ;
    }
    empaquetador = new Packer()
    alert(empaquetador)
}

function actualizar(){
    calcular_cajas()
    var mm_ancho_pale=ancho_pale.val()
    var mm_largo_pale=largo_pale.val()
    
    var mm_ancho_caja=ancho_caja.val()
    var mm_largo_caja=largo_caja.val()
    
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
    
    largo_caja  =   $("#largo_caja")
    ancho_caja  =   $("#ancho_caja")
    
    $("#largo_pale").change(actualizar)
    $("#ancho_pale").change(actualizar)
    
    $("#largo_caja").change(actualizar)
    $("#ancho_caja").change(actualizar)
    
    actualizar()
    
}
