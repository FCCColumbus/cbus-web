

function Members() {
    const admin = [
        { name: 'John', imgUrl: '/head.png' },
        { name: 'Amy', imgUrl: '/head.png' },
        { name: 'Kevin', imgUrl: '/head.png' },
    ]
    const members = [
        { name: 'John', imgUrl: '/head.png' },
        { name: 'Ismael', imgUrl: '/head.png' },
        { name: 'Nirvignesh', imgUrl: '/head.png' },
        { name: 'Tijana', imgUrl: '/head.png' },
        { name: 'Jennifer', imgUrl: '/head.png' },
        { name: 'Kellan', imgUrl: '/head.png' },
    ]
    return (
        <>
            <div className="members">
                <h3>Meet the Admins</h3>
                <div className="row">
                    {admin.map((member) =>
                        <div key={member.name}>
                            <img className='admin' src={member.imgUrl} alt={`beautiful headshot of ${member.name}.`} />
                            <h4>{member.name}</h4>
                        </div>
                    )}
                </div>
            </div>
            <div className="members">
                <h3>Meet the Contributors</h3>
                <div className="row">
                    {members.map((member) =>
                        <div key={member.name}>
                            <img className='member' src={member.imgUrl} alt={`beautiful headshot of ${member.name}.`} />
                            <h4>{member.name}</h4>
                        </div>
                    )}
                </div>
            </div>
        </>
    )

}

export default Members