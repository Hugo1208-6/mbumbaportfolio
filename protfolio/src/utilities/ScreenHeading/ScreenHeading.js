import React from 'react'
import './ScreenHaeding.css';
function ScreenHeading(props) {
  return (
    <div className='heading-container'>
        <dir className='screen-heading'>
            <span>
                {props.title}
            </span>
        </dir>

        {
            (props.subHeading)?(
                <div className="screen-sub-heading">
                    <span>{props.subHeading}</span>
                </div>
            ):<div></div>
        }

        <div className='heading-separator'>
            <div className='separator-line'>
                <div className='separator-blob'>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ScreenHeading