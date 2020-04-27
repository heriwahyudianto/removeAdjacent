function rmvAjdc(s) {
  let sLength = s.length
  let n = 1
  do {
    s = s.replace(/aa|bb|cc|dd|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|zz/, '')
    n++
    if (n === sLength) {
      break
    }
  } while (s.length > 1)
  if (s.length === 0) {
    return 'Empty String'
  } 
  return s
}

var str = 'aaabccddd'
//str = 'baab'
//str = 'aa'
//str = 'zzaabpsskmm'
console.log(rmvAjdc(str))