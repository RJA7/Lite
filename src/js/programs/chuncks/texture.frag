precision highp float;

varying vec2 vTexCoord;
varying float vTexSlot;

uniform sampler2D uSamplers[maxTextureImageUnits];

void main() {
    int texSlot = int(vTexSlot + 0.5);

    for (int i = 0; i < maxTextureImageUnits; i++) {
        if (i == texSlot) {
            gl_FragColor = texture2D(uSamplers[i], vTexCoord);
            return;
        }
    }
}
