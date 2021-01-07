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

  function identity (val) {
    return val
  }

  function flatten (arr) {
    var res = []
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for (var j = 0; j < arr[i].length; j++) {
          res.push(arr[i][j])
        }
      } else {
        res.push(arr[i])
      }
    }
    return res
  }

  // function flatten (arrays) {
  //   return [].concat(...arrays)
  // }

  // ^^^上面的函数等价于：
  // function flatten (arrays) {
  //   return [].concat.apply([], arrays)
  // }

  // ^^^上面的函数等价于：
  // flatten = [].concat.apply.bind([].concat, [])

  function flattenDeep (arr) {
    var res = []
    function fD (arr) {
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          fD (arr[i])
        } else {
          res.push(arr[i])
        }
      }
    }
    fD (arr)
    return res
  }

  // function flattenDeep (arrays) {
  //   var result = []
  //   for (var i = 0; i < arrays.length; i++) {
  //     if (Array.isArray(arrays[i])) {
  //       result.push(...flattenDeep(arrays[i]))
  //     } else {
  //       result.push(arrays[i])
  //     }
  //   }
  //   return result
  // }

  function flattenDepth (arr, depth = 1) {
    var res = []
    var dep = depth
    function fD (arr, d = 1) {
      d--
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && d !== -1) {
          fD (arr[i], d)
        } else {
          res.push(arr[i])
        }
      }
    }
    fD (arr, dep)
    return res
  }

  // function flattenDepth (arrays, depth = 1) {
  //   if (depth == 0) {
  //     return arrays.slice()
  //   }

  //   var result = []
  //   for (var i = 0; i < arrays.length; i++) {
  //     if (Array.isArray(arrays[i])) {
  //       result.push(...flattenDepth(arrays[i], depth - 1))
  //     } else {
  //       result.push(arrays[i])
  //     }
  //   }
  //   return result
  // }

  // function flatten (arrays) {
  //   return flattenDepth(arrays, 1)
  // }

  // function flattenDeep (arrays) {
  //   return flattenDepth(arrays, Infinity)
  // }

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

  // function isArray (val) {
  //   if (typeof(val) == "object" && val.length >= 0) {
  //     return true
  //   }
  //   return false
  // }

  function isArray (val) {
    return Object.prototype.toString.call(val) === '[object Array]'
  }

  function isObject (value) {
    if (value == null) {
      return false
    }
    if (isFunction(value)) {
      return true
    }
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

  function sumBy (arr, predicate = identity) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
      if (isString(predicate)) {
        sum += arr[i][predicate]
      }
      if (isFunction(predicate)) {
        sum += predicate(arr[i])
      }
    }
    return sum
  }

  // function sumBy (arr, predicate = identity) {
  //   var sum = 0
  //   for (var i = 0; i < arr.length; i++) {
  //     sum += predicate(arr[i], i, arr)
  //   }
  //   return sum
  // }

  // function curry (func, ...fixedArgs) {
  //   return function (...args) {
  //     return func (...fixedArgs, ...args)
  //   }
  // }

  function curry (f, length = f.length) {
    return function (...args) {
        if (args.length < length) {
            return curry(f.bind(null, ...args), length - args.length)
        } else {
            return f(...args)
        }
    }
}

  function concat (...values) {
    var result = []
    for (var i = 0; i < values.length; i++) {
      if (Array.isArray(values[i])) {
        values[i].forEach(it => {
          result.push(it)
        })
      } else {
        result.push(values[i])
      }
    }
    return result
  }

  function mapValues (obj, predicate = identity) {
    var result = {}
    for (var key in obj) {
      var val = obj[key]
      if (isFunction(predicate)) {
        result[key] = predicate(val, key, obj)
      }
      if (isString(predicate)) {
        result[key] = get(val, predicate)
      }
    }
    return result
  }

  function mapKeys (obj, predicate = identity) {
    var result = {}
    for (var key in obj) {
      var val = obj[key]
      result[predicate(val, key, obj)] = val
    }
    return result
  }

  function get (obj, path, defaultValue) {
    if (isString(path)) {
      var path = toPath(path)
    } 
    for (var key of path) {
      if (key in Object(obj)) {
        obj = obj[key]
      } else {
        return defaultValue
      }
    }
    return obj
  }

  function property (path) {
    return function (obj) {
      return get(obj, path)
    }
  }

  function toPath (val) {
    return val.match(/\w+/g)
  }

  function isMatch (obj, src) {
    for (var key in src) {
      if (src[key] && typeof(src[key]) === 'object') {
        if (!isMatch(obj[key], src[key])) {
          return false
        }
      } else {
        if (obj[key] !== src[key]) {
          return false
        }
      }
    }
    return true
  }

  function isMatchWith (obj, src, customizer) {
    for (var key in src) {
      if (src[key] && typeof(src[key]) === 'object') {
        if (!isMatch(obj[key], src[key])) {
          return false
        }
      } else {
        if (!customizer(obj[key], src[key], key, obj, src)) {
          return false
        }
      }
    }
    return true
  }

  function matches (src) {
    return function (obj) {
      return isMatch(obj, src)
    }
  }

  function bind (f, thisArg, ...partials) {
    return function (...args) {
      var copy = partials.slice()
      for (var i = 0; i < copy.length; i++) {
        if (copy[i] === _) {
          copy[i] = args.shift()
        }
      }
      return f.call(thisArg, ...copy, ...args)
    }
  }

  function matchesProperty (path, srcValue) {
    var path = toPath(path)
    return function (obj) {
      var val = get(obj, path)
      if (val !== srcValue) {
        return false
      }
      return true
    }
  }

  function iteratee (predicate) {
    if (isFunction(predicate)) {
      return predicate
    }
    if (isString(predicate)) {
      return property(predicate)
    }
    if (Array.isArray(predicate)) {
      return matchesProperty(...predicate)
    }
    if (isObject(predicate)) {
      return matches(predicate)
    }
  } 

  function dropRightWhile (arr, predicate = identity) {
    if (isString(predicate)) {
      return arr
    } else {
      predicate = iteratee(predicate)
    }
    for (var i = arr.length - 1; i >= 0; i--) {
      var val = arr[i]
      if (!predicate(val)) {
        return arr.slice(0, i + 1)
      }
    }
  }

  function dropWhile (arr, predicate = identity) {
    if (isString(predicate)) {
      return arr
    } else {
      predicate = iteratee(predicate)
    }
    for (var i = 0; i < arr.length; i++) {
      var val = arr[i]
      if (!predicate(val)) {
        return arr.slice(i)
      }
    }
  }

  function findIndex (arr, predicate = identity, fromIndex = 0) {
    predicate = iteratee(predicate)
    for (var i = fromIndex; i < arr.length; i++) {
      var val = arr[i]
      if (predicate(val)) {
        return i
      }
    }
    return -1
  }

  function findLastIndex (arr, predicate = identity, fromIndex = arr.length - 1) {
    predicate = iteratee(predicate)
    for (var i = fromIndex; i >= 0; i--) {
      var val = arr[i]
      if (predicate(val)) {
        return i
      }
    }
    return -1
  }

  function groupBy (arr, predicate) {
    predicate = iteratee(predicate)
    var res = {}
    for (var i = 0; i < arr.length; i++) {
      var val = arr[i]
      var key = predicate(val)
      if (key in res) {
        res[key].push(val)
      } else {
        res[key] = []
        res[key].push(val)
      }
    }
    return res 
  }

  function difference (arr, ...val) {
    var res = []
    val = flattenDeep(val)
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i]
      if (!val.includes(a)) {
        res.push(a)
      }
    }
    return res
  }

  function differenceBy (arr, ...val) {
    var predicate = val[val.length - 1]
    if (!isArray(predicate)) {
      val.pop()
      predicate = iteratee(predicate)
    } else {
      predicate = identity
    }
    var res = []
    var arrMap = arr.map(predicate)
    var valMap = flattenDeep(val).map(predicate)
    var diff = difference(arrMap, valMap)
    for (var i = 0; i < diff.length; i++) {
      var a = diff[i]
      var b = arrMap.indexOf(a)
      res.push(arr[b])
    }
    return res
  }

  function intersection (...arr) {
    return arr.reduce(  (acc, val) => acc.filter( it => val.includes(it) )  )
  }

  function pull (arr, ...val) {
    var res = []
    arr.forEach(it => {
      if (!val.includes(it)) {
        res.push(it)
      }
    })
    return res
  }

  function union (...arr) {
    var arr = flattenDeep(arr)
    return Array.from(new Set(arr))
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
    concat,
    groupBy,
    mapValues,
    mapKeys,
    get,
    property,
    toPath,
    isMatch,
    matches,
    bind,
    matchesProperty,
    isMatchWith,
    dropRightWhile,
    dropWhile,
    findIndex,
    findLastIndex,
    difference,
    differenceBy,
    intersection,
    pull,
    union,
  }
}()