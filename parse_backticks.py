import re

with open('assets/js/main.js', 'r') as f:
    content = f.read()

# find all indices of backticks
indices = [i for i, c in enumerate(content) if c == '`']
print(f"Total backticks: {len(indices)}")

lines = content.split('\n')
for i, line in enumerate(lines):
    b = line.count('`')
    if b > 0 and b % 2 != 0:
        print(f"Line {i+1} has {b} backticks: {line}")
