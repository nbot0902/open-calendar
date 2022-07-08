import Resizer from "react-image-file-resizer";

export const getResizedFile = ({
    file
}) => {
    return new Promise((resolve) => {
        return Resizer.imageFileResizer(
            file,
            300,
            300,
            'JPEG',
            100,
            0,
            (uri) => {
                resolve(uri)
            },
            'file'
        )
    })
}
export const getResizedBottomBannerFile = ({
    file
}) => {
    return new Promise((resolve) => {
        return Resizer.imageFileResizer(
            file,
            480,
            96,
            'JPEG',
            100,
            0,
            (uri) => {
                resolve(uri)
            },
            'file'
        )
    })
}
