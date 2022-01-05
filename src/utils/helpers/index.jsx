//Component chuyên về logic js
export const useConvertAudioBase64 = async(props) => {
    const blobToBase64 = (blob) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        })
    const toBase64 = await blobToBase64(props).then((data) => data);
    return toBase64?.toString().slice(toBase64?.toString().indexOf(",") + 1);
}