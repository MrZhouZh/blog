---
title: 算法-插入排序
date: 2023-03-03
category: Algo
---

> 实现原理: 把当前遍历的元素取出, 在序列中找到一个合适的位置插入, 第二层循环不必遍历当前元素之前的所有元素, 因为当前元素之前的序列都是排好序的, 碰到第一个小于当前元素的值, 就可以停止继续向前查找. 然后把当前元素插入当前位置即可

<<< @/docs/_code/Algo/insertionSort.js#snippet{14,17}