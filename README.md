Toppo
=====

Toppo was inspired by the great documentation on [rosettacode.org](http://rosettacode.org/wiki/Topological_sort).

Usage
-----

Install via `npm install toppo`

    var Toppo = require('toppo')
      , map = {
          a: ['b', 'd', 'z'],
          b: ['c', 'd'],
          c: ['g'],
          d: []
        }
      , result = new Toppo(map);

    console.log(result.graph);
    console.log(result.topology);

License
-------

Rosettacode's content is available under [GNU Free Documentation License 1.2](http://www.gnu.org/licenses/fdl-1.2.html).

---

The MIT License (MIT)

Copyright (c) 2013 David Glivar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.