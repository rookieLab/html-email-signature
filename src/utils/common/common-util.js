// 数组操作
function deleteList(source, target) {
  // 将target中与source相同的元素删除
  // 参数过滤
  if (typeof target === 'undefined' || target.length === 0) {
    return source
  }
  if (typeof source === 'undefined' || target.length === 0) {
    return []
  }
  // 数组处理： 将target中的元素，在source中删除
  for (let i = 0; i < target.length; i++) {
    let delete_item = target[i]
    for (let j = 0; j < source.length; j++) {
      let source_item = source[j]
      if (source_item === delete_item) {
        source.splice(j, 1)
        j--
        break
      }
    }
  }
  return source
}

export { deleteList }
