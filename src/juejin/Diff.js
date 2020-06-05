function insert (parent, elm, ref) {
  if (parent) {
      if (ref) {
          if (ref.parentNode === parent) {
              nodeOps.insertBefore(parent, elm, ref);
          }
      } else {
          nodeOps.appendChild(parent, elm)
      }
  }
}

function createElm (vnode, parentElm, refElm) {
  if (vnode.tag) {
      insert(parentElm, nodeOps.createElement(vnode.tag), refElm);
  } else {
      insert(parentElm, nodeOps.createTextNode(vnode.text), refElm);
  }
}

function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], parentElm, refElm);
  }
}

function removeNode (el) {
  const parent = nodeOps.parentNode(el);
  if (parent) {
      nodeOps.removeChild(parent, el);
  }
}

function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
      const ch = vnodes[startIdx]
      if (ch) {
          removeNode(ch.elm);
      }
  }
}

const nodeOps = {
  setTextContent (text) {
      if (platform === 'weex') {
          node.parentNode.setAttr('value', text);
      } else if (platform === 'web') {
          node.textContent = text;
      }
  },
  parentNode () {
      //......
  },
  removeChild () {
      //......
  },
  nextSibling () {
      //......
  },
  insertBefore () {
      //......
  }
}

function patch (oldVnode, vnode, parentElm) {
  if (!oldVnode) {
      addVnodes(parentElm, null, vnode, 0, vnode.length - 1);
  } else if (!vnode) {
      removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1);
  } else {
      if (sameVnode(oldVNode, vnode)) {
          patchVnode(oldVNode, vnode);
      } else {
          removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1);
          addVnodes(parentElm, null, vnode, 0, vnode.length - 1);
      }
  }
}