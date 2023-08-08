function Members() {
  const admin = [
    { id: 0, firstName: 'John', lastName: 'Riley', title: 'Admin & Coding Mentor', imgUrl: 'https://avatars.githubusercontent.com/u/41979303?v=4' },
    { id: 1, firstName: 'Kent', lastName: 'Utterback', title: 'Admin Emeritus & Coding Mentor', imgUrl: 'https://avatars.githubusercontent.com/u/17324971?v=4' },
    { id: 2, firstName: 'Amy', lastName: 'Bedinghaus', title: 'Admin Emeritus', imgUrl: 'https://avatars.githubusercontent.com/u/28076677?v=4' },
    { id: 3, firstName: 'Austin', lastName: 'Truss', title: 'Admin Emeritus', imgUrl: 'https://media.licdn.com/dms/image/C5603AQGQpynBhWiZLA/profile-displayphoto-shrink_200_200/0/1517355585710?e=1696464000&v=beta&t=DrPEzm5U1we4G7qUPoFrAA5gw_MHSN3dU8_02iWZYRA' },
    { id: 4, firstName: 'Kevin', lastName: 'Bruland', title: 'Admin Emeritus', imgUrl: 'https://avatars.githubusercontent.com/u/17850505?v=4' },
    { id: 5, firstName: 'Sarah', lastName: 'Lilly-Bruland', title: 'Admin Emeritus', imgUrl: 'https://avatars.githubusercontent.com/u/17872422?v=4' },
    { id: 6, firstName: 'Justin', lastName: 'Woodward', title: 'Admin Emeritus', imgUrl: 'https://avatars.githubusercontent.com/u/17994108?v=4' },
  ]
  const members = [
    { id: 0, name: 'John', imgUrl: '/head.png' },
    { id: 1, name: 'Ismael', imgUrl: '/head.png' },
    { id: 2, name: 'Nirvignesh', imgUrl: '/head.png' },
    { id: 3, name: 'Tijana', imgUrl: '/head.png' },
    { id: 4, name: 'Jennifer', imgUrl: '/head.png' },
    { id: 5, name: 'Kellan', imgUrl: '/head.png' },
  ]
  return (
    <div>
      <div className="members">
        <h3>Meet the Admins</h3>
        <div className="row">
          {admin.map((member) =>
            <div key={member.id}>
              <h4>{member.firstName}<br/> {member.lastName}</h4>
              <img className='avatar admin-avatar' src={member.imgUrl} alt={`beautiful headshot of ${member.firstName} ${member.lastName}.`} />
              <h5>{member.title}</h5>
            </div>
          )}
        </div>
      </div>
      <div className="members"> 
        <h3>Meet the Contributors</h3>
        <div className="row">
          {members.map((member) =>
            <div key={member.id}>
              <img className='avatar member-avatar' src={member.imgUrl} alt={`beautiful headshot of ${member.name}.`} />
              <h4>{member.name}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Members