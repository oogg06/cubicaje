#!/usr/bin/env python3
#encoding=utf-8
from rectpack import newPacker


def truncar(num, digitos):
   sp = str(num).split('.')
   return int (sp[0])


def maximizador(ancho_pale, largo_pale, ancho_caja, largo_caja):
    
    area_pale=ancho_pale * largo_pale
    area_caja=ancho_caja * largo_caja
    
    num_cajas = area_pale / area_caja
    num_cajas=truncar(num_cajas, 0 )
    print (num_cajas)
    rectangles = []
    
    for i in range(0, 19):
        rectangles.append((285, 210))
    
    bins = [(1200, 1000)]
    
    packer = newPacker()
    
    # Add the rectangles to packing queue
    for r in rectangles:
        packer.add_rect(*r)
    
    # Add the bins where the rectangles will be placed
    for b in bins:
        packer.add_bin(*b)
    
    # Start packing
    packer.pack()
    
    
    all_rects = packer.rect_list()
    for rect in all_rects:
        b, x, y, w, h, rid = rect
        print(x, y, w, h)
        
if __name__ == '__main__':
    maximizador(1200, 1000, 285, 210)