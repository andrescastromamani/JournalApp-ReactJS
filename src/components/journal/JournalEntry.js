import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div className="journal_entryimage" style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png)`
            }}>
            </div>
            <div className="journal__entrybody">
                <p className="journal__entrytitle">New Task for you</p>
                <p className="journal__entrycontent">lorem alkjsdñlkalkjjd sadfñlkasjldf ñlakjf al </p>
            </div>
            <div className="journal__entrydate">
                <span>Monday</span>
                <p>12:00</p>
            </div>
        </div>
    )
}
