 
export default function addImage() {     
    const imageInput = document.getElementById('image-input');
    const imagePreview = document.getElementById('image-preview')

    imageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            imagePreview.src = event.target.result;
        });
        reader.readAsDataURL(file);
    })
}