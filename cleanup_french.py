import re

files = [
    'components/tools/brightness-test-intro.tsx',
    'components/tools/contrast-test-intro.tsx',
    'components/tools/dead-pixel-intro.tsx'
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_len = len(content)
    
    # Remove isEn variable
    content = re.sub(r'  const isEn = locale === \'en\';\n', '', content)
    
    # Remove isEn ? 'english' : 'french' patterns, keeping english
    # Pattern: {isEn ? 'english text' : 'french text'}
    content = re.sub(r"\{isEn\s*\?\s*['\"](.+?)['\"]\\s*:\s*['\"].+?['\"]\}", r"{\"\1\"}", content, flags=re.DOTALL)
    
    # Also handle template literal version: {isEn ? `text` : `text`}
    content = re.sub(r"\{isEn\s*\?\s*`(.+?)`\s*:\s*`.+?`\}", r"{`\1`}", content, flags=re.DOTALL)
    
    # Handle multiline ternaries with line breaks
    content = re.sub(r"\{isEn\s*\?\s*(?:\'|\")((?:[^\"']|\\[\"'])*?)(?:\'|\")\s*:\s*(?:\'|\")((?:[^\"']|\\[\"'])*?)(?:\'|\")\s*\}", 
                     r"{\"\1\"}", content, flags=re.DOTALL)
    
    # Remove empty lines that may have been left behind
    content = re.sub(r'\n\n\n+', '\n\n', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    lines_removed = (original_len - len(content)) / 100
    print(f'✓ Cleaned: {filepath} ({int(lines_removed)} chars removed)')

print('Done!')
