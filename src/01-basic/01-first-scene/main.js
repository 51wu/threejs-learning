import * as THREE from 'three'
 
// 创建场景：3D世界
const scene = new THREE.Scene()

// 创建相机：观察这个世界
// Camera 不负责把画面画出来。
// PerspectiveCamera(视角(垂直方向视野角度), 宽高比, 近裁剪面(相机允许渲染的最近距离), 远裁剪面(距离相机超过 1000 的东西不显示))
// 从哪里看？
// 看哪个方向？
// 视野有多宽？
// 多近的东西能看到？
// 多远的东西能看到？
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

// 设置相机位置：离物体远一点
camera.position.z = 5

// 创建渲染器：把画面渲染出来
const renderer = new THREE.WebGLRenderer({
    antialias: true
})

// 设置渲染器的尺寸：和浏览器窗口一样大
renderer.setSize(
  window.innerWidth,
  window.innerHeight
)

// 把渲染器的 dom 元素添加到 body 上
document.body.appendChild(
  renderer.domElement
)

// 创建几何体：物体的形状
// BoxGeometry       → 盒子 / 长方体
// SphereGeometry    → 球体
// PlaneGeometry     → 平面
// CylinderGeometry  → 圆柱
// ConeGeometry      → 圆锥
// CircleGeometry    → 圆形
// TorusGeometry     → 圆环
const geometry = new THREE.SphereGeometry(
    10,  // 半径
    32,  // 水平分段数
    32   // 垂直分段数
)


console.log(geometry)

const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
    opacity: 1,
    side: THREE.DoubleSide
})

// 创建网格：物体的形状 + 物体的材质
const cube = new THREE.Mesh(geometry, material)

// 把网格添加到场景中
scene.add(cube)

// 渲染函数：把场景和相机渲染出来
function render() {
    // 渲染器把场景和相机渲染出来
    renderer.render(scene, camera)

    // 下一帧继续渲染
    requestAnimationFrame(render)
}

// 开始渲染
render()    