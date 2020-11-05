import axios from 'axios'

const getStaticData = async (collectionName, dataName) => {
    const data = await axios
                        .get(`http://localhost:3002/static-data/${collectionName}/${dataName}`)
                        .then(res => res)
                        .catch(err => err)
    
    return data
}

export default {
    getStaticData
}