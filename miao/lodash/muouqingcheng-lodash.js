var muouqingcheng = function () {
  function chunk (ary, size = 1) {
    var result = [[]]
    for (var i = 0, j = 0; i < ary.length; i++) {
      if (result[j].length == size) {
        result.push([])
        j++
      }
      result[j].push(ary[i])
    }
    return result
  }

  function compact (ary) {
    var result = []
    for (var i = 0; i < ary.lenght; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }

  function join (arr, separator = ',') {
    var res = ""
    for (var i = 0; i < arr.length - 1; i++) {
      res += arr[i] + separator
    }
    return res + arr [arr.length - 1]
  }

  function last (arr) {
    var res = arr[arr.length - 1]
    return res
  }

  function lastIndexOf (arr, value, fromIndex = arr.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (arr[i] === value) {
        return i
      }
    }
    return -1
  }

  function drop (arr, n = 1) {
    for (var i = 0; i < n; i++) {
      arr.shift(i)
    }
    return arr
  }

  function dropRight (arr, n = 1) {
    for (var i = arr.length - 1; n > 0; i--, n--) {
      arr.pop(i)
    }
    return arr
  }

  function fill (arr, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      arr[i] = value
    }
    return arr
  }

  function identity (value) {
    return arguments[0]
  }

  function findIndex (arr, predicate = identity, fromIndex = 0) {
    for (var i = fromIndex; i < arr.length; i++) {
      if (predicate (arr[i])) {
        return i
      }
    }
    return -1
  }



  return {
    chunk,
    compact,
    join,
    last,
    lastIndexOf,
    drop,
    dropRight,
    fill,
    identity,
  }
}()