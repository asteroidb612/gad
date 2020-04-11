import React from 'react'
import { Link } from 'react-router-dom'

import { ExploreScore } from './ExploreScore'

import '../styles/Position.scss'

export const Position = (props) => {
  const { title, positionCount, exploreScore, ctaUrl } = props

  return (
    <div className="position">
      {positionCount !== undefined && positionCount > 0 && (
        <div className="position-count circle circle-s bezel-xs drop-shadow">
          <p>{positionCount}</p>
          <p>positions</p>
        </div>
      )}
      {exploreScore !== undefined && exploreScore > -1 && <ExploreScore exploreScore={exploreScore} size="s" />}
      <div className="speech-bubble drop-shadow">
        <h3 className="position-title text-size-m">{ctaUrl ? <Link to={ctaUrl}>{title}</Link> : title}</h3>
        {ctaUrl && (
          <p>
            <Link to={ctaUrl}>Explore ></Link>
          </p>
        )}
      </div>
    </div>
  )
}
