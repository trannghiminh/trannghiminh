document.addEventListener('DOMContentLoaded', () => {
    const layerTypeSelect = document.getElementById('layer-type');
    const layerOptionsContainer = document.getElementById('layer-options');

    layerTypeSelect.addEventListener('change', updateLayerOptions);

    function updateLayerOptions() {
        const layerType = layerTypeSelect.value;
        layerOptionsContainer.innerHTML = '';

        for (let i = 1; i <= layerType; i++) {
            const label = document.createElement('label');
            label.textContent = `Loại giấy lớp ${i}:`;
            const select = document.createElement('select');
            select.name = `layer-${i}`;
            select.innerHTML = `
                <option value="paper1">Giấy loại 1</option>
                <option value="paper2">Giấy loại 2</option>
                <option value="paper3">Giấy loại 3</option>
            `;
            layerOptionsContainer.appendChild(label);
            layerOptionsContainer.appendChild(select);
        }
    }

    updateLayerOptions();
});

function calculatePrice() {
    const layerType = document.getElementById('layer-type').value;
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    const area = (width * height) / 10000; // Convert cm^2 to m^2

    let pricePerSquareMeter = 0;
    for (let i = 1; i <= layerType; i++) {
        const layerSelect = document.querySelector(`select[name="layer-${i}"]`);
        const paperType = layerSelect.value;
        switch (paperType) {
            case 'paper1':
                pricePerSquareMeter += 50000; // Example price per m^2 for paper 1
                break;
            case 'paper2':
                pricePerSquareMeter += 70000; // Example price per m^2 for paper 2
                break;
            case 'paper3':
                pricePerSquareMeter += 90000; // Example price per m^2 for paper 3
                break;
        }
    }

    const totalPrice = pricePerSquareMeter * area;
    document.getElementById('price-display').textContent = `Giá: ${totalPrice.toFixed(2)} VND`;
}
