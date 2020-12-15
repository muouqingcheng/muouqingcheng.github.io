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
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }

  function join (arr, separator = ',') {
    var res = ""
    for (var i = 0; i < arr.length - 1; i++) {
      res = res + arr[i] + separator
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

  function fill (arr, value, start = 0, end = arr.length) {
    for (var i = start; i < end; i++) {
      arr[i] = value
    }
    return arr
  }

  function identity (value) {
    return arguments[0]
  }

  function findIndex (arr, predicate = identity, fromIndex = 0) {
    if (typeof(predicate) == 'function') {
      pre = predicate (arr[i])
    } else if (typeof(predicate) == 'object') {
      pre = function () {
        arr[i] === predicate
      }
    } else if (typeof(predicate) == 'object')
    for (var i = fromIndex; i < arr.length; i++) {
      if (pre) {
        return i
      }
    }
    return -1
  }

  function flatten (arr) {
    var res = []
    for (var i = 0; i < arr.length; i++) {
      if (typeof(arr[i]) == 'object') {
        for (var j = 0; j < arr[i].length; j++) {
          res.push(arr[i][j])
        }
      } else {
        res.push(arr[i])
      }
    }
    return res
  }

  function flattenDeep (arr) {
    var res = []
    function fD (arr) {
      for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == 'object') {
          fD (arr[i])
        } else {
          res.push(arr[i])
        }
      }
    }
    fD (arr)
    return res
  }

  function flattenDepth (arr, depth = 1) {
    var res = []
    var dep = depth
    function fD (arr, d = 1) {
      d--
      for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == 'object' && d !== -1) {
          fD (arr[i], d)
        } else {
          res.push(arr[i])
        }
      }
    }
    fD (arr, dep)
    return res
  }

  function fromPairs (pairs) {
    var res = {}
    for (var i = 0; i < pairs.length; i++) {
      res[pairs[i][0]] = pairs[i][1]
    }
    return res
  }

  function head (arr) {
    return arr[0]
  }

  function indexOf (arr, value, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex = arr.length + fromIndex
    }
    for (var i = fromIndex; i < arr.length; i++) {
      if (arr[i] === value) {
        return i
      }
    }
    return -1
  }

  function initial (arr) {
    arr.pop(arr.length - 1)
    return arr
  }

  function reverse (arr) {
    for (var i = 0, j = arr.length - 1; j > i; i++, j--) {
      var a = arr[i]
      arr[i] = arr[j]
      arr[j] = a
    }
    return arr
  }

  function sortedIndex (arr, value) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= value) {
        return i
      }
    }
  }

  function isArray (val) {
    if (typeof(val) == "object" && val.length >= 0) {
      return true
    }
    return false
  }

  // function isArray (val) {
  //   return Object.prototype.toString.call(val) === '[object Array]'
  // }

  function isObject (value) {
    if (typeof(value) == "object") {
      return true
    }
    return false
  }

  function isString (value) {
    if (typeof(value) == "string") {
      return true
    }
    return false
  }

  function isFunction (value) {
    if (typeof(value) == "function") {
      return true
    }
    return false
  }

  function toArray (value) {
    var res = []
    if (isObject(value)) {
      for (key in value) {
        res.push(value[key])
      }
    } else if (isString(value)) {
      for (var i = 0; i < value.length; i++) {
        res.push(value[i])
      }
    }
    return res
  }

  function max (arr) { 
    var max = arr[0]
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    return max
  }

  function maxBy (arr, iteratee = identity) {
    var max = arr[0]
    for (var i = 1; i < arr.length; i++) {
      if (isString(iteratee)) {
        if (max[iteratee] < arr[i][iteratee]) {
          max = arr[i]
        }
      } else if (isFunction(iteratee)) {
        if (iteratee(max) < iteratee(arr[i])) {
          max = arr[i]
        }
      }
    }
    return max
  }

  function min (arr) {
    var min = arr[0]
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]
      }
    }
    return min
  }

  function minBy (arr, iteratee = identity) {
    var min = arr[0]
    for (var i = 1; i < arr.length; i++) {
      if (isString(iteratee)) {
        if (min[iteratee] > arr[i][iteratee]) {
          min = arr[i]
        }
      } else if (isFunction(iteratee)) {
        if (iteratee(min) > iteratee(arr[i])) {
          min = arr[i]
        }
      }
    }
    return min
  }

  function sum (arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum
  }

  function sumBy (arr, iteratee = identity) {
    var sum = 0
    for (var i = 1; i < arr.length; i++) {
      if (isString(iteratee)) {
        sum += arr[i][iteratee]
      } else if (isFunction(iteratee)) {
        return iteratee (arr)
      }
    }
    return sum
  }

  function curry (func, ...fixedArgs) {
    return function (...args) {
      return func (...fixedArgs, ...args)
    }
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
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    reverse,
    sortedIndex,
    isArray,
    isObject,
    isString,
    isFunction,
    toArray,
    max,
    maxBy,
    min,
    minBy,
    sum,
    sumBy,
    curry,
  }
}()