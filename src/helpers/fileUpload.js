
export const fileUpload = async (file) => {
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/drc9kyx6y/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'journal-reactjs');
    formData.append('file', file);
    try {
        const response = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            const data = await response.json();
            return data.secure_url;
        }else{
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.log(error);
    }
}
