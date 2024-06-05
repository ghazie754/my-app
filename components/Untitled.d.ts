   

WEBGL // p5 WEBGL rendering mode.
createCanvas(w, h, renderer) // Creates a 3D canvas (if renderer is WEBGL).

// Primitives
plane(width, height) // Creates a plane in 3D space. Equivalent to rect() in the default rendering mode.
plane(width, height, detailX, detailY) // Creates a plane in 3D space with the number of triangle subdivisions specified.
box(width) // Creates a cube in 3D space.
box(width, height, depth) // Creates a cuboid in 3D space.
box(width, height, depth, detailX, detailY) // Creates a cuboid in 3D space with triangle subdivisions.
sphere(radius) // Creates a sphere in 3D space.
sphere(radius, detailX, detailY) // Creates a sphere in 3D space with the number of triangle subdivisions specified.
cylinder(radius, height) // Creates a cylinder in 3D space.
cylinder(radius, height, detailX, detailY) // Creates a cylinder in 3D space with the number of segments specified.
cone(radius, height) // Creates a cone in 3D space.
cone(radius, height, detailX, detailY) // Creates a cone in 3D space with the number of segments specified.
ellipsoid(radiusx, radiusy, radiusz) // Creates an ellipsoid in 3D space.
ellipsoid(radiusx, radiusy, radiusz, detailX, detailY) // Creates an ellipsoid in 3D space with the number of triangle subdivisions specified.
torus(radius, tubeRadius) // Creates a torus in 3D space.
torus(radius, tubeRadius, detailX, detailY) // Creates a torus in 3D space with the number of triangle subdivisions specified.

// Models
loadModel(path) // Loads a model.
loadModel(path, successCallback) // Loads a model.
loadModel(path, successCallback, failureCallback) // Loads a model.
model(model) // Draws a model

// Transformations
translate(x, y, z) // Moves the origin by x,y,z.
rotateX(rad) // Rotates the view along the x-axis.
rotateY(rad) // Rotates the view along the y-axis.
rotateZ(rad) // Rotates the view along the z-axis.
rotate(angle, axis) // Rotates the view along the axis specified.

// Camera
camera(x, y, z, centerX, centerY, centerZ, upX, upY, upZ) // Moves the camera to the points specified.
perspective(fov, aspect, near, far) // Changes the perspective to the numbers specified.
ortho() // Changes the perspective to an ortho perspective with the numbers specified.
ortho(left, right, bottom, top, near, far) // Changes the perspective to an ortho perspective with the numbers specified.

// Lights
ambientLight(v1, v2, v3) // Adds an ambient light (RGB or HSB color).
ambientLight(v1, v2, v3, alpha) // Adds an ambient light (RGB or HSB color).
ambientLight(value) // Adds an ambient light (color string).
ambientLight(value, alpha) // Adds an ambient light (color string).
ambientLight(values) // Adds an ambient light (color array).
ambientLight(color) // Adds an ambient light (color object).
directionalLight(v1, v2, v3, x, y, z) // Adds a directional light (RGB or HSB color).
directionalLight(v1, v2, v3, direction) // Adds a directional light (RGB or HSB color).
directionalLight(color, x, y, z) // Adds a directional light (color object).
directionalLight(color, direction) // Adds a directional light (color object).
pointLight(v1, v2, v3, position) // Adds a point light (RGB or HSB color).
pointLight(v1, v2, v3, x, y, z) // Adds a point light (RGB or HSB color).
pointLight(color, x, y, z) // Adds a point light (color object).
pointLight(color, position) // Adds a point light (color object).

// Material
loadShader(vertFilename, fragFilename) // Loads a shader.
shader(s) // Applys a shader.
normalMaterial() // Maps normal vectors to RGB colors.
texture(tex) // Textures shapes in 3D shapes with the specified image.
ambientMaterial(v1) // Adds an ambient material (grayscale).
ambientMaterial(v1, v2, v3) // Adds an ambient material (RGB or HSB color).
ambientMaterial(v1, v2, v3, a) // Adds an ambient material (RGB or HSB color).
ambientMaterial(color) // Adds an ambient material (color object).
specularMaterial(v1) // Adds a specular material (grayscale).
specularMaterial(v1, v2, v3) // Adds an specular material (RGB or HSB color).
specularMaterial(v1, v2, v3, a) // Adds an specular material (RGB or HSB color).
specularMaterial(color) // Adds an specular material (color object).
