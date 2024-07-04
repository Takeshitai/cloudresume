def solution(string, ending):
  return string.endswith(ending)
pass

# print(solution("abc","bc"))

# Maskify
def maskify(cc):
  return "#"*(len(cc)-4) + cc[-4:]
pass

print(maskify("876985it"))
