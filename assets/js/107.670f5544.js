(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{481:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"three-js-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#three-js-基础"}},[s._v("#")]),s._v(" Three.js 基础")]),s._v(" "),t("p",[t("strong",[s._v("three.js 中的大小单位是米, 这是一种约定. 如果你不遵循, 那么除了物理上精确的照明以外的一切都仍然有效.")]),s._v(" 假设你想让一个百瓦的灯泡等效真实房间中的等效灯泡相同的方式照亮房间, 则必须使用米将房间建造成正确的比例.")]),s._v(" "),t("blockquote",[t("p",[s._v("1单位 = 1米")])]),s._v(" "),t("p",[s._v("three.js 中的灯光类分为两种类型, "),t("strong",[s._v("默认情况下禁用阴影")]),s._v(":")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("直接光照, 模拟直接光照")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("DirectionalLight")]),s._v(" => 阳光")]),s._v(" "),t("li",[t("code",[s._v("PointLight")]),s._v(" => 灯泡")]),s._v(" "),t("li",[t("code",[s._v("RectAreaLight")]),s._v(" => 条形照明或明亮的窗户")]),s._v(" "),t("li",[t("code",[s._v("SpotLight")]),s._v(" => 聚光灯")])])]),s._v(" "),t("li",[t("p",[s._v("环境光, 这是一种廉价且可信间接照明方式")])])]),s._v(" "),t("p",[s._v("核心共四种直接光源类型")]),s._v(" "),t("p",[t("code",[s._v("MeshStandardMaterial")]),s._v(' 这是一种高质量/通用/物理精确的材料, 可以使用真实世界的物理方程对光做出反应. 也就是说它应该是几乎所有情况下的首选"标准"材料.')]),s._v(" "),t("h3",{attrs:{id:"三个基本转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三个基本转换"}},[s._v("#")]),s._v(" 三个基本转换")]),s._v(" "),t("p",[t("strong",[s._v("平移")]),s._v(", "),t("strong",[s._v("旋转")]),s._v("和"),t("strong",[s._v("缩放")]),s._v(". "),t("code",[s._v("Object3D")]),s._v(" 基类, 将派生自 "),t("code",[s._v("Object3D")]),s._v(" 的类称之为"),t("em",[s._v("场景对象")]),s._v(".")]),s._v(" "),t("h3",{attrs:{id:"坐标系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#坐标系"}},[s._v("#")]),s._v(" 坐标系")]),s._v(" "),t("p",[s._v("3D空间使用"),t("strong",[s._v("3D 笛卡尔坐标系")]),s._v("来描述, 由 "),t("code",[s._v("X")]),s._v(","),t("code",[s._v("Y")]),s._v(","),t("code",[s._v("Z")]),s._v("轴组成, 三轴交叉于点(0,0,0)(原点). 这里最重要的两个"),t("strong",[s._v("世界空间")]),s._v("和"),t("strong",[s._v("局部空间")])]),s._v(" "),t("p",[t("strong",[s._v("世界空间")]),s._v(": 当我们直接将一个对象添加到场景中, 然后平移, 缩放或旋转它时, 该对象将相对于世界空间移动--即相对于场景的中心.")]),s._v(" "),t("p",[t("strong",[s._v("局部空间")]),s._v(": 添加到场景中的每个对象都有一个局部坐标系")]),s._v(" "),t("p",[s._v("向量: (x,y,z)有序的数字列表称之为"),t("strong",[s._v("向量")]),s._v(", 因为有三个数字, 所以它是一个"),t("strong",[s._v("3D向量")])]),s._v(" "),t("p",[t("strong",[s._v("平移")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// translate one axis at a time")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("z "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// translate all three axis at once")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (0,0,0) -> (1,2,3)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("看到这里还是没有一个具象的认知, 下面来介绍坐标系相对屏幕的方向")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/WebGL/coordinate_system.svg",alt:"方向感"}})]),s._v(" "),t("p",[s._v("假设没有旋转相机, 以下方向成立:")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("方向具象化")]),s._v(" "),t("ul",[t("li",[s._v("X 轴正向指向屏幕 "),t("strong",[s._v("右侧")])]),s._v(" "),t("li",[s._v("Y 轴正向指向屏幕 "),t("strong",[s._v("上方")]),s._v(", 即屏幕顶部")]),s._v(" "),t("li",[s._v("Z 轴正向指向屏幕 "),t("strong",[s._v("外面")]),s._v(", 即指向屏幕前的你")])])]),s._v(" "),t("p",[s._v("当然, 也可以旋转相机, 这种情况下, 可以将降级位置作为默认视图, 并以此推断方向.")]),s._v(" "),t("p",[s._v("向量可以代表各种实物, 而不仅仅是平移. 向量的数据类型分为三类:")]),s._v(" "),t("ol",[t("li",[s._v("空间中的一个点")]),s._v(" "),t("li",[t("strong",[s._v("坐标系内的长度和方向")])]),s._v(" "),t("li",[s._v("没有更深的数学含义的数字列表")])]),s._v(" "),t("p",[t("strong",[s._v("缩放")]),s._v(":")]),s._v(" "),t("blockquote",[t("p",[s._v("并非所有对象都可以缩放. 例如, "),t("strong",[s._v("相机和灯光")]),s._v("(除了"),t("code",[s._v("RectAreaLight")]),s._v(")没有大小")])]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("均匀缩放")]),s._v(": 每个轴的缩放值相同")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("非均匀缩放")]),s._v(": 每个轴的缩放值不同")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("负比例值镜像对象")]),s._v(": 小于零的缩放值除了使对象变小或变大之外, 还会镜像对象.")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("统一缩放和镜像")]),s._v(": 要保持起缩放比例的同时镜像对象, 对三个轴使用相同的值, 但将其中一个设为负值.")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mesh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Mesh")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scale "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vector3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 缩放并在Y轴镜像")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])]),s._v(" "),t("p",[t("strong",[s._v("旋转")]),s._v(":")]),s._v(" "),t("p",[s._v("使用"),t("strong",[s._v("旋转")]),s._v("要更加小心, 主要是因为"),t("strong",[s._v("旋转顺序")]),s._v(", 这是不同于"),t("strong",[s._v("平移")]),s._v("或"),t("strong",[s._v("缩放")]),s._v(". three.js 使用两个数学类用于存储旋转数据. "),t("strong",[t("code",[s._v("欧拉角(Euler)")])])]),s._v(" "),t("p",[t("strong",[s._v("Euler")]),s._v("类")]),s._v(" "),t("p",[s._v("在 three.js 中, 创建一个新的场景对象时, 会自动创建一个 "),t("code",[s._v("Euler")]),s._v(" 实例并为其赋予默认值")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mesh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Mesh")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rotation "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Euler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("z "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// mesh.rotation.set(2, 2, 2)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("code",[s._v("Euler.order")]),s._v(" 来旋转顺序, 默认顺序是 "),t("code",[s._v("XYZ")])]),s._v(" "),t("p",[s._v("旋转单位是弧度, 通过"),t("code",[s._v(".degToRad")]),s._v("将读书转换为弧度")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" MathUtils "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'three'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" rads "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MathUtils"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("degToRad")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.57079... = π/2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("缺点:")]),s._v(" "),t("p",[s._v("在创建动画或进行设计旋转的数学时, 特别是我们不能将两个欧拉角相加(更著名的是存在一种叫"),t("code",[s._v("万向锁")]),s._v("的问题)")]),s._v(" "),t("p",[t("strong",[s._v("四元数Quaternions")]),s._v("类")]),s._v(" "),t("p",[s._v("比欧拉角更难使用, 所以还是推荐坚持使用更为简单的 "),t("code",[s._v("Euler")]),s._v("类")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mesh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Mesh")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rotation "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Euler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("quaternion "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Quaternion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("转换矩阵")])]),s._v(" "),t("p",[s._v("$$\\begin{pmatrix}")]),s._v(" "),t("p",[s._v("1 & 0 & 0 & 0 \\")]),s._v(" "),t("p",[s._v("0 & 1 & 0 & 0 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 1 & 0 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 0 & 1 \\")]),s._v(" "),t("p",[s._v("\\end{pmatrix}$$")]),s._v(" "),t("p",[s._v("四行四列表示是一个 "),t("code",[s._v("4x4")]),s._v("矩阵, three.js 中处理这种类型的数学对象称为 "),t("code",[s._v("Matrix4")]),s._v(", "),t("code",[s._v("3x3")]),s._v("矩阵则称为"),t("code",[s._v("Matrix3")]),s._v(", 当矩阵在**"),t("code",[s._v("主对角线")]),t("strong",[s._v("上全为1而其他地方都为0时, 称其为")]),t("code",[s._v("单位矩阵 I")]),s._v("**")]),s._v(" "),t("p",[t("strong",[s._v("局部矩阵")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mesh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Mesh")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("matrix "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Matrix4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("z "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("updateMatrix")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("平移")]),s._v("后存储在矩阵的前三行的最后一列中:")]),s._v(" "),t("p",[s._v("$$\\begin{pmatrix}")]),s._v(" "),t("p",[s._v("1 & 0 & 0 & 2 \\")]),s._v(" "),t("p",[s._v("0 & 1 & 0 & 4 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 1 & 6 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 0 & 1 \\")]),s._v(" "),t("p",[s._v("\\end{pmatrix}$$")]),s._v(" "),t("p",[t("strong",[s._v("缩放")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("mesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("z "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("updateMatrix")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("这时候缩放比例值存储在主对角线上")]),s._v(" "),t("p",[s._v("$$\\begin{pmatrix}")]),s._v(" "),t("p",[s._v("5 & 0 & 0 & 2 \\")]),s._v(" "),t("p",[s._v("0 & 7 & 0 & 4 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 9 & 6 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 0 & 1 \\")]),s._v(" "),t("p",[s._v("\\end{pmatrix}$$")]),s._v(" "),t("p",[s._v("公式表示则是:")]),s._v(" "),t("p",[s._v("$$\\begin{pmatrix}")]),s._v(" "),t("p",[s._v("Sx & 0 & 0 & Tx \\")]),s._v(" "),t("p",[s._v("0 & Sy & 0 & Ty \\")]),s._v(" "),t("p",[s._v("0 & 0 & Sz & Tz \\")]),s._v(" "),t("p",[s._v("0 & 0 & 0 & 1 \\")]),s._v(" "),t("p",[s._v("\\end{pmatrix}$$")]),s._v(" "),t("p",[s._v("重置位置和缩放")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("mesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("updateMatrix")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("尝试围绕 X 轴旋转 30°")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("mesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MathUtils"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("degToRad")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("updateMatrix")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("$$")]),s._v(" "),t("p",[s._v("\\begin{pmatrix}")]),s._v(" "),t("p",[s._v("1 & 0 & 0 & 0 \\")]),s._v(" "),t("p",[s._v("0 & 0.866... & 0.5... & 0 \\")]),s._v(" "),t("p",[s._v("0 & -0.5... & 0.866... & 0 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 0 & 1 \\")]),s._v(" "),t("p",[s._v("\\end{pmatrix}")]),s._v(" "),t("p",[s._v("$$")]),s._v(" "),t("p",[s._v("其中的一些数字可以做数学等式:")]),s._v(" "),t("p",[s._v("$$")]),s._v(" "),t("p",[s._v("\\begin{aligned}")]),s._v(" "),t("p",[s._v("& \\cos(30)=0.866...\\")]),s._v(" "),t("p",[s._v("& \\sin(30)=0.5\\")]),s._v(" "),t("p",[s._v("\\end{aligned}")]),s._v(" "),t("p",[s._v("$$")]),s._v(" "),t("p",[s._v("原生JS计算公式:")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("toRadians")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("deg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" deg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Math"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PI")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("180")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nMath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cos")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toRadians")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("实际上:")]),s._v(" "),t("p",[s._v("$$")]),s._v(" "),t("p",[s._v("X-Rotation=")]),s._v(" "),t("p",[s._v("\\begin{pmatrix}")]),s._v(" "),t("p",[s._v("1 & 0 & 0 & 0 \\")]),s._v(" "),t("p",[s._v("0 & cos(30) & sin(30) & 0 \\")]),s._v(" "),t("p",[s._v("0 & -sin(30) & cos(30) & 0 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 0 & 1 \\")]),s._v(" "),t("p",[s._v("\\end{pmatrix}")]),s._v(" "),t("p",[s._v("$$")]),s._v(" "),t("p",[s._v("总结各轴的旋转公式为:")]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("折叠")]),s._v(" "),t("p",[s._v("$$")]),s._v(" "),t("p",[s._v("X-Rotation=")]),s._v(" "),t("p",[s._v("\\begin{pmatrix}")]),s._v(" "),t("p",[s._v("1 & 0 & 0 & 0 \\")]),s._v(" "),t("p",[s._v("0 & cos(Rx) & sin(Rx) & 0 \\")]),s._v(" "),t("p",[s._v("0 & -sin(Rx) & cos(Rx) & 0 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 0 & 1 \\")]),s._v(" "),t("p",[s._v("\\end{pmatrix}\n$$")]),s._v(" "),t("p",[s._v("$$")]),s._v(" "),t("p",[s._v("Y-Rotation=")]),s._v(" "),t("p",[s._v("\\begin{pmatrix}")]),s._v(" "),t("p",[s._v("cos(Ry) & 0 & sin(Ry) & 0 \\")]),s._v(" "),t("p",[s._v("0 & 1 & 0 & 0 \\")]),s._v(" "),t("p",[s._v("-sin(Ry) & 0 & cos(Ry) & 0 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 0 & 1 \\")]),s._v(" "),t("p",[s._v("\\end{pmatrix}\n$$")]),s._v(" "),t("p",[s._v("$$")]),s._v(" "),t("p",[s._v("Z-Rotation=")]),s._v(" "),t("p",[s._v("\\begin{pmatrix}")]),s._v(" "),t("p",[s._v("cos(Rz) & -sin(Rz) & 0 & 0 \\")]),s._v(" "),t("p",[s._v("sin(Rz) & cos(Rz) & 0 & 0 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 1 & 0 \\")]),s._v(" "),t("p",[s._v("0 & 0 & 0 & 1 \\")]),s._v(" "),t("p",[s._v("\\end{pmatrix}")]),s._v(" "),t("p",[s._v("$$")])]),s._v(" "),t("h3",{attrs:{id:"纹理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#纹理"}},[s._v("#")]),s._v(" 纹理")]),s._v(" "),t("p",[t("strong",[s._v("UV映射")])]),s._v(" "),t("p",[s._v("将二维纹理映射到三维几何体的一种方法. 公式如下")]),s._v(" "),t("p",[s._v("$$")]),s._v(" "),t("p",[s._v("(u, v) -> (x, y, z)")]),s._v(" "),t("p",[s._v("$$")]),s._v(" "),t("p",[t("code",[s._v("(u,v)")]),s._v(" 表示纹理上的一个点, 而"),t("code",[s._v("(x,y,z)")]),s._v("表示几何体上的一个点, 在局部空间中定义. 从技术上讲, 几何体上的一个点称为定点"),t("code",[s._v("vertex")]),s._v(".")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/WebGL/geometry_uv_map.svg",alt:"uv映射示意图"}})]),s._v(" "),t("p",[s._v("如图:")]),s._v(" "),t("blockquote",[t("p",[s._v("请注意, 点(0.5,0.5)没有映射, 纹理的中心. 只有纹理的角落被映射到立方体的八个角上, 其余的点是从中'猜测'出来的. three.js 中几何体都内置了UV映射.")])]),s._v(" "),t("p",[s._v("$$")]),s._v(" "),t("p",[s._v("(0,1) -> (-1,1,1)")]),s._v(" "),t("p",[s._v("$$")])])}),[],!1,null,null,null);t.default=e.exports}}]);