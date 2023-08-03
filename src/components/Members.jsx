function Members() {
  const admin = [
    { name: 'John Riley', title: 'Admin & Coding Mentor', imgUrl: 'https://avatars.githubusercontent.com/u/41979303?v=4' },
    { name: 'Kent Utterback', title: 'Admin Emeritus & Coding Mentor', imgUrl: 'https://avatars.githubusercontent.com/u/17324971?v=4' },
    { name: 'Amy Bedinghaus', title: 'Admin Emeritus', imgUrl: 'https://avatars.githubusercontent.com/u/28076677?v=4' },
    { name: 'Austin Truss', title: 'Admin Emeritus', imgUrl: 'https://media.licdn.com/dms/image/C5603AQGQpynBhWiZLA/profile-displayphoto-shrink_200_200/0/1517355585710?e=1696464000&v=beta&t=DrPEzm5U1we4G7qUPoFrAA5gw_MHSN3dU8_02iWZYRA' },
    { name: 'Kevin Bruland', title: 'Admin Emeritus', imgUrl: 'https://avatars.githubusercontent.com/u/17850505?v=4' },
    { name: 'Sarah Lilly-Bruland', title: 'Admin Emeritus', imgUrl: 'https://avatars.githubusercontent.com/u/17872422?v=4' },
    { name: 'Justin Woodward', title: 'Admin Emeritus', imgUrl: 'https://avatars.githubusercontent.com/u/17994108?v=4' },
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
    <div>
      <div className="members">
        <h3>Meet the Admins</h3>
        <div className="row">
          {admin.map((member) =>
            <div key={member.name}>
              <img className='admin' src={member.imgUrl} alt={`beautiful headshot of ${member.name}.`} />
              <h4>{member.name}</h4>
              <h5>{member.title}</h5>
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
    </div>
  );
}

export default Members