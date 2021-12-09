import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatusWithHooks.module.scss'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.container}>
            {!editMode  &&
            <div className={s.status}>
                <b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div className={s.status}>
                <input onChange={onStatusChange} autoFocus={true}
                       onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    )
}