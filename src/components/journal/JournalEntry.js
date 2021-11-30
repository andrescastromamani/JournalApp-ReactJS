import moment from 'moment';
import React from 'react'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, body, title, createdAt }) => {
    const dispatch = useDispatch();
    const date = moment(createdAt);
    const handleShowEnrtry = () => {
        dispatch(activeNote(id, { body, title, createdAt }));
    }
    return (
        <div className="journal__entry" onClick={handleShowEnrtry}>
            <div className="journal_entryimage" style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png)`
            }}>
            </div>
            <div className="journal__entrybody">
                <p className="journal__entrytitle">{title}</p>
                <p className="journal__entrycontent">{body} </p>
            </div>
            <div className="journal__entrydate">
                <span>{date.format('dddd')}</span>
                <p>{date.format('Do')}</p>
            </div>
        </div>
    )
}
