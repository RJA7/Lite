precision highp float;

varying vec2 vTexCoord;
varying float vTexSlot;

uniform sampler2D uSamplers[8];

void main() {
    int texSlot = int(vTexSlot + 0.5);

    for (int i = 0; i < 8; i++) {
        if (i == texSlot) {
            gl_FragColor = texture2D(uSamplers[i], vTexCoord);
            return;
        }
    }
}
