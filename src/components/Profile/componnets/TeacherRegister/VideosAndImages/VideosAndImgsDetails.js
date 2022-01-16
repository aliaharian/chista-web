import React, { useEffect, useRef, useState } from 'react';
import Style from '../../../../../assets/stylesheet/profile/teacherRegister.module.scss';
import KitStyle from '../../../../Kit/Style/kits.module.scss';
import Drag from '../../../../../assets/images/profile/registerOstad/drag.svg';
import { convertNumberToLetter } from '../../../../../utilities/convertToArabicNum';
import DeleteVideo from '../../../../../assets/images/profile/registerOstad/deleteVideo.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import webUploaderWorker from '../../../../../workers/FileUploader.worker';
import ProgressBar from '../../../../Kit/Loaders/ProgressBar';
import CloseModal from '../../../../../assets/images/profile/registerOstad/closeModal.svg';
import clsx from 'clsx';
function VideosAndImgsDetails({
    video,
    setVideo,
    imgsUploaded,
    setImgUploaded,  
    ...props
}) {

    const [uploadVideo, setUploadVideo] = useState(null)
    const [uploadImg, setUploadImg] = useState(null)
    const uploadWorkerInstanceRefImg = useRef(null);
    const uploadWorkerInstanceRefVideo = useRef(null);
    const attachImgRef = useRef(null);
    const attachVideoRef = useRef(null);
    const [uploadImgWorker, setUploadImgWorker] = useState();
    const [uploadVideoWorker, setUploadVideoWorker] = useState()
    const [uploadingVideoNum, setUploadingVideoNum] = useState(0)
    const [uploadingImgNum, setUploadingImgNum] = useState(0)
    const [imgSizeError, setImgSizeError] = useState(false)
    const [videoSizeError, setVideoSizeError] = useState(false)

    const handleGetImg = () => {
        const { files } = attachImgRef.current;
        if (files.length === 0) {
            attachImgRef.current.value = '';
            return;
        };
        if(files.length + imgsUploaded.length <= 3) {
            const fileType = files[0]['type'];
            const validImageTypes = ['image/svg+xml', 'image/jpg', 'image/jpeg', 'image/png'];
            if (!validImageTypes.includes(fileType)) {
            } else {
                handleAttachPhotoComplete(files);
            }
        }
    }

    const handleAttachPhotoComplete = async (files) => {

        const fileSize = files[0]['size'];
        Array.from(files).forEach(async file => {
            if (fileSize > process.env.REACT_APP_IMAGE_UPLOAD_SIZE) {
                setImgSizeError(true);
                attachImgRef.current.value = '';
                return;
            }
            setUploadImg(files[0])
            setUploadImgWorker(uploadWorkerInstanceRefImg.current);
        });
    }

    const handleAttachVideoComplete = async (files) => {

        const fileSize = files[0]['size'];
        Array.from(files).forEach(async file => {
            if (fileSize > process.env.REACT_APP_VIDEO_UPLOAD_SIZE) {
                setVideoSizeError(true);
                attachVideoRef.current.value = '';
                return;
            }
            setUploadVideo(files[0])
            setUploadVideoWorker(uploadWorkerInstanceRefVideo.current);
        });
    }


    const handleGetVideo = () => {
        const { files } = attachVideoRef.current;
        if (files.length === 0) {
            attachVideoRef.current.value = '';
            return;
        };
        const fileType = files[0]['type'];
        const validVideoTypes = ['video/mp4'];
        if (!validVideoTypes.includes(fileType)) {
        } else {
            handleAttachVideoComplete(files);
        }
    }

    const deleteImgInArray = (index) => {
        let arr = [...imgsUploaded]
        arr.splice(index, 1)
        setImgUploaded([...arr])
    }

    useEffect(() => {
        uploadWorkerInstanceRefImg.current = new webUploaderWorker();
        uploadWorkerInstanceRefImg.current.onmessage = async (event) => {
            const { data } = event;
            if (data.response) {
                await setUploadImg(null)
                await setUploadingImgNum(0)
                await setImgUploaded([...imgsUploaded, data.response])
            } else if (data.progress) {
                setUploadingImgNum(data.progress)
                // imageProgressRef.current = data.progress;
            } else {
                setUploadImg(null)
                setUploadImgWorker(null);
            }
        };
        uploadWorkerInstanceRefImg.current.onerror = async (event) => {

            setUploadingVideoNum(0)
            setUploadImg(null)
            setUploadImgWorker(null);
        };

        // return () => {
        //   uploadWorkerInstanceRef.current.terminate();
        // }
    }, [uploadImgWorker])

    useEffect(() => {
        uploadWorkerInstanceRefVideo.current = new webUploaderWorker();
        uploadWorkerInstanceRefVideo.current.onmessage = async (event) => {
            const { data } = event;
            if (data.response) {
                await setUploadVideo(null)
                await setUploadingVideoNum(0)
                await setVideo(data.response)
            } else if (data.progress) {
                setUploadingVideoNum(data.progress)
                // imageProgressRef.current = data.progress;
            } else {
                setUploadVideo(null)
                setUploadVideoWorker(null);
            }
        };
        uploadWorkerInstanceRefVideo.current.onerror = async (event) => {

            setUploadingVideoNum(0)
            setUploadVideo(null)
            setUploadVideoWorker(null);
        };

        // return () => {
        //   uploadWorkerInstanceRef.current.terminate();
        // }
    }, [uploadVideoWorker])

    useEffect(() => {
        if (uploadImgWorker) {
            const { files } = attachImgRef.current;
            uploadImgWorker.postMessage({ file: files[0], id: null, baseUrl: process.env.REACT_APP_CHAT_BASE_URL});
            attachImgRef.current.value = '';
        }
    }, [uploadImgWorker]);

    useEffect(() => {
        if (uploadVideoWorker) {
            const { files } = attachVideoRef.current;
            uploadVideoWorker.postMessage({ file: files[0], id: null, baseUrl: process.env.REACT_APP_CHAT_BASE_URL});
            attachVideoRef.current.value = '';
        }
    }, [uploadVideoWorker])

    const getDocumentSrc = (fileId, mimeType) => {
        return `${process.env.REACT_APP_CHAT_BASE_URL}filePart/page/${fileId}.${mimeType.replace('image/', '')}`;
    }

    const cancelUploading = (type) => {
        if(type == 'video') {
            uploadWorkerInstanceRefVideo.current.terminate(); 
            setUploadVideo(null); 
            setUploadVideoWorker(null); 
            setUploadingVideoNum(0)
        }
        else {
            uploadWorkerInstanceRefVideo.current.terminate(); 
            setUploadImg(null); 
            setUploadImgWorker(null); 
            setUploadingImgNum(0)
        }
    }
    return (
        <div
        className={Style.videosAndImagesDetailsContainer}
        >
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است
            </p>
            <div className={Style.nameOfUploadContainer}>
                <span>
                    ویدیو معرفی
                </span>
                {videoSizeError ? 
                    <p>
                        حجم تصویر حداکثر ۵ مگابایت باشد
                    </p> 
                : null}
            </div>
            
            <div className={Style.uploadVideoContainer}>
                {video == null ?
                    <React.Fragment>
                        <input 
                        ref={attachVideoRef}
                        onChange={(e) => handleGetVideo(e)} 
                        type={'file'} 
                        name={'video'} 
                        id={'video'} 
                        accept={'video/mp4'}
                        />
                        {uploadVideo == null ?
                            <label for={'video'}>
                                <div className={videoSizeError ? KitStyle.errorBorder : null}>
                                    <img src={Drag} alt={'attach'}/>
                                    <p>
                                        برای آپلود، ویدئو را بکشید و در اینجا رها کنید
                                    </p>
                                    <p>
                                        یا جهت <span>انتخاب فایل</span> کلیک کنید(حداکثر ۵mb)
                                    </p>
                                </div>
                            </label>
                        :
                            <div className={Style.progressBarParent}>
                                <img src={Drag} alt={'attach'}/>
                                <div className={Style.progressBarDetails}>
                                    <p>
                                        {convertNumberToLetter(Math.round(uploadingVideoNum))}%
                                    </p>
                                    <p>
                                        {uploadVideo.name}
                                    </p>
                                </div>
                                <div className={Style.progressBarBody}>
                                    <img src={CloseModal} alt={'cancel'} onClick={cancelUploading}/>
                                    <ProgressBar
                                    value={uploadingVideoNum}
                                    />
                                </div>
                            </div>
                        }
                    </React.Fragment>
                : 
                    <div className={Style.uploadedVideoContainer}>
                        <div>
                            <p>
                                {convertNumberToLetter(Math.round(video.size/(1024*1024)))}Mb
                            </p>
                            <span>-</span>
                            <img onClick={() => setVideo(null)} src={DeleteVideo} alt={'delete'}/>
                        </div>
                        <video width={'100%'} height={'100%'} controls>
                            <source src={video.fileOnServer} type="video/mp4"/>
                        </video>
                    </div>
                }
            </div>
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است
            </p>
            {/* <div className={Style.nameOfUploadContainer}>
                <span>
                    تصاویر من
                </span>
                {imgSizeError ? 
                    <p>
                        حجم تصویر حداکثر ۱ مگابایت باشد
                    </p> 
                : null}
            </div>
            
            <div className={Style.uploadImgContainer}>
                <input 
                onChange={(e) => handleGetImg(e)} 
                ref={attachImgRef}
                type={'file'} 
                name={'img'} 
                id={'img'}
                accept={'image/png, image/gif, image/jpeg'}/>
                {uploadImg == null ? 
                    <label for={'img'}>
                        <div className={imgSizeError ? KitStyle.errorBorder : null}>
                            <img src={Drag} alt={'attach'}/>
                            <p>
                                برای آپلود، تصویر را بکشید و در اینجا رها کنید
                            </p>
                            <p>
                                یا جهت <span>انتخاب فایل</span> کلیک کنید(حداکثر ۱mb)
                            </p>
                        </div>
                    </label>
                :
                    <div className={Style.progressBarParent}>
                        <img src={Drag} alt={'attach'}/>
                        <div className={Style.progressBarDetails}>
                            <p>
                                {convertNumberToLetter(Math.round(uploadingImgNum))}%
                            </p>
                            <p>
                                {uploadImg.name}
                            </p>
                        </div>
                        <div className={Style.progressBarBody}>
                            <img src={CloseModal} alt={'cancel'} onClick={cancelUploading}/>
                            <ProgressBar
                            value={uploadingImgNum}
                            />
                        </div>
                    </div>
                }
            </div> */}
            {/* {imgsUploaded.length > 0 && imgsUploaded.map((item, index) => (
                <div className={Style.imgToUploadContainer}>
                    <div>
                        <p>
                            {convertNumberToLetter(Math.round(item.size/(1024*1024)))}Mb
                        </p>
                        <span>-</span>
                        <img onClick={() => deleteImgInArray(index)} src={DeleteVideo} alt={'delete'}/>
                    </div>
                    <img src={getDocumentSrc(item.hashCode, item.mimeType)} alt={'imgs'}/>
                </div>
            ))} */}
            
        </div>
    )
}

export default VideosAndImgsDetails;