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