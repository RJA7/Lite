attribute vec2 aPosition; // local vertex pos should be multiplied by model transform
attribute vec2 aTexCoord;
attribute vec3 aModelPosition; // sprite x y world pos
attribute float aTexSlot;
attribute vec4 aModelTransform; // 2x2 matrix

uniform mat4 uProjectionMatrix;

varying vec2 vTexCoord;
varying float vTexSlot;

void main() {
    mat2 modelTransform = mat2(aModelTransform);

    gl_Position = uProjectionMatrix * vec4(modelTransform * aPosition + aModelPosition.xy, aModelPosition.z, 1.0);
    vTexCoord = aTexCoord;
    vTexSlot = aTexSlot;
}
