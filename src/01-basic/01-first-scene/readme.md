## 核心语法：
```
const camera = new THREE.PerspectiveCamera(
  fov,
  aspect,
  near,
  far
)
```
```
fov
垂直视场角，单位：度

aspect
宽高比
width / height

near
最近可见距离

far
最远可见距离
```
位置：
```
camera.position.x = 1
camera.position.y = 2
camera.position.z = 5
或者
camera.position.set(1, 2, 5)
修改投影参数
camera.updateProjectionMatrix()
```
