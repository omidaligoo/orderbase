import {Type} from "../../enumeration/file/type.enum";
import {Image} from "../file/image";
import {UploadStatus} from "../../enumeration/file/upload-status.enum";
export class File {
    fileType:Type;
    imageModel:Image;
    group:string;
    fileName:string;
    fileContentType:string;
    sizeInByte:number;
    uploadStatus:UploadStatus;
    parentId:string;
    lastModifiedDate:Date;
}
