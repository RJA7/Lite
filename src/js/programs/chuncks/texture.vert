attribute vec4 aPos; // local vertex pos should be multiplied by model transform + tex coords
attribute vec4 aModelPos; // sprite x y z world pos +  w = tex slot
attribute vec4 aModelTransform; // 2x2 matrix

uniform mat4 uProjectionMatrix;

varying vec2 vTexCoord;
varying float vTexSlot;

void main() {
    mat2 modelTransform = mat2(aModelTransform);

    gl_Position = uProjectionMatrix * vec4(modelTransform * aPos.xy + aModelPos.xy, aModelPos.z, 1.0);
    vTexCoord = aPos.zw;
    vTexSlot = aModelPos.w;
}
