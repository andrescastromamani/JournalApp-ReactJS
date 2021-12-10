import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
    cloud_name: 'drc9kyx6y',
    api_key: '725461141689389',
    api_secret: 'APoA-EurUj0j3zZa64gNYVrvXwc',
    secure: true
});
describe('File upload', () => {
    test('should to upload a file and return a url', async () => {
        const response = await fetch('https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg');
        const blob = await response.blob();
        const file = new File([blob], 'image.jpg');
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        //delete image by id
        const segmets = url.split('/');
        const idImage = segmets[segmets.length - 1].replace('.jpg', '');
        cloudinary.v2.api.delete_resources(idImage, {}, () => {
            done();
        });
    });

    test('should return one error', async () => {
        const file = new File([], 'image.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    })

});