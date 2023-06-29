import { ReactSVG } from 'react-svg';
import upload from '@/icons/main/upload.svg';
import help from '@/icons/main/help-circle.svg';
import classes from './styles.module.css';
import { typeMapping, uploadAssets } from '@/helpers/assets/upload';

export interface FileUploaderProps {
    datasetId: string;
    datasetType: string;
}

export default function FileUploader(props: FileUploaderProps) {
    const typeData = typeMapping[props.datasetType] ?? typeMapping.other;

    return (
        <div className={ classes.uploadDataWrapper }>
            <ReactSVG className={ classes.uploadDataIcon } src={ upload.src }/>

            <div className={ classes.uploadDataInfo }>
                <p className={ classes.uploadDataDesc }>Drag and drop or select file to upload</p>

                <small>{ typeData.extHints.join(', ') }</small>

                <small className={ classes.uploadDataSubDesc }>
                    Stored on file system
                    <button className={ classes.helpButton }>
                        <ReactSVG src={ help.src }/>
                    </button>
                </small>
            </div>

            <input
                type="file"
                accept={ typeData.accept }
                multiple={ true }
                className={ classes.fileInput }
                onChange={ function (e) {
                    const files = e.currentTarget.files ?? [];

                    if (files.length > 0) {
                        uploadAssets(props.datasetId, Array.from(files), {
                            endpoint: typeData.endpoint,
                            fieldName: typeData.fieldName,
                        }).then();
                    }

                    e.currentTarget.value = '';
                } }
            />
        </div>
    );
}
