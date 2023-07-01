import React from 'react'

interface PlayerDraftsProps {
  drafts?: string
}

const PlayerDrafts = (props: PlayerDraftsProps) => {
  return (
    <div className=''>
      <h3 className=''>{props.drafts}</h3>
    </div>
  )
}

export default PlayerDrafts