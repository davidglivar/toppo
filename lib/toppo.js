/**
 * Toppo constructor to parse and build a sorted dependency list
 * @param {Object} map An object with keys mapped to an array of dependencies
 *
 * Translated in part from http://rosettacode.org/wiki/Topological_sort#CoffeeScript
 */
module.exports = function Toppo(map) {
  this.graph = parseDeps(map);
  // use clone of this.graph as it gets destroyed in toposort
  this.topology = toposort(JSON.parse(JSON.stringify(this.graph)));
}

function set() {
  return {
    cnt: 0,
    v: {}
  };
}

function setAdd(s, e) {
  if (s.v[e]) return;
  s.cnt += 1;
  return s.v[e] = true;
}

function setRemove(s, e) {
  if (!s.v[e]) return;
  s.cnt -= 1;
  return delete s.v[e];
}

function parseDeps(map) {
  var targets = {}
    , deps = set()
    , children;
  for (var key in map) {
    targets[key] = set();
    children = map[key];
    var i = 0
      , len = children.length
      , child;
    for (i; i < len; i += 1) {
      child = children[i];
      if (child === '') {
        continue;
      }
      if (child !== key) {
        setAdd(targets[key], child);
      }
      setAdd(deps, child);
    }
  }

  for (var dep in deps.v) {
    if (!(dep in targets)) {
      targets[dep] = set();
    }
  }
  return targets;
}

function toposort(targets) {
  var independents = []
    , reverseDeps = []
    , result = [];

  for (var key in targets) {
    if (targets[key].cnt === 0) {
      delete targets[key];
      independents.push(key);
    }
  }

  // reverse dependencies for theoretical O(M+N) efficiency
  for (var key in targets) {
    for (var child in targets[key].v) {
      if (reverseDeps[child] === null || typeof reverseDeps[child] === 'undefined') {
        reverseDeps[child] = [];
      }
      reverseDeps[child].push(key);
    }
  }

  while (independents.length > 0) {
    var key = independents.pop()
      , revref = reverseDeps[key] || []
      , i = 0
      , len = revref.length
      , parent;
    result.push(key);
    for (i; i < len; i += 1) {
      parent = revref[i];
      setRemove(targets[parent], key);
      if (targets[parent].cnt === 0) {
        independents.push(parent);
        delete targets[parent];
      }
    }
  }

  for (var key in targets) {
    console.log('WARNING: node ' + key + ' is part of a cyclic dependency');
  }
  return result;
}
