$(document).ready(inicio)

var informe     =   $("#informe")
var largo_pale  =   $("#largo_pale")
var ancho_pale  =   $("#ancho_pale")

var largo_caja  =   $("#largo_caja")
var ancho_caja  =   $("#ancho_caja")




function actualizar(){
    var mm_ancho_pale=ancho_pale.val()
    var mm_largo_pale=largo_pale.val()
    
    var mm_ancho_caja=ancho_caja.val()
    var mm_largo_caja=largo_caja.val()
    
    html_informe="Dimensiones pale:"+mm_ancho_pale+"mm x "+mm_largo_pale+"mm <br/>"
    html_informe+="Dimensiones caja:"+mm_ancho_caja+"mm x "+mm_largo_caja+"mm <br/>"
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
    
    
}
