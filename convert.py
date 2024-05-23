from jinja2 import Template
import os

TEMPLATE = 'template.html'
MATRIX = 'matrix'
OUTPUT = 'web/index.html'
number = 1


def convert(file, num):
    with open(file) as file:
        lines = file.readlines()

    data = {'category': {}}
    category = ''
    current_list = None

    for line in lines:
        if line.startswith('# '):
            data['header'] = line.strip('#').strip()
            data['number'] = '0' + str(num)
        elif line.startswith('## '):
            category = line.strip('##').strip()
            data['category'][category] = []
            current_list = data['category'][category]
        elif line.startswith('- '):
            current_list.append({'text': line.strip('-').strip(), 'subitems': []})
        elif line.startswith('  - '):
            if current_list:
                current_list[-1]['subitems'].append(line.strip('  - ').strip())
        else:
            data['description'] = line.strip()

    return data


if __name__ == '__main__':
    data = []
    files = os.listdir(MATRIX)
    files.sort()
    for file in files:
        if file.endswith('.md'):
            data.append(convert(os.path.join(MATRIX, file), number))
            number += 1
    template = Template(open(TEMPLATE).read())
    levels = ((1, 'Trainee'), (2, 'Junior'), (3, 'Middle'), (4, 'Senior'), (5, 'Expert'))
    with open(OUTPUT, 'w') as file:
        file.write(template.render(data=data, levels=levels))
