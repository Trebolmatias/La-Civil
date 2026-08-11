import re, json, io

src = open('data/_argentina_src.js', encoding='utf-8', errors='replace').read()

# --- extract province paths from elems:{ ... } ---
i = src.find('elems:{')
assert i != -1, 'elems not found'
j = i + len('elems:{')
# find matching closing brace (province values are quoted strings w/o braces)
depth = 1; k = j; instr = False
while k < len(src):
    c = src[k]
    if c == '"':
        instr = not instr
    elif not instr and c == '{':
        depth += 1
    elif not instr and c == '}':
        depth -= 1
        if depth == 0:
            break
    k += 1
block = src[j:k]
provs = dict(re.findall(r'(\w+):"([^"]*)"', block))
print('provincias:', len(provs))

# --- hotels ---
hot = json.load(open('data/hoteles_original.json', encoding='utf-8'))
A, Bx = 59.66752357, 4545.874983
C, Dy = -67.84481668, -1431.931678
out = []
total = 0
for row in hot:
    d = row['datos']
    lat, lng = d['wgs_84'][0], d['wgs_84'][1]
    x = A*lng + Bx
    y = C*lat + Dy
    hs = [h.strip() for h in d['hoteles']]
    total += len(hs)
    out.append({'id': row['id'].strip(), 'hoteles': hs,
                'lat': lat, 'lng': lng,
                'x': round(x,1), 'y': round(y,1)})
print('localidades:', len(out), 'hoteles:', total)

data = {'w':1600,'h':2500,'provinces':provs,'localidades':out}
js = "/* Datos del mapa de hoteles - generado desde el sitio original + proyeccion mapael */\n"
js += "window.ARG_MAP = " + json.dumps({'w':1600,'h':2500,'provinces':provs}, ensure_ascii=False) + ";\n"
js += "window.HOTELES = " + json.dumps(out, ensure_ascii=False) + ";\n"
open('js/mapa-data.js','w',encoding='utf-8').write(js)
print('escrito js/mapa-data.js bytes:', len(js))
