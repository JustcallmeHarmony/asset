export const addCurrentAsset = async (value) => {
    await axios.post('http://localhost:3002/current-asset', {
        price : Value,
    });

};