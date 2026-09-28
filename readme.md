## Three.js 学习
`Vite + Vanilla JS + Three.js`
### 1、初始化项目
```
mkdir threejs-learning
cd threejs-learning
npm create vite@latest . -- --template vanilla
// 构建与启动
npm install
npm install three
npm run dev
```
### 2、目录结构
```
threejs-learning/
│
├── public/
│   ├── models/                 # 3D模型
│   ├── textures/               # 纹理图片
│   └── images/
│
├── src/
│   │
│   ├── 01-basic/
│   │   ├── 01-scene/
│   │   ├── 02-camera/
│   │   ├── 03-renderer/
│   │   └── 04-first-cube/
│   │
│   ├── 02-geometry/
│   │   ├── 01-box/
│   │   ├── 02-sphere/
│   │   ├── 03-plane/
│   │   └── 04-buffer-geometry/
│   │
│   ├── 03-material/
│   │   ├── 01-basic-material/
│   │   ├── 02-standard-material/
│   │   └── 03-physical-material/
│   │
│   ├── 04-transform/
│   │   ├── 01-position/
│   │   ├── 02-rotation/
│   │   └── 03-scale/
│   │
│   ├── 05-light/
│   │   ├── 01-ambient-light/
│   │   ├── 02-directional-light/
│   │   └── 03-point-light/
│   │
│   ├── 06-texture/
│   │
│   ├── 07-controls/
│   │
│   ├── 08-model/
│   │   ├── 01-gltf-loader/
│   │   └── 02-model-animation/
│   │
│   ├── 09-interaction/
│   │   └── 01-raycaster/
│   │
│   ├── 10-animation/
│   │
│   ├── 11-advanced/
│   │   ├── shader/
│   │   ├── particles/
│   │   └── postprocessing/
│   │
│   └── projects/
│       ├── 01-solar-system/
│       └── 02-ship-demo/
│
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```
### 3、每一课的内部结构
```
src/
└── 02-geometry/
    └── 01-box/
        ├── index.html
        ├── main.js
        └── README.md
```
`main.js 专门写可运行代码`
### 4、语法
