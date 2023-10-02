<template>
    <div class="profile-layout">
        <div class="profile-image">
            <div class="profile-image-preview" :style="{
                'background-color': 'gray',
                'background-image': previewImg == null ? `url(${require('../assets/img/person-default.png')})` : `url(${previewImg})`,
                'background-position': 'center',
                'background-size': 'cover',
                'background-repeat': 'no-repeat'
            }">
                <img @click="handleSelectFile" src="../assets/img/camera-fill.svg" alt="" class="btn-camera-img">
            </div>
            <div class="image-choose-upload">
                <input type="file" @change="selectFile" accept="image/*" ref="fileInput" hidden>
                <input type="button" class="btn btn-success" value="保存" @click="uploadProfileImage"
                    :disabled="!selectedFile">
            </div>
        </div>

        <!-- <hr> -->

        <nav class="bg-white">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <div class="d-none d-sm-block col-sm-2"></div>
                <button class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                    type="button" role="tab" aria-controls="nav-profile" aria-selected="true">
                    Profile
                </button>
                <button @click="loadAllImagesBtnClick" class="nav-link" id="nav-gallery-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-gallery" type="button" role="tab" aria-controls="nav-gallery"
                    aria-selected="false">
                    Gallery
                </button>
                <!-- <button class="nav-link" id="nav-friend-tab" data-bs-toggle="tab" data-bs-target="#nav-friend" type="button"
                    role="tab" aria-controls="nav-friend" aria-selected="false">
                    Friends
                </button> -->
            </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div class="d-flex flex-column align-items-center my-5">
                    <div class="col-10 col-sm-8 col-md-6 mb-3">
                        <label for="userName" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="userName" v-model="userName">
                    </div>
                    <div class="col-10 col-sm-8 col-md-6 mb-3">
                        <label for="emailAddress" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="emailAddress" v-model="userEmail" disabled>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="nav-gallery" role="tabpanel" aria-labelledby="nav-gallery-tab">
                <div class="gallery">
                    <div v-for="item in galleryData">
                        <!-- {{ item }} -->
                        <img :src="item" alt="">
                    </div>
                </div>
            </div>

            <!-- <div class="tab-pane fade" id="nav-friend" role="tabpanel" aria-labelledby="nav-friend-tab">
                ...
            </div> -->
        </div>
    </div>
</template>
<script>
import personIcon from "@/assets/img/no-preview.png"
export default {
    data() {
        return {
            'personIcon': personIcon,
            // profile image
            'selectedFile': null,
            'previewImg': null,

            // allImages
            galleryData: new Set(),

            // other info
            userName: '',
            userEmail: '',
        }
    },
    methods: {
        selectFile(event) {
            if (event.target.files && event.target.files[0]) {

                // Image file read & write
                const reader = new FileReader
                reader.onload = e => {
                    this.previewImg = e.target.result
                }
                reader.readAsDataURL(event.target.files[0])

                this.selectedFile = event.target.files[0]
            }
        },
        uploadProfileImage() {
            if (this.selectedFile) {
                this.$store.dispatch('fileUpload', {
                    file: this.selectedFile,
                    fileType: 'image',
                    saveFileFolderName: 'profile',
                    docId: this.getFirebaseUserInfo.uid
                })

                this.selectedFile = null
                // TODO: get the state of finish file upload
                setTimeout(() => {
                    this.loadAllImagesBtnClick()
                }, 1000);
            }
        },
        handleSelectFile() {
            this.$refs.fileInput.click()
        },
        loadAllImagesBtnClick() {
            console.log('----');
            this.$store.dispatch('getAllImages')
        }
    },
    computed: {
        getFirebaseUserInfo() {
            return this.$store.getters.acquireUserInfo
        },
        loadUserProfile: {
            get() {
                return this.$store.getters.acquireUserProfileData('user-profile')
            }
        },
        loadAllImages() {
            return this.$store.getters.acquireAllImages
        }
    },
    watch: {
        loadUserProfile: {
            immediate: true,
            deep: true,
            handler(newVal, _) {
                if (newVal) {
                    this.userName = newVal.userName
                    // this.userEmail = newVal.userEmail
                    this.userEmail = this.getFirebaseUserInfo.emailAddress

                    if (!this.previewImg || this.previewImg !== newVal.profileImageUrl) {
                        this.previewImg = newVal.profileImageUrl
                    }
                }
            }
        },
        loadAllImages(newVal, oldVal) {
            console.log('+++');
            console.log(newVal);
            setTimeout(() => {
                console.log('Delay');
                if (Array.isArray(newVal)) {
                    this.galleryData.clear()
                    const sort2 = [...newVal].sort()
                    for (let i = sort2.length - 1; i >= 0; i--) {
                        this.galleryData.add(sort2[i])
                    }
                }
            }, 1000);
        }
        // loadAllImages: {
        //     immediate: true,
        //     deep: true,
        //     async handler(newVal, __) {
        // setTimeout(() => {
        //     if (Array.isArray(newVal)) {
        //         this.galleryData.clear()
        //         const sort2 = [...newVal].sort()
        //         for (let i = sort2.length - 1; i >= 0; i--) {
        //             this.galleryData.add(sort2[i])
        //         }
        //     }
        // }, 1000);
        //     },
        // }
    },
    mounted() {

        // TODO:Next topic
        // this.$store.dispatch('getProfileImageDataUrl')
        // this.previewImg = this.$store.getters.acquireProfileImageFromSession

        // Load user profile data from firebase after 1s of page mounted
        setTimeout(() => {
            this.$store.dispatch('getCollectionData', {
                firstAccessCode: 'profile',
                method: 'get',
                collectionKey: 'account',
                docId: this.getFirebaseUserInfo.uid
            })

            this.$store.dispatch('getAllImages')
        }, 1000);
    },
}
</script>
<style scoped>
.profile-image-preview {
    position: relative;
    margin: 0 auto;
    width: 180px;
    height: 180px;
    /* background-color: yellow; */
    border-radius: 50%;
    /* overflow: hidden; */
    border: 2px solid var(--color-g-web);
    /* box-shadow: 2px 2px 4px black, -2px -2px 4px black; */
}

.btn-camera-img {
    position: absolute;
    right: 0;
    bottom: 5%;
    padding: 0 .25rem;
    background-color: white;
    border: 2px solid var(--color-g-web);
    width: 50px;
    height: 50px;
    border-radius: 25%;
    cursor: pointer;
}

.btn-camera-img:hover {
    background-color: var(--color-pale-g-web);
}

.image-choose-upload {
    display: flex;
    justify-content: center;
    gap: .5rem;
}

.image-choose-upload>* {
    padding: .125rem .5rem;
    font-size: 1.125rem;
    border: none;
}

.profile-image-preview:hover .image-choose-upload {
    top: 50%;
}

.profile-layout {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.profile-image {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.nav-tabs {
    box-sizing: border-box !important;
    overflow: hidden !important;
}

.nav-tabs .nav-link {
    color: var(--color-black);
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    /* border: none; */
    font-weight: bold;
    color: var(--color-g-web);
    border-bottom: 4px solid var(--color-g-web);
}

.gallery {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
}

.gallery>div {
    flex: 0 0 calc((100% - 1.5rem) / 4);
}

.gallery>div>img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}
</style>