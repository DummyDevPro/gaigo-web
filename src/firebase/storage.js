import { app } from './setup'
import { auth } from './auth'
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage'
import { saveToLocalStorage } from '@/bstorage';

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

function handleFileUpload(file, fileType, saveFileType, callback) {
    switch (fileType) {
        case 'image':
            uploadImage(file, fileType, saveFileType, callback)
            break;
        default:
            callback({ msg: 'Not supported file type.', 'myStatus': 'error' })
            break;
    }
}

async function handleFileDownloadListUp(callback) {
    let allImages = []

    // User login status check-up
    if (!auth.currentUser) {
        callback({ msg: 'User is not login.', 'myStatus': 'error' })
        return;
    }

    // Create a reference under which you want to list
    const rootFolderRef = ref(storage, `images/${auth.currentUser.uid}`);

    try {
        let listUpFolder = await listAll(rootFolderRef)
        listUpFolder.prefixes.forEach(async (folder) => {
            let items = await listAll(folder)
            items.items.forEach((file) => {
                getDownloadURL(file).then((dUrl) => {
                    allImages.push(dUrl)
                })
            })
        })
        callback({ 'myStatus': 'success', allImages: allImages })
    } catch (error) {
        callback({ ...error, 'myStatus': 'error' })
    }

    // await handleListAll(rootFolderRef, (res) => {
    //     let allImages = []
    //     if (res.myStatus === 'success') {
    //         res.allImagesRef.forEach(item => {
    //             getDownloadURL(item).then((res) => {
    //                 allImages.push(res)
    //             })
    //         });
    //         callback({ 'myStatus': 'success', allImages: allImages })
    //     } else {
    //         callback(res)
    //     }
    // });
}

// async function handleListAll(ref, callback) {
//     let tempArray = [];

//     async function recursive(ref) {
//         try {
//             let res = await listAll(ref)
//             res.prefixes.forEach((folderRef) => {
//                 console.log(folderRef);
//                 recursive(folderRef)
//             });

//             res.items.forEach((itemRef) => {
//                 tempArray.push(itemRef)
//             });

//         } catch (error) {
//             callback({ ...error, 'myStatus': 'error' })
//         } finally {
//             callback({ 'myStatus': 'success', allImagesRef: tempArray })
//         }
//     }

//     await recursive(ref)
// }

function downloadUrl(ref, callback) {
    getDownloadURL(ref).then((url) => {
        callback({ 'myStatus': 'success', fileUrl: url })
    }).catch((error) => {
        callback({ ...error, 'myStatus': 'error' })
    })
}

function uploadImage(file, fileType, saveFileType, callback) {
    // User login status check-up
    if (!auth.currentUser) {
        callback({ msg: 'User is not login.', 'myStatus': 'error' })
        return;
    }

    // Create a storage reference from our storage service
    const imgStorageRef = ref(storage, `images/${auth.currentUser.uid}/${saveFileType}/${Date.now() + file.name}`)

    uploadBytes(imgStorageRef, file).then((ss) => {
        downloadUrl(imgStorageRef, callback)
        // Image file read & write
        // const reader = new FileReader
        // reader.onload = e => {
        //     let storeObj = {}
        //     storeObj[`${saveFileType}-${fileType}`] = e.target.result
        //     saveToLocalStorage(storeObj)
        // }
        // reader.readAsDataURL(file)

        // callback({ 'myStatus': 'success', 'imageDataUrl': '' })
    }).catch((error) => {
        callback({ ...error, 'myStatus': 'error' })
    })
}

export {
    handleFileUpload,
    handleFileDownloadListUp
}