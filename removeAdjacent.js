function stringReducer(s) {
    let sLength = s.length
    let n = 1
    do {
      s = s.replace('aa', '')
      s = s.replace('bb', '')
      s = s.replace('cc', '')
      s = s.replace('dd', '')
      s = s.replace('ee', '')
      s = s.replace('ff', '')
      s = s.replace('gg', '')
      s = s.replace('hh', '')
      s = s.replace('ii', '')
      s = s.replace('jj', '')
      s = s.replace('kk', '')
      s = s.replace('ll', '')
      s = s.replace('mm', '')
      s = s.replace('nn', '')
      s = s.replace('oo', '')
      s = s.replace('pp', '')
      s = s.replace('qq', '')
      s = s.replace('rr', '')
      s = s.replace('ss', '')
      s = s.replace('tt', '')
      s = s.replace('uu', '')
      s = s.replace('vv', '')
      s = s.replace('ww', '')
      s = s.replace('xx', '')
      s = s.replace('yy', '')
      s = s.replace('zz', '')  
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
  str = 'zzaabpsskmm'
  console.log(stringReducer(str))