import avatar from '../../../assets/default-avatar.svg'
import React from 'react'
export function Person({ name, nickName = 'not Assigned', images }) {
  //   const img = images && images[0] && images[0].small && images[0].small.url
  const img = images?.[0]?.small?.url || avatar
  return (
    <div>
      <img src={img} alt={name} style={{ width: '150px' }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  )
}
