    <template>
        <div class="container">
            <label class="upload-label">
                📂 Upload ton image
                <input type="file" @change="handleUpload" accept="image/*" hidden />
            </label>

            <div class="slider-wrapper">
                <label>🎯 Tolérance couleur : {{ tolerance }}</label>
                <input type="range" v-model="tolerance" min="10" max="150" step="1" />
            </div>

            <canvas ref="canvas" style="display: none"></canvas>

            <svg v-if="svgPath" :viewBox="`0 0 ${svgSize.width} ${svgSize.height}`" xmlns="http://www.w3.org/2000/svg"
                class="svg-display">
                <path :d="svgPath" stroke="red" fill="none" stroke-width="10" />
            </svg>
        </div>
    </template>

<script>
export default {
    data() {
        return {
            canvas: null,
            svgPath: '',
            svgSize: { width: 0, height: 0 },
            tolerance: 104,
            lastImage: null,
            targetColor: { r: 255, g: 69, b: 0 },


        };
    },
    methods: {
        handleUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            const img = new Image();
            const reader = new FileReader();

            reader.onload = (e) => {
                img.src = e.target.result;
            };

            img.onload = () => {
                this.lastImage = img;
                this.processImage(img);
            };

            reader.readAsDataURL(file);
        },
        colorDistance(r1, g1, b1, r2, g2, b2) {
            return Math.sqrt(
                (r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2
            );
        },
        processImage(img) {
            const c = this.$refs.canvas;
            const ctx = c.getContext('2d');

            c.width = img.width;
            c.height = img.height;
            this.svgSize = { width: img.width, height: img.height };

            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, c.width, c.height);
            const data = imageData.data;

            const points = [];

            // Récupérer les points de couleur cible
            for (let y = 0; y < c.height; y++) {
                for (let x = 0; x < c.width; x++) {
                    const i = (y * c.width + x) * 4;
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];

                    const dist = this.colorDistance(r, g, b, this.targetColor.r, this.targetColor.g, this.targetColor.b);

                    // Si la couleur est proche de la couleur cible, on garde le point
                    if (dist < this.tolerance) {
                        points.push([x, y]);
                    }
                }
            }

            // Ordonnancer les points en fonction de la proximité (plus proche voisin)
            const orderedPoints = this.orderPointsByNearest(points);
            // Créer un path simple entre les points
            this.svgPath = this.createLinePath(orderedPoints);
        },
        orderPointsByNearest(points) {
            if (points.length === 0) return [];

            const ordered = [points[0]];
            const remaining = points.slice(1);

            while (remaining.length > 0) {
                const last = ordered[ordered.length - 1];
                let nearestIndex = 0;
                let minDist = this.distance(last, remaining[0]);

                for (let i = 1; i < remaining.length; i++) {
                    const dist = this.distance(last, remaining[i]);
                    if (dist < minDist) {
                        minDist = dist;
                        nearestIndex = i;
                    }
                }

                ordered.push(remaining[nearestIndex]);
                remaining.splice(nearestIndex, 1);
            }

            return ordered;
        },
        distance([x1, y1], [x2, y2]) {
            return Math.hypot(x2 - x1, y2 - y1);
        },
        createLinePath(points) {
            if (points.length < 2) return '';

            let path = `M${points[0][0]},${points[0][1]}`;
            for (let i = 1; i < points.length; i++) {
                path += ` L${points[i][0]},${points[i][1]}`;
            }

            return path;
        },
    },
    watch: {
        tolerance(newValue) {
            if (this.lastImage) {
                this.processImage(this.lastImage);
            }
        },
    },
};
</script>

<style scoped>
.container {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 50vh;
    width: 100%;
    margin-top: 20vh;
}

.upload-label {
    background-color: #f5f5f5;
    padding: 1rem 2rem;
    border-radius: 8px;
    border: 2px dashed #ccc;
    cursor: pointer;
    margin-bottom: 1rem;
    font-weight: bold;
    transition: 0.2s ease;
}

.upload-label:hover {
    background-color: #eaeaea;
}

.slider-wrapper {
    margin-bottom: 1rem;
    width: 300px;
    text-align: center;
}

.svg-display {
    max-width: 100%;
    border: 1px solid #ccc;
    background: white;
}
</style>
